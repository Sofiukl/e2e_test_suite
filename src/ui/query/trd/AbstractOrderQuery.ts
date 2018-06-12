
import { BaseUIOperations } from "../../BaseUIOperations";


//Define the results Enum

enum ResultColumns {
    Order_Reference_No = "Order Reference No",Client_Order_No = "Client Order No",Cross_Reference_No = "Cross Reference No",Account_No = "Account No",Account_Name = "Account Name",Market = "Market",Order_Type = "Order Type",Order_Matched_Status = "Order Matched Status",Security_Id = "Security Id",Trade_Currency = "Trade Currency",Original_Quantity = "Original Quantity",Matched_Quantity = "Matched Quantity",Remaining_Quantity = "Remaining Quantity",Order_Date = "Order Date",Expiry_Date = "Expiry Date",Brokerage = "Brokerage",Buy_Sell_Flag = "Buy/Sell Flag",GST_Included = "GST Included",Brokerage_Rate = "Brokerage Rate",Minimum_Brokerage = "Minimum Brokerage",Status = "Status",Price = "Price",Data_Source = "Data Source",Commission_Category = "Commission Category",Settlement_Method = "Settlement Method",SRN = "SRN",Sender_Reference_No = "Sender Reference No",FO_Reference_No = "FO Reference No",Owner_Type = "Owner Type",Broker_Time = "Broker Time",Show_Price = "Show Price",Order_Status = "Order Status",
}


        enum OrderStatus {
               Normal ="NORMAL",   Cancel ="CANCEL", 
        }
        enum OrderType {
               Market ="MARKET",   Limit ="LIMIT",   ATO ="A",   MP ="M",   MKT ="O",   MTL ="L",   ATC ="C", 
        }
        enum BuySellFlag {
               BUY ="B",   SELL ="S", 
        }
        enum OrderMatchedStatus {
              Fully_Matched ="MATCHED",   Partially_Matched ="PARTIAL",   Unmatched ="OUTSTANDING", 
        }
        enum TimeInForce {
               GTC ="GTC",   GTD ="GTD", 
        }
        enum DataSource {
               CDS ="CDS",   REST_SERVICE ="REST_SERVICE",   SCREEN ="SCREEN",   SETTRADE ="SETTRADE",   UPLOAD ="UPLOAD", 
        }
        enum CommissionCategory {
               BOX ="BOX",   BOX1 ="BOX1",   ZERO ="ZERO",   BOX025 ="BOX025",   BOX20 ="BOX20",   BOX05 ="BOX05",   BOX10 ="BOX10",   BOX30 ="BOX30",   BOX40 ="BOX40",   BOX50 ="BOX50",   BOX60 ="BOX60",   BOX70 ="BOX70",   BOX80 ="BOX80",   BOX90 ="BOX90",   BOX110 ="BOX110",   BOX120 ="BOX120",   BOX130 ="BOX130",   BOX140 ="BOX140",   BOX150 ="BOX150",   FIX120 ="FIX120",   FIX025 ="FIX025",   FIX05 ="FIX05",   FIX10 ="FIX10",   FIX20 ="FIX20",   FIX30 ="FIX30",   FIX40 ="FIX40",   FIX50 ="FIX50",   FIX60 ="FIX60",   FIX70 ="FIX70",   FIX80 ="FIX80",   FIX90 ="FIX90",   FIX110 ="FIX110",   FIX130 ="FIX130",   FIX140 ="FIX140",   FIX150 ="FIX150",   FIX280 ="FIX280", 
        }
        enum SettlementMethod {
               DVP ="DVP",   HIN ="HIN",   ISSUER ="ISSUER", 
        }
        enum OwnerType {
               CUSTOMER ="C",   FOREIGN ="F",   INSTITUTION ="I",   PRINCIPAL ="P", 
        }
        enum Status {
               SX___Queuing_Order ="SX",   CX___Cancelled_Order ="CX",   DX___Cancelled_by_SET ="DX",   RS___Rejected_Order ="RS",   M___Matched_Order ="M",   MP___Matched_Partially ="MP",   CP___Cancelled_Partially ="CP", 
        }
        enum SortField1 {
              Order_Expiry_Date ="EXPIRY_DATE",   Order_Quantity ="QUANTITY",   Security_Id ="INSTRUMENT", 
        }
        enum SortField2 {
               Order_Expiry_Date ="EXPIRY_DATE",   Order_Quantity ="QUANTITY",   Security_Id ="INSTRUMENT", 
        }
        enum SortField3 {
               Order_Expiry_Date ="EXPIRY_DATE",   Order_Quantity ="QUANTITY",   Security_Id ="INSTRUMENT", 
        }
        enum SortField4 {
               Order_Expiry_Date ="EXPIRY_DATE",   Order_Quantity ="QUANTITY",   Security_Id ="INSTRUMENT", 
        }
        enum SortField5 {
               Order_Expiry_Date ="EXPIRY_DATE",   Order_Quantity ="QUANTITY",   Security_Id ="INSTRUMENT", 
        }
        enum SortField6 {
               Order_Expiry_Date ="EXPIRY_DATE",   Order_Quantity ="QUANTITY",   Security_Id ="INSTRUMENT", 
        }


