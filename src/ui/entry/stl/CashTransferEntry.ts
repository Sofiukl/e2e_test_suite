import { WizardAction } from "../../BaseUIOperations";
import { PageContext } from "../../../context/PageContext";
import { Page } from "puppeteer";
import winston from "winston";
import { AbstractCashTransferEntry } from "./AbstractCashTransferEntry";

export class CashTransferEntry extends AbstractCashTransferEntry{

    async doExecute() : Promise<any>{

        await this.navigate('Settlement','Cash Transfer','Entry')
        //navigate
        
        await this.populateFields(this.fetchFields())
        await this.screenshot()
        await this.wizardNavigate(WizardAction.Submit)
        await this.screenshot()


        await this.wizardNavigate(WizardAction.Confirm)
        await this.screenshot()

     
        //TODO
        //return something what we havent decided
    }


    


}