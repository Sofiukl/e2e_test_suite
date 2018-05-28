

import { PageContext } from "./context/PageContext"
import { Login } from "./ui/common/LoginOperation"
import { ExecutionEntry } from "./ui/entry/trd/ExecutionEntry";
import { Customer } from "./rest/Customer";
import { Context } from "./context/Context";
import { BalanceQuery } from "./ui/query/cam/BalanceQuery";
import { RiskParameterQuery } from "./ui/query/cam/RiskParameterQuery";
import { expect } from "chai"
import winston from "winston"
import { ClientPayPayInEntry } from "./rest/ClientPayPayInEntry";
import { CompletionEntry } from "./ui/entry/stl/CompletionEntry";
import { ClientWithdrawEntry } from "./rest/entry/stl/ClientWithdrawEntry";
import { lobPrefetchSize } from "oracledb";
import { ClientFeePaymentUndecidedEntry } from "./rest/entry/stl/ClientFeePaymentUndecidedEntry";
import { ClientFeePaymentConfirmDecided } from "./rest/entry/stl/ClientFeePaymentConfirmDecided";
import { CashTransferEntry } from "./ui/entry/stl/CashTransferEntry";
import { CashTransferAuthorization } from "./ui/query/stl/CashTransferAuthorization";
import { AbstractCashTransferAuthorization } from "./ui/query/stl/AbstractCashTransferAuthorization";




export class TestRIskParameterConditon {

    // login: Login = new Login()
    // riskParameterQuery: RiskParameterQuery = new RiskParameterQuery()
    // cust: Customer = new Customer()

    // completion: CompletionEntry = new CompletionEntry()

    // clientReceipt: ClientPayPayInEntry = new ClientPayPayInEntry()
    // clientWithdrawEntry: ClientWithdrawEntry = new ClientWithdrawEntry()

    // clientFeePaymentUndecidedEntry: ClientFeePaymentUndecidedEntry = new ClientFeePaymentUndecidedEntry()

    // clientFeePaymentConfirmDecided: ClientFeePaymentConfirmDecided = new ClientFeePaymentConfirmDecided();

    // cashTransferEntry : CashTransferEntry = new CashTransferEntry()

    // cashTransferAuthorization : CashTransferAuthorization = new CashTransferAuthorization();



    async setup() {
        //login
        await PageContext.getInstance().initPage()
        let login = new Login()
        await login.execute()
    }

    async testCreditBalanceAccountCreatedTodayShouldAppearInScreen() {

        winston.info("Test for testCreditBalanceAccountCreatedTodayShouldAppearInScreen ");

        //Create a customer
        let cust = new Customer()
        await cust.applicationDate("03-07-2018").customerCode("12345699").create()

        let riskParameterQuery = new RiskParameterQuery()
        //Check in RPQS
        await riskParameterQuery.accountClass('')
            .accountNo("C012345699-8")
            .execute()


        let results = await riskParameterQuery.where("Account No").equalTo("C012345699-8").fetch('Cash Balance', 'Action');

        expect(results).not.null
        expect(results).to.have.lengthOf(1)
        expect(results[0]['Cash Balance']).to.equal("0.00")
        expect(results[0]['Action']).to.equal("No Action")

        winston.info("Test for testCreditBalanceAccountCreatedTodayShouldAppearInScreen  SUCCESS");


    }


    async testCreditBalanceAccountCashIn() {

        winston.info("Test for testCreditBalanceAccountCashIn");
        let riskParameterQuery = new RiskParameterQuery()
        let clientReceipt = new ClientPayPayInEntry();

        //Create Client Receipt Pay-In
        var settlementReferenceNo = await clientReceipt
            .receivedAmount("5000.00")
            .valueDate("03-07-2018")
            .receivedDate("03-07-2018")
            .accountNo("C012345699-8")
            .execute()


        //check the RPQS
        await riskParameterQuery
            .accountClass('')
            .accountNo("C012345699-8")
            .execute()

        let rpqsResult = await riskParameterQuery
            .where("Account No").equalTo("C012345699-8").fetch('Cash Balance', 'Action');

        expect(rpqsResult).not.null
        expect(rpqsResult).to.have.lengthOf(1)
        expect(rpqsResult[0]['Cash Balance']).to.equal("0.00")
        expect(rpqsResult[0]['Action']).to.equal("No Action")


        let completion = new CompletionEntry()
        //Mark for completion
        await completion.settlementReferenceNo(settlementReferenceNo).execute();

        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        //check the RPQS

        await riskParameterQuery
            .accountClass('')
            .accountNo("C012345699-8")
            .execute()

        let results = await riskParameterQuery.where("Account No").equalTo("C012345699-8")
            .fetch('Cash Balance', 'Action', 'Running Cash Balance'
                , 'Unsettled Withdraw Latest', 'Liability', 'Withdraw Limit/Withdraw Limit (Next Business Day)'
                , 'Purchase Power', 'Asset', 'Equity', 'Excess Equity', 'Call Amount', 'Force Amount');

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



        winston.info("Test for testCreditBalanceAccountCashIn Succcess");


    }

