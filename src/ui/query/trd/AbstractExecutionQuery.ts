
import { BaseUIOperations } from "../../BaseUIOperations";


//Define the results Enum

export enum ResultColumns {
    Trade_Date = "Trade Date",Value_Date = "Value Date",Reference_No = "Reference No",Order_Reference_No = "Order Reference No",Buy_Sell = "Buy/Sell",Quantity = "Quantity",Security = "Security",Security_Name = "Security Name",Price = "Price",Account_No = "Account No",Counter_Party_Account_No = "Counter Party Account No",Counter_Party_Account_Name = "Counter Party Account Name",Inventory_Account_No = "Inventory Account No",
    Trade_Currency = "Trade Currency",Principal_Amount = "Principal Amount",Net_Amount = "Net Amount",Trade_Type = "Trade Type",Sub_Trade_Type = "Sub Trade Type",Account_Balance_Type = "Account Balance Type",
    Execution_Market = "Execution Market",External_Reference_No = "External Reference No.",Status = "Status",Trade_Id = "Trade Id",Ledger_Date = "Ledger Date",Ledger_Sequence = "Ledger Sequence",Allocation_Status = "Allocation Status",Notification_Status = "Notification Status",Authorization_Status = "Authorization Status",Authorization_Action = "Authorization Action",
}


        export enum TradeType {
               EQUITYEquity_Trade ="EQUITY", 
        }
        export enum SubTradeType {
             
        }
        export enum BuySellFlag {
               BUY ="B",   SELL ="S", 
        }
        export enum PrincipalAgentFlag {
               Agency ="A",   Principal ="P", 
        }
        export enum AccountBalanceType {
               _Free ="10",   _Margin ="11",   _Pledge ="12",   _Collateral ="13",   _Physical ="14",   _IPO ="15",   _Register ="16",   _Expect_Rights ="17",   _Rights ="18",   _Blocked ="19", 
        }
        export enum Status {
               CANCEL ="CANCEL",   NORMAL ="NORMAL", 
        }
        export enum DataSource {
               CDS ="CDS",   REST_SERVICE ="REST_SERVICE",   SCREEN ="SCREEN",   SETTRADE ="SETTRADE",   UPLOAD ="UPLOAD", 
        }
        export enum ExecutionStatus {
               Matched ="MATCHED",   Un_Matched ="UNMATCHED",   Allocated ="ALLOCATED",   Un_Allocated ="UNALLOCATED", 
        }
        export enum NotificationStatus {
               PENDING ="PENDING",   SUCCESS ="SUCCESS",   REJECTED ="REJECTED", 
        }
        export enum SortField1 {
              Trade_Reference_No ="reference_no",   Account_No ="account_no",   Security ="security_id",   Trade_Date ="trade_date",   Buy_Sell_Flag ="buy_sell_orientation",   Principal_Amount ="principal_amount",   Price ="price",   Quantity ="quantity", 
        }
        export enum SortField2 {
               Trade_Reference_No ="reference_no",   Account_No ="account_no",   Security ="security_id",   Trade_Date ="trade_date",   Buy_Sell_Flag ="buy_sell_orientation",   Principal_Amount ="principal_amount",   Price ="price",   Quantity ="quantity", 
        }
        export enum SortField3 {
               Trade_Reference_No ="reference_no",   Account_No ="account_no",   Security ="security_id",   Trade_Date ="trade_date",   Buy_Sell_Flag ="buy_sell_orientation",   Principal_Amount ="principal_amount",   Price ="price",   Quantity ="quantity", 
        }
        export enum SortField4 {
               Trade_Reference_No ="reference_no",   Account_No ="account_no",   Security ="security_id",   Trade_Date ="trade_date",   Buy_Sell_Flag ="buy_sell_orientation",   Principal_Amount ="principal_amount",   Price ="price",   Quantity ="quantity", 
        }
        export enum SortField5 {
               Trade_Reference_No ="reference_no",   Account_No ="account_no",   Security ="security_id",   Trade_Date ="trade_date",   Buy_Sell_Flag ="buy_sell_orientation",   Principal_Amount ="principal_amount",   Price ="price",   Quantity ="quantity", 
        }
        export enum SortField6 {
               Trade_Reference_No ="reference_no",   Account_No ="account_no",   Security ="security_id",   Trade_Date ="trade_date",   Buy_Sell_Flag ="buy_sell_orientation",   Principal_Amount ="principal_amount",   Price ="price",   Quantity ="quantity", 
        }


export abstract class AbstractExecutionQuery extends BaseUIOperations {

