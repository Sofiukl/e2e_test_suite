
import { BaseUIOperations } from "../../BaseUIOperations";


//Define the results Enum

enum ResultColumns {
    View = "View",Account_No = "Account No",Account_Class = "Account Class",Currency = "Currency",Base_Date = "Base Date",Customer_Code = "Customer Code",Status = "Status",Cash_Balance = "Cash Balance",Action = "Action",Running_Cash_Balance = "Running Cash Balance",Unsettled_Withdraw_Latest = "Unsettled Withdraw Latest",LMV_Sellable = "LMV (Sellable)",LMV_Pledge = "LMV (Pledge)",LMV_Rights = "LMV (Rights)",LMV_Expect_Right = "LMV (Expect Right)",Total_LMV_Excl_Other_Non_Sellable = "Total LMV (Excl. Other Non-Sellable)",Liability = "Liability",Withdraw_Limit_Withdraw_Limit_Next_Business_Day = "Withdraw Limit/Withdraw Limit (Next Business Day)",MR_Sellable = "MR (Sellable)",MR_Pledge = "MR (Pledge)",MR_Rights = "MR (Rights)",MR_Expect_Right = "MR (Expect Right)",Total_MR_Excld_Other__Non_Sellable = "Total MR (Excld. Other  Non-Sellable)",Purchase_Power = "Purchase Power",Other_Collateral = "Other Collateral",Asset = "Asset",Trading_Limit = "Trading Limit",Margin_Ratio = "Margin Ratio",Call_Rate = "Call Rate",Force_Rate = "Force Rate",Initial_Margin_Rate = "Initial Margin Rate",Equity = "Equity",Excess_Equity = "Excess Equity",Call_Amount = "Call Amount",Force_Amount = "Force Amount",Days_Of_Call = "Days Of Call",Margin_Interest_Latest_Margin_Interest = "Margin Interest Latest/Margin Interest",
}


        enum AccountClass {
              _ =" ",   CASH_BALANCE__CASH_BALANCE ="CASH_BALANCE",   CREDIT_BALANCE__CREDIT_BALANCE ="CREDIT_BALANCE", 
        }
        enum BalancePl {
              YES ="Y",   NO ="N", 
        }
        enum DaysOfCall {
               YES ="Y",   NO ="N", 
        }
        enum Action {
               NO_ACTION ="No Action",   CALL_MARGIN ="Call Margin",   CALL_FORCE_SELL ="Force Sell", 
        }
        enum SortField1 {
              Account_No ="ACCOUNT_NO",   Base_Date ="BASE_DATE", 
        }
        enum SortField2 {
               Account_No ="ACCOUNT_NO",   Base_Date ="BASE_DATE", 
        }


export abstract class AbstractRiskParameterQuery extends BaseUIOperations {

    static ResultColumns = ResultColumns
    
        public static AccountClass = AccountClass;
        public static BalancePl = BalancePl;
        public static DaysOfCall = DaysOfCall;
        public static Action = Action;
        public static SortField1 = SortField1;
        public static SortField2 = SortField2;


/**
 *    Private members 
*/


private _accountNo : string = undefined 

private _currency : string = undefined 

private _accountClass : AccountClass = undefined 

private _baseDateFrom : string = undefined 
private _baseDateTo : string = undefined 

private _balancePl : BalancePl = undefined 

private _daysOfCall : DaysOfCall = undefined 

private _daysOfCallFrom : string = undefined 

private _daysOfCallTo : string = undefined 

private _action : Action = undefined 

private _sortFieldOrder1 : string = undefined 
private _sortField1 : SortField1 = undefined 

private _sortFieldOrder2 : string = undefined 
private _sortField2 : SortField2 = undefined 



/**
 *   Accessor methods
*/


/**
  Field with a default value of "C012345699-8"
*/
public accountNo(v : string) : AbstractRiskParameterQuery{
    this._accountNo=v
    return this
}

/**
  Field with a default value of ""
*/
public currency(v : string) : AbstractRiskParameterQuery{
    this._currency=v
    return this
}

public accountClass(v : AccountClass ) : AbstractRiskParameterQuery{
    this._accountClass=v
    return this
}

/**
  Field with a default value of "03-07-2018"
*/
public baseDateFrom(v : string) : AbstractRiskParameterQuery{
    this._baseDateFrom=v
    return this
}
/**
  Field with a default value of "03-07-2018"
*/
public baseDateTo(v : string) : AbstractRiskParameterQuery{
    this._baseDateTo=v
    return this
}

public balancePl(v : BalancePl ) : AbstractRiskParameterQuery{
    this._balancePl=v
    return this
}

public daysOfCall(v : DaysOfCall ) : AbstractRiskParameterQuery{
    this._daysOfCall=v
    return this
}

/**
  Field with a default value of ""
*/
public daysOfCallFrom(v : string) : AbstractRiskParameterQuery{
    this._daysOfCallFrom=v
    return this
}

/**
  Field with a default value of ""
*/
public daysOfCallTo(v : string) : AbstractRiskParameterQuery{
    this._daysOfCallTo=v
    return this
}

public action(v : Action ) : AbstractRiskParameterQuery{
    this._action=v
    return this
}

/**
  Field with a default value of ""
*/
public sortFieldOrder1(v : string) : AbstractRiskParameterQuery{
    this._sortFieldOrder1=v
    return this
}
public sortField1(v : SortField1 ) : AbstractRiskParameterQuery{
    this._sortField1=v
    return this
}

/**
  Field with a default value of ""
*/
public sortFieldOrder2(v : string) : AbstractRiskParameterQuery{
    this._sortFieldOrder2=v
    return this
}
public sortField2(v : SortField2 ) : AbstractRiskParameterQuery{
    this._sortField2=v
    return this
}




 protected fetchFields() : any[] {
        let fields :any[] = []

        if(this._accountNo!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="accountNo"]' , value : this._accountNo});
}

if(this._currency!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="currency"]' , value : this._currency});
}

if(this._accountClass!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="accountClass"]' , value : this._accountClass});
}

if(this._baseDateFrom!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="baseDateFrom"]' , value : this._baseDateFrom});
}
if(this._baseDateTo!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="baseDateTo"]' , value : this._baseDateTo});
}

if(this._balancePl!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="balancePl"]' , value : this._balancePl});
}

if(this._daysOfCall!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="daysOfCall"]' , value : this._daysOfCall});
}

if(this._daysOfCallFrom!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="daysOfCallFrom"]' , value : this._daysOfCallFrom});
}

if(this._daysOfCallTo!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="daysOfCallTo"]' , value : this._daysOfCallTo});
}

if(this._action!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="action"]' , value : this._action});
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


    return fields;

   }


}






