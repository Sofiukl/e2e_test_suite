import { WizardAction } from "../../BaseUIOperations";
import { PageContext } from "../../../context/PageContext";
import { Page } from "puppeteer";
import winston from "winston";
import { AbstractStockTransferQuery } from "./AbstractStockTransferQuery";
import { ExcelUtils } from "../../../utils/ExcelUtils";


export class StockTransferAuthorization extends AbstractStockTransferQuery {

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

        let page  = PageContext.getInstance().getPage()
        let element = await page.$("div.slick-cell-checkboxsel input[type='checkbox']")
        //var dropDown = await page.select('select.dropdowninput')
        let boundingBox = await element.boundingBox()
        await page.mouse.click(boundingBox.x+boundingBox.width/2,boundingBox.y+boundingBox.height/2)
        

		ExcelUtils.getInstance().addHeading("Authorize  StockTransfer ")

        await this.wizardNavigate(WizardAction.StockTransferAuth)
        await this.screenshot()
        ExcelUtils.getInstance().addHeading("Authorize Confirm  StockTransfer ")

         await this.wizardNavigate(WizardAction.AuthorizeConfirm)
         await this.screenshot()
     


    }

}