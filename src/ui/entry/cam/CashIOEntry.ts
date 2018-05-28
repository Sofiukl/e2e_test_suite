import { WizardAction } from "../../BaseUIOperations";
import { PageContext } from "../../../context/PageContext";
import { Page } from "puppeteer";
import winston from "winston";
import { AbstractCashIOEntry } from "./AbstractCashIOEntry";

export class CashIOEntry extends AbstractCashIOEntry{

    async doExecute() : Promise<any>{

        await this.navigate("Position & Balances", "Beneficiary" , 'Cash I/O','Cash In/Out Entry')
        //navigate
        // await this.clearFields(this.fetchFields())
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