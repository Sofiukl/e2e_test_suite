import { WizardAction } from "../../BaseUIOperations";
import { PageContext } from "../../../context/PageContext";
import { Page } from "puppeteer";
import winston from "winston";
import { AbstractCAMSecurityInOutEntry } from "./AbstractCAMSecurityInOutEntry";
import { ExcelUtils } from "../../../utils/ExcelUtils";


export class CAMSecurityInOutEntry extends AbstractCAMSecurityInOutEntry{

    async doExecute() : Promise<any>{
        
        await this.navigate( 'Position & Balances' ,  'Beneficiary' ,  'Security I/O' ,  'Security In/Out Entry' , )
        //navigate
        await this.clearFields(this.fetchFields())
        await this.populateFields(this.fetchFields())
        ExcelUtils.getInstance().addHeading("Entry For CAMSecurityIn/OutEntry ")
        await this.screenshot()
        await this.wizardNavigate(WizardAction.Submit)
		ExcelUtils.getInstance().addHeading("User Confirmation For CAMSecurityIn/OutEntry ")
        await this.screenshot()
        await this.wizardNavigate(WizardAction.Confirm)
        ExcelUtils.getInstance().addHeading("System Confirmation For CAMSecurityIn/OutEntry ")
        await this.screenshot()

    }

    // public in() : CAMSecurityInOutEntry {
    //     this.ourSettleAccountNo("T000000004000001").custodianBank("TSD").inOut(CAMSecurityInOutEntry.EntryInOut.IN)
    //     return this
    // }
    public async out(account : string , security : string, qnty : string , cost : string )  {
        await this.ourSettleAccountNo("T000000004000001").custodianBank("TSD").inOut(CAMSecurityInOutEntry.EntryInOut.OUT)
        .accountNo(account).amountStr(qnty).bookCostStr(cost).securityCode(security).execute()    
    }
    public async in(account : string , security : string, qnty : string , cost : string )  {
        await this.ourSettleAccountNo("T000000004000001").custodianBank("TSD").inOut(CAMSecurityInOutEntry.EntryInOut.IN)
        .accountBalanceTypeStr(CAMSecurityInOutEntry.EntryAccountBalanceTypeStr.One0_Free)
        .accountNo(account).amountStr(qnty).bookCostStr(cost).securityCode(security).execute()   
    }
    public async ipo(account : string , security : string, qnty : string , cost : string )  {
        await this.ourSettleAccountNo("T000000004000001").custodianBank("TSD").inOut(CAMSecurityInOutEntry.EntryInOut.IN)
        .accountBalanceTypeStr(CAMSecurityInOutEntry.EntryAccountBalanceTypeStr.One5_IPO)
        .accountNo(account).amountStr(qnty).bookCostStr(cost).securityCode(security).execute()   
    }

}