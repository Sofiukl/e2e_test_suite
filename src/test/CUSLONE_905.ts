import { PageContext } from "../context/PageContext";
import { Login } from "../ui/common/LoginOperation";
import { Customer } from "../rest/Customer";
import { ApplicationDate } from "../db/ApplicationDate";
import { ClientPayPayInEntry } from "../rest/ClientPayPayInEntry";
import { CamBalanceQuery } from "../ui/query/cam/CamBalanceQuery";
import { ExecutionEntry } from "../ui/entry/trd/ExecutionEntry";
import { ExecutionQuery } from "../ui/query/trd/ExecutionQuery";
import { ExecutionToTrade } from "../batch/trd/ExecutionToTrade";
import { TaxAndCommCalculator } from "../batch/trd/TaxAndCommCalculator";
import { DateUtils } from "../utils/DateUtils";
import { TradeQuery } from "../ui/query/trd/TradeQuery";
import { FIFOPLCalculator } from "../batch/cam/FIFOPLCalculator";
import { DailyCashAccrual } from "../batch/cam/DailyCashAccrual";
import { MarginPurchasePowerCalculator } from "../batch/cam/MarginPurchasePowerCalculator";
import { AccruedCashInterestQuery } from "../ui/query/cam/AccruedCashInterestQuery";
import { RiskParameterQuery } from "../ui/query/cam/RiskParameterQuery";
import { AutoCompletion } from "../batch/stl/AutoCompletion";
import { MultipurposeReportQuery } from "../ui/report/MultipurposeReportQuery";
import { WithdrawalLimit } from "../rest/query/cam/WithdrawalLimit";
import { Assert } from "../utils/Assert";


export class CUSLONE_905 {


    async setup() {
        //login
         await PageContext.getInstance().initPage(true)
         let login = new Login()
         await login.execute()
         
         //static data setup
         this.accountNo = "C012345699-7"

    }

    accountNo : string


    public async test02May2018(){
        
    let appDate = "02-04-2018"
       
    ApplicationDate.updateApplicationDate(appDate)

//   /*  
    await  new Customer().customerCode("12345699").applicationDate(appDate).create()
    await new ClientPayPayInEntry().cashIn(this.accountNo,"50000")
        
        //create an execution
    await new ExecutionEntry().cpAccountNo(this.accountNo)
                .tradeDateStr(appDate)
                .securityInfo("STAR")
                .quantityStr("2000")
                .inputPriceStr("10")
                .salesCode("9999")
                .buySellOrientation("FB")
                .senderReferenceNo("OD-0000000001")
                .sourceReferenceNo("TD-0000000001")
            .execute()

    await new ExecutionQuery().cpAccountNo(this.accountNo).tradeDateFrom(appDate).tradeDateTo(appDate).execute()
    await new ExecutionToTrade().account(this.accountNo).tradedate(DateUtils.convertToBatchFormat(appDate)).execute()
    await new TaxAndCommCalculator().account(this.accountNo).date(DateUtils.convertToBatchFormat(appDate)).execute()
    await new TradeQuery().accountNo(this.accountNo).tradeDateFrom(appDate).tradeDateTo(appDate).execute()
//*/

    await new CamBalanceQuery().td(this.accountNo).execute()
    let tdBalanceOfStar : any[] = await new CamBalanceQuery().query().where(CamBalanceQuery.ResultColumns.Security_Code_Default).equalTo("STAR").fetch(CamBalanceQuery.ResultColumns.Balance)
    let tdBalanceOfTHB : any[] = await new CamBalanceQuery().query().where(CamBalanceQuery.ResultColumns.Security_Code_Default).equalTo("THB").fetch(CamBalanceQuery.ResultColumns.Balance)

    console.log(tdBalanceOfStar);
    console.log(tdBalanceOfTHB);
    
    Assert.equals("2,000",tdBalanceOfStar[0][CamBalanceQuery.ResultColumns.Balance])
    Assert.equals("29,894.54",tdBalanceOfTHB[0][CamBalanceQuery.ResultColumns.Balance])
    
    await new CamBalanceQuery().vd(this.accountNo).execute()
    let vdBalanceOfTHB : any[] = await new CamBalanceQuery().query().where(CamBalanceQuery.ResultColumns.Security_Code_Default).equalTo("THB").fetch(CamBalanceQuery.ResultColumns.Balance)
    Assert.equals("50,000",vdBalanceOfTHB[0][CamBalanceQuery.ResultColumns.Balance])
    await new CamBalanceQuery().sd(this.accountNo).execute() 
    let sdBalanceOfTHB : any[] = await new CamBalanceQuery().query().where(CamBalanceQuery.ResultColumns.Security_Code_Default).equalTo("THB").fetch(CamBalanceQuery.ResultColumns.Balance)
    Assert.equals("50,000",sdBalanceOfTHB[0][CamBalanceQuery.ResultColumns.Balance])





    await new FIFOPLCalculator().accountNo(this.accountNo).execute()
    await new DailyCashAccrual().cash(this.accountNo).execute()
    await new MarginPurchasePowerCalculator().evening(this.accountNo).execute()

    
    //TODO  - Add GLE 
    await new AccruedCashInterestQuery().accountNo(this.accountNo).fromDate(appDate).execute()
    await new RiskParameterQuery().accountClass(RiskParameterQuery.AccountClass.CASH_BALANCE__CASH_BALANCE).accountNo(this.accountNo).execute()
    await new WithdrawalLimit().accountNumber(this.accountNo).baseDate(appDate).execute()
    await new MultipurposeReportQuery().sqlId(MultipurposeReportQuery.SqlId.CAMMI___Monthly_Interest_Report).execute()
    

    }

