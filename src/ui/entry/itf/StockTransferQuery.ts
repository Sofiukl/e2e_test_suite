import { WizardAction } from "../../BaseUIOperations";
import { PageContext } from "../../../context/PageContext";
import { Page } from "puppeteer";
import winston from "winston";
import { AbstractStockTransferQuery } from "./AbstractStockTransferQuery";
import { ExcelUtils } from "../../../utils/ExcelUtils";


export class StockTransferQuery extends AbstractStockTransferQuery{

    async doExecute() : Promise<any>{
        
        await this.navigate( 'Settlement' ,  'Stock Transfer' ,  'Query' , )
        //navigate
        await this.clearFields(this.fetchFields())
        await this.populateFields(this.fetchFields())
        ExcelUtils.getInstance().addHeading("Query For StockTransferQuery ")
        await this.screenshot()
        await this.wizardNavigate(WizardAction.QuerySubmit)
		ExcelUtils.getInstance().addHeading("Results For StockTransferQuery ")
        await this.screenshot()



    }

}