export abstract class AbstractOrderQuery extends BaseUIOperations {

    static ResultColumns = ResultColumns
    
        static OrderStatus = OrderStatus;
        static OrderType = OrderType;
        static BuySellFlag = BuySellFlag;
        static OrderMatchedStatus = OrderMatchedStatus;
        static TimeInForce = TimeInForce;
        static DataSource = DataSource;
        static CommissionCategory = CommissionCategory;
        static SettlementMethod = SettlementMethod;
        static OwnerType = OwnerType;
        static Status = Status;
        static SortField1 = SortField1;
        static SortField2 = SortField2;
        static SortField3 = SortField3;
        static SortField4 = SortField4;
        static SortField5 = SortField5;
        static SortField6 = SortField6;


/**
 *    Private members 
*/


private _orderDateFrom : string = undefined 
private _orderDateTo : string = undefined 

private _orderReferenceNo : string = undefined 

private _clientOrderNumber : string = undefined 

private _crossReferenceNo : string = undefined 

private _senderReferenceNo : string = undefined 

private _foReferenceNo : string = undefined 

private _clientAccountNo : string = undefined 

private _orderStatus : OrderStatus = undefined 

private _clientName : string = undefined 

private _exchange : string = undefined 

private _securityId : string = undefined 

private _orderQuantityFrom : string = undefined 
private _orderQuantityTo : string = undefined 

private _currencyCode : string = undefined 

private _orderType : OrderType = undefined 

private _buySellFlag : BuySellFlag = undefined 

private _orderExpiryDate : string = undefined 

private _orderMatchedStatus : OrderMatchedStatus = undefined 

private _timeInForce : TimeInForce = undefined 

private _instrumentType : string = undefined 

private _dataSource : DataSource = undefined 

private _commissionCategory : CommissionCategory = undefined 

private _settlementMethod : SettlementMethod = undefined 

private _srn : string = undefined 

private _ownerType : OwnerType = undefined 

private _status : Status = undefined 

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

private _sortFieldOrder6 : string = undefined 
private _sortField6 : SortField6 = undefined 



/**
 *   Accessor methods
*/


/**
  Field with a default value of "25-03-2018"
*/


public orderDateFrom(v : string) : AbstractOrderQuery{
    this._orderDateFrom=v
    return this
}
/**
  Field with a default value of "04-04-2018"
*/


public orderDateTo(v : string) : AbstractOrderQuery{
    this._orderDateTo=v
    return this
}

/**
  Field with a default value of ""
*/


public orderReferenceNo(v : string) : AbstractOrderQuery{
    this._orderReferenceNo=v
    return this
}

/**
  Field with a default value of ""
*/


public clientOrderNumber(v : string) : AbstractOrderQuery{
    this._clientOrderNumber=v
    return this
}

/**
  Field with a default value of ""
*/


public crossReferenceNo(v : string) : AbstractOrderQuery{
    this._crossReferenceNo=v
    return this
}

/**
  Field with a default value of ""
*/


public senderReferenceNo(v : string) : AbstractOrderQuery{
    this._senderReferenceNo=v
    return this
}

/**
  Field with a default value of ""
*/


public foReferenceNo(v : string) : AbstractOrderQuery{
    this._foReferenceNo=v
    return this
}

/**
  Field with a default value of ""
*/


public clientAccountNo(v : string) : AbstractOrderQuery{
    this._clientAccountNo=v
    return this
}

public orderStatus(v : OrderStatus ) : AbstractOrderQuery{
    this._orderStatus=v
    return this
}

/**
  Field with a default value of ""
*/


public clientName(v : string) : AbstractOrderQuery{
    this._clientName=v
    return this
}

/**
  Field with a default value of ""
*/


public exchange(v : string) : AbstractOrderQuery{
    this._exchange=v
    return this
}

/**
  Field with a default value of ""
*/


public securityId(v : string) : AbstractOrderQuery{
    this._securityId=v
    return this
}

/**
  Field with a default value of ""
*/


public orderQuantityFrom(v : string) : AbstractOrderQuery{
    this._orderQuantityFrom=v
    return this
}
/**
  Field with a default value of ""
*/


public orderQuantityTo(v : string) : AbstractOrderQuery{
    this._orderQuantityTo=v
    return this
}

/**
  Field with a default value of ""
*/


public currencyCode(v : string) : AbstractOrderQuery{
    this._currencyCode=v
    return this
}

public orderType(v : OrderType ) : AbstractOrderQuery{
    this._orderType=v
    return this
}

public buySellFlag(v : BuySellFlag ) : AbstractOrderQuery{
    this._buySellFlag=v
    return this
}

/**
  Field with a default value of ""
*/


public orderExpiryDate(v : string) : AbstractOrderQuery{
    this._orderExpiryDate=v
    return this
}

public orderMatchedStatus(v : OrderMatchedStatus ) : AbstractOrderQuery{
    this._orderMatchedStatus=v
    return this
}

public timeInForce(v : TimeInForce ) : AbstractOrderQuery{
    this._timeInForce=v
    return this
}

/**
  Field with a default value of ""
*/


public instrumentType(v : string) : AbstractOrderQuery{
    this._instrumentType=v
    return this
}

public dataSource(v : DataSource ) : AbstractOrderQuery{
    this._dataSource=v
    return this
}

public commissionCategory(v : CommissionCategory ) : AbstractOrderQuery{
    this._commissionCategory=v
    return this
}

public settlementMethod(v : SettlementMethod ) : AbstractOrderQuery{
    this._settlementMethod=v
    return this
}

/**
  Field with a default value of ""
*/


public srn(v : string) : AbstractOrderQuery{
    this._srn=v
    return this
}

public ownerType(v : OwnerType ) : AbstractOrderQuery{
    this._ownerType=v
    return this
}

public status(v : Status ) : AbstractOrderQuery{
    this._status=v
    return this
}

/**
  Field with a default value of ""
*/


public sortFieldOrder1(v : string) : AbstractOrderQuery{
    this._sortFieldOrder1=v
    return this
}
public sortField1(v : SortField1 ) : AbstractOrderQuery{
    this._sortField1=v
    return this
}

/**
  Field with a default value of ""
*/


public sortFieldOrder2(v : string) : AbstractOrderQuery{
    this._sortFieldOrder2=v
    return this
}
public sortField2(v : SortField2 ) : AbstractOrderQuery{
    this._sortField2=v
    return this
}

/**
  Field with a default value of ""
*/


public sortFieldOrder3(v : string) : AbstractOrderQuery{
    this._sortFieldOrder3=v
    return this
}
public sortField3(v : SortField3 ) : AbstractOrderQuery{
    this._sortField3=v
    return this
}

/**
  Field with a default value of ""
*/


public sortFieldOrder4(v : string) : AbstractOrderQuery{
    this._sortFieldOrder4=v
    return this
}
public sortField4(v : SortField4 ) : AbstractOrderQuery{
    this._sortField4=v
    return this
}

/**
  Field with a default value of ""
*/


public sortFieldOrder5(v : string) : AbstractOrderQuery{
    this._sortFieldOrder5=v
    return this
}
public sortField5(v : SortField5 ) : AbstractOrderQuery{
    this._sortField5=v
    return this
}

/**
  Field with a default value of ""
*/


public sortFieldOrder6(v : string) : AbstractOrderQuery{
    this._sortFieldOrder6=v
    return this
}
public sortField6(v : SortField6 ) : AbstractOrderQuery{
    this._sortField6=v
    return this
}




