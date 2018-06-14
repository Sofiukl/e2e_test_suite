
import { BaseUIOperations } from "../../BaseUIOperations";


//Define the results Enum

enum ResultColumns {
    
}


        enum Entry_InOut {
               IN ="I",   OUT ="O", 
        }
         enum  Entry_AccountBalanceTypeStr {
              One0_Free ="10",   One1_Margin ="11",   One2_Pledge ="12",   One3_Collateral ="13",   One4_Physical ="14",   One5_IPO ="15",   One6_Register ="16",   One7_Expect_Rights ="17",   One8_Rights ="18",   One9_Blocked ="19", 
        }
        enum SecInGleLedgerCode {
             
        }
        enum SecOutGleLedgerCode {
             
        }
        enum Entry_Form {
               BOOK_ENTRY ="BOOK ENTRY", 
        }
        enum SecInReason {
               CLIENT_ADJUSTMENTClients_External_A_C_Movement ="CLIENT_ADJUSTMENT",   ADJUSTMENTAdjustment_for_Split_Consolidation ="ADJUSTMENT", 
        }
        enum SecOutReason {
               CLIENT_ADJUSTMENTClients_External_A_C_Movement ="CLIENT_ADJUSTMENT",   ADJUSTMENTAdjustment_for_Split_Consolidation ="ADJUSTMENT", 
        }


export abstract class AbstractCAMSecurityInOutEntry extends BaseUIOperations {

    static ResultColumns = ResultColumns
    
        static EntryInOut = Entry_InOut;
        static EntryAccountBalanceTypeStr = Entry_AccountBalanceTypeStr;
        static SecInGleLedgerCode = SecInGleLedgerCode;
        static SecOutGleLedgerCode = SecOutGleLedgerCode;
        static EntryForm = Entry_Form;
        static SecInReason = SecInReason;
        static SecOutReason = SecOutReason;


/**
 *    Private members 
*/


private _inOut : Entry_InOut = undefined 

private _accountNo : string = undefined 

private _accountBalanceTypeStr : Entry_AccountBalanceTypeStr = undefined 

private _custodianBank : string = undefined 

private _ourSettleAccountNo : string = undefined 

private _secInGleLedgerCode : SecInGleLedgerCode = undefined 

private _secOutGleLedgerCode : SecOutGleLedgerCode = undefined 

private _gleLedgerShortName : string = undefined 

private _externalReferenceNo : string = undefined 

private _secInDateStr : string = undefined 
private _secInTime : string = undefined 

private _secOutDateStr : string = undefined 
private _secOutTime : string = undefined 

private _securityCode : string = undefined 

private _amountStr : string = undefined 

private _form : Entry_Form = undefined 

private _secInReason : SecInReason = undefined 

private _secOutReason : SecOutReason = undefined 

private _bookCostStr : string = undefined 

private _bookValueStr : string = undefined 

private _remarks : string = undefined 

private _statementDescription : string = undefined 



/**
 *   Accessor methods
*/


public inOut(v : Entry_InOut ) : AbstractCAMSecurityInOutEntry{
    this._inOut=v
    return this
}

/**
  Field with a default value of "C0STFF001-7"
*/


public accountNo(v : string) : AbstractCAMSecurityInOutEntry{
    this._accountNo=v
    return this
}

public accountBalanceTypeStr(v : Entry_AccountBalanceTypeStr ) : AbstractCAMSecurityInOutEntry{
    this._accountBalanceTypeStr=v
    return this
}

/**
  Field with a default value of "TSD"
*/


public custodianBank(v : string) : AbstractCAMSecurityInOutEntry{
    this._custodianBank=v
    return this
}

/**
  Field with a default value of "T000000004000001"
*/


public ourSettleAccountNo(v : string) : AbstractCAMSecurityInOutEntry{
    this._ourSettleAccountNo=v
    return this
}

public secInGleLedgerCode(v : SecInGleLedgerCode ) : AbstractCAMSecurityInOutEntry{
    this._secInGleLedgerCode=v
    return this
}

public secOutGleLedgerCode(v : SecOutGleLedgerCode ) : AbstractCAMSecurityInOutEntry{
    this._secOutGleLedgerCode=v
    return this
}

/**
  Field with a default value of ""
*/


public gleLedgerShortName(v : string) : AbstractCAMSecurityInOutEntry{
    this._gleLedgerShortName=v
    return this
}

/**
  Field with a default value of ""
*/


public externalReferenceNo(v : string) : AbstractCAMSecurityInOutEntry{
    this._externalReferenceNo=v
    return this
}

/**
  Field with a default value of "24-10-2018"
*/


public secInDateStr(v : string) : AbstractCAMSecurityInOutEntry{
    this._secInDateStr=v
    return this
}
/**
  Field with a default value of "18%3A57%3A00"
*/


public secInTime(v : string) : AbstractCAMSecurityInOutEntry{
    this._secInTime=v
    return this
}

/**
  Field with a default value of "24-10-2018"
*/


public secOutDateStr(v : string) : AbstractCAMSecurityInOutEntry{
    this._secOutDateStr=v
    return this
}
/**
  Field with a default value of "18%3A57%3A00"
*/


public secOutTime(v : string) : AbstractCAMSecurityInOutEntry{
    this._secOutTime=v
    return this
}

/**
  Field with a default value of "AAV"
*/


public securityCode(v : string) : AbstractCAMSecurityInOutEntry{
    this._securityCode=v
    return this
}

/**
  Field with a default value of "100"
*/


public amountStr(v : string) : AbstractCAMSecurityInOutEntry{
    this._amountStr=v
    return this
}

public form(v : Entry_Form ) : AbstractCAMSecurityInOutEntry{
    this._form=v
    return this
}

public secInReason(v : SecInReason ) : AbstractCAMSecurityInOutEntry{
    this._secInReason=v
    return this
}

public secOutReason(v : SecOutReason ) : AbstractCAMSecurityInOutEntry{
    this._secOutReason=v
    return this
}

/**
  Field with a default value of "10"
*/


public bookCostStr(v : string) : AbstractCAMSecurityInOutEntry{
    this._bookCostStr=v
    return this
}

/**
  Field with a default value of ""
*/


public bookValueStr(v : string) : AbstractCAMSecurityInOutEntry{
    this._bookValueStr=v
    return this
}

/**
  Field with a default value of ""
*/


public remarks(v : string) : AbstractCAMSecurityInOutEntry{
    this._remarks=v
    return this
}

/**
  Field with a default value of ""
*/


public statementDescription(v : string) : AbstractCAMSecurityInOutEntry{
    this._statementDescription=v
    return this
}




