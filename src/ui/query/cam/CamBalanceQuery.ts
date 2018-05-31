import { WizardAction } from "../../BaseUIOperations";
import { PageContext } from "../../../context/PageContext";
import { Page } from "puppeteer";
import winston from "winston";
import { AbstractCamBalanceQuery } from "./AbstractCamBalanceQuery";

export class CamBalanceQuery extends AbstractCamBalanceQuery{

    async doExecute() : Promise<any>{

        console.log();
        
        
        await this.navigate( 'Position & Balances' ,  'Beneficiary' ,  'Balance Query' , )
        //navigate
        // await this.clearFields(this.fetchFields())
        await this.populateFields(this.fetchFields())
        await this.screenshot()
        await this.wizardNavigate(WizardAction.QuerySubmit)
        await this.screenshot()

    }

}