 protected fetchFields() : any[] {
        let fields :any[] = []

        if(this._orderDateFrom!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="orderDateFrom"]' , value : this._orderDateFrom});
}
if(this._orderDateTo!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="orderDateTo"]' , value : this._orderDateTo});
}

if(this._orderReferenceNo!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="orderReferenceNo"]' , value : this._orderReferenceNo});
}

if(this._clientOrderNumber!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="clientOrderNumber"]' , value : this._clientOrderNumber});
}

if(this._crossReferenceNo!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="crossReferenceNo"]' , value : this._crossReferenceNo});
}

if(this._senderReferenceNo!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="senderReferenceNo"]' , value : this._senderReferenceNo});
}

if(this._foReferenceNo!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="foReferenceNo"]' , value : this._foReferenceNo});
}

if(this._clientAccountNo!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="clientAccountNo"]' , value : this._clientAccountNo});
}

if(this._orderStatus!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="orderStatus"]' , value : this._orderStatus});
}

if(this._clientName!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="clientName"]' , value : this._clientName});
}

if(this._exchange!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="exchange"]' , value : this._exchange});
}

if(this._securityId!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="securityId"]' , value : this._securityId});
}

if(this._orderQuantityFrom!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="orderQuantityFrom"]' , value : this._orderQuantityFrom});
}
if(this._orderQuantityTo!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="orderQuantityTo"]' , value : this._orderQuantityTo});
}

