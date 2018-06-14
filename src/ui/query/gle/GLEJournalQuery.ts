import { WizardAction } from "../../BaseUIOperations";
import { PageContext } from "../../../context/PageContext";
import { Page } from "puppeteer";
import winston from "winston";
import { AbstractGLEJournalQuery } from "./AbstractGLEJournalQuery";
import { ExcelUtils } from "../../../utils/ExcelUtils";

export class GLEJournalQuery extends AbstractGLEJournalQuery{

    async doExecute() : Promise<any>{
        
        await this.navigate( 'Controllers' ,  'Accounting' ,  'Journal Query' , )
        //navigate
        await this.clearFields(this.fetchFields())
        await this.populateFields(this.fetchFields())
        ExcelUtils.getInstance().addHeading("Query Results Entry for GLE Journal Query")
        await this.screenshot()
        await this.wizardNavigate(WizardAction.QuerySubmit)
        ExcelUtils.getInstance().addHeading("Query Results for GLE Journal Query")
        await this.screenshot()

    }

}