    static ResultColumns = ResultColumns
    
        static TradeType = TradeType;
        static SubTradeType = SubTradeType;
        static BuySellFlag = BuySellFlag;
        static PrincipalAgentFlag = PrincipalAgentFlag;
        static AccountBalanceType = AccountBalanceType;
        static Status = Status;
        static DataSource = DataSource;
        static ExecutionStatus = ExecutionStatus;
        static NotificationStatus = NotificationStatus;
        static SortField1 = SortField1;
        static SortField2 = SortField2;
        static SortField3 = SortField3;
        static SortField4 = SortField4;
        static SortField5 = SortField5;
        static SortField6 = SortField6;


/**
 *    Private members 
*/


private _tradeType : TradeType = undefined 

private _subTradeType : SubTradeType = undefined 

private _referenceNo : string = undefined 

private _accountNo : string = undefined 

private _inventoryAccountNo : string = undefined 

private _cpAccountNo : string = undefined 

private _securityCode : string = undefined 

private _tradeCcy : string = undefined 

private _tradeDateFrom : string = undefined 
private _tradeDateTo : string = undefined 

private _valueDateFrom : string = undefined 
private _valueDateTo : string = undefined 

private _instrumentType : string = undefined 

private _executionMarket : string = undefined 

private _buySellFlag : BuySellFlag = undefined 

private _principalAgentFlag : PrincipalAgentFlag = undefined 

private _principalAmountFrom : string = undefined 
private _principalAmountTo : string = undefined 

private _accountBalanceType : AccountBalanceType = undefined 

private _quantityFrom : string = undefined 
private _quantityTo : string = undefined 

private _netAmountFrom : string = undefined 
private _netAmountTo : string = undefined 

private _orderReferenceNo : string = undefined 

private _externalReferenceNo : string = undefined 

private _status : Status = undefined 

private _dataSource : DataSource = undefined 

private _executionStatus : ExecutionStatus = undefined 

private _sourceReferenceNo : string = undefined 

private _ledgerSequence : string = undefined 

private _ledgerDate : string = undefined 

private _notificationStatus : NotificationStatus = undefined 

private _excludePending : string = undefined 

private _sortFieldOrder1 : string = undefined 
private _sortField1 : SortField1 = undefined 

private _sortFieldOrder2 : string = undefined 
private _sortField2 : SortField2 = undefined 

private _sortFieldOrder3 : string = undefined 
private _sortField3 : SortField3 = undefined 

private _sortFieldOrder4 : string = undefined 
private _sortField4 : SortField4 = undefined 

private _sortFieldOrder5 : string = undefined 
private _sortField5 : SortField5 = undefined 

private _sortFieldOrder6 : string = undefined 
private _sortField6 : SortField6 = undefined 



/**
 *   Accessor methods
*/


public tradeType(v : TradeType ) : AbstractExecutionQuery{
    this._tradeType=v
    return this
}

public subTradeType(v : SubTradeType ) : AbstractExecutionQuery{
    this._subTradeType=v
    return this
}

/**
  Field with a default value of ""
*/


public referenceNo(v : string) : AbstractExecutionQuery{
    this._referenceNo=v
    return this
}

/**
  Field with a default value of ""
*/


public accountNo(v : string) : AbstractExecutionQuery{
    this._accountNo=v
    return this
}

/**
  Field with a default value of ""
*/


public inventoryAccountNo(v : string) : AbstractExecutionQuery{
    this._inventoryAccountNo=v
    return this
}

/**
  Field with a default value of ""
*/


public cpAccountNo(v : string) : AbstractExecutionQuery{
    this._cpAccountNo=v
    return this
}

/**
  Field with a default value of ""
*/


public securityCode(v : string) : AbstractExecutionQuery{
    this._securityCode=v
    return this
}

/**
  Field with a default value of ""
*/


public tradeCcy(v : string) : AbstractExecutionQuery{
    this._tradeCcy=v
    return this
}

/**
  Field with a default value of ""
*/


public tradeDateFrom(v : string) : AbstractExecutionQuery{
    this._tradeDateFrom=v
    return this
}
/**
  Field with a default value of ""
*/


public tradeDateTo(v : string) : AbstractExecutionQuery{
    this._tradeDateTo=v
    return this
}

/**
  Field with a default value of ""
*/


public valueDateFrom(v : string) : AbstractExecutionQuery{
    this._valueDateFrom=v
    return this
}
/**
  Field with a default value of ""
*/


public valueDateTo(v : string) : AbstractExecutionQuery{
    this._valueDateTo=v
    return this
}

/**
  Field with a default value of ""
*/


public instrumentType(v : string) : AbstractExecutionQuery{
    this._instrumentType=v
    return this
}

/**
  Field with a default value of ""
*/


public executionMarket(v : string) : AbstractExecutionQuery{
    this._executionMarket=v
    return this
}

public buySellFlag(v : BuySellFlag ) : AbstractExecutionQuery{
    this._buySellFlag=v
    return this
}

public principalAgentFlag(v : PrincipalAgentFlag ) : AbstractExecutionQuery{
    this._principalAgentFlag=v
    return this
}

/**
  Field with a default value of ""
*/


public principalAmountFrom(v : string) : AbstractExecutionQuery{
    this._principalAmountFrom=v
    return this
}
/**
  Field with a default value of ""
*/


public principalAmountTo(v : string) : AbstractExecutionQuery{
    this._principalAmountTo=v
    return this
}

public accountBalanceType(v : AccountBalanceType ) : AbstractExecutionQuery{
    this._accountBalanceType=v
    return this
}

/**
  Field with a default value of ""
*/


public quantityFrom(v : string) : AbstractExecutionQuery{
    this._quantityFrom=v
    return this
}
/**
  Field with a default value of ""
*/


public quantityTo(v : string) : AbstractExecutionQuery{
    this._quantityTo=v
    return this
}

/**
  Field with a default value of ""
*/


public netAmountFrom(v : string) : AbstractExecutionQuery{
    this._netAmountFrom=v
    return this
}
/**
  Field with a default value of ""
*/


public netAmountTo(v : string) : AbstractExecutionQuery{
    this._netAmountTo=v
    return this
}

/**
  Field with a default value of ""
*/


public orderReferenceNo(v : string) : AbstractExecutionQuery{
    this._orderReferenceNo=v
    return this
}

/**
  Field with a default value of ""
*/


public externalReferenceNo(v : string) : AbstractExecutionQuery{
    this._externalReferenceNo=v
    return this
}

public status(v : Status ) : AbstractExecutionQuery{
    this._status=v
    return this
}

public dataSource(v : DataSource ) : AbstractExecutionQuery{
    this._dataSource=v
    return this
}

public executionStatus(v : ExecutionStatus ) : AbstractExecutionQuery{
    this._executionStatus=v
    return this
}

/**
  Field with a default value of ""
*/


public sourceReferenceNo(v : string) : AbstractExecutionQuery{
    this._sourceReferenceNo=v
    return this
}

/**
  Field with a default value of ""
*/


public ledgerSequence(v : string) : AbstractExecutionQuery{
    this._ledgerSequence=v
    return this
}

/**
  Field with a default value of ""
*/


public ledgerDate(v : string) : AbstractExecutionQuery{
    this._ledgerDate=v
    return this
}

public notificationStatus(v : NotificationStatus ) : AbstractExecutionQuery{
    this._notificationStatus=v
    return this
}

/**
  Field with a default value of ""
*/


public excludePending(v : string) : AbstractExecutionQuery{
    this._excludePending=v
    return this
}



/**
  Field with a default value of ""
*/


public sortFieldOrder1(v : string) : AbstractExecutionQuery{
    this._sortFieldOrder1=v
    return this
}
public sortField1(v : SortField1 ) : AbstractExecutionQuery{
    this._sortField1=v
    return this
}

/**
  Field with a default value of ""
*/


public sortFieldOrder2(v : string) : AbstractExecutionQuery{
    this._sortFieldOrder2=v
    return this
}
public sortField2(v : SortField2 ) : AbstractExecutionQuery{
    this._sortField2=v
    return this
}

/**
  Field with a default value of ""
*/


public sortFieldOrder3(v : string) : AbstractExecutionQuery{
    this._sortFieldOrder3=v
    return this
}
public sortField3(v : SortField3 ) : AbstractExecutionQuery{
    this._sortField3=v
    return this
}

/**
  Field with a default value of ""
*/


public sortFieldOrder4(v : string) : AbstractExecutionQuery{
    this._sortFieldOrder4=v
    return this
}
public sortField4(v : SortField4 ) : AbstractExecutionQuery{
    this._sortField4=v
    return this
}

/**
  Field with a default value of ""
*/


public sortFieldOrder5(v : string) : AbstractExecutionQuery{
    this._sortFieldOrder5=v
    return this
}
public sortField5(v : SortField5 ) : AbstractExecutionQuery{
    this._sortField5=v
    return this
}

/**
  Field with a default value of ""
*/


public sortFieldOrder6(v : string) : AbstractExecutionQuery{
    this._sortFieldOrder6=v
    return this
}
public sortField6(v : SortField6 ) : AbstractExecutionQuery{
    this._sortField6=v
    return this
}




