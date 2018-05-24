

import {PageContext} from "./context/PageContext"
import {Login} from "./ui/common/LoginOperation"
import { ExecutionEntry } from "./ui/entry/trd/ExecutionEntry";
import { Customer } from "./rest/Customer";
import { Context } from "./context/Context";
import { BalanceQuery } from "./ui/query/cam/BalanceQuery";
import { RiskParameterQuery } from "./ui/query/cam/RiskParameterQuery";




class TC{
  
     login : Login = new Login()
     execution : ExecutionEntry = new ExecutionEntry(  )
     query : RiskParameterQuery = new RiskParameterQuery()
     cust : Customer = new Customer()
    

  async tcCreditBalanceAccountCreatedTodayShouldAppearInScreen() {

         //await this.cust.applicationDate("22-05-2018").customerCode("12345699").create()
         await PageContext.getInstance().initPage()
         PageContext.getInstance().getPage().setDefaultNavigationTimeout(300*1000)
         await this.login.execute()

        //  await this.execution.applicationDate("22-05-2018").time("11:11:11").buy()
        //              .instrument("BBL").quantity("100").bookCost("10")
        //              .account(Context.getInstance().cashAccount())
        //              .execute()



         await this.query.accountClass('').accountNo("C012345699-7").execute()
         await this.query.accountClass('').accountNo("C012345699-8").execute()
         await PageContext.getInstance().close()
    }


}

const xyz = new TC()


xyz.tcCreditBalanceAccountCreatedTodayShouldAppearInScreen().then(()=> {



})

