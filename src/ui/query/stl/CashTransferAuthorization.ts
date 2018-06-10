import { WizardAction } from "../../BaseUIOperations";
import { PageContext } from "../../../context/PageContext";
import { Page } from "puppeteer";
import winston from "winston";
import { AbstractCashTransferAuthorization } from "./AbstractCashTransferAuthorization";

export class CashTransferAuthorization extends AbstractCashTransferAuthorization{

    async doExecute() : Promise<any>{

        await this.navigate('Settlement','Cash Transfer','Query')
        //navigate
        await this.clearFields(this.fetchFields())
        await this.populateFields(this.fetchFields())
        await this.screenshot()
        await this.wizardNavigate(WizardAction.QuerySubmit)
        await this.screenshot()

        let page  = PageContext.getInstance().getPage()
        let element = await page.$("div.slick-cell-checkboxsel input[type='checkbox']")
        //var dropDown = await page.select('select.dropdowninput')
        let boundingBox = await element.boundingBox()
        await page.mouse.click(boundingBox.x+boundingBox.width/2,boundingBox.y+boundingBox.height/2)
        


        await this.wizardNavigate(WizardAction.Authorize)
        await this.screenshot()

         await this.wizardNavigate(WizardAction.AuthorizeConfirm)
         await this.screenshot()
     
        //TODO
        //return something what we havent decided
    }


    


}