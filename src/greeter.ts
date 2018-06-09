
import winston from "winston"
import { PageContext } from "./context/PageContext"
import { Login } from "./ui/common/LoginOperation"
import { ExecutionEntry } from "./ui/entry/trd/ExecutionEntry";
import { Customer } from "./rest/Customer";
import { RiskParameterQuery } from "./ui/query/cam/RiskParameterQuery";
import { ClientPayPayInEntry } from "./rest/ClientPayPayInEntry";
import { CompletionEntry } from "./ui/entry/stl/CompletionEntry";
import { ClientWithdrawEntry } from "./rest/entry/stl/ClientWithdrawEntry";
import { ClientFeePaymentUndecidedEntry } from "./rest/entry/stl/ClientFeePaymentUndecidedEntry";
import { ClientFeePaymentConfirmDecided } from "./rest/entry/stl/ClientFeePaymentConfirmDecided";
import { CashTransferEntry } from "./ui/entry/stl/CashTransferEntry";
import { CashTransferAuthorization } from "./ui/query/stl/CashTransferAuthorization";
import { TaxAndCommCalculator } from "./batch/trd/TaxAndCommCalculator";
import { ExecutionToTrade } from "./batch/trd/ExecutionToTrade";
import { MarginPurchasePowerCalculator } from "./batch/cam/MarginPurchasePowerCalculator";
import { Assert } from "./utils/Assert";






export class TestRIskParameterConditon {

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
        await riskParameterQuery.accountClass(RiskParameterQuery.AccountClass.CREDIT_BALANCE__CREDIT_BALANCE)
            .accountNo("C012345699-8")
            .execute()


        let results = await riskParameterQuery.where("Account No").equalTo("C012345699-8").fetch('Cash Balance', RiskParameterQuery.ResultColumns.Action);

        Assert.notNullArr(results)
        Assert.equals(results.length,1)
        Assert.equals(results[0]['Cash Balance'],"0.00")
        
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Action],"No Action")

        winston.info("Test for testCreditBalanceAccountCreatedTodayShouldAppearInScreen  SUCCESS");


    }

