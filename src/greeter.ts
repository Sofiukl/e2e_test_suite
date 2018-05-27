

import {PageContext} from "./context/PageContext"
import {Login} from "./ui/common/LoginOperation"
import { ExecutionEntry } from "./ui/entry/trd/ExecutionEntry";
import { Customer } from "./rest/Customer";
import { Context } from "./context/Context";
import { BalanceQuery } from "./ui/query/cam/BalanceQuery";
import { RiskParameterQuery } from "./ui/query/cam/RiskParameterQuery";
import {expect} from "chai"
import winston from "winston"
import { ClientPayPayInEntry } from "./rest/ClientPayPayInEntry";
import { CompletionEntry } from "./ui/entry/stl/CompletionEntry";
import { ClientWithdrawEntry } from "./rest/entry/stl/ClientWithdrawEntry";
import { lobPrefetchSize } from "oracledb";




export class TestRIskParameterConditon  {//implements Test {
  
     login : Login = new Login()
     execution : ExecutionEntry = new ExecutionEntry(  )
     riskParameterQuery : RiskParameterQuery = new RiskParameterQuery()
     cust : Customer = new Customer()

     completion : CompletionEntry = new CompletionEntry()

     clientReceipt : ClientPayPayInEntry = new ClientPayPayInEntry()
     clientWithdrawEntry : ClientWithdrawEntry = new ClientWithdrawEntry()

     async testSetup(){
        //login
        await PageContext.getInstance().initPage()
        await this.login.execute()
     }

  async testCreditBalanceAccountCreatedTodayShouldAppearInScreen() {

        winston.info("Test for testCreditBalanceAccountCreatedTodayShouldAppearInScreen " );

            //Create a customer
         await this.cust.applicationDate("03-07-2018").customerCode("12345699").create()

            //Check in RPQS
         await this.riskParameterQuery.accountClass('')
                    .accountNo("C012345699-8")
                                .execute()

        
        let results = await this.riskParameterQuery.where("Account No").equalTo("C012345699-8").fetch('Cash Balance','Action');

        expect(results).not.null
        expect(results).to.have.lengthOf(1)
        expect(results[0]['Cash Balance']).to.equal("0.00")
        expect(results[0]['Action']).to.equal("No Action")
        
        winston.info("Test for testCreditBalanceAccountCreatedTodayShouldAppearInScreen  SUCCESS" );

        
    }


    async testCreditBalanceAccountCashIn(){

        winston.info("Test for testCreditBalanceAccountCashIn" );
  

        //Create Client Receipt Pay-In
         var settlementReferenceNo = await this.clientReceipt.receivedAmount("5000.00")
                     .valueDate("03-07-2018")
                     .receivedDate("03-07-2018")
                     .accountNo("C012345699-8")
         .execute()


         //check the RPQS

         await this.riskParameterQuery.accountClass('')
         .accountNo("C012345699-8")
                     .execute()

        let rpqsResult = await this.riskParameterQuery
        .where("Account No").equalTo("C012345699-8").fetch('Cash Balance','Action');

        expect(rpqsResult).not.null
        expect(rpqsResult).to.have.lengthOf(1)
        expect(rpqsResult[0]['Cash Balance']).to.equal("0.00")
        expect(rpqsResult[0]['Action']).to.equal("No Action")

        

        //Mark for completion
        await this.completion.settlementReferenceNo(settlementReferenceNo).execute();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        
         //check the RPQS

         await this.riskParameterQuery.accountClass('')
         .accountNo("C012345699-8")
                     .execute()

         let results = await this.riskParameterQuery.where("Account No").equalTo("C012345699-8")
        .fetch('Cash Balance','Action', 'Running Cash Balance'
    , 'Unsettled Withdraw Latest' , 'Liability' , 'Withdraw Limit/Withdraw Limit (Next Business Day)'
 ,'Purchase Power' , 'Asset', 'Equity' , 'Excess Equity' , 'Call Amount' , 'Force Amount');

        expect(results).not.null
        expect(results).to.have.lengthOf(1)
        expect(results[0]['Cash Balance']).to.equal("5,000.00")
        expect(results[0]['Running Cash Balance']).to.equal("5,000.00")
        expect(results[0]['Unsettled Withdraw Latest']).to.equal("0.00")
        expect(results[0]['Liability']).to.equal("0.00")
        expect(results[0]['Withdraw Limit/Withdraw Limit (Next Business Day)']).to.equal("5,000.00")
        expect(results[0]['Purchase Power']).to.equal("0.00")
        expect(results[0]['Asset']).to.equal("5,000.00")
        expect(results[0]['Equity']).to.equal("5,000.00")
        expect(results[0]['Excess Equity']).to.equal("5,000.00")
        expect(results[0]['Call Amount']).to.equal("5,000.00")
        expect(results[0]['Force Amount']).to.equal("5,000.00")
        expect(results[0]['Action']).to.equal("No Action")



        winston.info("Test for testCreditBalanceAccountCashIn Succcess" );


    }

