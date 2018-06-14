
import { BaseUIOperations } from "../../BaseUIOperations";


//Define the results Enum

enum ResultColumns {
    Reference_Number = "Reference Number",Transfer_Type = "Transfer Type",From_Account_No_External = "From Account No (External)",From_Account_No_Internal = "From Account No (Internal)",To_Account_No_External = "To Account No (External)",To_Account_No_Internal = "To Account No (Internal)",Securities_Purpose_From = "Securities Purpose From",Securities_Purpose_To = "Securities Purpose To",Status = "Status",Security_Code = "Security Code",Collateral_Type = "Collateral Type",Book_Cost = "Book Cost",Conversion_Type = "Conversion Type",Transfer_Quantity = "Transfer Quantity",Transaction_Date = "Transaction Date",Data_Source = "Data Source",External_Reference_No = "External Reference No",From_Participant_Id = "From Participant Id",To_Participant_Id = "To Participant Id",Transaction_Time = "Transaction Time",External_Participant_Name = "External Participant Name",Remarks = "Remarks",Reject_Reason = "Reject Reason",Transfer_Reason = "Transfer Reason",Purpose = "Purpose",Txn_Reference_No = "Txn Reference No",Relation = "Relation",From_Account_Name = "From Account Name",Relation_Document = "Relation Document",
}


        enum OperationObjective {
              QUERY ="QUERY",   AUTHORIZATION ="AUTHORIZATION",   AUTHORIZATION_PEND ="AUTHORIZATION_PEND",   TRANSFER_CANCEL ="TRANSFER_CANCEL",   MARK_AS_COMPLETE ="MARK_AS_COMPLETE",   TRANSFER_IN_AUTH ="TRANSFER_IN_AUTH", 
        }
        enum TransferType {
               TRANSFER_IN ="TRANSFER_IN",   TRANSFER_OUT ="TRANSFER_OUT",   TRANSFER_INTERNAL_OWN ="TRANSFER_INTERNAL_OWN",   TRANSFER_INTERNAL_OTHER ="TRANSFER_INTERNAL_OTHER",   CHANGE_BOARD_OF_SECURITY ="CHANGE_BOARD_OF_SECURITY", 
        }
        enum AccountBalanceTypeFrom {
               One0_Free ="10",   One1_Margin ="11",   One2_Pledge ="12",   One3_Collateral ="13",   One4_Physical ="14",   One5_IPO ="15",   One6_Register ="16",   One7_Expect_Rights ="17",   One8_Rights ="18",   One9_Blocked ="19", 
        }
        enum AccountBalanceTypeTo {
               One0_Free ="10",   One1_Margin ="11",   One2_Pledge ="12",   One3_Collateral ="13",   One4_Physical ="14",   One5_IPO ="15",   One6_Register ="16",   One7_Expect_Rights ="17",   One8_Rights ="18",   One9_Blocked ="19", 
        }
        enum StockTransferStatus {
               PENDING_ACC_TRANSFER ="PENDING_ACC_TRANSFER",   FO_OUT_FAIL ="FO_OUT_FAIL",   ACC_TRANSFER_REJECTED ="ACC_TRANSFER_REJECTED",   TSD_SENT ="TSD_SENT",   TSD_REJECT ="TSD_REJT",   FO_IN_FAIL ="FO_IN_FAIL",   TRANSFER_COMPLETE ="TRANSFER_COMPLETE",   PEND ="PEND",   PEND_APPROVE ="PEND_APPROVE",   PEND_REJECT ="PEND_REJECT", INIT ="INIT", 
        }
        enum CollateralType {
               CASH ="CASH",   SECURITY ="SECURITY", 
        }

        enum ConversionType {
               FL ="FL",   LF ="LF",   RF ="RF", 
        }
        enum DataSource {
               SYSTEM ="SYSTEM",   SCREEN ="SCREEN", 
        }
        enum ReasonPk {
               TENDER_OFFERTransfer_For_Tender_Offer ="9064", 
        }


export abstract class AbstractStockTransferQuery extends BaseUIOperations {

    static ResultColumns = ResultColumns
    
        static OperationObjective = OperationObjective;
        static TransferType = TransferType;
        static AccountBalanceTypeFrom = AccountBalanceTypeFrom;
        static AccountBalanceTypeTo = AccountBalanceTypeTo;
        static StockTransferStatus = StockTransferStatus;
       
        static CollateralType = CollateralType;
       
