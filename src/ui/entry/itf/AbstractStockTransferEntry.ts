
import { BaseUIOperations } from "../../BaseUIOperations";


//Define the results Enum

enum ResultColumns {
    
}


        enum CollateralType {
              CASH ="CASH",   SECURITY ="SECURITY", 
        }
        enum TransferType {
              _ =" ",   TRANSFER_IN ="TRANSFER_IN",   TRANSFER_OUT ="TRANSFER_OUT",   TRANSFER_INTERNAL_OWN ="TRANSFER_INTERNAL_OWN",   TRANSFER_INTERNAL_OTHER ="TRANSFER_INTERNAL_OTHER",   CHANGE_BOARD_OF_SECURITY ="CHANGE_BOARD_OF_SECURITY", 
        }
        enum ChangeBoardType {
              FL ="FL",   LF ="LF",   RF ="RF", 
        }
        enum Cam01Required {
              No ="N",   Yes ="Y", 
        }
        enum AccountBalanceTypeFrom {
              One0_Free ="10",   One1_Margin ="11",   One2_Pledge ="12",   One3_Collateral ="13",   One4_Physical ="14",   One5_IPO ="15",   One6_Register ="16",   One7_Expect_Rights ="17",   One8_Rights ="18",   One9_Blocked ="19", 
        }
        enum AccountBalanceTypeTo {
              One0_Free ="10",   One1_Margin ="11",   One2_Pledge ="12",   One3_Collateral ="13",   One4_Physical ="14",   One5_IPO ="15",   One6_Register ="16",   One7_Expect_Rights ="17",   One8_Rights ="18",   One9_Blocked ="19", 
        }
        enum ReasonCodeValue {
              _ =" ",   TENDER_OFFERTransfer_For_Tender_Offer ="TENDER_OFFER", 
        }
        enum AuthorizationRequired {
              YES ="Y",   NO ="N", 
        }
        enum ReverseTransferFlag {
              No ="N",   Yes ="Y", 
        }


export abstract class AbstractStockTransferEntry extends BaseUIOperations {

    static ResultColumns = ResultColumns
    
        static CollateralType = CollateralType;
        static TransferType = TransferType;
        static ChangeBoardType = ChangeBoardType;
        static Cam01Required = Cam01Required;
        static AccountBalanceTypeFrom = AccountBalanceTypeFrom;
        static AccountBalanceTypeTo = AccountBalanceTypeTo;
        static ReasonCodeValue = ReasonCodeValue;
        static AuthorizationRequired = AuthorizationRequired;
        static ReverseTransferFlag = ReverseTransferFlag;


/**
 *    Private members 
*/


private _collateralType : CollateralType = undefined 

private _securityCode : string = undefined 

private _transferType : TransferType = undefined 

private _changeBoardType : ChangeBoardType = undefined 

private _cam01Required : Cam01Required = undefined 

private _accountBalanceTypeFrom : AccountBalanceTypeFrom = undefined 

private _accountBalanceTypeTo : AccountBalanceTypeTo = undefined 

private _fromExternalAccount : string = undefined 

private _fromAccount : string = undefined 

private _toAccount : string = undefined 

private _fromExternalParticipantId : string = undefined 

private _toPartyId : string = undefined 

private _fromExternalParticipantName : string = undefined 

private _toExternalParticipantName : string = undefined 

private _transactionDateStr : string = undefined 
private _tradeTime : string = undefined 

private _transferQuantity : string = undefined 

private _bookCost : string = undefined 

private _reasonCodeValue : ReasonCodeValue = undefined 

private _authorizationRequired : AuthorizationRequired = undefined 

private _purpose : string = undefined 

private _relation : string = undefined 

private _fromAccountName : string = undefined 

private _externalReferenceNo : string = undefined 

private _transactionReferenceNo : string = undefined 

private _reverseTransferFlag : ReverseTransferFlag = undefined 

private _documentFile : string = undefined 



/**
 *   Accessor methods
*/


public collateralType(v : CollateralType ) : AbstractStockTransferEntry{
    this._collateralType=v
    return this
}

/**
  Field with a default value of ""
*/


public securityCode(v : string) : AbstractStockTransferEntry{
    this._securityCode=v
    return this
}

public transferType(v : TransferType ) : AbstractStockTransferEntry{
    this._transferType=v
    return this
}

public changeBoardType(v : ChangeBoardType ) : AbstractStockTransferEntry{
    this._changeBoardType=v
    return this
}

public cam01Required(v : Cam01Required ) : AbstractStockTransferEntry{
    this._cam01Required=v
    return this
}

public accountBalanceTypeFrom(v : AccountBalanceTypeFrom ) : AbstractStockTransferEntry{
    this._accountBalanceTypeFrom=v
    return this
}

public accountBalanceTypeTo(v : AccountBalanceTypeTo ) : AbstractStockTransferEntry{
    this._accountBalanceTypeTo=v
    return this
}

/**
  Field with a default value of ""
*/


public fromExternalAccount(v : string) : AbstractStockTransferEntry{
    this._fromExternalAccount=v
    return this
}

/**
  Field with a default value of ""
*/


public fromAccount(v : string) : AbstractStockTransferEntry{
    this._fromAccount=v
    return this
}

/**
  Field with a default value of ""
*/


public toAccount(v : string) : AbstractStockTransferEntry{
    this._toAccount=v
    return this
}

/**
  Field with a default value of ""
*/


public fromExternalParticipantId(v : string) : AbstractStockTransferEntry{
    this._fromExternalParticipantId=v
    return this
}

/**
  Field with a default value of ""
*/


public toPartyId(v : string) : AbstractStockTransferEntry{
    this._toPartyId=v
    return this
}

/**
  Field with a default value of ""
*/


public fromExternalParticipantName(v : string) : AbstractStockTransferEntry{
    this._fromExternalParticipantName=v
    return this
}

/**
  Field with a default value of ""
*/


public toExternalParticipantName(v : string) : AbstractStockTransferEntry{
    this._toExternalParticipantName=v
    return this
}

/**
  Field with a default value of ""
*/


public transactionDateStr(v : string) : AbstractStockTransferEntry{
    this._transactionDateStr=v
    return this
}
/**
  Field with a default value of ""
*/


public tradeTime(v : string) : AbstractStockTransferEntry{
    this._tradeTime=v
    return this
}

/**
  Field with a default value of ""
*/


public transferQuantity(v : string) : AbstractStockTransferEntry{
    this._transferQuantity=v
    return this
}

/**
  Field with a default value of ""
*/


public bookCost(v : string) : AbstractStockTransferEntry{
    this._bookCost=v
    return this
}

public reasonCodeValue(v : ReasonCodeValue ) : AbstractStockTransferEntry{
    this._reasonCodeValue=v
    return this
}

public authorizationRequired(v : AuthorizationRequired ) : AbstractStockTransferEntry{
    this._authorizationRequired=v
    return this
}

/**
  Field with a default value of ""
*/


public purpose(v : string) : AbstractStockTransferEntry{
    this._purpose=v
    return this
}

/**
  Field with a default value of ""
*/


public relation(v : string) : AbstractStockTransferEntry{
    this._relation=v
    return this
}

/**
  Field with a default value of ""
*/


public fromAccountName(v : string) : AbstractStockTransferEntry{
    this._fromAccountName=v
    return this
}

/**
  Field with a default value of ""
*/


public externalReferenceNo(v : string) : AbstractStockTransferEntry{
    this._externalReferenceNo=v
    return this
}

/**
  Field with a default value of ""
*/


public transactionReferenceNo(v : string) : AbstractStockTransferEntry{
    this._transactionReferenceNo=v
    return this
}

public reverseTransferFlag(v : ReverseTransferFlag ) : AbstractStockTransferEntry{
    this._reverseTransferFlag=v
    return this
}

/**
  Field with a default value of ""
*/


public documentFile(v : string) : AbstractStockTransferEntry{
    this._documentFile=v
    return this
}




