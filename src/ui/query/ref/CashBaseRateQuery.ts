import { WizardAction } from "../../BaseUIOperations";
import { PageContext } from "../../../context/PageContext";
import { Page } from "puppeteer";
import winston from "winston";
import { AbstractCashBaseRateQuery } from "./AbstractCashBaseRateQuery";
import { ExcelUtils } from "../../../utils/ExcelUtils";


export class CashBaseRateQuery extends AbstractCashBaseRateQuery{

    async doExecute() : Promise<any>{
        
        await this.navigate( 'Reference' ,  'Interest Rate' ,  'Base Rate' ,  'Query' , )
        //navigate
        await this.clearFields(this.fetchFields())
        await this.populateFields(this.fetchFields())
        ExcelUtils.getInstance().addHeading("Query For Cash Base Rate")
        await this.screenshot()
        await this.wizardNavigate(WizardAction.QuerySubmit)
		ExcelUtils.getInstance().addHeading("Results For Query For Cash Base Rate")
        await this.screenshot()

    }

}