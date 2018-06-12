
import { BaseUIOperations } from "../../BaseUIOperations";


//Define the results Enum

enum ResultColumns {
    Account_No = "Account No",Account_Name = "Account Name",Security_Code_Default = "Security Code Default",Security_Code_Symbol = "Security Code Symbol",Security_Name = "Security Name",Strategy_Code = "Strategy Code",Base_Date = "Base Date",Position = "Position",Ccy = "Ccy",Book_Value = "Book Value",Cost = "Cost",Profit_Loss = "Profit/Loss",Paydown_P_L = "Paydown P/L",MTD_P_L = "MTD P/L",YTD_P_L = "YTD P/L",LTD_P_L = "LTD P/L",Sales_Code = "Sales Code",Account_Balance_Type = "Account Balance Type",
}


        enum AccountBalanceType {
               One0_Free ="10",   One1_Margin ="11",   One2_Pledge ="12",   One3_Collateral ="13",   One4_Physical ="14",   One5_IPO ="15",   One6_Register ="16",   One7_Expect_Rights ="17",   One8_Rights ="18",   One9_Blocked ="19", 
        }
        enum BalanceBasis {
               TRADE_DATE_BALANCE ="TRADE DATE", 
        }
        enum InventoryAccountType {
               Agent_Account ="Agent Account",   Company_Port_Error ="Company Port (Error)",   Company_Port_Investment ="Company Port (Investment)", 
        }
        enum LongShortCategory {
               LONG ="LONG",   SHORT ="SHORT", 
        }
        enum BalancePl {
               No ="N",   Yes ="Y", 
        }
        enum CounterPartyType {
               CLIENT ="CLIENT",   FIRM ="INTERNAL", 
        }
        enum SortField1 {
              Account_No ="ACCOUNT_NO",   Security_Id ="SECURITY_ID",   CCY ="TRADE_CCY",   Instrument_Type ="INSTRUMENT_TYPE",   Strategy_Code ="STRATEGY_CODE",   Sales_Code ="SALES_CODE",   Account_Balance_Type ="ACCOUNT_BALANCE_TYPE", 
        }
        enum SortField2 {
               Account_No ="ACCOUNT_NO",   Security_Id ="SECURITY_ID",   CCY ="TRADE_CCY",   Instrument_Type ="INSTRUMENT_TYPE",   Strategy_Code ="STRATEGY_CODE",   Sales_Code ="SALES_CODE",   Account_Balance_Type ="ACCOUNT_BALANCE_TYPE", 
        }
        enum SortField3 {
               Account_No ="ACCOUNT_NO",   Security_Id ="SECURITY_ID",   CCY ="TRADE_CCY",   Instrument_Type ="INSTRUMENT_TYPE",   Strategy_Code ="STRATEGY_CODE",   Sales_Code ="SALES_CODE",   Account_Balance_Type ="ACCOUNT_BALANCE_TYPE", 
        }
        enum SortField4 {
               Account_No ="ACCOUNT_NO",   Security_Id ="SECURITY_ID",   CCY ="TRADE_CCY",   Instrument_Type ="INSTRUMENT_TYPE",   Strategy_Code ="STRATEGY_CODE",   Sales_Code ="SALES_CODE",   Account_Balance_Type ="ACCOUNT_BALANCE_TYPE", 
        }
        enum SortField5 {
               Account_No ="ACCOUNT_NO",   Security_Id ="SECURITY_ID",   CCY ="TRADE_CCY",   Instrument_Type ="INSTRUMENT_TYPE",   Strategy_Code ="STRATEGY_CODE",   Sales_Code ="SALES_CODE",   Account_Balance_Type ="ACCOUNT_BALANCE_TYPE", 
        }


export abstract class AbstractCamPortfolioBalanceQuery extends BaseUIOperations {

    static ResultColumns = ResultColumns
    
