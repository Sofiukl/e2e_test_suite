import { PageContext } from "../context/PageContext";
import { Login } from "../ui/common/LoginOperation";
import { Customer } from "../rest/Customer";
import { ApplicationDate } from "../db/ApplicationDate";
import { CashIOEntry } from "../ui/entry/cam/CashIOEntry";
import { ClientPayPayInEntry } from "../rest/ClientPayPayInEntry";
import { CamBalanceQuery } from "../ui/query/cam/CamBalanceQuery";


export class CUSLONE_905 {


    async setup() {
        //login
         await PageContext.getInstance().initPage(false)
         let login = new Login()
         await login.execute()
    }


    public async testCreateCustomer(){
        //create Customer
        //cash in 20000
        //accrual batch
        //margin batch
        //GLE transaction query

        let appDate = "25-06-2018"
        let accountNo = "C012345699-7"
        ApplicationDate.updateApplicationDate(appDate)

         let customer = new Customer()
         await customer.customerCode("12345699").applicationDate(appDate).create()
        await ClientPayPayInEntry.cashIn(accountNo,"20000")
        await new CamBalanceQuery().td(accountNo).execute()
        await new CamBalanceQuery().vd(accountNo).execute()
        await new CamBalanceQuery().sd(accountNo).execute()
        



        

    }

    async destroy(){
        await PageContext.getInstance().close()
    }
        


}