    async testRegisterWithdrawl() {

        let  completion: CompletionEntry = new CompletionEntry()
        let clientWithdrawEntry : ClientWithdrawEntry = new ClientWithdrawEntry()


        var withdrawResponse = await clientWithdrawEntry.accountNo("C012345699-8")
            .withdrawableAmount("3000")
            .paymentDate("03-07-2018")
            .transactionDate("03-07-2018")
            .execute()

        let settlementReferenceNumber = withdrawResponse[0].settlementReferenceNumber



        //check the RPQS
        let riskParameterQuery = new RiskParameterQuery()
        await riskParameterQuery.accountClass('')
            .accountNo("C012345699-8")
            .execute()

        let results = await riskParameterQuery.where("Account No").equalTo("C012345699-8")
            .fetch('Cash Balance', 'Action', 'Running Cash Balance'
                , 'Unsettled Withdraw Latest', 'Liability', 'Withdraw Limit/Withdraw Limit (Next Business Day)'
                , 'Purchase Power', 'Asset', 'Equity', 'Excess Equity', 'Call Amount', 'Force Amount');

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
        await completion.settlementReferenceNo(settlementReferenceNumber).execute();

        //navigate to RPQS 
        await riskParameterQuery.accountClass('')
            .accountNo("C012345699-8")
            .execute()



        results = await riskParameterQuery.where("Account No").equalTo("C012345699-8")
            .fetch('Cash Balance', 'Action', 'Running Cash Balance'
                , 'Unsettled Withdraw Latest', 'Liability', 'Withdraw Limit/Withdraw Limit (Next Business Day)'
                , 'Purchase Power', 'Asset', 'Equity', 'Excess Equity', 'Call Amount', 'Force Amount');

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


    async testFeePaymentThoughCashBalanceImpactOnRiskParameter() {
        let  completion: CompletionEntry = new CompletionEntry()
        let clientFeePaymentUndecidedEntry = new ClientFeePaymentUndecidedEntry()
        let clientFeePaymentConfirmDecided = new ClientFeePaymentConfirmDecided()

        await clientFeePaymentUndecidedEntry
            .accountNo("C012345699-8")
            .addPaymentDetail("500", "STAMP_DUTY")
            .txnReferenceNo("2018091112345699")
            .externalReferenceNo("0815322018012345699")
            .execute()

        let riskParameterQuery = new RiskParameterQuery();
        await riskParameterQuery.accountClass('')
            .accountNo("C012345699-8")
            .execute()

        let results = await riskParameterQuery.where("Account No").equalTo("C012345699-8")
            .fetch('Cash Balance', 'Action', 'Running Cash Balance'
                , 'Unsettled Withdraw Latest', 'Liability', 'Withdraw Limit/Withdraw Limit (Next Business Day)'
                , 'Purchase Power', 'Asset', 'Equity', 'Excess Equity', 'Call Amount', 'Force Amount');

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


        await clientFeePaymentConfirmDecided
            .addTxnReferenceNo("2018091112345699")
            .externalReferenceNo("0815322018012345699")
            .valueDate("03-07-2018")
            .wayOfPayment("CASH_BALANCE")
            .cpSettleAccountNo("C012345699-8")
            .isAuthorizationReqd("Y")
            .priority("")
            .payInSlipFileReferenceName("")
            .execute()

        await riskParameterQuery.accountClass('')
            .accountNo("C012345699-8")
            .execute()

        results = await riskParameterQuery.where("Account No").equalTo("C012345699-8")
            .fetch('Cash Balance', 'Action', 'Running Cash Balance'
                , 'Unsettled Withdraw Latest', 'Liability', 'Withdraw Limit/Withdraw Limit (Next Business Day)'
                , 'Purchase Power', 'Asset', 'Equity', 'Excess Equity', 'Call Amount', 'Force Amount');

        expect(results).not.null
        expect(results).to.have.lengthOf(1)
        expect(results[0]['Cash Balance']).to.equal("2,000.00")
        expect(results[0]['Running Cash Balance']).to.equal("1,500.00")
        expect(results[0]['Unsettled Withdraw Latest']).to.equal("0.00")
        expect(results[0]['Liability']).to.equal("0.00")
        expect(results[0]['Withdraw Limit/Withdraw Limit (Next Business Day)']).to.equal("1,500.00")
        expect(results[0]['Purchase Power']).to.equal("0.00")
        expect(results[0]['Asset']).to.equal("1,500.00")
        expect(results[0]['Equity']).to.equal("1,500.00")
        expect(results[0]['Excess Equity']).to.equal("1,500.00")
        expect(results[0]['Call Amount']).to.equal("1,500.00")
        expect(results[0]['Force Amount']).to.equal("1,500.00")
        expect(results[0]['Action']).to.equal("No Action")


        //Mark for completion
        await completion.settlementReferenceNo('').chequeNo("2018091112345699").execute();

        //navigate to RPQS 
        await riskParameterQuery.accountClass('')
            .accountNo("C012345699-8")
            .execute()



        results = await riskParameterQuery.where("Account No").equalTo("C012345699-8")
            .fetch('Cash Balance', 'Action', 'Running Cash Balance'
                , 'Unsettled Withdraw Latest', 'Liability', 'Withdraw Limit/Withdraw Limit (Next Business Day)'
                , 'Purchase Power', 'Asset', 'Equity', 'Excess Equity', 'Call Amount', 'Force Amount');

        expect(results).not.null
        expect(results).to.have.lengthOf(1)
        expect(results[0]['Cash Balance']).to.equal("1,500.00")
        expect(results[0]['Running Cash Balance']).to.equal("1,500.00")
        expect(results[0]['Unsettled Withdraw Latest']).to.equal("0.00")
        expect(results[0]['Liability']).to.equal("0.00")
        expect(results[0]['Withdraw Limit/Withdraw Limit (Next Business Day)']).to.equal("1,500.00")
        expect(results[0]['Purchase Power']).to.equal("0.00")
        expect(results[0]['Asset']).to.equal("1,500.00")
        expect(results[0]['Equity']).to.equal("1,500.00")
        expect(results[0]['Excess Equity']).to.equal("1,500.00")
        expect(results[0]['Call Amount']).to.equal("1,500.00")
        expect(results[0]['Force Amount']).to.equal("1,500.00")
        expect(results[0]['Action']).to.equal("No Action")




    }



    async testFeePaymentThoughEpaymentNoImpactToRPQS() {

        let riskParameterQuery = new RiskParameterQuery();
        let clientFeePaymentConfirmDecided : ClientFeePaymentConfirmDecided = new ClientFeePaymentConfirmDecided()
        let clientFeePaymentUndecidedEntry : ClientFeePaymentUndecidedEntry = new ClientFeePaymentUndecidedEntry()

        await clientFeePaymentUndecidedEntry
            .accountNo("C012345699-8")
            .addPaymentDetail("300", "STAMP_DUTY")
            .txnReferenceNo("20180911123456992")
            .externalReferenceNo("08153220180123456992")
            .execute()

        await riskParameterQuery.accountClass('')
            .accountNo("C012345699-8")
            .execute()

        let results = await riskParameterQuery.where("Account No").equalTo("C012345699-8")
            .fetch('Cash Balance', 'Action', 'Running Cash Balance'
                , 'Unsettled Withdraw Latest', 'Liability', 'Withdraw Limit/Withdraw Limit (Next Business Day)'
                , 'Purchase Power', 'Asset', 'Equity', 'Excess Equity', 'Call Amount', 'Force Amount');

        expect(results).not.null
        expect(results).to.have.lengthOf(1)
        expect(results[0]['Cash Balance']).to.equal("1,500.00")
        expect(results[0]['Running Cash Balance']).to.equal("1,500.00")
        expect(results[0]['Unsettled Withdraw Latest']).to.equal("0.00")
        expect(results[0]['Liability']).to.equal("0.00")
        expect(results[0]['Withdraw Limit/Withdraw Limit (Next Business Day)']).to.equal("1,500.00")
        expect(results[0]['Purchase Power']).to.equal("0.00")
        expect(results[0]['Asset']).to.equal("1,500.00")
        expect(results[0]['Equity']).to.equal("1,500.00")
        expect(results[0]['Excess Equity']).to.equal("1,500.00")
        expect(results[0]['Call Amount']).to.equal("1,500.00")
        expect(results[0]['Force Amount']).to.equal("1,500.00")
        expect(results[0]['Action']).to.equal("No Action")


        await clientFeePaymentConfirmDecided.clear()
            .addTxnReferenceNo("20180911123456992")
            .externalReferenceNo("08153220180123456992")
            .valueDate("03-07-2018")
            .settlementFor("WIRE_INSTRUCTION")
            .cashSecurity("CASH")
            .paymentReceipt("R")
            .priority("3")
            .wayOfPayment("E_PAYMENT")
            .cpSettleAccountNo("C012345699-8")
            .isAuthorizationReqd("Y")
            .ourBankCode("004-0003")
            .ourSettleAcNo("B000000281568817")
            .payInSlipFileReferenceName("")
            .execute()

        await riskParameterQuery.accountClass('')
            .accountNo("C012345699-8")
            .execute()

        results = await riskParameterQuery.where("Account No").equalTo("C012345699-8")
            .fetch('Cash Balance', 'Action', 'Running Cash Balance'
                , 'Unsettled Withdraw Latest', 'Liability', 'Withdraw Limit/Withdraw Limit (Next Business Day)'
                , 'Purchase Power', 'Asset', 'Equity', 'Excess Equity', 'Call Amount', 'Force Amount');

        expect(results).not.null
        expect(results).to.have.lengthOf(1)
        expect(results[0]['Cash Balance']).to.equal("1,500.00")
        expect(results[0]['Running Cash Balance']).to.equal("1,500.00")
        expect(results[0]['Unsettled Withdraw Latest']).to.equal("0.00")
        expect(results[0]['Liability']).to.equal("0.00")
        expect(results[0]['Withdraw Limit/Withdraw Limit (Next Business Day)']).to.equal("1,500.00")
        expect(results[0]['Purchase Power']).to.equal("0.00")
        expect(results[0]['Asset']).to.equal("1,500.00")
        expect(results[0]['Equity']).to.equal("1,500.00")
        expect(results[0]['Excess Equity']).to.equal("1,500.00")
        expect(results[0]['Call Amount']).to.equal("1,500.00")
        expect(results[0]['Force Amount']).to.equal("1,500.00")
        expect(results[0]['Action']).to.equal("No Action")




    }


    async testCashTransferBeforeAuthorization() {
        //create cash balance in CASH_BALANCE_ACCOUNT
        let riskParameterQuery = new RiskParameterQuery();
        let clientReceipt = new ClientPayPayInEntry();
        let  completion: CompletionEntry = new CompletionEntry()
        let cashTransferEntry : CashTransferEntry = new CashTransferEntry()

        //Create Client Receipt Pay-In
        var settlementReferenceNo = await clientReceipt
            .receivedAmount("5000.00")
            .valueDate("03-07-2018")
            .receivedDate("03-07-2018")
            .accountNo("C012345699-7")
            .execute()

        //Mark for completion
        await completion.settlementReferenceNo(settlementReferenceNo).execute();
        
        //Perform Cash Transfer
        await cashTransferEntry.fromAccount("C012345699-7").toAccount("C012345699-8").transferAmount("200").execute()

        await riskParameterQuery.accountClass('')
        .accountNo("C012345699-8")
        .execute()

 let   results = await riskParameterQuery.where("Account No").equalTo("C012345699-8")
        .fetch('Cash Balance', 'Action', 'Running Cash Balance'
            , 'Unsettled Withdraw Latest', 'Liability', 'Withdraw Limit/Withdraw Limit (Next Business Day)'
            , 'Purchase Power', 'Asset', 'Equity', 'Excess Equity', 'Call Amount', 'Force Amount');

    expect(results).not.null
    expect(results).to.have.lengthOf(1)
    expect(results[0]['Cash Balance']).to.equal("1,500.00")
    expect(results[0]['Running Cash Balance']).to.equal("1,500.00")
    expect(results[0]['Unsettled Withdraw Latest']).to.equal("0.00")
    expect(results[0]['Liability']).to.equal("0.00")
    expect(results[0]['Withdraw Limit/Withdraw Limit (Next Business Day)']).to.equal("1,500.00")
    expect(results[0]['Purchase Power']).to.equal("0.00")
    expect(results[0]['Asset']).to.equal("1,500.00")
    expect(results[0]['Equity']).to.equal("1,500.00")
    expect(results[0]['Excess Equity']).to.equal("1,500.00")
    expect(results[0]['Call Amount']).to.equal("1,500.00")
    expect(results[0]['Force Amount']).to.equal("1,500.00")
    expect(results[0]['Action']).to.equal("No Action")


    }

    async testCashTransferAfterAuthorization(){
        let riskParameterQuery = new RiskParameterQuery();
        let cashTransferAuthorization : CashTransferAuthorization = new CashTransferAuthorization()
        //authorize previous transaction
       await  cashTransferAuthorization.fromAccountNo("C012345699-7").toAccountNo("C012345699-8").execute()

        await riskParameterQuery.accountClass('')
        .accountNo("C012345699-8")
        .execute()

 let  results = await riskParameterQuery.where("Account No").equalTo("C012345699-8")
        .fetch('Cash Balance', 'Action', 'Running Cash Balance'
            , 'Unsettled Withdraw Latest', 'Liability', 'Withdraw Limit/Withdraw Limit (Next Business Day)'
            , 'Purchase Power', 'Asset', 'Equity', 'Excess Equity', 'Call Amount', 'Force Amount');

    expect(results).not.null
    expect(results).to.have.lengthOf(1)
    expect(results[0]['Cash Balance']).to.equal("1,700.00")
    expect(results[0]['Running Cash Balance']).to.equal("1,700.00")
    expect(results[0]['Unsettled Withdraw Latest']).to.equal("0.00")
    expect(results[0]['Liability']).to.equal("0.00")
    expect(results[0]['Withdraw Limit/Withdraw Limit (Next Business Day)']).to.equal("1,700.00")
    expect(results[0]['Purchase Power']).to.equal("0.00")
    expect(results[0]['Asset']).to.equal("1,700.00")
    expect(results[0]['Equity']).to.equal("1,700.00")
    expect(results[0]['Excess Equity']).to.equal("1,700.00")
    expect(results[0]['Call Amount']).to.equal("1,700.00")
    expect(results[0]['Force Amount']).to.equal("1,700.00")
    expect(results[0]['Action']).to.equal("No Action")

    }


     async testAddExecutionThenRunEODBatch(){

        //Add execution



    }


    //CashTransferAuthorization

    async destroy() {
        await PageContext.getInstance().close()

    }


}



winston.level = 'debug';

let t = new TestRIskParameterConditon()





// ///*
// t.setup().then(() => {
//     t.testCashTransferAfterAuthorization()
// })


// /*
try {
    t.setup().then(() => {
        t.testCreditBalanceAccountCreatedTodayShouldAppearInScreen().then(() => {
            t.testCreditBalanceAccountCashIn().then(() => {
                t.testRegisterWithdrawl().then(() => {
                    t.testFeePaymentThoughCashBalanceImpactOnRiskParameter().then(() => {
                        t.testFeePaymentThoughEpaymentNoImpactToRPQS().then(() => {
                            t.testCashTransferBeforeAuthorization().then(() => {
                                t.testCashTransferAfterAuthorization().then(() => {
                                    t.destroy().then(() => { })
                                })
                            })
                        })
                    })
                })
            })
        });
    })    
} catch (error) {
    console.log("ERROR" );
    console.log(error);
    
    
    t.destroy()
}

// */