 protected fetchFields() : any[] {
        let fields :any[] = []

        if(this._inOut!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="entry.inOut"]' , value : this._inOut});
}

if(this._accountNo!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="entry.accountNo"]' , value : this._accountNo});
}

if(this._accountBalanceTypeStr!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="entry.accountBalanceTypeStr"]' , value : this._accountBalanceTypeStr});
}

if(this._custodianBank!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="entry.custodianBank"]' , value : this._custodianBank});
}

if(this._ourSettleAccountNo!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="entry.ourSettleAccountNo"]' , value : this._ourSettleAccountNo});
}

if(this._secInGleLedgerCode!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="secInGleLedgerCode"]' , value : this._secInGleLedgerCode});
}

if(this._secOutGleLedgerCode!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="secOutGleLedgerCode"]' , value : this._secOutGleLedgerCode});
}

if(this._gleLedgerShortName!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="entry.gleLedgerShortName"]' , value : this._gleLedgerShortName});
}

if(this._externalReferenceNo!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="entry.externalReferenceNo"]' , value : this._externalReferenceNo});
}

if(this._secInDateStr!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="secInDateStr"]' , value : this._secInDateStr});
}
if(this._secInTime!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="secInTime"]' , value : this._secInTime});
}

if(this._secOutDateStr!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="secOutDateStr"]' , value : this._secOutDateStr});
}
if(this._secOutTime!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="secOutTime"]' , value : this._secOutTime});
}

if(this._securityCode!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="entry.securityCode"]' , value : this._securityCode});
}

if(this._amountStr!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="entry.amountStr"]' , value : this._amountStr});
}

if(this._form!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="entry.form"]' , value : this._form});
}

if(this._secInReason!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="secInReason"]' , value : this._secInReason});
}

if(this._secOutReason!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="secOutReason"]' , value : this._secOutReason});
}

if(this._bookCostStr!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="entry.bookCostStr"]' , value : this._bookCostStr});
}

if(this._bookValueStr!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="entry.bookValueStr"]' , value : this._bookValueStr});
}

if(this._remarks!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="entry.remarks"]' , value : this._remarks});
}

if(this._statementDescription!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="entry.statementDescription"]' , value : this._statementDescription});
}


    return fields;

   }


}






