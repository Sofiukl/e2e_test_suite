import { WizardAction } from "../../BaseUIOperations";
import { PageContext } from "../../../context/PageContext";
import { Page } from "puppeteer";
import winston from "winston";
import { AbstractExecutionQuery } from "./AbstractExecutionQuery";

export class ExecutionQuery extends AbstractExecutionQuery{

    async doExecute() : Promise<any>{
        
        await this.navigate( 'Trade' ,  'Execution' ,  'Query' , )
        //navigate
        await this.clearFields(this.fetchFields())
        await this.populateFields(this.fetchFields())
        await this.screenshot()
        await this.wizardNavigate(WizardAction.QuerySubmit)
        await this.screenshot()

    }

}