        static ConversionType = ConversionType;
        static DataSource = DataSource;
        static ReasonPk = ReasonPk;


/**
 *    Private members 
*/


private _operationObjective : OperationObjective = undefined 

private _transferType : TransferType = undefined 

private _fromAccountNo : string = undefined 

private _toAccountNo : string = undefined 

private _accountBalanceTypeFrom : AccountBalanceTypeFrom = undefined 

private _accountBalanceTypeTo : AccountBalanceTypeTo = undefined 

private _securityCode : string = undefined 

private _referenceNo : string = undefined 

private _stockTransferStatus : StockTransferStatus = undefined 


private _collateralType : CollateralType = undefined 



private _conversionType : ConversionType = undefined 

private _transactionDateFrom : string = undefined 
private _transactionDateTo : string = undefined 

private _dataSource : DataSource = undefined 

private _reasonPk : ReasonPk = undefined 

private _txnReferenceNo : string = undefined 

private _externalReferenceNo : string = undefined 



/**
 *   Accessor methods
*/


public operationObjective(v : OperationObjective ) : AbstractStockTransferQuery{
    this._operationObjective=v
    return this
}

public transferType(v : TransferType ) : AbstractStockTransferQuery{
    this._transferType=v
    return this
}

/**
  Field with a default value of ""
*/


public fromAccountNo(v : string) : AbstractStockTransferQuery{
    this._fromAccountNo=v
    return this
}

/**
  Field with a default value of "C0STFF001-7"
*/


public toAccountNo(v : string) : AbstractStockTransferQuery{
    this._toAccountNo=v
    return this
}

public accountBalanceTypeFrom(v : AccountBalanceTypeFrom ) : AbstractStockTransferQuery{
    this._accountBalanceTypeFrom=v
    return this
}

public accountBalanceTypeTo(v : AccountBalanceTypeTo ) : AbstractStockTransferQuery{
    this._accountBalanceTypeTo=v
    return this
}

/**
  Field with a default value of ""
*/


public securityCode(v : string) : AbstractStockTransferQuery{
    this._securityCode=v
    return this
}

/**
  Field with a default value of ""
*/


public referenceNo(v : string) : AbstractStockTransferQuery{
    this._referenceNo=v
    return this
}

public stockTransferStatus(v : StockTransferStatus ) : AbstractStockTransferQuery{
    this._stockTransferStatus=v
    return this
}


public collateralType(v : CollateralType ) : AbstractStockTransferQuery{
    this._collateralType=v
    return this
}

public conversionType(v : ConversionType ) : AbstractStockTransferQuery{
    this._conversionType=v
    return this
}

/**
  Field with a default value of ""
*/


public transactionDateFrom(v : string) : AbstractStockTransferQuery{
    this._transactionDateFrom=v
    return this
}
/**
  Field with a default value of ""
*/


public transactionDateTo(v : string) : AbstractStockTransferQuery{
    this._transactionDateTo=v
    return this
}

public dataSource(v : DataSource ) : AbstractStockTransferQuery{
    this._dataSource=v
    return this
}

public reasonPk(v : ReasonPk ) : AbstractStockTransferQuery{
    this._reasonPk=v
    return this
}

/**
  Field with a default value of ""
*/


public txnReferenceNo(v : string) : AbstractStockTransferQuery{
    this._txnReferenceNo=v
    return this
}

/**
  Field with a default value of ""
*/


public externalReferenceNo(v : string) : AbstractStockTransferQuery{
    this._externalReferenceNo=v
    return this
}




 protected fetchFields() : any[] {
        let fields :any[] = []

        if(this._operationObjective!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="operationObjective"]' , value : this._operationObjective});
}

if(this._transferType!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="transferType"]' , value : this._transferType});
}

if(this._fromAccountNo!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="fromAccountNo"]' , value : this._fromAccountNo});
}

if(this._toAccountNo!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="toAccountNo"]' , value : this._toAccountNo});
}

if(this._accountBalanceTypeFrom!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="accountBalanceTypeFrom"]' , value : this._accountBalanceTypeFrom});
}

if(this._accountBalanceTypeTo!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="accountBalanceTypeTo"]' , value : this._accountBalanceTypeTo});
}

if(this._securityCode!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="securityCode"]' , value : this._securityCode});
}

if(this._referenceNo!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="referenceNo"]' , value : this._referenceNo});
}

if(this._stockTransferStatus!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="stockTransferStatus"]' , value : this._stockTransferStatus});
}
if(this._stockTransferStatus!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="stockTransferStatus"]' , value : this._stockTransferStatus});
}
if(this._stockTransferStatus!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="stockTransferStatus"]' , value : this._stockTransferStatus});
}
if(this._stockTransferStatus!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="stockTransferStatus"]' , value : this._stockTransferStatus});
}
if(this._stockTransferStatus!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="stockTransferStatus"]' , value : this._stockTransferStatus});
}
if(this._stockTransferStatus!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="stockTransferStatus"]' , value : this._stockTransferStatus});
}

if(this._collateralType!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="collateralType"]' , value : this._collateralType});
}

if(this._collateralType!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="collateralType"]' , value : this._collateralType});
}

if(this._conversionType!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="conversionType"]' , value : this._conversionType});
}

if(this._transactionDateFrom!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="transactionDateFrom"]' , value : this._transactionDateFrom});
}
if(this._transactionDateTo!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="transactionDateTo"]' , value : this._transactionDateTo});
}

if(this._dataSource!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="dataSource"]' , value : this._dataSource});
}

if(this._reasonPk!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="reasonPk"]' , value : this._reasonPk});
}

if(this._txnReferenceNo!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="txnReferenceNo"]' , value : this._txnReferenceNo});
}

if(this._externalReferenceNo!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="externalReferenceNo"]' , value : this._externalReferenceNo});
}


    return fields;

   }


}






