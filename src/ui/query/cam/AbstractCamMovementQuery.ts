
import { BaseUIOperations } from "../../BaseUIOperations";


//Define the results Enum

enum ResultColumns {
    
}


        enum MovementBasis {
               ALLOCABLE_BALANCE ="ALLOCABLE BALANCE",   EARLY_CREDIT ="EARLY CREDIT",   RIGHTS_BALANCE ="RIGHTS BALANCE",   SETTLE_DATE_BALANCE ="SETTLEMENT DATE",   TRADE_DATE_BALANCE ="TRADE DATE",   VALUE_DATE_BALANCE ="VALUE DATE", 
        }
        enum AccountBalanceType {
               Zero0_Free ="10",   Zero1_Margin ="11",   Zero2_Pledge ="12",   Zero3_Collateral ="13",   Zero4_Physical ="14",   Zero5_IPO ="15",   Zero6_Register ="16",   Zero7_Expect_Rights ="17",   Zero8_Rights ="18",   Zero9_Blocked ="19", 
        }
        enum Form {
               BOOK_ENTRY ="BOOK ENTRY", 
        }
        enum SortField1 {
              Account_No ="ACCOUNT_NO",   Security_Id ="SECURITY_ID",   Account_Balance_Type ="ACCOUNT_BALANCE_TYPE",   Trade_CCY_of_Instrument ="TRADE_CCY",   Instrument_Type ="INSTRUMENT_TYPE", 
        }
        enum SortField2 {
               Account_No ="ACCOUNT_NO",   Security_Id ="SECURITY_ID",   Account_Balance_Type ="ACCOUNT_BALANCE_TYPE",   Trade_CCY_of_Instrument ="TRADE_CCY",   Instrument_Type ="INSTRUMENT_TYPE", 
        }
        enum SortField3 {
               Account_No ="ACCOUNT_NO",   Security_Id ="SECURITY_ID",   Account_Balance_Type ="ACCOUNT_BALANCE_TYPE",   Trade_CCY_of_Instrument ="TRADE_CCY",   Instrument_Type ="INSTRUMENT_TYPE", 
        }
        enum SortField4 {
               Account_No ="ACCOUNT_NO",   Security_Id ="SECURITY_ID",   Account_Balance_Type ="ACCOUNT_BALANCE_TYPE",   Trade_CCY_of_Instrument ="TRADE_CCY",   Instrument_Type ="INSTRUMENT_TYPE", 
        }


export abstract class AbstractCamMovementQuery extends BaseUIOperations {

    static ResultColumns = ResultColumns
    