 protected fetchFields() : any[] {
        let fields :any[] = []

        if(this._tradeType!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="tradeType"]' , value : this._tradeType});
}

if(this._subTradeType!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="subTradeType"]' , value : this._subTradeType});
}

if(this._referenceNo!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="referenceNo"]' , value : this._referenceNo});
}

if(this._accountNo!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="accountNo"]' , value : this._accountNo});
}

if(this._inventoryAccountNo!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="inventoryAccountNo"]' , value : this._inventoryAccountNo});
}

if(this._cpAccountNo!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="cpAccountNo"]' , value : this._cpAccountNo});
}

if(this._securityCode!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="securityCode"]' , value : this._securityCode});
}

if(this._tradeCcy!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="tradeCcy"]' , value : this._tradeCcy});
}

if(this._tradeDateFrom!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="tradeDateFrom"]' , value : this._tradeDateFrom});
}
if(this._tradeDateTo!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="tradeDateTo"]' , value : this._tradeDateTo});
}

if(this._valueDateFrom!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="valueDateFrom"]' , value : this._valueDateFrom});
}
if(this._valueDateTo!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="valueDateTo"]' , value : this._valueDateTo});
}

if(this._instrumentType!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="instrumentType"]' , value : this._instrumentType});
}

if(this._executionMarket!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="executionMarket"]' , value : this._executionMarket});
}

