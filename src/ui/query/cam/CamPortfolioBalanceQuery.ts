import { WizardAction } from "../../BaseUIOperations";
import { PageContext } from "../../../context/PageContext";
import { Page } from "puppeteer";
import winston from "winston";
import { AbstractCamPortfolioBalanceQuery } from "./AbstractCamPortfolioBalanceQuery";

export class CamPortfolioBalanceQuery extends AbstractCamPortfolioBalanceQuery{

    async doExecute() : Promise<any>{
        
        await this.navigate(  'Position & Balances'  ,  'Beneficiary' , 'Portfolio Query', )
        //navigate
        await this.clearFields(this.fetchFields())
        await this.populateFields(this.fetchFields())
        await this.screenshot()
        await this.wizardNavigate(WizardAction.QuerySubmit)
        await this.screenshot()

    }

}