if(this._currencyCode!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="currencyCode"]' , value : this._currencyCode});
}

if(this._orderType!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="orderType"]' , value : this._orderType});
}

if(this._buySellFlag!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="buySellFlag"]' , value : this._buySellFlag});
}

if(this._orderExpiryDate!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="orderExpiryDate"]' , value : this._orderExpiryDate});
}

if(this._orderMatchedStatus!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="orderMatchedStatus"]' , value : this._orderMatchedStatus});
}

if(this._timeInForce!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="timeInForce"]' , value : this._timeInForce});
}

if(this._instrumentType!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="instrumentType"]' , value : this._instrumentType});
}

if(this._dataSource!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="dataSource"]' , value : this._dataSource});
}

if(this._commissionCategory!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="commissionCategory"]' , value : this._commissionCategory});
}

if(this._settlementMethod!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="settlementMethod"]' , value : this._settlementMethod});
}

if(this._srn!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="srn"]' , value : this._srn});
}

if(this._ownerType!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="ownerType"]' , value : this._ownerType});
}

if(this._status!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="status"]' , value : this._status});
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

if(this._sortFieldOrder6!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="sortFieldOrder6"]' , value : this._sortFieldOrder6});
}
if(this._sortField6!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="sortField6"]' , value : this._sortField6});
}


    return fields;

   }


}