    async testRegisterWithdrawl(){


        var withdrawResponse = await this.clientWithdrawEntry.accountNo("C012345699-8")
        .withdrawableAmount("3000")
        .paymentDate("03-07-2018")
        .transactionDate("03-07-2018")
        .execute()

        let settlementReferenceNumber = withdrawResponse[0].settlementReferenceNumber


        
         //check the RPQS

         await this.riskParameterQuery.accountClass('')
         .accountNo("C012345699-8")
                     .execute()

        let results = await this.riskParameterQuery.where("Account No").equalTo("C012345699-8")
            .fetch('Cash Balance','Action', 'Running Cash Balance'
                , 'Unsettled Withdraw Latest' , 'Liability' , 'Withdraw Limit/Withdraw Limit (Next Business Day)'
                ,'Purchase Power' , 'Asset', 'Equity' , 'Excess Equity' , 'Call Amount' , 'Force Amount');

        expect(results).not.null
        expect(results).to.have.lengthOf(1)
        expect(results[0]['Cash Balance']).to.equal("5,000.00")
        expect(results[0]['Running Cash Balance']).to.equal("2,000.00")
        expect(results[0]['Unsettled Withdraw Latest']).to.equal("3,000.00")
        expect(results[0]['Liability']).to.equal("0.00")
        expect(results[0]['Withdraw Limit/Withdraw Limit (Next Business Day)']).to.equal("2,000.00")
        expect(results[0]['Purchase Power']).to.equal("0.00")
        expect(results[0]['Asset']).to.equal("2,000.00")
        expect(results[0]['Equity']).to.equal("2,000.00")
        expect(results[0]['Excess Equity']).to.equal("2,000.00")
        expect(results[0]['Call Amount']).to.equal("2,000.00")
        expect(results[0]['Force Amount']).to.equal("2,000.00")
        expect(results[0]['Action']).to.equal("No Action")

        

        //Mark for completion
        await this.completion.settlementReferenceNo(settlementReferenceNumber).execute();

        //navigate to RPQS 
        await this.riskParameterQuery.accountClass('')
        .accountNo("C012345699-8")
                    .execute()



        results = await this.riskParameterQuery.where("Account No").equalTo("C012345699-8")
            .fetch('Cash Balance','Action', 'Running Cash Balance'
                , 'Unsettled Withdraw Latest' , 'Liability' , 'Withdraw Limit/Withdraw Limit (Next Business Day)'
                ,'Purchase Power' , 'Asset', 'Equity' , 'Excess Equity' , 'Call Amount' , 'Force Amount');

        expect(results).not.null
        expect(results).to.have.lengthOf(1)
        expect(results[0]['Cash Balance']).to.equal("2,000.00")
        expect(results[0]['Running Cash Balance']).to.equal("2,000.00")
        expect(results[0]['Unsettled Withdraw Latest']).to.equal("0.00")
        expect(results[0]['Liability']).to.equal("0.00")
        expect(results[0]['Withdraw Limit/Withdraw Limit (Next Business Day)']).to.equal("2,000.00")
        expect(results[0]['Purchase Power']).to.equal("0.00")
        expect(results[0]['Asset']).to.equal("2,000.00")
        expect(results[0]['Equity']).to.equal("2,000.00")
        expect(results[0]['Excess Equity']).to.equal("2,000.00")
        expect(results[0]['Call Amount']).to.equal("2,000.00")
        expect(results[0]['Force Amount']).to.equal("2,000.00")
        expect(results[0]['Action']).to.equal("No Action")

        

        
    }

     async testTearDown(){
        await PageContext.getInstance().close()

     }


}


/*
winston.level = 'silly';

let t  = new TestRIskParameterConditon()





///*

    t.testSetup().then(()=>{
        t.testCreditBalanceAccountCreatedTodayShouldAppearInScreen().then(()=>{
            t.testCreditBalanceAccountCashIn().then(()=>{
                t.testRegisterWithdrawl().then(()=>{
                    t.testTearDown()
                })
            })
        });
    
    
    })


//*/ 
   
// }
//)