    public async test03May2018(){
        let appDate = "03-04-2018"
        ApplicationDate.updateApplicationDate(appDate)
        //BOD Operations
        await new MarginPurchasePowerCalculator().morning(this.accountNo).execute()
        await new WithdrawalLimit().accountNumber(this.accountNo).baseDate(appDate).execute()
        await new CamBalanceQuery().td(this.accountNo).execute()
       




        //Day Ops
        await new FIFOPLCalculator().accountNo(this.accountNo).execute()
        await new DailyCashAccrual().cash(this.accountNo).execute()
        await new MarginPurchasePowerCalculator().evening(this.accountNo).execute()
        await new AccruedCashInterestQuery().accountNo(this.accountNo).fromDate(appDate).execute()
        await new RiskParameterQuery().accountClass(RiskParameterQuery.AccountClass.CASH_BALANCE__CASH_BALANCE).accountNo(this.accountNo).execute()
        await new MultipurposeReportQuery().sqlId(MultipurposeReportQuery.SqlId.CAMMI___Monthly_Interest_Report).execute()
        await new WithdrawalLimit().accountNumber(this.accountNo).baseDate(appDate).execute()
    }

    public async test04May2018(){
        let appDate = "04-04-2018"
        
        ApplicationDate.updateApplicationDate(appDate)

        //BOD
        await new AutoCompletion().bod()
        await new WithdrawalLimit().accountNumber(this.accountNo).baseDate(appDate).execute()

        await new CamBalanceQuery().td(this.accountNo).execute()
        await new CamBalanceQuery().vd(this.accountNo).execute()
        await new CamBalanceQuery().sd(this.accountNo).execute()

        //EOD
        await new AutoCompletion().eod()
        await new FIFOPLCalculator().accountNo(this.accountNo).execute()
        await new DailyCashAccrual().cash(this.accountNo).execute()
        await new MarginPurchasePowerCalculator().evening(this.accountNo).execute()
        await new AccruedCashInterestQuery().accountNo(this.accountNo).fromDate(appDate).execute()
        await new RiskParameterQuery().accountClass(RiskParameterQuery.AccountClass.CASH_BALANCE__CASH_BALANCE).accountNo(this.accountNo).execute()
        await new MultipurposeReportQuery().sqlId(MultipurposeReportQuery.SqlId.CAMMI___Monthly_Interest_Report).execute()
        await new WithdrawalLimit().accountNumber(this.accountNo).baseDate(appDate).execute()

    }





    async destroy(){
        await PageContext.getInstance().close()
    }
        


}