        static AccountBalanceType = AccountBalanceType;
        static BalanceBasis = BalanceBasis;
        static InventoryAccountType = InventoryAccountType;
        static LongShortCategory = LongShortCategory;
        static BalancePl = BalancePl;
        static CounterPartyType = CounterPartyType;
        static SortField1 = SortField1;
        static SortField2 = SortField2;
        static SortField3 = SortField3;
        static SortField4 = SortField4;
        static SortField5 = SortField5;


/**
 *    Private members 
*/


private _baseDate : string = undefined 

private _currency : string = undefined 

private _accountNo : string = undefined 

private _agentCode : string = undefined 

private _securityCode : string = undefined 

private _accountBalanceType : AccountBalanceType = undefined 

private _issueCurrency : string = undefined 

private _balanceBasis : BalanceBasis = undefined 

private _instrumentType : string = undefined 

private _strategyCode : string = undefined 

private _inventoryAccountType : InventoryAccountType = undefined 

private _longShortCategory : LongShortCategory = undefined 

private _balancePl : BalancePl = undefined 

private _counterPartyCode : string = undefined 
private _counterPartyType : CounterPartyType = undefined 

private _salesCode : string = undefined 

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



/**
 *   Accessor methods
*/


/**
  Field with a default value of "03-04-2018"
*/


public baseDate(v : string) : AbstractCamPortfolioBalanceQuery{
    this._baseDate=v
    return this
}

/**
  Field with a default value of ""
*/


public currency(v : string) : AbstractCamPortfolioBalanceQuery{
    this._currency=v
    return this
}

/**
  Field with a default value of ""
*/


public accountNo(v : string) : AbstractCamPortfolioBalanceQuery{
    this._accountNo=v
    return this
}

/**
  Field with a default value of ""
*/


public agentCode(v : string) : AbstractCamPortfolioBalanceQuery{
    this._agentCode=v
    return this
}

/**
  Field with a default value of ""
*/


public securityCode(v : string) : AbstractCamPortfolioBalanceQuery{
    this._securityCode=v
    return this
}

public accountBalanceType(v : AccountBalanceType ) : AbstractCamPortfolioBalanceQuery{
    this._accountBalanceType=v
    return this
}

/**
  Field with a default value of ""
*/


public issueCurrency(v : string) : AbstractCamPortfolioBalanceQuery{
    this._issueCurrency=v
    return this
}

public balanceBasis(v : BalanceBasis ) : AbstractCamPortfolioBalanceQuery{
    this._balanceBasis=v
    return this
}

/**
  Field with a default value of ""
*/


public instrumentType(v : string) : AbstractCamPortfolioBalanceQuery{
    this._instrumentType=v
    return this
}

/**
  Field with a default value of ""
*/


public strategyCode(v : string) : AbstractCamPortfolioBalanceQuery{
    this._strategyCode=v
    return this
}

public inventoryAccountType(v : InventoryAccountType ) : AbstractCamPortfolioBalanceQuery{
    this._inventoryAccountType=v
    return this
}

public longShortCategory(v : LongShortCategory ) : AbstractCamPortfolioBalanceQuery{
    this._longShortCategory=v
    return this
}

public balancePl(v : BalancePl ) : AbstractCamPortfolioBalanceQuery{
    this._balancePl=v
    return this
}

/**
  Field with a default value of ""
*/


public counterPartyCode(v : string) : AbstractCamPortfolioBalanceQuery{
    this._counterPartyCode=v
    return this
}
public counterPartyType(v : CounterPartyType ) : AbstractCamPortfolioBalanceQuery{
    this._counterPartyType=v
    return this
}

/**
  Field with a default value of ""
*/


public salesCode(v : string) : AbstractCamPortfolioBalanceQuery{
    this._salesCode=v
    return this
}

/**
  Field with a default value of ""
*/


public sortFieldOrder1(v : string) : AbstractCamPortfolioBalanceQuery{
    this._sortFieldOrder1=v
    return this
}
public sortField1(v : SortField1 ) : AbstractCamPortfolioBalanceQuery{
    this._sortField1=v
    return this
}

/**
  Field with a default value of ""
*/


public sortFieldOrder2(v : string) : AbstractCamPortfolioBalanceQuery{
    this._sortFieldOrder2=v
    return this
}
public sortField2(v : SortField2 ) : AbstractCamPortfolioBalanceQuery{
    this._sortField2=v
    return this
}

/**
  Field with a default value of ""
*/


public sortFieldOrder3(v : string) : AbstractCamPortfolioBalanceQuery{
    this._sortFieldOrder3=v
    return this
}
public sortField3(v : SortField3 ) : AbstractCamPortfolioBalanceQuery{
    this._sortField3=v
    return this
}

/**
  Field with a default value of ""
*/


public sortFieldOrder4(v : string) : AbstractCamPortfolioBalanceQuery{
    this._sortFieldOrder4=v
    return this
}
public sortField4(v : SortField4 ) : AbstractCamPortfolioBalanceQuery{
    this._sortField4=v
    return this
}

/**
  Field with a default value of ""
*/


public sortFieldOrder5(v : string) : AbstractCamPortfolioBalanceQuery{
    this._sortFieldOrder5=v
    return this
}
public sortField5(v : SortField5 ) : AbstractCamPortfolioBalanceQuery{
    this._sortField5=v
    return this
}




