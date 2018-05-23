

import {PageContext} from "./context/PageContext"
import {Login} from "./ui/common/LoginOperation"
import { ExecutionEntry } from "./ui/entry/trd/ExecutionEntry";
import { Customer } from "./rest/Customer";
import { Context } from "./context/Context";
import { BalanceQuery } from "./ui/query/cam/BalanceQuery";




class TC{
  
     login : Login = new Login()
     execution : ExecutionEntry = new ExecutionEntry(  )
     query : BalanceQuery = new BalanceQuery()
     cust : Customer = new Customer()
    

  async tcBasicEntryTrade() {

         await this.cust.create("12345699")
         await PageContext.getInstance().initPage()
         await this.login.execute()
        //  await this.execution.applicationDate("20-09-2018").time("11:11:11").buy()
        //             .instrument("BBL").quantity("100").bookCost("10").account(Context.getInstance().cashAccount())
        //             .execute()
         await this.query.execute()
         await PageContext.getInstance().close()
    }


}

const xyz = new TC()


xyz.tcBasicEntryTrade().then(()=> {



})