        static MovementBasis = MovementBasis;
        static AccountBalanceType = AccountBalanceType;
        static Form = Form;
        static SortField1 = SortField1;
        static SortField2 = SortField2;
        static SortField3 = SortField3;
        static SortField4 = SortField4;


/**
 *    Private members 
*/


private _movementBasis : MovementBasis = undefined 

private _dateFrom : string = undefined 
private _dateTo : string = undefined 

private _accountNo : string = undefined 

private _agentCode : string = undefined 

private _currency : string = undefined 

private _instrumentType : string = undefined 

private _accountBalanceType : AccountBalanceType = undefined 

private _securityCode : string = undefined 

private _form : Form = undefined 

private _appUpdDate : string = undefined 

private _accountFrom : string = undefined 
private _accountTo : string = undefined 

private _sortFieldOrder1 : string = undefined 
private _sortField1 : SortField1 = undefined 

private _sortFieldOrder2 : string = undefined 
private _sortField2 : SortField2 = undefined 

private _sortFieldOrder3 : string = undefined 
private _sortField3 : SortField3 = undefined 

private _sortFieldOrder4 : string = undefined 
private _sortField4 : SortField4 = undefined 



/**
 *   Accessor methods
*/


public movementBasis(v : MovementBasis ) : AbstractCamMovementQuery{
    this._movementBasis=v
    return this
}

/**
  Field with a default value of "20-03-2018"
*/


public dateFrom(v : string) : AbstractCamMovementQuery{
    this._dateFrom=v
    return this
}
/**
  Field with a default value of "19-04-2018"
*/


public dateTo(v : string) : AbstractCamMovementQuery{
    this._dateTo=v
    return this
}

/**
  Field with a default value of ""
*/


public accountNo(v : string) : AbstractCamMovementQuery{
    this._accountNo=v
    return this
}

/**
  Field with a default value of ""
*/


public agentCode(v : string) : AbstractCamMovementQuery{
    this._agentCode=v
    return this
}

/**
  Field with a default value of ""
*/


public currency(v : string) : AbstractCamMovementQuery{
    this._currency=v
    return this
}

/**
  Field with a default value of ""
*/


public instrumentType(v : string) : AbstractCamMovementQuery{
    this._instrumentType=v
    return this
}

public accountBalanceType(v : AccountBalanceType ) : AbstractCamMovementQuery{
    this._accountBalanceType=v
    return this
}

/**
  Field with a default value of ""
*/


public securityCode(v : string) : AbstractCamMovementQuery{
    this._securityCode=v
    return this
}

public form(v : Form ) : AbstractCamMovementQuery{
    this._form=v
    return this
}

/**
  Field with a default value of ""
*/


public appUpdDate(v : string) : AbstractCamMovementQuery{
    this._appUpdDate=v
    return this
}

/**
  Field with a default value of ""
*/


public accountFrom(v : string) : AbstractCamMovementQuery{
    this._accountFrom=v
    return this
}
/**
  Field with a default value of ""
*/


public accountTo(v : string) : AbstractCamMovementQuery{
    this._accountTo=v
    return this
}

/**
  Field with a default value of ""
*/


public sortFieldOrder1(v : string) : AbstractCamMovementQuery{
    this._sortFieldOrder1=v
    return this
}
public sortField1(v : SortField1 ) : AbstractCamMovementQuery{
    this._sortField1=v
    return this
}

/**
  Field with a default value of ""
*/


public sortFieldOrder2(v : string) : AbstractCamMovementQuery{
    this._sortFieldOrder2=v
    return this
}
public sortField2(v : SortField2 ) : AbstractCamMovementQuery{
    this._sortField2=v
    return this
}

/**
  Field with a default value of ""
*/


public sortFieldOrder3(v : string) : AbstractCamMovementQuery{
    this._sortFieldOrder3=v
    return this
}
public sortField3(v : SortField3 ) : AbstractCamMovementQuery{
    this._sortField3=v
    return this
}

/**
  Field with a default value of ""
*/


public sortFieldOrder4(v : string) : AbstractCamMovementQuery{
    this._sortFieldOrder4=v
    return this
}
public sortField4(v : SortField4 ) : AbstractCamMovementQuery{
    this._sortField4=v
    return this
}




 protected fetchFields() : any[] {
        let fields :any[] = []

        if(this._movementBasis!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="movementBasis"]' , value : this._movementBasis});
}

if(this._dateFrom!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="dateFrom"]' , value : this._dateFrom});
}
if(this._dateTo!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="dateTo"]' , value : this._dateTo});
}

if(this._accountNo!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="accountNo"]' , value : this._accountNo});
}

if(this._agentCode!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="agentCode"]' , value : this._agentCode});
}

if(this._currency!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="currency"]' , value : this._currency});
}

if(this._instrumentType!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="instrumentType"]' , value : this._instrumentType});
}

if(this._accountBalanceType!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="accountBalanceType"]' , value : this._accountBalanceType});
}

if(this._securityCode!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="securityCode"]' , value : this._securityCode});
}

if(this._form!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="form"]' , value : this._form});
}

if(this._appUpdDate!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="appUpdDate"]' , value : this._appUpdDate});
}

if(this._accountFrom!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="accountFrom"]' , value : this._accountFrom});
}
if(this._accountTo!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="accountTo"]' , value : this._accountTo});
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


    return fields;

   }


}






