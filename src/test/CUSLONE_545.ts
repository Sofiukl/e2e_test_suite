import { PageContext } from "../context/PageContext";
import { Login } from "../ui/common/LoginOperation";
import { Customer } from "../rest/Customer";
// import { ClientPayPayInEntry } from "../rest/ClientPayPayInEntry";
import { ExecutionEntry } from "../ui/entry/trd/ExecutionEntry";
import { CAMSecurityInOutEntry } from "../ui/entry/cam/SecurityInOutEntry";
import { StockTransferEntry } from "../ui/entry/itf/StockTransferEntry";
import { ApplicationDate } from "../db/ApplicationDate";
// import { StockTransferAuthorization } from "../ui/entry/itf/StockTransferAuthorization";
import { CashIOEntry } from "../ui/entry/cam/CashIOEntry";
import { CamBalanceQuery } from "../ui/query/cam/CamBalanceQuery";
import { ExecutionToTrade } from "../batch/trd/ExecutionToTrade";
import { TaxAndCommCalculator } from "../batch/trd/TaxAndCommCalculator";
import { MarketPriceEntry } from "../ui/entry/ref/MarketPriceEntry";
import { AutoCompletion } from "../batch/stl/AutoCompletion";
import { ClientWithdrawEntry } from "../rest/entry/stl/ClientWithdrawEntry";
import { GenerateBorLor8Report } from "../batch/cam/GenerateBorLor8Report";
import { DateUtils } from "../utils/DateUtils";
import { FIFOPLCalculator } from "../batch/cam/FIFOPLCalculator";
import { DailyCashAccrual } from "../batch/cam/DailyCashAccrual";
import { MarginPurchasePowerCalculator } from "../batch/cam/MarginPurchasePowerCalculator";

export class CUSLONE_545 {


    cashAc1: string
    creditAc1: string
    cashAc2: string
    creditAc2: string

    async setup() {
        //login
        await PageContext.getInstance().initPage(true)
        let login = new Login()
        await login.execute()





        //static data setup
        this.cashAc1 = "C0STFF001-7"
        this.cashAc2 = "C0STFF002-7"
        this.creditAc1 = "C0STFF001-8"
        this.creditAc2 = "C0STFF002-8"

    }


    public async testDay0() {
        let appDate = "02-04-2018"
        ApplicationDate.updateApplicationDate(appDate)

        

        await new Customer().applicationDate(appDate).customerCode("STFF001").create()
        await new Customer().applicationDate(appDate).customerCode("STFF002").create()

        await new AutoCompletion().bod()

        
        await new CashIOEntry().in(this.cashAc1, "500000")
        await new ExecutionEntry().buy(appDate, this.cashAc1, "AAV", "7000", "40")
        await new ExecutionEntry().sell(appDate, this.cashAc1, "AAV", "500", "20")
        await new CAMSecurityInOutEntry().ipo(this.cashAc1, "AAV", "50", "20")
        await new StockTransferEntry().transferIn(this.cashAc1, "2S", "30", "20")
        await new ExecutionEntry().buy(appDate, this.cashAc1, "2S", "20", "20")
        await new CashIOEntry().in(this.cashAc1, "1000")
        await new CAMSecurityInOutEntry().out(this.cashAc1, "2S", "10", "40")
        await new ExecutionEntry().sell(appDate, this.cashAc1, "2S", "10", "20")

        await new CashIOEntry().in(this.creditAc1, "10000")
        await new ExecutionEntry().buy(appDate, this.creditAc1, "AAV", "600", "40")
        await new ExecutionEntry().sell(appDate, this.creditAc1, "AAV", "400", "30")
        await new CAMSecurityInOutEntry().ipo(this.creditAc1, "AAV", "50", "20")
        await new StockTransferEntry().transferInRights(this.creditAc1, "2S", "100", "30")
        await new StockTransferEntry().transferInPledge(this.creditAc1, "2S", "200", "40")


        ////////////////////////////////////////////////////////////////////////////////////////////////


        await new MarketPriceEntry().close(appDate, "2S", "15")
        await new MarketPriceEntry().close(appDate, "AAV", "14")

        await new AutoCompletion().eod()


        await new ExecutionToTrade().tradedate(DateUtils.convertToBatchFormat(appDate)).execute()
        await new TaxAndCommCalculator().date(DateUtils.convertToBatchFormat(appDate)).execute()

        //fifo
        await new FIFOPLCalculator().execute()

        //accrual
        await new DailyCashAccrual().credit().execute()
        await new DailyCashAccrual().cash().execute()

        //risk parameter

        await new MarginPurchasePowerCalculator().evening().execute()

        await new CamBalanceQuery().td()
        await new CamBalanceQuery().vd()
        await new CamBalanceQuery().sd()
       

        // */

        //generate report


    }

