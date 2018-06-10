import { PageContext } from "../context/PageContext";
import { Login } from "../ui/common/LoginOperation";
import { ExecutionEntry } from "../ui/entry/trd/ExecutionEntry";
import { ExecutionToTrade } from "../batch/trd/ExecutionToTrade";
import { TaxAndCommCalculator } from "../batch/trd/TaxAndCommCalculator";
import { ExecutionQuery } from "../ui/query/trd/ExecutionQuery";
import { ApplicationDate } from "../db/ApplicationDate";
import { GenerateDailyConfirmation } from "../batch/trd/GenerateDailyConfirmation";
import { DateUtils } from "../utils/DateUtils";




//Execution of TRD002 changes and test cases
export class CUSLONE_436 {


    applicationDate : string
    
    async setup() {
        //login
        await PageContext.getInstance().initPage(false)
        let login = new Login()
        await login.execute()
        
        
        ApplicationDate.updateApplicationDate("04-07-2018")
        this.applicationDate = ApplicationDate.getCurrent()

    }


    async testAddExecution(){

        // /*
        
        let execution = new ExecutionEntry()
        await execution
            .cpAccountNo("C0000001-8")
            .tradeDateStr(this.applicationDate)
            .securityInfo("STAR")
            .quantityStr("6300")
            .inputPriceStr("7.4")
            .salesCode("9999")
            .buySellOrientation("FB")
            .senderReferenceNo("OD-0000000001")
            .sourceReferenceNo("TD-0000000001")
        .execute()

        execution = new ExecutionEntry()
        await execution
            .cpAccountNo("C0000001-8")
            .tradeDateStr(this.applicationDate)
            .securityInfo("STAR")
            .quantityStr("2300")
            .inputPriceStr("7.4")
            .salesCode("9999")
            .buySellOrientation("FB")
            .senderReferenceNo("OD-0000000002")
            .sourceReferenceNo("TD-0000000002")
        .execute()

        execution = new ExecutionEntry()
        await execution
            .cpAccountNo("C0000001-8")
            .tradeDateStr(this.applicationDate)
            .securityInfo("STAR")
            .quantityStr("1400")
            .inputPriceStr("7.4")
            .salesCode("9999")
            .buySellOrientation("FB")
            .senderReferenceNo("OD-0000000003")
            .sourceReferenceNo("TD-0000000003")
        .execute()
        execution = new ExecutionEntry()
        await execution
            .cpAccountNo("C0000001-8")
            .tradeDateStr(this.applicationDate)
            .securityInfo("STAR")
            .quantityStr("700")
            .inputPriceStr("7.45")
            .salesCode("9999")
            .buySellOrientation("FB")
            .senderReferenceNo("OD-0000000004")
            .sourceReferenceNo("TD-0000000004")
        .execute()
        execution = new ExecutionEntry()
        await execution
            .cpAccountNo("C0000001-8")
            .tradeDateStr(this.applicationDate)
            .securityInfo("STAR")
            .quantityStr("1000")
            .inputPriceStr("7.45")
            .salesCode("9999")
            .buySellOrientation("FB")
            .senderReferenceNo("OD-0000000005")
            .sourceReferenceNo("TD-0000000005")
        .execute()

//*/
        let execTradeBatch = new ExecutionToTrade()
        
        await execTradeBatch.account("C0000001-8").tradedate(DateUtils.convertToBatchFormat(this.applicationDate)).execute()

        let taxAndCommCalculator = new TaxAndCommCalculator()
        await taxAndCommCalculator.account("C0000001-8").date(DateUtils.convertToBatchFormat(this.applicationDate)).execute()

        let executionQuery : ExecutionQuery = new ExecutionQuery()
        await executionQuery.cpAccountNo("C0000001-8").tradeDateFrom(this.applicationDate).tradeDateTo(this.applicationDate).execute()

        let generateDailyConfirmation : GenerateDailyConfirmation= new GenerateDailyConfirmation()
        await generateDailyConfirmation
            .accountNo("C0000001-8")
            .reportId("TR002")
            .tradeDate(DateUtils.convertToBatchFormat(this.applicationDate)).execute()

    }

    async destroy(){
        await PageContext.getInstance().close()
    }

}