// /*
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
            .accountClass(RiskParameterQuery.AccountClass.CREDIT_BALANCE__CREDIT_BALANCE)
            .accountNo("C012345699-8")
            .execute()

        let rpqsResult = await riskParameterQuery
            .where(RiskParameterQuery.ResultColumns.Account_No).equalTo("C012345699-8").fetch(RiskParameterQuery.ResultColumns.Cash_Balance,RiskParameterQuery.ResultColumns.Action);

            Assert.notNullArr(rpqsResult)
            Assert.equals(rpqsResult.length,1)

        
        Assert.equals(rpqsResult[0][RiskParameterQuery.ResultColumns.Cash_Balance],"0.00")
        Assert.equals(rpqsResult[0][RiskParameterQuery.ResultColumns.Action],"No Action")


        let completion = new CompletionEntry()
        //Mark for completion
        await completion.settlementReferenceNo(settlementReferenceNo).execute();

        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        //check the RPQS

        await riskParameterQuery
            .accountClass(RiskParameterQuery.AccountClass.CREDIT_BALANCE__CREDIT_BALANCE)
            .accountNo("C012345699-8")
            .execute()

        let results = await riskParameterQuery.where(RiskParameterQuery.ResultColumns.Account_No).equalTo("C012345699-8")
            .fetch(RiskParameterQuery.ResultColumns.Cash_Balance, RiskParameterQuery.ResultColumns.Action, RiskParameterQuery.ResultColumns.Running_Cash_Balance
                , RiskParameterQuery.ResultColumns.Unsettled_Withdraw_Latest, RiskParameterQuery.ResultColumns.Liability, 
                RiskParameterQuery.ResultColumns.Withdraw_Limit_Withdraw_Limit_Next_Business_Day
                , RiskParameterQuery.ResultColumns.Purchase_Power, RiskParameterQuery.ResultColumns.Asset, RiskParameterQuery.ResultColumns.Equity, 
                RiskParameterQuery.ResultColumns.Excess_Equity, 
                RiskParameterQuery.ResultColumns.Call_Amount, RiskParameterQuery.ResultColumns.Force_Amount);

        Assert.notNullArr(results)
        Assert.equals(results,1)
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Cash_Balance],"5,000.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Running_Cash_Balance],"5,000.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Unsettled_Withdraw_Latest],"0.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Liability],"0.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Withdraw_Limit_Withdraw_Limit_Next_Business_Day],"5,000.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Purchase_Power],"0.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Asset],"5,000.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Equity],"5,000.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Excess_Equity],
            "5,000.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Call_Amount],"5,000.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Force_Amount],"5,000.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Action],"No Action")



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
        await riskParameterQuery.accountClass(RiskParameterQuery.AccountClass.CREDIT_BALANCE__CREDIT_BALANCE)
            .accountNo("C012345699-8")
            .execute()

        let results = await riskParameterQuery.where("Account No").equalTo("C012345699-8")
            .fetch('Cash Balance', RiskParameterQuery.ResultColumns.Action, RiskParameterQuery.ResultColumns.Running_Cash_Balance
                , RiskParameterQuery.ResultColumns.Unsettled_Withdraw_Latest, RiskParameterQuery.ResultColumns.Liability, RiskParameterQuery.ResultColumns.Withdraw_Limit_Withdraw_Limit_Next_Business_Day
                , RiskParameterQuery.ResultColumns.Purchase_Power, RiskParameterQuery.ResultColumns.Asset, RiskParameterQuery.ResultColumns.Equity, RiskParameterQuery.ResultColumns.Excess_Equity, 
                RiskParameterQuery.ResultColumns.Call_Amount, RiskParameterQuery.ResultColumns.Force_Amount);

        Assert.notNullArr(results)
        Assert.equals(results,1)
        Assert.equals(results[0]['Cash Balance'],"5,000.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Running_Cash_Balance],"2,000.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Unsettled_Withdraw_Latest],"3,000.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Liability],"0.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Withdraw_Limit_Withdraw_Limit_Next_Business_Day],"2,000.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Purchase_Power],"0.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Asset],"2,000.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Equity],"2,000.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Excess_Equity],
            "2,000.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Call_Amount],"2,000.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Force_Amount],"2,000.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Action],"No Action")



        //Mark for completion
        await completion.settlementReferenceNo(settlementReferenceNumber).execute();

        //navigate to RPQS 
        await riskParameterQuery.accountClass(RiskParameterQuery.AccountClass.CREDIT_BALANCE__CREDIT_BALANCE)
            .accountNo("C012345699-8")
            .execute()



        results = await riskParameterQuery.where("Account No").equalTo("C012345699-8")
            .fetch('Cash Balance', RiskParameterQuery.ResultColumns.Action, RiskParameterQuery.ResultColumns.Running_Cash_Balance
                , RiskParameterQuery.ResultColumns.Unsettled_Withdraw_Latest, RiskParameterQuery.ResultColumns.Liability, RiskParameterQuery.ResultColumns.Withdraw_Limit_Withdraw_Limit_Next_Business_Day
                , RiskParameterQuery.ResultColumns.Purchase_Power, RiskParameterQuery.ResultColumns.Asset, RiskParameterQuery.ResultColumns.Equity, RiskParameterQuery.ResultColumns.Excess_Equity, 
                RiskParameterQuery.ResultColumns.Call_Amount, RiskParameterQuery.ResultColumns.Force_Amount);

        Assert.notNullArr(results)
        Assert.equals(results,1)
        Assert.equals(results[0]['Cash Balance'],"2,000.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Running_Cash_Balance],"2,000.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Unsettled_Withdraw_Latest],"0.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Liability],"0.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Withdraw_Limit_Withdraw_Limit_Next_Business_Day],"2,000.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Purchase_Power],"0.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Asset],"2,000.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Equity],"2,000.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Excess_Equity],
            "2,000.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Call_Amount],"2,000.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Force_Amount],"2,000.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Action],"No Action")




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
        await riskParameterQuery.accountClass(RiskParameterQuery.AccountClass.CREDIT_BALANCE__CREDIT_BALANCE)
            .accountNo("C012345699-8")
            .execute()

        let results = await riskParameterQuery.where("Account No").equalTo("C012345699-8")
            .fetch('Cash Balance', RiskParameterQuery.ResultColumns.Action, RiskParameterQuery.ResultColumns.Running_Cash_Balance
                , RiskParameterQuery.ResultColumns.Unsettled_Withdraw_Latest, RiskParameterQuery.ResultColumns.Liability, RiskParameterQuery.ResultColumns.Withdraw_Limit_Withdraw_Limit_Next_Business_Day
                , RiskParameterQuery.ResultColumns.Purchase_Power, RiskParameterQuery.ResultColumns.Asset, RiskParameterQuery.ResultColumns.Equity, RiskParameterQuery.ResultColumns.Excess_Equity, 
                RiskParameterQuery.ResultColumns.Call_Amount, RiskParameterQuery.ResultColumns.Force_Amount);

        Assert.notNullArr(results)
        Assert.equals(results,1)
        Assert.equals(results[0]['Cash Balance'],"2,000.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Running_Cash_Balance],"2,000.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Unsettled_Withdraw_Latest],"0.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Liability],"0.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Withdraw_Limit_Withdraw_Limit_Next_Business_Day],"2,000.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Purchase_Power],"0.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Asset],"2,000.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Equity],"2,000.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Excess_Equity],
            "2,000.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Call_Amount],"2,000.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Force_Amount],"2,000.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Action],"No Action")


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

        await riskParameterQuery.accountClass(RiskParameterQuery.AccountClass.CREDIT_BALANCE__CREDIT_BALANCE)
            .accountNo("C012345699-8")
            .execute()

        results = await riskParameterQuery.where("Account No").equalTo("C012345699-8")
            .fetch('Cash Balance', RiskParameterQuery.ResultColumns.Action, RiskParameterQuery.ResultColumns.Running_Cash_Balance
                , RiskParameterQuery.ResultColumns.Unsettled_Withdraw_Latest, RiskParameterQuery.ResultColumns.Liability, RiskParameterQuery.ResultColumns.Withdraw_Limit_Withdraw_Limit_Next_Business_Day
                , RiskParameterQuery.ResultColumns.Purchase_Power, RiskParameterQuery.ResultColumns.Asset, RiskParameterQuery.ResultColumns.Equity, RiskParameterQuery.ResultColumns.Excess_Equity, 
                RiskParameterQuery.ResultColumns.Call_Amount, RiskParameterQuery.ResultColumns.Force_Amount);

        Assert.notNullArr(results)
        Assert.equals(results,1)
        Assert.equals(results[0]['Cash Balance'],"2,000.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Running_Cash_Balance],"1,500.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Unsettled_Withdraw_Latest],"0.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Liability],"0.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Withdraw_Limit_Withdraw_Limit_Next_Business_Day],"1,500.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Purchase_Power],"0.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Asset],"1,500.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Equity],"1,500.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Excess_Equity],
            "1,500.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Call_Amount],"1,500.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Force_Amount],"1,500.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Action],"No Action")


        //Mark for completion
        await completion.settlementReferenceNo('').chequeNo("2018091112345699").execute();

        //navigate to RPQS 
        await riskParameterQuery.accountClass(RiskParameterQuery.AccountClass.CREDIT_BALANCE__CREDIT_BALANCE)
            .accountNo("C012345699-8")
            .execute()



        results = await riskParameterQuery.where("Account No").equalTo("C012345699-8")
            .fetch('Cash Balance', RiskParameterQuery.ResultColumns.Action, RiskParameterQuery.ResultColumns.Running_Cash_Balance
                , RiskParameterQuery.ResultColumns.Unsettled_Withdraw_Latest, RiskParameterQuery.ResultColumns.Liability, RiskParameterQuery.ResultColumns.Withdraw_Limit_Withdraw_Limit_Next_Business_Day
                , RiskParameterQuery.ResultColumns.Purchase_Power, RiskParameterQuery.ResultColumns.Asset, RiskParameterQuery.ResultColumns.Equity, RiskParameterQuery.ResultColumns.Excess_Equity, 
                RiskParameterQuery.ResultColumns.Call_Amount, RiskParameterQuery.ResultColumns.Force_Amount);

        Assert.notNullArr(results)
        Assert.equals(results,1)
        Assert.equals(results[0]['Cash Balance'],"1,500.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Running_Cash_Balance],"1,500.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Unsettled_Withdraw_Latest],"0.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Liability],"0.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Withdraw_Limit_Withdraw_Limit_Next_Business_Day],"1,500.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Purchase_Power],"0.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Asset],"1,500.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Equity],"1,500.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Excess_Equity],
            "1,500.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Call_Amount],"1,500.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Force_Amount],"1,500.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Action],"No Action")




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

        await riskParameterQuery.accountClass(RiskParameterQuery.AccountClass.CREDIT_BALANCE__CREDIT_BALANCE)
            .accountNo("C012345699-8")
            .execute()

        let results = await riskParameterQuery.where("Account No").equalTo("C012345699-8")
            .fetch('Cash Balance', RiskParameterQuery.ResultColumns.Action, RiskParameterQuery.ResultColumns.Running_Cash_Balance
                , RiskParameterQuery.ResultColumns.Unsettled_Withdraw_Latest, RiskParameterQuery.ResultColumns.Liability, RiskParameterQuery.ResultColumns.Withdraw_Limit_Withdraw_Limit_Next_Business_Day
                , RiskParameterQuery.ResultColumns.Purchase_Power, RiskParameterQuery.ResultColumns.Asset, RiskParameterQuery.ResultColumns.Equity, RiskParameterQuery.ResultColumns.Excess_Equity, 
                RiskParameterQuery.ResultColumns.Call_Amount, RiskParameterQuery.ResultColumns.Force_Amount);

        Assert.notNullArr(results)
        Assert.equals(results,1)
        Assert.equals(results[0]['Cash Balance'],"1,500.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Running_Cash_Balance],"1,500.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Unsettled_Withdraw_Latest],"0.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Liability],"0.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Withdraw_Limit_Withdraw_Limit_Next_Business_Day],"1,500.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Purchase_Power],"0.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Asset],"1,500.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Equity],"1,500.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Excess_Equity],
            "1,500.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Call_Amount],"1,500.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Force_Amount],"1,500.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Action],"No Action")


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

        await riskParameterQuery.accountClass(RiskParameterQuery.AccountClass.CREDIT_BALANCE__CREDIT_BALANCE)
            .accountNo("C012345699-8")
            .execute()

        results = await riskParameterQuery.where("Account No").equalTo("C012345699-8")
            .fetch('Cash Balance', RiskParameterQuery.ResultColumns.Action, RiskParameterQuery.ResultColumns.Running_Cash_Balance
                , RiskParameterQuery.ResultColumns.Unsettled_Withdraw_Latest, RiskParameterQuery.ResultColumns.Liability, RiskParameterQuery.ResultColumns.Withdraw_Limit_Withdraw_Limit_Next_Business_Day
                , RiskParameterQuery.ResultColumns.Purchase_Power, RiskParameterQuery.ResultColumns.Asset, RiskParameterQuery.ResultColumns.Equity, RiskParameterQuery.ResultColumns.Excess_Equity, 
                RiskParameterQuery.ResultColumns.Call_Amount, RiskParameterQuery.ResultColumns.Force_Amount);

        Assert.notNullArr(results)
        Assert.equals(results,1)
        Assert.equals(results[0]['Cash Balance'],"1,500.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Running_Cash_Balance],"1,500.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Unsettled_Withdraw_Latest],"0.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Liability],"0.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Withdraw_Limit_Withdraw_Limit_Next_Business_Day],"1,500.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Purchase_Power],"0.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Asset],"1,500.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Equity],"1,500.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Excess_Equity],
            "1,500.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Call_Amount],"1,500.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Force_Amount],"1,500.00")
        Assert.equals(results[0][RiskParameterQuery.ResultColumns.Action],"No Action")




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

        await riskParameterQuery.accountClass(RiskParameterQuery.AccountClass.CREDIT_BALANCE__CREDIT_BALANCE)
        .accountNo("C012345699-8")
        .execute()

 let   results = await riskParameterQuery.where("Account No").equalTo("C012345699-8")
        .fetch('Cash Balance', RiskParameterQuery.ResultColumns.Action, RiskParameterQuery.ResultColumns.Running_Cash_Balance
            , RiskParameterQuery.ResultColumns.Unsettled_Withdraw_Latest, RiskParameterQuery.ResultColumns.Liability, RiskParameterQuery.ResultColumns.Withdraw_Limit_Withdraw_Limit_Next_Business_Day
            , RiskParameterQuery.ResultColumns.Purchase_Power, RiskParameterQuery.ResultColumns.Asset, RiskParameterQuery.ResultColumns.Equity, RiskParameterQuery.ResultColumns.Excess_Equity, 
            RiskParameterQuery.ResultColumns.Call_Amount, RiskParameterQuery.ResultColumns.Force_Amount);

    Assert.notNullArr(results)
    Assert.equals(results,1)
    Assert.equals(results[0]['Cash Balance'],"1,500.00")
    Assert.equals(results[0][RiskParameterQuery.ResultColumns.Running_Cash_Balance],"1,500.00")
    Assert.equals(results[0][RiskParameterQuery.ResultColumns.Unsettled_Withdraw_Latest],"0.00")
    Assert.equals(results[0][RiskParameterQuery.ResultColumns.Liability],"0.00")
    Assert.equals(results[0][RiskParameterQuery.ResultColumns.Withdraw_Limit_Withdraw_Limit_Next_Business_Day],"1,500.00")
    Assert.equals(results[0][RiskParameterQuery.ResultColumns.Purchase_Power],"0.00")
    Assert.equals(results[0][RiskParameterQuery.ResultColumns.Asset],"1,500.00")
    Assert.equals(results[0][RiskParameterQuery.ResultColumns.Equity],"1,500.00")
    Assert.equals(results[0][RiskParameterQuery.ResultColumns.Excess_Equity],
        "1,500.00")
    Assert.equals(results[0][RiskParameterQuery.ResultColumns.Call_Amount],"1,500.00")
    Assert.equals(results[0][RiskParameterQuery.ResultColumns.Force_Amount],"1,500.00")
    Assert.equals(results[0][RiskParameterQuery.ResultColumns.Action],"No Action")


    }

    async testCashTransferAfterAuthorization(){
        let riskParameterQuery = new RiskParameterQuery();
        let cashTransferAuthorization : CashTransferAuthorization = new CashTransferAuthorization()
        //authorize previous transaction
       await  cashTransferAuthorization.fromAccountNo("C012345699-7").toAccountNo("C012345699-8").execute()

        await riskParameterQuery.accountClass(RiskParameterQuery.AccountClass.CREDIT_BALANCE__CREDIT_BALANCE)
        .accountNo("C012345699-8")
        .execute()

 let  results = await riskParameterQuery.where("Account No").equalTo("C012345699-8")
        .fetch('Cash Balance', RiskParameterQuery.ResultColumns.Action, RiskParameterQuery.ResultColumns.Running_Cash_Balance
            , RiskParameterQuery.ResultColumns.Unsettled_Withdraw_Latest, RiskParameterQuery.ResultColumns.Liability, RiskParameterQuery.ResultColumns.Withdraw_Limit_Withdraw_Limit_Next_Business_Day
            , RiskParameterQuery.ResultColumns.Purchase_Power, RiskParameterQuery.ResultColumns.Asset, RiskParameterQuery.ResultColumns.Equity, RiskParameterQuery.ResultColumns.Excess_Equity, 
            RiskParameterQuery.ResultColumns.Call_Amount, RiskParameterQuery.ResultColumns.Force_Amount);

    Assert.notNullArr(results)
    Assert.equals(results,1)
    Assert.equals(results[0]['Cash Balance'],"1,700.00")
    Assert.equals(results[0][RiskParameterQuery.ResultColumns.Running_Cash_Balance],"1,700.00")
    Assert.equals(results[0][RiskParameterQuery.ResultColumns.Unsettled_Withdraw_Latest],"0.00")
    Assert.equals(results[0][RiskParameterQuery.ResultColumns.Liability],"0.00")
    Assert.equals(results[0][RiskParameterQuery.ResultColumns.Withdraw_Limit_Withdraw_Limit_Next_Business_Day],"1,700.00")
    Assert.equals(results[0][RiskParameterQuery.ResultColumns.Purchase_Power],"0.00")
    Assert.equals(results[0][RiskParameterQuery.ResultColumns.Asset],"1,700.00")
    Assert.equals(results[0][RiskParameterQuery.ResultColumns.Equity],"1,700.00")
    Assert.equals(results[0][RiskParameterQuery.ResultColumns.Excess_Equity],
        "1,700.00")
    Assert.equals(results[0][RiskParameterQuery.ResultColumns.Call_Amount],"1,700.00")
    Assert.equals(results[0][RiskParameterQuery.ResultColumns.Force_Amount],"1,700.00")
    Assert.equals(results[0][RiskParameterQuery.ResultColumns.Action],"No Action")

    }


     async testAddExecutionThenRunEODBatch(){

        //Add execution


    

        let executionEntry : ExecutionEntry = new ExecutionEntry()

        // await executionEntry.execScreenDatacpAccountNo("C012345699-8")
        // .execScreenDataquantityStr("100")
        // .execScreenDatasecurityInfo("AAV")
        // .execScreenDatasenderReferenceNo("OD-0000000001")
        // .execScreenDatasourceReferenceNo("TD-0000000001")
        // .execScreenDatainputPriceStr("20")
        // .execScreenDatatradeDateStr("03-07-2018")
        // .execute()


            let executionToTrade : ExecutionToTrade = new ExecutionToTrade();
            await executionToTrade.account("C012345699-8").tradedate("20180703").execute()

            
            let taxAndCommCalculator : TaxAndCommCalculator = new TaxAndCommCalculator()
            await taxAndCommCalculator.account("C012345699-8").date("20180703").execute()


          

            
            let marginPurchasePowerCalculator : MarginPurchasePowerCalculator = new MarginPurchasePowerCalculator()
            await marginPurchasePowerCalculator.accountno("C012345699-8").rundate("20180703").lmvrequired("Y").execute()
            
            

         let riskParameterQuery = new RiskParameterQuery()
        //Check in RPQS
        await riskParameterQuery.accountClass(RiskParameterQuery.AccountClass.CREDIT_BALANCE__CREDIT_BALANCE)
            .accountNo("C012345699-8")
            .execute()
            
            let  results = await   riskParameterQuery.query().where('Account No').equalTo("C012345699-8").fetch('Cash Balance', RiskParameterQuery.ResultColumns.Action, RiskParameterQuery.ResultColumns.Running_Cash_Balance
            ,'LMV (Sellable)'
           , RiskParameterQuery.ResultColumns.Liability, RiskParameterQuery.ResultColumns.Withdraw_Limit_Withdraw_Limit_Next_Business_Day,
            'MR (Sellable)'
            , RiskParameterQuery.ResultColumns.Purchase_Power, RiskParameterQuery.ResultColumns.Asset, RiskParameterQuery.ResultColumns.Equity, RiskParameterQuery.ResultColumns.Excess_Equity, 
            RiskParameterQuery.ResultColumns.Call_Amount, RiskParameterQuery.ResultColumns.Force_Amount)

            Assert.notNullArr(results)
                Assert.equals(results,1)
            Assert.equals(results[0]['Cash Balance'],"1,700.00")
            Assert.equals(results[0][RiskParameterQuery.ResultColumns.Running_Cash_Balance],"-404.15")
            Assert.equals(results[0]['LMV (Sellable)'],"3,000.00")
            Assert.equals(results[0][RiskParameterQuery.ResultColumns.Liability],"404.15")
            Assert.equals(results[0][RiskParameterQuery.ResultColumns.Withdraw_Limit_Withdraw_Limit_Next_Business_Day],"195.85")

            Assert.equals(results[0]['MR (Sellable)'],"2,400.00")
            Assert.equals(results[0][RiskParameterQuery.ResultColumns.Purchase_Power],"0.00")
            Assert.equals(results[0][RiskParameterQuery.ResultColumns.Asset],"3,000.00")
            Assert.equals(results[0][RiskParameterQuery.ResultColumns.Equity],"2,595.85")
            Assert.equals(results[0][RiskParameterQuery.ResultColumns.Excess_Equity],
                "195.85")
            Assert.equals(results[0][RiskParameterQuery.ResultColumns.Call_Amount],"1,395.85")
            Assert.equals(results[0][RiskParameterQuery.ResultColumns.Force_Amount],"1,695.85")
            Assert.equals(results[0][RiskParameterQuery.ResultColumns.Action],"No Action")
        


    }

    //*/
    //CashTransferAuthorization

    async destroy() {
        await PageContext.getInstance().close()

    }


}



winston.level = 'debug';


 


// t.testCreditBalanceAccountCreatedTodayShouldAppearInScreen()


/*
t.setup().then(()=>{
    t.testAddExecutionThenRunEODBatch().then(()=>{
       // t.destroy()
    })
})

//*/

// ///*
// t.setup().then(() => {
//     t.testCashTransferAfterAuthorization()
// })

/*
 
try {
    t.setup().then(() => {
        t.testCreditBalanceAccountCreatedTodayShouldAppearInScreen().then(() => {
            t.testCreditBalanceAccountCashIn().then(() => {
                t.testRegisterWithdrawl().then(() => {
                    t.testFeePaymentThoughCashBalanceImpactOnRiskParameter().then(() => {
                        t.testFeePaymentThoughEpaymentNoImpactToRPQS().then(() => {
                            t.testCashTransferBeforeAuthorization().then(() => {
                                t.testCashTransferAfterAuthorization().then(() => {
                                    t.testAddExecutionThenRunEODBatch().then(() => {
                                        t.destroy().then(() => { })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        });
    })
} catch (error) {
    console.log("ERROR");
    console.log(error);


    t.destroy()
}

// */
