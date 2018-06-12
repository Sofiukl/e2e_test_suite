
import { BaseUIOperations } from "../../BaseUIOperations";


//Define the results Enum

enum ResultColumns {
    Ledger_Code_Name = "Ledger Code : Name",Security_Id = "Security Id",Date = "Date",Sub_Ledger_Code = "Sub Ledger Code",Reference_Number = "Reference Number",Amount = "Amount",Debit = "Debit",Credit = "Credit",Balance = "Balance",
}


        enum BalanceType {
              DEFAULT ="DEFAULT", 
        }
        enum TrialBalanceId { 
               GMO_Book ="GMO", 
        }


export abstract class AbstractGLEJournalQuery extends BaseUIOperations {

    static ResultColumns = ResultColumns
    
        static BalanceType = BalanceType;
        static TrialBalanceId = TrialBalanceId;


/**
 *    Private members 
*/


private _ledgerCodeFrom : string = undefined 

private _ledgerCodeTo : string = undefined 

private _currency : string = undefined 

private _subLedgerCode : string = undefined 

private _balanceEntryDate : string = undefined 
private _balanceEntryDateTo : string = undefined 

private _balanceType : BalanceType = undefined 

private _trialBalanceId : TrialBalanceId = undefined 

private _entryDateFrom : string = undefined 
private _entryDateTo : string = undefined 



/**
 *   Accessor methods
*/


/**
  Field with a default value of "111208"
*/


public ledgerCodeFrom(v : string) : AbstractGLEJournalQuery{
    this._ledgerCodeFrom=v
    return this
}

/**
  Field with a default value of "111208"
*/


public ledgerCodeTo(v : string) : AbstractGLEJournalQuery{
    this._ledgerCodeTo=v
    return this
}

/**
  Field with a default value of "THB"
*/


public currency(v : string) : AbstractGLEJournalQuery{
    this._currency=v
    return this
}

/**
  Field with a default value of ""
*/


public subLedgerCode(v : string) : AbstractGLEJournalQuery{
    this._subLedgerCode=v
    return this
}

/**
  Field with a default value of "25-06-2018"
*/


public balanceEntryDate(v : string) : AbstractGLEJournalQuery{
    this._balanceEntryDate=v
    return this
}
/**
  Field with a default value of ""
*/


public balanceEntryDateTo(v : string) : AbstractGLEJournalQuery{
    this._balanceEntryDateTo=v
    return this
}

public balanceType(v : BalanceType ) : AbstractGLEJournalQuery{
    this._balanceType=v
    return this
}

public trialBalanceId(v : TrialBalanceId ) : AbstractGLEJournalQuery{
    this._trialBalanceId=v
    return this
}

/**
  Field with a default value of ""
*/


public entryDateFrom(v : string) : AbstractGLEJournalQuery{
    this._entryDateFrom=v
    return this
}
/**
  Field with a default value of ""
*/


public entryDateTo(v : string) : AbstractGLEJournalQuery{
    this._entryDateTo=v
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

if(this._balanceEntryDate!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="balanceEntryDate"]' , value : this._balanceEntryDate});
}
if(this._balanceEntryDateTo!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="balanceEntryDateTo"]' , value : this._balanceEntryDateTo});
}

if(this._balanceType!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="balanceType"]' , value : this._balanceType});
}

if(this._trialBalanceId!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="trialBalanceId"]' , value : this._trialBalanceId});
}

if(this._entryDateFrom!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="entryDateFrom"]' , value : this._entryDateFrom});
}
if(this._entryDateTo!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="entryDateTo"]' , value : this._entryDateTo});
}


    return fields;

   }


}






