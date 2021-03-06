import { WizardAction } from "../../BaseUIOperations";
import { PageContext } from "../../../context/PageContext";
import { Page } from "puppeteer";
import winston from "winston";
import { AbstractGLETransactionQuery } from "./AbstractGLETransactionQuery";
import { ExcelUtils } from "../../../utils/ExcelUtils";

export class GLETransactionQuery extends AbstractGLETransactionQuery{

    async doExecute() : Promise<any>{
        
        await this.navigate( 'Controllers' ,  'Accounting' ,  'Transaction Query' , )
        //navigate
        await this.clearFields(this.fetchFields())
        await this.populateFields(this.fetchFields())
        ExcelUtils.getInstance().addHeading("Query for GLE Transaction Query")
        await this.screenshot()
        await this.wizardNavigate(WizardAction.QuerySubmit)
        ExcelUtils.getInstance().addHeading("Query Results for GLE Transaction Query")
        await this.screenshot()

    }

}