    public async testDay1() {
        let appDate = "03-04-2018"
        ApplicationDate.updateApplicationDate(appDate)

        await new AutoCompletion().bod()


        await new CashIOEntry().in(this.cashAc2, "15000")
        await new ExecutionEntry().buy(appDate, this.cashAc2, 'AAV', '500', '30')
        await new ExecutionEntry().sell(appDate, this.cashAc2, 'AAV', '20', '20')
        await new CAMSecurityInOutEntry().ipo(this.cashAc2, "AAV", "10", "25")


        await new CashIOEntry().in(this.creditAc2, "5000")
        await new ExecutionEntry().buy(appDate, this.creditAc2, '2S', '50', '20')

        await new ExecutionEntry().buy(appDate, this.cashAc1, '2S', '20', '40')
        await new CashIOEntry().in(this.cashAc1, "20000")

        await new ExecutionEntry().buy(appDate, this.creditAc1, 'TMB', '30', '20')
        await new ExecutionEntry().sell(appDate, this.creditAc1, 'AAV', '50', '10')


        await new MarketPriceEntry().close(appDate, "2S", "15")
        await new MarketPriceEntry().close(appDate, "AAV", "14")
        await new MarketPriceEntry().close(appDate, "TMB", "10")

        await new AutoCompletion().eod()

        await new ExecutionToTrade().tradedate(DateUtils.convertToBatchFormat(appDate)).execute()
        await new TaxAndCommCalculator().date(DateUtils.convertToBatchFormat(appDate)).execute()

        //fifo
        await new FIFOPLCalculator().execute()

        //accrual
        await new DailyCashAccrual().credit().execute()
        await new DailyCashAccrual().cash().execute()

        //risk parameter

        await new MarginPurchasePowerCalculator().evening().execute()

        await new CamBalanceQuery().td()
        await new CamBalanceQuery().vd()
        await new CamBalanceQuery().sd()

    }

    public async testDay2() {
        let appDate = "04-04-2018"
        ApplicationDate.updateApplicationDate(appDate)

        await new AutoCompletion().bod()

        await new CAMSecurityInOutEntry().in(this.cashAc2, "AAV", "50", "20")
        await new ClientWithdrawEntry().withdraw(appDate, this.cashAc2, "5000")
        await new CAMSecurityInOutEntry().in(this.creditAc2, "TMB", "60", "40")
        await new ExecutionEntry().buy(appDate, this.creditAc2, "2S", '400', '10')
        await new CashIOEntry().inCollateral(this.creditAc2, "10000")

        
        await new AutoCompletion().eod()

        await new MarketPriceEntry().close(appDate, "2S", "15")
        await new MarketPriceEntry().close(appDate, "AAV", "14")
        await new MarketPriceEntry().close(appDate, "TMB", "10")

        
        await new ExecutionToTrade().tradedate(DateUtils.convertToBatchFormat(appDate)).execute()
        await new TaxAndCommCalculator().date(DateUtils.convertToBatchFormat(appDate)).execute()
        
        //fifo
        await new FIFOPLCalculator().execute()

        //accrual
        await new DailyCashAccrual().credit().execute()
        await new DailyCashAccrual().cash().execute()

        //risk parameter
        await new MarginPurchasePowerCalculator().evening().execute()

        await new CamBalanceQuery().td()
        await new CamBalanceQuery().vd()
        await new CamBalanceQuery().sd()

    }
    public async testDay3() {
        let appDate = "05-04-2018"
        ApplicationDate.updateApplicationDate(appDate)

        await new AutoCompletion().bod()

        await new CashIOEntry().in(this.cashAc1,"1000")
        await new ExecutionEntry().sell(appDate,this.cashAc1,'2S','200','10')
        
        await new ExecutionEntry().buyRights(appDate,this.creditAc1,'AAV','100','30') //RIGHTS ??
        await new StockTransferEntry().transferInPledge(this.creditAc1,"AAV","400","20")
        //WHY OTHER COLLATERRAL???
        

        await new AutoCompletion().eod()

        await new MarketPriceEntry().close(appDate, "2S", "15")
        await new MarketPriceEntry().close(appDate, "AAV", "14")
        await new MarketPriceEntry().close(appDate, "TMB", "10")

        
        await new ExecutionToTrade().tradedate(DateUtils.convertToBatchFormat(appDate)).execute()
        await new TaxAndCommCalculator().date(DateUtils.convertToBatchFormat(appDate)).execute()

        //fifo
        await new FIFOPLCalculator().execute()

        //accrual
        await new DailyCashAccrual().credit().execute()
        await new DailyCashAccrual().cash().execute()

        //risk parameter

        await new MarginPurchasePowerCalculator().evening().execute()

        await new CamBalanceQuery().td()
        await new CamBalanceQuery().vd()
        await new CamBalanceQuery().sd()
        
    }



    async destroy() {
        await PageContext.getInstance().close()
    }

}