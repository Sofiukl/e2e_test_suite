import { WizardAction } from "../../BaseUIOperations";
import { PageContext } from "../../../context/PageContext";
import { Page } from "puppeteer";
import winston from "winston";
import { AbstractTradeQuery } from "./AbstractTradeQuery";

export class TradeQuery extends AbstractTradeQuery{

    async doExecute() : Promise<any>{
        
        await this.navigate( 'Trade' ,  'Query' , )
        //navigate
        await this.clearFields(this.fetchFields())
        await this.populateFields(this.fetchFields())
        await this.screenshot()
        await this.wizardNavigate(WizardAction.QuerySubmit)
        await this.screenshot()

    }

}