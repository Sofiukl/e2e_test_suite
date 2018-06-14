import { WizardAction } from "../../BaseUIOperations";
import { PageContext } from "../../../context/PageContext";
import { Page } from "puppeteer";
import winston from "winston";
import { AbstractStockTransferEntry } from "./AbstractStockTransferEntry";
import { ExcelUtils } from "../../../utils/ExcelUtils";
import { StockTransferAuthorization } from "./StockTransferAuthorization";


export class StockTransferEntry extends AbstractStockTransferEntry{

    async doExecute() : Promise<any>{
        
        await this.navigate( 'Settlement' ,  'Stock Transfer' ,  'Entry' , )
        //navigate
        await this.clearFields(this.fetchFields())
        await this.populateFields(this.fetchFields())
        ExcelUtils.getInstance().addHeading("Entry for For StockTransferEntry ")
        await this.screenshot()
        await this.wizardNavigate(WizardAction.Submit)
		ExcelUtils.getInstance().addHeading("User Confirmation For StockTransferEntry ")
        await this.screenshot()
        await this.wizardNavigate(WizardAction.Confirm)
        ExcelUtils.getInstance().addHeading("System Confirmation For StockTransferEntry ")
        await this.screenshot()

    }


    public async transferIn(account : string , securityCode : string , qnty : string , bookCost : string){
        await this.transferType(StockTransferEntry.TransferType.TRANSFER_IN).securityCode(securityCode)
        .toAccount(account).transferQuantity(qnty).bookCost(bookCost).execute()
        await new StockTransferAuthorization().operationObjective(StockTransferAuthorization.OperationObjective.TRANSFER_IN_AUTH).toAccountNo(account).execute()
    }
    public async transferInRights(account : string , securityCode : string , qnty : string , bookCost : string){
        await this.securityCode(securityCode)
        .transferType(StockTransferEntry.TransferType.TRANSFER_IN)
        .accountBalanceTypeTo(StockTransferEntry.AccountBalanceTypeTo.One8_Rights)
        .toAccount(account).transferQuantity(qnty).bookCost(bookCost).execute()
        await new StockTransferAuthorization().operationObjective(StockTransferAuthorization.OperationObjective.TRANSFER_IN_AUTH).toAccountNo(account).execute()
    }
    public async transferInPledge(account : string , securityCode : string , qnty : string , bookCost : string){
        await this.securityCode(securityCode)
        .transferType(StockTransferEntry.TransferType.TRANSFER_IN)
        .accountBalanceTypeTo(StockTransferEntry.AccountBalanceTypeTo.One2_Pledge)
        .toAccount(account).transferQuantity(qnty).bookCost(bookCost).execute()
        await new StockTransferAuthorization().operationObjective(StockTransferAuthorization.OperationObjective.TRANSFER_IN_AUTH).toAccountNo(account).execute()
    }

}