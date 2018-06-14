import { WizardAction } from "../../BaseUIOperations";
import { PageContext } from "../../../context/PageContext";
import { Page } from "puppeteer";
import winston from "winston";
import { AbstractGLEBalanceQuery } from "./AbstractGLEBalanceQuery";
import { ExcelUtils } from "../../../utils/ExcelUtils";

export class GLEBalanceQuery extends AbstractGLEBalanceQuery{

    async doExecute() : Promise<any>{
        
        await this.navigate( 'Controllers' ,  'Accounting' ,  'Balance Query' , )
        //navigate
        await this.clearFields(this.fetchFields())
        await this.populateFields(this.fetchFields())
        ExcelUtils.getInstance().addHeading("Query for GLE Balance Query")
        await this.screenshot()
        await this.wizardNavigate(WizardAction.QuerySubmit)
        ExcelUtils.getInstance().addHeading("Query Results for GLE Balance Query")
        await this.screenshot()

    }

}