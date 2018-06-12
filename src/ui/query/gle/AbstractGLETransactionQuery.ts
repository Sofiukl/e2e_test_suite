
import { BaseUIOperations } from "../../BaseUIOperations";


//Define the results Enum

enum ResultColumns {
     Transaction_Type = "Transaction Type",Trial_Balance_Id = "Trial Balance Id",Process_Type = "Process Type",Reference_Number = "Reference Number",Cxl_Reference_Number = "Cxl Reference Number",Transaction_Date = "Transaction Date",Trade_Date = "Trade Date",Value_Date = "Value Date",Settlement_Date = "Settlement Date",Ccy = "Ccy",Bank_Account = "Bank Account",Inventory_Account = "Inventory Account",Entry_Date = "Entry Date",Last_Entry_Date = "Last Entry Date",Entry_DateSystem = "Entry Date(System)",Last_Entry_DateSystem = "Last Entry Date(System)",Status = "Status",
}


        enum TransactionType {
               Affirmed_Security_Trade_Settlement__Completion ="COMP_SECURITY_TRADE_AFFIRMATION",   Affirmed_Security_Trade_Settlement__Outstanding ="STL_SECURITY_TRADE_AFFIRMATION",   Affirmed_Security_Trade_Settlement__Quasi_Completion ="QUASI_COMP_SECURITY_TRADE_AFFIRMATION",   Cash_Dividend_Location_base_Outstanding ="NCM_CASH_DIVIDEND",   Cash_Dividend_Settlement_Completion ="COMP_STL_CAX_CASH_DIVIDEND",   Cash_In_Entry_for_Customer_Account ="CASH_IN",   Cash_Interest_to_Customer_Account ="CASH_INTEREST_ACTUAL_POSTING",   Cash_Out_Entry_for_Customer_Account ="CASH_OUT",   Cash_Trade ="SECURITY_TRADE",   Cash_Trade_Settlement_Completion ="COMP_SECURITY_TRADE",   Cash_Trade_Settlement_Quasi_Completion ="QUASI_COMP_SECURITY_TRADE",   Client_Payment_Receipt_Completion ="COMP_CLIENT_PAY_RECEIVE",   Client_Payment_Receipt_Outstanding ="STL_CLIENT_PAY_RECEIVE",   Client_Receipt_Outstanding ="STL_CLIENT_RECEIPT_ALLOC",   Custody_Instruction_Completion ="COMP_CUSTODY_INSTRUCTION",   Custody_Instruction_Outstanding ="CUSTODY_INSTRUCTION",   Custody_Instruction_Quasi_Completion ="QUASI_COMP_CUSTODY_INSTRUCTION",   Early_Credit ="EARLY_CREDIT",   Early_Credit_Interest ="EARLY_CREDIT_INTEREST",   Early_Credit_Reverse ="EARLY_CREDIT_REVERSE",   Interest_Accrual_for_Client_Cash_Position ="ACCRUAL_CASH",   Location_Rights_Exercise__Completion ="COMP_STL_CAX_NCM_RIGHTS_EXERCISE",   Location_Rights_Exercise__Outstanding ="STL_CAX_NCM_RIGHTS_EXERCISE",   Netting_Obligation_Completion ="COMP_NETTING",   Netting_Obligation_Outstanding ="STL_NETTING",   Netting_Obligation_Quasi_Completion ="QUASI_COMP_NETTING",   Nostro_Cash_In ="NCM_CASH_IN",   Nostro_Cash_Out ="NCM_CASH_OUT",   Ownership_Rights_Exercise__Completion ="COMP_STL_CAX_CAM_RIGHTS_EXERCISE",   Ownership_Rights_Exercise__Outstanding ="STL_CAX_CAM_RIGHTS_EXERCISE",   Paired_off_Settlement_Completion ="COMP_PAIR_OFF",   Paired_off_Settlement_Outstanding ="STL_PAIR_OFF",   Paired_off_Settlement_Quasi_Completion ="QUASI_COMP_PAIR_OFF",   Revaluation_of_Own_Position ="REVAL_OWN_POSITION",   Rights_Exercise___Ownership ="CAM_RIGHTS_EXERCISE",   Security_In_Entry_for_Customer_Firm_Account ="SECURITY_IN",   Security_Out_Entry_for_Customer_Firm_Account ="SECURITY_OUT",   Stock_Loan_and_Repo_Trade ="SLR_TRADE",   Stock_Loan_and_Repo_Trade_Settlement_Completion ="COMP_SLR_TRADE",   Stock_Loan_and_Repo_Closeout_Interest_Payout ="CLOSEOUT_INTPAYOUT",   Stock_Loan_and_Repo_Reprice_Auto_Pairoff_Interest_Carryover ="REPRICE_CARRYOVER",   Stock_Loan_and_Repo_Reprice_Auto_Pairoff_Interest_Payout ="REPRICE_INTPAYOUT",   Trading_PL ="TRADING_PL",   Transfer_Instruction_Completion ="COMP_TRANSFER_INSTRUCTION",   Transfer_Instruction_Outstanding ="TRANSFER_INSTRUCTION",   Transfer_Instruction_Quasi_Completion ="QUASI_COMP_TRANSFER_INSTRUCTION",   Unknown_Completion_Notice ="UNKNOWN_COMPLETION",   Voucher_Entry ="VOUCHER",   Wire_Instruction_Completion ="COMP_WIRE_INSTRUCTION",   Wire_Instruction_Outstanding ="WIRE_INSTRUCTION",   Wire_Instruction_Quasi_Completion ="QUASI_COMP_WIRE_INSTRUCTION", 
        }
        enum ProcessType {
               DACCR ="DACCR",   DREVL ="DREVL",   MACCR ="MACCR",   MREVL ="MREVL",   NORM ="NORM",   YEAR_END_NORM ="YEAR_END_NORM", 
        }
        enum TrialBalanceId {
               GMO_Book ="GMO", 
        }
        enum Status {
               CANCEL ="CANCEL",   NORMAL ="NORMAL", 
        }
        enum SortField1 {
              Transaction_Reference_Number ="reference_no",   Transaction_Type ="transaction_type",   Process_Type ="process_type",   Bank_Account ="bankaccount",   Inventory_Account ="inventoryaccount", 
        }
        enum SortField2 {
               Transaction_Reference_Number ="reference_no",   Transaction_Type ="transaction_type",   Process_Type ="process_type",   Bank_Account ="bankaccount",   Inventory_Account ="inventoryaccount", 
        }
        enum SortField3 {
               Transaction_Reference_Number ="reference_no",   Transaction_Type ="transaction_type",   Process_Type ="process_type",   Bank_Account ="bankaccount",   Inventory_Account ="inventoryaccount", 
        }


