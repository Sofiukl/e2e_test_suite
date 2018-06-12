
import { BaseUIOperations } from "../../BaseUIOperations";


//Define the results Enum

enum ResultColumns {
    
}


        enum SubLedgerLevelBalance {
              NOT_REQUIRED ="NOT REQUIRED",   REQUIRED ="REQUIRED", 
        }
        enum DisplayBalance {
               No ="N",   Yes ="Y", 
        }
        enum BalanceType {
              DEFAULT ="DEFAULT", 
        }
        enum TrialBalanceId {
               GMO_Book ="GMO", 
        }


export abstract class AbstractGLEBalanceQuery extends BaseUIOperations {

    static ResultColumns = ResultColumns
    
        static SubLedgerLevelBalance = SubLedgerLevelBalance;
        static DisplayBalance = DisplayBalance;
        static BalanceType = BalanceType;
        static TrialBalanceId = TrialBalanceId;


/**
 *    Private members 
*/


private _ledgerCodeFrom : string = undefined 

private _ledgerCodeTo : string = undefined 

private _currency : string = undefined 

private _subLedgerCode : string = undefined 

private _subLedgerLevelBalance : SubLedgerLevelBalance = undefined 

private _displayBalance : DisplayBalance = undefined 

private _balanceEntryDate : string = undefined 

private _balanceType : BalanceType = undefined 

private _trialBalanceId : TrialBalanceId = undefined 

private _checkTB : string = undefined 



/**
 *   Accessor methods
*/


/**
  Field with a default value of "111208"
*/


public ledgerCodeFrom(v : string) : AbstractGLEBalanceQuery{
    this._ledgerCodeFrom=v
    return this
}

/**
  Field with a default value of ""
*/


public ledgerCodeTo(v : string) : AbstractGLEBalanceQuery{
    this._ledgerCodeTo=v
    return this
}

/**
  Field with a default value of ""
*/


public currency(v : string) : AbstractGLEBalanceQuery{
    this._currency=v
    return this
}

/**
  Field with a default value of ""
*/


public subLedgerCode(v : string) : AbstractGLEBalanceQuery{
    this._subLedgerCode=v
    return this
}

public subLedgerLevelBalance(v : SubLedgerLevelBalance ) : AbstractGLEBalanceQuery{
    this._subLedgerLevelBalance=v
    return this
}

public displayBalance(v : DisplayBalance ) : AbstractGLEBalanceQuery{
    this._displayBalance=v
    return this
}

/**
  Field with a default value of "25-06-2018"
*/


public balanceEntryDate(v : string) : AbstractGLEBalanceQuery{
    this._balanceEntryDate=v
    return this
}

public balanceType(v : BalanceType ) : AbstractGLEBalanceQuery{
    this._balanceType=v
    return this
}

public trialBalanceId(v : TrialBalanceId ) : AbstractGLEBalanceQuery{
    this._trialBalanceId=v
    return this
}

/**
  Field with a default value of ""
*/


public checkTB(v : string) : AbstractGLEBalanceQuery{
    this._checkTB=v
    return this
}





 protected fetchFields() : any[] {
        let fields :any[] = []

        if(this._ledgerCodeFrom!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="ledgerCodeFrom"]' , value : this._ledgerCodeFrom});
}

if(this._ledgerCodeTo!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="ledgerCodeTo"]' , value : this._ledgerCodeTo});
}

if(this._currency!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="currency"]' , value : this._currency});
}

if(this._subLedgerCode!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="subLedgerCode"]' , value : this._subLedgerCode});
}

if(this._subLedgerLevelBalance!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="subLedgerLevelBalance"]' , value : this._subLedgerLevelBalance});
}

if(this._displayBalance!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="displayBalance"]' , value : this._displayBalance});
}

if(this._balanceEntryDate!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="balanceEntryDate"]' , value : this._balanceEntryDate});
}

if(this._balanceType!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="balanceType"]' , value : this._balanceType});
}

if(this._trialBalanceId!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="trialBalanceId"]' , value : this._trialBalanceId});
}

if(this._checkTB!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="checkTB"]' , value : this._checkTB});
}


    return fields;

   }


}