 protected fetchFields() : any[] {
        let fields :any[] = []

        if(this._baseDate!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="baseDate"]' , value : this._baseDate});
}

if(this._currency!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="currency"]' , value : this._currency});
}

if(this._accountNo!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="accountNo"]' , value : this._accountNo});
}

if(this._agentCode!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="agentCode"]' , value : this._agentCode});
}

if(this._securityCode!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="securityCode"]' , value : this._securityCode});
}

if(this._accountBalanceType!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="accountBalanceType"]' , value : this._accountBalanceType});
}

if(this._issueCurrency!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="issueCurrency"]' , value : this._issueCurrency});
}

if(this._balanceBasis!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="balanceBasis"]' , value : this._balanceBasis});
}

if(this._instrumentType!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="instrumentType"]' , value : this._instrumentType});
}

if(this._strategyCode!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="strategyCode"]' , value : this._strategyCode});
}

if(this._inventoryAccountType!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="inventoryAccountType"]' , value : this._inventoryAccountType});
}

if(this._longShortCategory!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="longShortCategory"]' , value : this._longShortCategory});
}

if(this._balancePl!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="balancePl"]' , value : this._balancePl});
}

if(this._counterPartyCode!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="counterPartyCode"]' , value : this._counterPartyCode});
}
if(this._counterPartyType!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="counterPartyType"]' , value : this._counterPartyType});
}

if(this._salesCode!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="salesCode"]' , value : this._salesCode});
}

if(this._sortFieldOrder1!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="sortFieldOrder1"]' , value : this._sortFieldOrder1});
}
if(this._sortField1!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="sortField1"]' , value : this._sortField1});
}

if(this._sortFieldOrder2!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="sortFieldOrder2"]' , value : this._sortFieldOrder2});
}
if(this._sortField2!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="sortField2"]' , value : this._sortField2});
}

if(this._sortFieldOrder3!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="sortFieldOrder3"]' , value : this._sortFieldOrder3});
}
if(this._sortField3!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="sortField3"]' , value : this._sortField3});
}

if(this._sortFieldOrder4!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="sortFieldOrder4"]' , value : this._sortFieldOrder4});
}
if(this._sortField4!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="sortField4"]' , value : this._sortField4});
}

if(this._sortFieldOrder5!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="sortFieldOrder5"]' , value : this._sortFieldOrder5});
}
if(this._sortField5!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="sortField5"]' , value : this._sortField5});
}


    return fields;

   }


}
