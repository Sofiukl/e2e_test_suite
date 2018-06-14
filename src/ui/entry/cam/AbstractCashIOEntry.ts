
import { BaseUIOperations } from "../../BaseUIOperations";


//Define the results Enum

enum ResultColumns {
    
}


        enum Entry_InOut {
              IN ="I",   OUT ="O", 
        }
        enum Entry_TaxIncomeType {
              Cash_Adjustment ="CASH_ADJUSTMENT",   Non_taxable ="NON_TAXABLE", 
        }
        enum Entry_WayOfSettlement {
              BANK_TRANSFER ="BANK TRANSFER",   BPAY ="BPAY",   CASH ="CASH",   CHEQUE ="CHEQUE", 
        }
        enum Entry_Mode {
              Bank_Transfer ="BANK_TRANSFER",   Internal_Booking ="INTERNAL_BOOKING", 
        }
        enum CashInReason {
               WRITE_OFFWRITE_OFF ="WRITE_OFF",   MARGIN_INTMargin_Interest ="MARGIN_INT",   TENDER_OFFERTransfer_For_Tender_Offer ="TENDER_OFFER",   CREDIT_NOTECREDIT_NOTE ="CREDIT_NOTE", 
        }
        enum CashOutReason {
               WRITE_OFFWRITE_OFF ="WRITE_OFF",   MARGIN_INTMargin_Interest ="MARGIN_INT",   TENDER_OFFERTransfer_For_Tender_Offer ="TENDER_OFFER",   CREDIT_NOTECREDIT_NOTE ="CREDIT_NOTE", 
        }
        enum Entry_NoCam01Required {
              No ="N",   Yes ="Y", 
        }
        enum CashInAccountCode {
               One31299A_R_OTH_NON_RELATED__COLLSUSPENSE_ACC ="131299",   Two11103DEPOSITORY_FEE ="211103",   Two11104CLEARING_FEE ="211104",   Two11105SUSPENSE_PAYABLE ="211105",   Two11111Suspend_Payable_Refinance ="211111",   Two99977OVERDUE_INTEREST_SET_CHARGES ="299977",   Two99993VAT ="299993",   Two99997WITHHOLDING_TAX_PAYABLE___PND_2 ="299997",   Four99994OVERDUE_INTEREST_BROKER_CHARGES ="499994",   Four99997BROKERAGE_FEES ="499997",   Four99999INTEREST_INCOMES___CB ="499999",   Five99997DOUBTFUL_DEBT ="599997",   Six00005CASH_TRANSFER_CONTROL ="600005", 
        }
        enum CashInAccountBalanceTypeStr {
               One0_Free ="10",   One1_Margin ="11",   One2_Pledge ="12",   One3_Collateral ="13",   One4_Physical ="14",   One5_IPO ="15",   One6_Register ="16",   One7_Expect_Rights ="17",   One8_Rights ="18",   One9_Blocked ="19", 
        }
        enum CashOutAccountCode {
               One31299A_R_OTH_NON_RELATED__COLLSUSPENSE_ACC ="131299",   Two11103DEPOSITORY_FEE ="211103",   Two11104CLEARING_FEE ="211104",   Two11105SUSPENSE_PAYABLE ="211105",   Two11111Suspend_Payable_Refinance ="211111",   Two99977OVERDUE_INTEREST_SET_CHARGES ="299977",   Two99993VAT ="299993",   Four99994OVERDUE_INTEREST_BROKER_CHARGES ="499994",   Four99995OTHER_INCOME_NON_VAT ="499995",   Four99996OTHER_INCOME_VAT ="499996",   Four99997BROKERAGE_FEES ="499997",   Four99999INTEREST_INCOMES___CB ="499999",   Six00005CASH_TRANSFER_CONTROL ="600005", 
        }
        enum CashOutAccountBalanceTypeStr {
               One0_Free ="10",   One1_Margin ="11",   One2_Pledge ="12",   One3_Collateral ="13",   One4_Physical ="14",   One5_IPO ="15",   One6_Register ="16",   One7_Expect_Rights ="17",   One8_Rights ="18",   One9_Blocked ="19", 
        }


export abstract class AbstractCashIOEntry extends BaseUIOperations {

    static ResultColumns = ResultColumns
    
