import {AbstractCompletionEntry } from "./AbstractCompletionEntry";
import { WizardAction } from "../../BaseUIOperations";
import { PageContext } from "../../../context/PageContext";
import { Page } from "puppeteer";
import winston from "winston";

export class CompletionEntry extends AbstractCompletionEntry{

    async doExecute() : Promise<any>{

        await this.navigate('Settlement','Completion','Entry')
        //navigate
        await this.clearFields(this.fetchFields())
        await this.populateFields(this.fetchFields())
        await this.screenshot()
        await this.wizardNavigate(WizardAction.QuerySubmit)
        await this.screenshot()

        let page  = PageContext.getInstance().getPage()
        let element = await page.$("select.dropdowninput")
        //var dropDown = await page.select('select.dropdowninput')
        let boundingBox = await element.boundingBox()
        await page.mouse.click(boundingBox.x+boundingBox.width/2,boundingBox.y+boundingBox.height/2)
        
        
        await this.populateFields([{ 'type' : 'select' , 
        'selector' : 'select.dropdowninput' , value : 'COMPLETE'}])


        await this.wizardNavigate(WizardAction.QueryCompleteSubmit)
        await this.screenshot()

        await this.wizardNavigate(WizardAction.QueryCompleteConfirm)
        await this.screenshot()
     
        //TODO
        //return something what we havent decided
    }


    


}