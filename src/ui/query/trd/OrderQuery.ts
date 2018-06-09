import { WizardAction } from "../../BaseUIOperations";
import { PageContext } from "../../../context/PageContext";
import { Page } from "puppeteer";
import winston from "winston";
import { AbstractOrderQuery } from "./AbstractOrderQuery";

export class OrderQuery extends AbstractOrderQuery{

    async doExecute() : Promise<any>{
        
        await this.navigate( 'Trade' ,  'Order' ,  'Query' , )
        //navigate
        await this.clearFields(this.fetchFields())
        await this.populateFields(this.fetchFields())
        await this.screenshot()
        await this.wizardNavigate(WizardAction.QuerySubmit)
        await this.screenshot()

    }

}