export abstract class AbstractGLETransactionQuery extends BaseUIOperations {

    static ResultColumns = ResultColumns
    
        static TransactionType = TransactionType;
        static ProcessType = ProcessType;
        static TrialBalanceId = TrialBalanceId;
        static Status = Status;
        static SortField1 = SortField1;
        static SortField2 = SortField2;
        static SortField3 = SortField3;


/**
 *    Private members 
*/


private _transactionType : TransactionType = undefined 

private _referenceNo : string = undefined 

private _cxlReferenceNo : string = undefined 

private _processType : ProcessType = undefined 

private _trialBalanceId : TrialBalanceId = undefined 

private _status : Status = undefined 

private _journalCcy : string = undefined 

private _bankAccount : string = undefined 

private _inventoryAccount : string = undefined 

private _appregDateFrom : string = undefined 
private _appregDateTo : string = undefined 

private _securityCode : string = undefined 

private _sortFieldOrder1 : string = undefined 
private _sortField1 : SortField1 = undefined 

private _sortFieldOrder2 : string = undefined 
private _sortField2 : SortField2 = undefined 

private _sortFieldOrder3 : string = undefined 
private _sortField3 : SortField3 = undefined 



/**
 *   Accessor methods
*/


public transactionType(v : TransactionType ) : AbstractGLETransactionQuery{
    this._transactionType=v
    return this
}

/**
  Field with a default value of ""
*/


public referenceNo(v : string) : AbstractGLETransactionQuery{
    this._referenceNo=v
    return this
}

/**
  Field with a default value of ""
*/


public cxlReferenceNo(v : string) : AbstractGLETransactionQuery{
    this._cxlReferenceNo=v
    return this
}

public processType(v : ProcessType ) : AbstractGLETransactionQuery{
    this._processType=v
    return this
}

public trialBalanceId(v : TrialBalanceId ) : AbstractGLETransactionQuery{
    this._trialBalanceId=v
    return this
}

public status(v : Status ) : AbstractGLETransactionQuery{
    this._status=v
    return this
}

/**
  Field with a default value of ""
*/


public journalCcy(v : string) : AbstractGLETransactionQuery{
    this._journalCcy=v
    return this
}

/**
  Field with a default value of ""
*/


public bankAccount(v : string) : AbstractGLETransactionQuery{
    this._bankAccount=v
    return this
}

/**
  Field with a default value of ""
*/


public inventoryAccount(v : string) : AbstractGLETransactionQuery{
    this._inventoryAccount=v
    return this
}

/**
  Field with a default value of "25-06-2018"
*/


public appregDateFrom(v : string) : AbstractGLETransactionQuery{
    this._appregDateFrom=v
    return this
}
/**
  Field with a default value of "25-06-2018"
*/


public appregDateTo(v : string) : AbstractGLETransactionQuery{
    this._appregDateTo=v
    return this
}

/**
  Field with a default value of ""
*/


public securityCode(v : string) : AbstractGLETransactionQuery{
    this._securityCode=v
    return this
}

/**
  Field with a default value of ""
*/


public sortFieldOrder1(v : string) : AbstractGLETransactionQuery{
    this._sortFieldOrder1=v
    return this
}
public sortField1(v : SortField1 ) : AbstractGLETransactionQuery{
    this._sortField1=v
    return this
}

/**
  Field with a default value of ""
*/


public sortFieldOrder2(v : string) : AbstractGLETransactionQuery{
    this._sortFieldOrder2=v
    return this
}
public sortField2(v : SortField2 ) : AbstractGLETransactionQuery{
    this._sortField2=v
    return this
}

/**
  Field with a default value of ""
*/


public sortFieldOrder3(v : string) : AbstractGLETransactionQuery{
    this._sortFieldOrder3=v
    return this
}
public sortField3(v : SortField3 ) : AbstractGLETransactionQuery{
    this._sortField3=v
    return this
}




 protected fetchFields() : any[] {
        let fields :any[] = []

        if(this._transactionType!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="transactionType"]' , value : this._transactionType});
}

if(this._referenceNo!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="referenceNo"]' , value : this._referenceNo});
}

if(this._cxlReferenceNo!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="cxlReferenceNo"]' , value : this._cxlReferenceNo});
}

if(this._processType!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="processType"]' , value : this._processType});
}

if(this._trialBalanceId!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="trialBalanceId"]' , value : this._trialBalanceId});
}

if(this._status!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="status"]' , value : this._status});
}

if(this._journalCcy!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="journalCcy"]' , value : this._journalCcy});
}

if(this._bankAccount!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="bankAccount"]' , value : this._bankAccount});
}

if(this._inventoryAccount!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="inventoryAccount"]' , value : this._inventoryAccount});
}

if(this._appregDateFrom!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="appregDateFrom"]' , value : this._appregDateFrom});
}
if(this._appregDateTo!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="appregDateTo"]' , value : this._appregDateTo});
}

if(this._securityCode!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="securityCode"]' , value : this._securityCode});
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


    return fields;

   }


}






