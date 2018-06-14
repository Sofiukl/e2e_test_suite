import {BaseUIOperations, WizardAction} from "../../BaseUIOperations"
import { AbstractExecutionEntry } from "./AbstractExecutionEntry";
import { ExcelUtils } from "../../../utils/ExcelUtils";
import { Constants } from "../../../Constants";
import { ExecutionToTrade } from "../../../batch/trd/ExecutionToTrade";
import { TaxAndCommCalculator } from "../../../batch/trd/TaxAndCommCalculator";


export class ExecutionEntry extends AbstractExecutionEntry {
   
    async doExecute() : Promise<any>{

        await this.navigate('Trade','Execution','Entry')
        //navigate
        await this.clearFields(this.fetchFields())
        await this.populateFields(this.fetchFields())
        ExcelUtils.getInstance().addHeading("Execution Entry  ")
        await this.screenshot()
        await this.wizardNavigate(WizardAction.Submit)
        ExcelUtils.getInstance().addHeading("Execution Entry User Confirmation")
        await this.screenshot()
        await this.wizardNavigate(WizardAction.Confirm)
        ExcelUtils.getInstance().addHeading("Execution Entry System Confirmation")
        await this.screenshot()
     
        //TODO
        //return something what we havent decided
    }



    public async buy(date : string,account : string , security : string , qnty : string , cost : string) {

         await this.salesCode(Constants.salesCode)
        .buySellOrientation("FB")
        .senderReferenceNo("OD-0000000001")
        .sourceReferenceNo("TD-0000000001")
        .tradeDateStr(date).cpAccountNo(account).quantityStr(qnty).securityInfo(security).inputPriceStr(cost).execute()
   
    }
    public async buyPledge(date : string,account : string , security : string , qnty : string , cost : string) {

         await this.salesCode(Constants.salesCode)
        .buySellOrientation("FB")
        .senderReferenceNo("OD-0000000001")
        .sourceReferenceNo("TD-0000000001")
        .accountBalanceTypeStr("12")
        .tradeDateStr(date).cpAccountNo(account).quantityStr(qnty).securityInfo(security).inputPriceStr(cost).execute()
   
    }
    public async buyRights(date : string,account : string , security : string , qnty : string , cost : string) {

        await this.salesCode(Constants.salesCode)
       .buySellOrientation("FB")
       .senderReferenceNo("OD-0000000001")
       .sourceReferenceNo("TD-0000000001")
       .accountBalanceTypeStr("18")
       .tradeDateStr(date).cpAccountNo(account).quantityStr(qnty).securityInfo(security).inputPriceStr(cost).execute()
  
   }
    public async sell(date : string , account : string , security : string , qnty : string , cost : string) {

        await this.salesCode(Constants.salesCode)
       .buySellOrientation("FS")
       .senderReferenceNo("OD-0000000001")
       .sourceReferenceNo("TD-0000000001")
       .tradeDateStr(date).cpAccountNo(account).quantityStr(qnty).securityInfo(security).inputPriceStr(cost).execute()

   }
   
   //book trade

   
   

}