        static Entry_InOut = Entry_InOut;
        static Entry_TaxIncomeType = Entry_TaxIncomeType;
        static Entry_WayOfSettlement = Entry_WayOfSettlement;
        static Entry_Mode = Entry_Mode;
        static CashInReason = CashInReason;
        static CashOutReason = CashOutReason;
        static Entry_NoCam01Required = Entry_NoCam01Required;
        static CashInAccountCode = CashInAccountCode;
        static CashInAccountBalanceTypeStr = CashInAccountBalanceTypeStr;
        static CashOutAccountCode = CashOutAccountCode;
        static CashOutAccountBalanceTypeStr = CashOutAccountBalanceTypeStr;


/**
 *    Private members 
*/


private _inOut : Entry_InOut = undefined 

private _cashInDateStr : string = undefined 
private _cashInTime : string = undefined 

private _cashOutDateStr : string = undefined 
private _cashOutTime : string = undefined 

private _currency : string = undefined 

private _amountStr : string = undefined 

private _externalReferenceNo : string = undefined 

private _taxIncomeType : Entry_TaxIncomeType = undefined 

private _wayOfSettlement : Entry_WayOfSettlement = undefined 

private _chequeNo : string = undefined 

private _mode : Entry_Mode = undefined 

private _custodianBank : string = undefined 

private _accountSubCodeDisp : string = undefined 

private _cashInReason : CashInReason = undefined 

private _cashOutReason : CashOutReason = undefined 

private _sourceInstrument : string = undefined 

private _noCam01Required : Entry_NoCam01Required = undefined 

private _remarks : string = undefined 

private _remarksForReport : string = undefined 

private _statementDescription : string = undefined 

private _cashInAccountNo : string = undefined 

private _cashInAccountCode : CashInAccountCode = undefined 

private _cashInAccountBalanceTypeStr : CashInAccountBalanceTypeStr = undefined 

private _cashInOtherGleLedgerCode : string = undefined 

private _cashOutAccountNo : string = undefined 

private _cashOutAccountCode : CashOutAccountCode = undefined 

private _cashOutAccountBalanceTypeStr : CashOutAccountBalanceTypeStr = undefined 

private _cashOutOtherGleLedgerCode : string = undefined 



/**
 *   Accessor methods
*/


public inOut(v : Entry_InOut ) : AbstractCashIOEntry{
    this._inOut=v
    return this
}

/**
  Field with a default value of "02-04-2018"
*/


public cashInDateStr(v : string) : AbstractCashIOEntry{
    this._cashInDateStr=v
    return this
}
/**
  Field with a default value of ""
*/


public cashInTime(v : string) : AbstractCashIOEntry{
    this._cashInTime=v
    return this
}

/**
  Field with a default value of "02-04-2018"
*/


public cashOutDateStr(v : string) : AbstractCashIOEntry{
    this._cashOutDateStr=v
    return this
}
/**
  Field with a default value of ""
*/


public cashOutTime(v : string) : AbstractCashIOEntry{
    this._cashOutTime=v
    return this
}

/**
  Field with a default value of "THB"
*/


public currency(v : string) : AbstractCashIOEntry{
    this._currency=v
    return this
}

/**
  Field with a default value of "100"
*/


public amountStr(v : string) : AbstractCashIOEntry{
    this._amountStr=v
    return this
}

/**
  Field with a default value of ""
*/


public externalReferenceNo(v : string) : AbstractCashIOEntry{
    this._externalReferenceNo=v
    return this
}

public taxIncomeType(v : Entry_TaxIncomeType ) : AbstractCashIOEntry{
    this._taxIncomeType=v
    return this
}

public wayOfSettlement(v : Entry_WayOfSettlement ) : AbstractCashIOEntry{
    this._wayOfSettlement=v
    return this
}

/**
  Field with a default value of ""
*/


public chequeNo(v : string) : AbstractCashIOEntry{
    this._chequeNo=v
    return this
}

public mode(v : Entry_Mode ) : AbstractCashIOEntry{
    this._mode=v
    return this
}

/**
  Field with a default value of ""
*/


public custodianBank(v : string) : AbstractCashIOEntry{
    this._custodianBank=v
    return this
}

/**
  Field with a default value of ""
*/


public accountSubCodeDisp(v : string) : AbstractCashIOEntry{
    this._accountSubCodeDisp=v
    return this
}

public cashInReason(v : CashInReason ) : AbstractCashIOEntry{
    this._cashInReason=v
    return this
}

public cashOutReason(v : CashOutReason ) : AbstractCashIOEntry{
    this._cashOutReason=v
    return this
}

/**
  Field with a default value of ""
*/


public sourceInstrument(v : string) : AbstractCashIOEntry{
    this._sourceInstrument=v
    return this
}

public noCam01Required(v : Entry_NoCam01Required ) : AbstractCashIOEntry{
    this._noCam01Required=v
    return this
}

/**
  Field with a default value of ""
*/


public remarks(v : string) : AbstractCashIOEntry{
    this._remarks=v
    return this
}

/**
  Field with a default value of ""
*/


public remarksForReport(v : string) : AbstractCashIOEntry{
    this._remarksForReport=v
    return this
}

/**
  Field with a default value of ""
*/


public statementDescription(v : string) : AbstractCashIOEntry{
    this._statementDescription=v
    return this
}

/**
  Field with a default value of "C0STFF001-7"
*/


public cashInAccountNo(v : string) : AbstractCashIOEntry{
    this._cashInAccountNo=v
    return this
}

public cashInAccountCode(v : CashInAccountCode ) : AbstractCashIOEntry{
    this._cashInAccountCode=v
    return this
}

public cashInAccountBalanceTypeStr(v : CashInAccountBalanceTypeStr ) : AbstractCashIOEntry{
    this._cashInAccountBalanceTypeStr=v
    return this
}

/**
  Field with a default value of ""
*/


public cashInOtherGleLedgerCode(v : string) : AbstractCashIOEntry{
    this._cashInOtherGleLedgerCode=v
    return this
}

/**
  Field with a default value of ""
*/


public cashOutAccountNo(v : string) : AbstractCashIOEntry{
    this._cashOutAccountNo=v
    return this
}

public cashOutAccountCode(v : CashOutAccountCode ) : AbstractCashIOEntry{
    this._cashOutAccountCode=v
    return this
}

public cashOutAccountBalanceTypeStr(v : CashOutAccountBalanceTypeStr ) : AbstractCashIOEntry{
    this._cashOutAccountBalanceTypeStr=v
    return this
}

/**
  Field with a default value of ""
*/


public cashOutOtherGleLedgerCode(v : string) : AbstractCashIOEntry{
    this._cashOutOtherGleLedgerCode=v
    return this
}