if(this._buySellFlag!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="buySellFlag"]' , value : this._buySellFlag});
}

if(this._principalAgentFlag!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="principalAgentFlag"]' , value : this._principalAgentFlag});
}

if(this._principalAmountFrom!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="principalAmountFrom"]' , value : this._principalAmountFrom});
}
if(this._principalAmountTo!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="principalAmountTo"]' , value : this._principalAmountTo});
}

if(this._accountBalanceType!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="accountBalanceType"]' , value : this._accountBalanceType});
}

if(this._quantityFrom!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="quantityFrom"]' , value : this._quantityFrom});
}
if(this._quantityTo!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="quantityTo"]' , value : this._quantityTo});
}

if(this._netAmountFrom!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="netAmountFrom"]' , value : this._netAmountFrom});
}
if(this._netAmountTo!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="netAmountTo"]' , value : this._netAmountTo});
}

if(this._orderReferenceNo!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="orderReferenceNo"]' , value : this._orderReferenceNo});
}

if(this._externalReferenceNo!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="externalReferenceNo"]' , value : this._externalReferenceNo});
}

if(this._status!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="status"]' , value : this._status});
}

if(this._dataSource!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="dataSource"]' , value : this._dataSource});
}

if(this._executionStatus!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="executionStatus"]' , value : this._executionStatus});
}

if(this._sourceReferenceNo!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="sourceReferenceNo"]' , value : this._sourceReferenceNo});
}

if(this._ledgerSequence!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="ledgerSequence"]' , value : this._ledgerSequence});
}

if(this._ledgerDate!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="ledgerDate"]' , value : this._ledgerDate});
}

if(this._notificationStatus!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="notificationStatus"]' , value : this._notificationStatus});
}

if(this._excludePending!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="excludePending"]' , value : this._excludePending});
}


if(this._sortFieldOrder1!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="sortFieldOrder1"]' , value : this._sortFieldOrder1});
}
if(this._sortField1!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="sortField1"]' , value : this._sortField1});
}

if(this._sortFieldOrder2!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="sortFieldOrder2"]' , value : this._sortFieldOrder2});
}
if(this._sortField2!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="sortField2"]' , value : this._sortField2});
}

if(this._sortFieldOrder3!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="sortFieldOrder3"]' , value : this._sortFieldOrder3});
}
if(this._sortField3!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="sortField3"]' , value : this._sortField3});
}

if(this._sortFieldOrder4!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="sortFieldOrder4"]' , value : this._sortFieldOrder4});
}
if(this._sortField4!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="sortField4"]' , value : this._sortField4});
}

if(this._sortFieldOrder5!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="sortFieldOrder5"]' , value : this._sortFieldOrder5});
}
if(this._sortField5!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="sortField5"]' , value : this._sortField5});
}

if(this._sortFieldOrder6!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="sortFieldOrder6"]' , value : this._sortFieldOrder6});
}
if(this._sortField6!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="sortField6"]' , value : this._sortField6});
}


    return fields;

   }


}