 protected fetchFields() : any[] {
        let fields :any[] = []

        if(this._collateralType!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="collateralType"]' , value : this._collateralType});
}

if(this._securityCode!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="securityCode"]' , value : this._securityCode});
}

if(this._transferType!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="transferType"]' , value : this._transferType});
}

if(this._changeBoardType!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="changeBoardType"]' , value : this._changeBoardType});
}

if(this._cam01Required!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="cam01Required"]' , value : this._cam01Required});
}

if(this._accountBalanceTypeFrom!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="accountBalanceTypeFrom"]' , value : this._accountBalanceTypeFrom});
}


if(this._fromExternalAccount!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="fromExternalAccount"]' , value : this._fromExternalAccount});
}

if(this._fromAccount!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="fromAccount"]' , value : this._fromAccount});
}

if(this._toAccount!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="toAccount"]' , value : this._toAccount});
}

if(this._fromExternalParticipantId!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="fromExternalParticipantId"]' , value : this._fromExternalParticipantId});
}

if(this._toPartyId!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="toPartyId"]' , value : this._toPartyId});
}

if(this._fromExternalParticipantName!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="fromExternalParticipantName"]' , value : this._fromExternalParticipantName});
}

if(this._toExternalParticipantName!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="toExternalParticipantName"]' , value : this._toExternalParticipantName});
}

if(this._transactionDateStr!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="transactionDateStr"]' , value : this._transactionDateStr});
}
if(this._tradeTime!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="tradeTime"]' , value : this._tradeTime});
}

if(this._transferQuantity!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="transferQuantity"]' , value : this._transferQuantity});
}

if(this._bookCost!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="bookCost"]' , value : this._bookCost});
}

if(this._reasonCodeValue!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="reasonCodeValue"]' , value : this._reasonCodeValue});
}

if(this._authorizationRequired!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="authorizationRequired"]' , value : this._authorizationRequired});
}

if(this._purpose!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="purpose"]' , value : this._purpose});
}

if(this._relation!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="relation"]' , value : this._relation});
}

if(this._fromAccountName!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="fromAccountName"]' , value : this._fromAccountName});
}

if(this._externalReferenceNo!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="externalReferenceNo"]' , value : this._externalReferenceNo});
}

if(this._transactionReferenceNo!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="transactionReferenceNo"]' , value : this._transactionReferenceNo});
}

if(this._reverseTransferFlag!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="reverseTransferFlag"]' , value : this._reverseTransferFlag});
}

if(this._documentFile!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="documentFile"]' , value : this._documentFile});
}

//added to the end for proper handling
if(this._accountBalanceTypeTo!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="accountBalanceTypeTo"]' , value : this._accountBalanceTypeTo});
}



    return fields;

   }


}