 protected fetchFields() : any[] {
        let fields :any[] = []

        if(this._inOut!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="entry.inOut"]' , value : this._inOut});
}

if(this._cashInDateStr!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="cashInDateStr"]' , value : this._cashInDateStr});
}
if(this._cashInTime!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="cashInTime"]' , value : this._cashInTime});
}

if(this._cashOutDateStr!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="cashOutDateStr"]' , value : this._cashOutDateStr});
}
if(this._cashOutTime!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="cashOutTime"]' , value : this._cashOutTime});
}

if(this._currency!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="entry.currency"]' , value : this._currency});
}

if(this._amountStr!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="entry.amountStr"]' , value : this._amountStr});
}

if(this._externalReferenceNo!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="entry.externalReferenceNo"]' , value : this._externalReferenceNo});
}

if(this._taxIncomeType!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="entry.taxIncomeType"]' , value : this._taxIncomeType});
}

if(this._wayOfSettlement!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="entry.wayOfSettlement"]' , value : this._wayOfSettlement});
}

if(this._chequeNo!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="entry.chequeNo"]' , value : this._chequeNo});
}

if(this._mode!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="entry.mode"]' , value : this._mode});
}

if(this._custodianBank!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="entry.custodianBank"]' , value : this._custodianBank});
}

if(this._accountSubCodeDisp!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="entry.accountSubCodeDisp"]' , value : this._accountSubCodeDisp});
}

if(this._cashInReason!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="cashInReason"]' , value : this._cashInReason});
}

if(this._cashOutReason!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="cashOutReason"]' , value : this._cashOutReason});
}

if(this._sourceInstrument!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="entry.sourceInstrument"]' , value : this._sourceInstrument});
}

if(this._noCam01Required!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="entry.noCam01Required"]' , value : this._noCam01Required});
}

if(this._remarks!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="entry.remarks"]' , value : this._remarks});
}

if(this._remarksForReport!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="entry.remarksForReport"]' , value : this._remarksForReport});
}

if(this._statementDescription!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="entry.statementDescription"]' , value : this._statementDescription});
}

if(this._cashInAccountNo!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="cashInAccountNo"]' , value : this._cashInAccountNo});
}

if(this._cashInAccountCode!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="cashInAccountCode"]' , value : this._cashInAccountCode});
}

if(this._cashInAccountBalanceTypeStr!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="cashInAccountBalanceTypeStr"]' , value : this._cashInAccountBalanceTypeStr});
}

if(this._cashInOtherGleLedgerCode!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="cashInOtherGleLedgerCode"]' , value : this._cashInOtherGleLedgerCode});
}

if(this._cashOutAccountNo!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="cashOutAccountNo"]' , value : this._cashOutAccountNo});
}

if(this._cashOutAccountCode!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="cashOutAccountCode"]' , value : this._cashOutAccountCode});
}

if(this._cashOutAccountBalanceTypeStr!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="cashOutAccountBalanceTypeStr"]' , value : this._cashOutAccountBalanceTypeStr});
}

if(this._cashOutOtherGleLedgerCode!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="cashOutOtherGleLedgerCode"]' , value : this._cashOutOtherGleLedgerCode});
}


    return fields;

   }


}






