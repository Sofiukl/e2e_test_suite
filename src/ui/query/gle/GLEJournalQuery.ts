import { WizardAction } from "../../BaseUIOperations";
import { PageContext } from "../../../context/PageContext";
import { Page } from "puppeteer";
import winston from "winston";
import { AbstractGLEJournalQuery } from "./AbstractGLEJournalQuery";

export class GLEJournalQuery extends AbstractGLEJournalQuery{

    async doExecute() : Promise<any>{
        
        await this.navigate( 'Controllers' ,  'Accounting' ,  'Journal Query' , )
        //navigate
        await this.clearFields(this.fetchFields())
        await this.populateFields(this.fetchFields())
        await this.screenshot()
        await this.wizardNavigate(WizardAction.QuerySubmit)
        await this.screenshot()

    }

}