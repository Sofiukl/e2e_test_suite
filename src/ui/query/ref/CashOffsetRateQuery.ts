import { WizardAction } from "../../BaseUIOperations";
import { PageContext } from "../../../context/PageContext";
import { Page } from "puppeteer";
import winston from "winston";
import { AbstractCashOffsetRateQuery } from "./AbstractCashOffsetRateQuery";
import { ExcelUtils } from "../../../utils/ExcelUtils";

export class CashOffsetRateQuery extends AbstractCashOffsetRateQuery{

    async doExecute() : Promise<any>{
        
        await this.navigate( 'Reference' ,  'Interest Rate' ,  'Offset Rate' ,  'Query' , )
        //navigate
        await this.clearFields(this.fetchFields())
        await this.populateFields(this.fetchFields())
        ExcelUtils.getInstance().addHeading("Interest Rate Query")
        await this.screenshot()
        await this.wizardNavigate(WizardAction.QuerySubmit)
        await this.screenshot()
        ExcelUtils.getInstance().addHeading("Interest Rate Query Results")

    }

}