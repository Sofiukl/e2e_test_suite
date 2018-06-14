import { WizardAction } from "../../BaseUIOperations";
import { PageContext } from "../../../context/PageContext";
import { Page } from "puppeteer";
import winston from "winston";
import { AbstractCashIOEntry } from "./AbstractCashIOEntry";
import { ExcelUtils } from "../../../utils/ExcelUtils";


export class CashIOEntry extends AbstractCashIOEntry{

    async doExecute() : Promise<any>{
        
        await this.navigate( 'Position & Balances' ,  'Beneficiary' ,  'Cash I/O' ,  'Cash In/Out Entry' , )
        //navigate
        await this.clearFields(this.fetchFields())
        await this.populateFields(this.fetchFields())
        ExcelUtils.getInstance().addHeading("Query For CashIOEntry ")
        await this.screenshot()
        await this.wizardNavigate(WizardAction.Submit)
		ExcelUtils.getInstance().addHeading("Results For CashIOEntry ")
        await this.screenshot()
        await this.wizardNavigate(WizardAction.Confirm)
		ExcelUtils.getInstance().addHeading("Results For CashIOEntry ")
        await this.screenshot()

    }


    public async in(account : string , amount : string){

        await this.inOut(CashIOEntry.Entry_InOut.IN).currency("THB").amountStr(amount).cashInReason(CashIOEntry.CashInReason.CREDIT_NOTECREDIT_NOTE)
        .cashInAccountCode(CashIOEntry.CashInAccountCode.Six00005CASH_TRANSFER_CONTROL).cashInAccountNo(account).execute()
    }


    public async inCollateral(account : string , amount : string){

        await this.inOut(CashIOEntry.Entry_InOut.IN).currency("THB").amountStr(amount)
        .cashInAccountBalanceTypeStr(CashIOEntry.CashInAccountBalanceTypeStr.One3_Collateral)
        .cashInReason(CashIOEntry.CashInReason.CREDIT_NOTECREDIT_NOTE)
        .cashInAccountCode(CashIOEntry.CashInAccountCode.Six00005CASH_TRANSFER_CONTROL).cashInAccountNo(account).execute()
    }

}