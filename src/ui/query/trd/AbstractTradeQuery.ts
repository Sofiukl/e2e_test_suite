
import { BaseUIOperations } from "../../BaseUIOperations";


//Define the results Enum

enum ResultColumns {
    Trade_Date = "Trade Date",Value_Date = "Value Date",Reference_Number = "Reference Number",B_S = "B/S",Quantity = "Quantity",Security_Code = "Security Code",Security_Name = "Security Name",Alternate_Security_Code = "Alternate Security Code",Price = "Price",Account_No = "Account No",Account_Name = "Account Name",Inventory_Account_No = "Inventory Account No",Trade_Currency = "Trade Currency",Settlement_Currency = "Settlement Currency",Principal_Amount = "Principal Amount",Net_Amount = "Net Amount",Clearing_Party = "Clearing Party",DVP_Eligible = "DVP Eligible",Trade_Type = "Trade Type",Sub_Trade_Type = "Sub Trade Type",Entry_By = "Entry By",Agent_Code = "Agent Code",Status = "Status",MBSCC_Flag = "MBSCC Flag",Pending_For = "Pending For",Account_Balance_Type = "Account Balance Type",Channel = "Channel",Trading_Mode = "Trading Mode",
}


        enum TradeType {
               EQUITYEquity_Trade ="EQUITY", 
        }
        enum SubTradeType {
             
        }
        enum OfficeId {
               Zero01 ="001", 
        }
        enum CounterPartyType {
               BROKER ="BROKER",   CLIENT ="CLIENT",   FIRM ="INTERNAL", 
        }
        enum ClearingParty {
             
        }
        enum DvpEligible {
               YES ="Y",   NO ="N", 
        }
        enum BuySellFlag {
               BUY ="B",   SELL ="S", 
        }
        enum PrincipalAgentFlag {
               Agency ="A",   Principal ="P", 
        }
        enum AccountBalanceType {
               One0_Free ="10",   One1_Margin ="11",   One2_Pledge ="12",   One3_Collateral ="13",   One4_Physical ="14",   One5_IPO ="15",   One6_Register ="16",   One7_Expect_Rights ="17",   One8_Rights ="18",   One9_Blocked ="19", 
        }
        enum ChannelStr {
               INTERNET ="INTERNET",   DEALER ="DEALER", 
        }
        enum Status {
               Cancel ="CANCEL",   Normal ="NORMAL", 
        }
        enum FormTEligibleFlag {
               No ="N",   Yes ="Y", 
        }
        enum AllocationStatus {
               ADJUSTED ="C",   ALLOCATED ="A",   No ="N",   Yes ="Y", 
        }
        enum CompressedTradeFlag {
               No ="N",   Yes ="Y", 
        }
        enum ShortSellingFlag {
               No ="N",   Yes ="Y", 
        }
        enum ShortSellExemptFlag {
               No ="N",   Yes ="Y", 
        }
        enum DataSource {
               CDS ="CDS",   REST_SERVICE ="REST_SERVICE",   SCREEN ="SCREEN",   SETTRADE ="SETTRADE",   UPLOAD ="UPLOAD", 
        }
        enum IdConfirmationEligible {
               All ="ALL",   Eligible ="YES",   Ineligible ="NO", 
        }
        enum RiskAssessment {
               CATGEN_HKX ="CATGEN-HKX",   CATLOW_HKX ="CATLOW-HKX",   CATUNML_HKX ="CATUNML-HKX", 
        }
        enum TradingMode {
               IBT ="IBT", 
        }
        enum SortField1 {
              Trade_Reference_No ="REFERENCE_NO,VERSION_NO",   Office_Id ="PREFIX",   Account_No ="ACCOUNT_NO",   Sales_Code ="SALES_CODE",   Value_Date ="VALUE_DATE",   Trade_Date ="TRADE_DATE",   Buy_Sell_Orientation ="BUY_SELL_ORIENTATION",   Trade_Currency ="TRADE_CCY_PK",   Price ="PRICE",   Quantity ="QUANTITY",   Principal_Amount ="PRINCIPAL_AMOUNT",   Security_Code ="SECURITY_ID",   Alternate_Security_Code ="ALTERNATE_SECURITY_ID",   Settlement_Currency ="SETTLEMENT_CCY_PK",   Inventory_Account_No ="INVENTORY_ACCOUNT_NO",   Agent_Code ="AGENT_CODE", 
        }
        enum SortField2 {
               Trade_Reference_No ="REFERENCE_NO,VERSION_NO",   Office_Id ="PREFIX",   Account_No ="ACCOUNT_NO",   Sales_Code ="SALES_CODE",   Value_Date ="VALUE_DATE",   Trade_Date ="TRADE_DATE",   Buy_Sell_Orientation ="BUY_SELL_ORIENTATION",   Trade_Currency ="TRADE_CCY_PK",   Price ="PRICE",   Quantity ="QUANTITY",   Principal_Amount ="PRINCIPAL_AMOUNT",   Security_Code ="SECURITY_ID",   Alternate_Security_Code ="ALTERNATE_SECURITY_ID",   Settlement_Currency ="SETTLEMENT_CCY_PK",   Inventory_Account_No ="INVENTORY_ACCOUNT_NO",   Agent_Code ="AGENT_CODE", 
        }
        enum SortField3 {
               Trade_Reference_No ="REFERENCE_NO,VERSION_NO",   Office_Id ="PREFIX",   Account_No ="ACCOUNT_NO",   Sales_Code ="SALES_CODE",   Value_Date ="VALUE_DATE",   Trade_Date ="TRADE_DATE",   Buy_Sell_Orientation ="BUY_SELL_ORIENTATION",   Trade_Currency ="TRADE_CCY_PK",   Price ="PRICE",   Quantity ="QUANTITY",   Principal_Amount ="PRINCIPAL_AMOUNT",   Security_Code ="SECURITY_ID",   Alternate_Security_Code ="ALTERNATE_SECURITY_ID",   Settlement_Currency ="SETTLEMENT_CCY_PK",   Inventory_Account_No ="INVENTORY_ACCOUNT_NO",   Agent_Code ="AGENT_CODE", 
        }
        enum SortField4 {
               Trade_Reference_No ="REFERENCE_NO,VERSION_NO",   Office_Id ="PREFIX",   Account_No ="ACCOUNT_NO",   Sales_Code ="SALES_CODE",   Value_Date ="VALUE_DATE",   Trade_Date ="TRADE_DATE",   Buy_Sell_Orientation ="BUY_SELL_ORIENTATION",   Trade_Currency ="TRADE_CCY_PK",   Price ="PRICE",   Quantity ="QUANTITY",   Principal_Amount ="PRINCIPAL_AMOUNT",   Security_Code ="SECURITY_ID",   Alternate_Security_Code ="ALTERNATE_SECURITY_ID",   Settlement_Currency ="SETTLEMENT_CCY_PK",   Inventory_Account_No ="INVENTORY_ACCOUNT_NO",   Agent_Code ="AGENT_CODE", 
        }
        enum SortField5 {
               Trade_Reference_No ="REFERENCE_NO,VERSION_NO",   Office_Id ="PREFIX",   Account_No ="ACCOUNT_NO",   Sales_Code ="SALES_CODE",   Value_Date ="VALUE_DATE",   Trade_Date ="TRADE_DATE",   Buy_Sell_Orientation ="BUY_SELL_ORIENTATION",   Trade_Currency ="TRADE_CCY_PK",   Price ="PRICE",   Quantity ="QUANTITY",   Principal_Amount ="PRINCIPAL_AMOUNT",   Security_Code ="SECURITY_ID",   Alternate_Security_Code ="ALTERNATE_SECURITY_ID",   Settlement_Currency ="SETTLEMENT_CCY_PK",   Inventory_Account_No ="INVENTORY_ACCOUNT_NO",   Agent_Code ="AGENT_CODE", 
        }
        enum SortField6 {
               Trade_Reference_No ="REFERENCE_NO,VERSION_NO",   Office_Id ="PREFIX",   Account_No ="ACCOUNT_NO",   Sales_Code ="SALES_CODE",   Value_Date ="VALUE_DATE",   Trade_Date ="TRADE_DATE",   Buy_Sell_Orientation ="BUY_SELL_ORIENTATION",   Trade_Currency ="TRADE_CCY_PK",   Price ="PRICE",   Quantity ="QUANTITY",   Principal_Amount ="PRINCIPAL_AMOUNT",   Security_Code ="SECURITY_ID",   Alternate_Security_Code ="ALTERNATE_SECURITY_ID",   Settlement_Currency ="SETTLEMENT_CCY_PK",   Inventory_Account_No ="INVENTORY_ACCOUNT_NO",   Agent_Code ="AGENT_CODE", 
        }


export abstract class AbstractTradeQuery extends BaseUIOperations {

    static ResultColumns = ResultColumns
    
        static TradeType = TradeType;
        static SubTradeType = SubTradeType;
        static OfficeId = OfficeId;
        static CounterPartyType = CounterPartyType;
        static ClearingParty = ClearingParty;
        static DvpEligible = DvpEligible;
        static BuySellFlag = BuySellFlag;
        static PrincipalAgentFlag = PrincipalAgentFlag;
        static AccountBalanceType = AccountBalanceType;
        static ChannelStr = ChannelStr;
        static Status = Status;
        static FormTEligibleFlag = FormTEligibleFlag;
        static AllocationStatus = AllocationStatus;
        static CompressedTradeFlag = CompressedTradeFlag;
        static ShortSellingFlag = ShortSellingFlag;
        static ShortSellExemptFlag = ShortSellExemptFlag;
        static DataSource = DataSource;
        static IdConfirmationEligible = IdConfirmationEligible;
        static RiskAssessment = RiskAssessment;
        static TradingMode = TradingMode;
        static SortField1 = SortField1;
        static SortField2 = SortField2;
        static SortField3 = SortField3;
        static SortField4 = SortField4;
        static SortField5 = SortField5;
        static SortField6 = SortField6;


/**
 *    Private members 
*/


private _tradeType : TradeType = undefined 

private _subTradeType : SubTradeType = undefined 

private _referenceNo : string = undefined 

private _accountNo : string = undefined 

private _inventoryAccountNo : string = undefined 

private _securityCode : string = undefined 

private _officeId : OfficeId = undefined 

private _salesCode : string = undefined 

private _counterPartyCode : string = undefined 
private _counterPartyType : CounterPartyType = undefined 

private _tradeCcy : string = undefined 

private _settlementCcy : string = undefined 

private _tradeDateFrom : string = undefined 
private _tradeDateTo : string = undefined 

private _valueDateFrom : string = undefined 
private _valueDateTo : string = undefined 

private _instrumentType : string = undefined 

private _executionMarket : string = undefined 

private _clearingParty : ClearingParty = undefined 

private _dvpEligible : DvpEligible = undefined 

private _buySellFlag : BuySellFlag = undefined 

private _principalAgentFlag : PrincipalAgentFlag = undefined 

private _principalAmountFrom : string = undefined 
private _principalAmountTo : string = undefined 

private _accountBalanceType : AccountBalanceType = undefined 

private _agentCode : string = undefined 

private _quantityFrom : string = undefined 
private _quantityTo : string = undefined 

private _netAmountFrom : string = undefined 
private _netAmountTo : string = undefined 

private _excludePending : string = undefined 

private _channelStr : ChannelStr = undefined 

private _orderReferenceNo : string = undefined 

private _externalReferenceNo : string = undefined 

private _cancelReferenceNo : string = undefined 

private _etcReferenceNo : string = undefined 

private _status : Status = undefined 

private _userId : string = undefined 

private _formTEligibleFlag : FormTEligibleFlag = undefined 

private _allocationStatus : AllocationStatus = undefined 

private _entryDateFrom : string = undefined 
private _entryDateTo : string = undefined 

private _updateDateFrom : string = undefined 
private _updateDateTo : string = undefined 

private _deliveryDateFrom : string = undefined 
private _deliveryDateTo : string = undefined 

private _compressedTradeFlag : CompressedTradeFlag = undefined 

private _shortSellingFlag : ShortSellingFlag = undefined 

private _shortSellExemptFlag : ShortSellExemptFlag = undefined 

private _dataSource : DataSource = undefined 

private _idConfirmationEligible : IdConfirmationEligible = undefined 

private _riskAssessment : RiskAssessment = undefined 

private _tradingMode : TradingMode = undefined 

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


public tradeType(v : TradeType ) : AbstractTradeQuery{
    this._tradeType=v
    return this
}

public subTradeType(v : SubTradeType ) : AbstractTradeQuery{
    this._subTradeType=v
    return this
}

/**
  Field with a default value of ""
*/


public referenceNo(v : string) : AbstractTradeQuery{
    this._referenceNo=v
    return this
}

/**
  Field with a default value of ""
*/


public accountNo(v : string) : AbstractTradeQuery{
    this._accountNo=v
    return this
}

/**
  Field with a default value of ""
*/


public inventoryAccountNo(v : string) : AbstractTradeQuery{
    this._inventoryAccountNo=v
    return this
}

/**
  Field with a default value of ""
*/


public securityCode(v : string) : AbstractTradeQuery{
    this._securityCode=v
    return this
}

public officeId(v : OfficeId ) : AbstractTradeQuery{
    this._officeId=v
    return this
}

/**
  Field with a default value of ""
*/


public salesCode(v : string) : AbstractTradeQuery{
    this._salesCode=v
    return this
}

/**
  Field with a default value of ""
*/


public counterPartyCode(v : string) : AbstractTradeQuery{
    this._counterPartyCode=v
    return this
}
public counterPartyType(v : CounterPartyType ) : AbstractTradeQuery{
    this._counterPartyType=v
    return this
}

/**
  Field with a default value of ""
*/


public tradeCcy(v : string) : AbstractTradeQuery{
    this._tradeCcy=v
    return this
}

/**
  Field with a default value of ""
*/


public settlementCcy(v : string) : AbstractTradeQuery{
    this._settlementCcy=v
    return this
}

/**
  Field with a default value of ""
*/


public tradeDateFrom(v : string) : AbstractTradeQuery{
    this._tradeDateFrom=v
    return this
}
/**
  Field with a default value of ""
*/


public tradeDateTo(v : string) : AbstractTradeQuery{
    this._tradeDateTo=v
    return this
}

/**
  Field with a default value of ""
*/


public valueDateFrom(v : string) : AbstractTradeQuery{
    this._valueDateFrom=v
    return this
}
/**
  Field with a default value of ""
*/


public valueDateTo(v : string) : AbstractTradeQuery{
    this._valueDateTo=v
    return this
}

/**
  Field with a default value of ""
*/


public instrumentType(v : string) : AbstractTradeQuery{
    this._instrumentType=v
    return this
}

/**
  Field with a default value of ""
*/


public executionMarket(v : string) : AbstractTradeQuery{
    this._executionMarket=v
    return this
}

public clearingParty(v : ClearingParty ) : AbstractTradeQuery{
    this._clearingParty=v
    return this
}

public dvpEligible(v : DvpEligible ) : AbstractTradeQuery{
    this._dvpEligible=v
    return this
}

public buySellFlag(v : BuySellFlag ) : AbstractTradeQuery{
    this._buySellFlag=v
    return this
}

public principalAgentFlag(v : PrincipalAgentFlag ) : AbstractTradeQuery{
    this._principalAgentFlag=v
    return this
}

/**
  Field with a default value of ""
*/


public principalAmountFrom(v : string) : AbstractTradeQuery{
    this._principalAmountFrom=v
    return this
}
/**
  Field with a default value of ""
*/


public principalAmountTo(v : string) : AbstractTradeQuery{
    this._principalAmountTo=v
    return this
}

public accountBalanceType(v : AccountBalanceType ) : AbstractTradeQuery{
    this._accountBalanceType=v
    return this
}

/**
  Field with a default value of ""
*/


public agentCode(v : string) : AbstractTradeQuery{
    this._agentCode=v
    return this
}

/**
  Field with a default value of ""
*/


public quantityFrom(v : string) : AbstractTradeQuery{
    this._quantityFrom=v
    return this
}
/**
  Field with a default value of ""
*/


public quantityTo(v : string) : AbstractTradeQuery{
    this._quantityTo=v
    return this
}

/**
  Field with a default value of ""
*/


public netAmountFrom(v : string) : AbstractTradeQuery{
    this._netAmountFrom=v
    return this
}
/**
  Field with a default value of ""
*/


public netAmountTo(v : string) : AbstractTradeQuery{
    this._netAmountTo=v
    return this
}

/**
  Field with a default value of ""
*/


public excludePending(v : string) : AbstractTradeQuery{
    this._excludePending=v
    return this
}

public channelStr(v : ChannelStr ) : AbstractTradeQuery{
    this._channelStr=v
    return this
}

/**
  Field with a default value of ""
*/


public orderReferenceNo(v : string) : AbstractTradeQuery{
    this._orderReferenceNo=v
    return this
}

/**
  Field with a default value of ""
*/


public externalReferenceNo(v : string) : AbstractTradeQuery{
    this._externalReferenceNo=v
    return this
}

/**
  Field with a default value of ""
*/


public cancelReferenceNo(v : string) : AbstractTradeQuery{
    this._cancelReferenceNo=v
    return this
}

/**
  Field with a default value of ""
*/


public etcReferenceNo(v : string) : AbstractTradeQuery{
    this._etcReferenceNo=v
    return this
}

public status(v : Status ) : AbstractTradeQuery{
    this._status=v
    return this
}

/**
  Field with a default value of ""
*/


public userId(v : string) : AbstractTradeQuery{
    this._userId=v
    return this
}

public formTEligibleFlag(v : FormTEligibleFlag ) : AbstractTradeQuery{
    this._formTEligibleFlag=v
    return this
}

public allocationStatus(v : AllocationStatus ) : AbstractTradeQuery{
    this._allocationStatus=v
    return this
}

/**
  Field with a default value of ""
*/


public entryDateFrom(v : string) : AbstractTradeQuery{
    this._entryDateFrom=v
    return this
}
/**
  Field with a default value of ""
*/


public entryDateTo(v : string) : AbstractTradeQuery{
    this._entryDateTo=v
    return this
}

/**
  Field with a default value of ""
*/


public updateDateFrom(v : string) : AbstractTradeQuery{
    this._updateDateFrom=v
    return this
}
/**
  Field with a default value of ""
*/


public updateDateTo(v : string) : AbstractTradeQuery{
    this._updateDateTo=v
    return this
}

/**
  Field with a default value of ""
*/


public deliveryDateFrom(v : string) : AbstractTradeQuery{
    this._deliveryDateFrom=v
    return this
}
/**
  Field with a default value of ""
*/


public deliveryDateTo(v : string) : AbstractTradeQuery{
    this._deliveryDateTo=v
    return this
}

public compressedTradeFlag(v : CompressedTradeFlag ) : AbstractTradeQuery{
    this._compressedTradeFlag=v
    return this
}

public shortSellingFlag(v : ShortSellingFlag ) : AbstractTradeQuery{
    this._shortSellingFlag=v
    return this
}

public shortSellExemptFlag(v : ShortSellExemptFlag ) : AbstractTradeQuery{
    this._shortSellExemptFlag=v
    return this
}

public dataSource(v : DataSource ) : AbstractTradeQuery{
    this._dataSource=v
    return this
}

public idConfirmationEligible(v : IdConfirmationEligible ) : AbstractTradeQuery{
    this._idConfirmationEligible=v
    return this
}

public riskAssessment(v : RiskAssessment ) : AbstractTradeQuery{
    this._riskAssessment=v
    return this
}

public tradingMode(v : TradingMode ) : AbstractTradeQuery{
    this._tradingMode=v
    return this
}

/**
  Field with a default value of ""
*/


public sortFieldOrder1(v : string) : AbstractTradeQuery{
    this._sortFieldOrder1=v
    return this
}
public sortField1(v : SortField1 ) : AbstractTradeQuery{
    this._sortField1=v
    return this
}

/**
  Field with a default value of ""
*/


public sortFieldOrder2(v : string) : AbstractTradeQuery{
    this._sortFieldOrder2=v
    return this
}
public sortField2(v : SortField2 ) : AbstractTradeQuery{
    this._sortField2=v
    return this
}

/**
  Field with a default value of ""
*/


public sortFieldOrder3(v : string) : AbstractTradeQuery{
    this._sortFieldOrder3=v
    return this
}
public sortField3(v : SortField3 ) : AbstractTradeQuery{
    this._sortField3=v
    return this
}

/**
  Field with a default value of ""
*/


public sortFieldOrder4(v : string) : AbstractTradeQuery{
    this._sortFieldOrder4=v
    return this
}
public sortField4(v : SortField4 ) : AbstractTradeQuery{
    this._sortField4=v
    return this
}

/**
  Field with a default value of ""
*/


public sortFieldOrder5(v : string) : AbstractTradeQuery{
    this._sortFieldOrder5=v
    return this
}
public sortField5(v : SortField5 ) : AbstractTradeQuery{
    this._sortField5=v
    return this
}

/**
  Field with a default value of ""
*/


public sortFieldOrder6(v : string) : AbstractTradeQuery{
    this._sortFieldOrder6=v
    return this
}
public sortField6(v : SortField6 ) : AbstractTradeQuery{
    this._sortField6=v
    return this
}




 protected fetchFields() : any[] {
        let fields :any[] = []

        if(this._tradeType!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="tradeType"]' , value : this._tradeType});
}

if(this._subTradeType!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="subTradeType"]' , value : this._subTradeType});
}

if(this._referenceNo!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="referenceNo"]' , value : this._referenceNo});
}

if(this._accountNo!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="accountNo"]' , value : this._accountNo});
}

if(this._inventoryAccountNo!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="inventoryAccountNo"]' , value : this._inventoryAccountNo});
}

if(this._securityCode!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="securityCode"]' , value : this._securityCode});
}

if(this._officeId!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="officeId"]' , value : this._officeId});
}

if(this._salesCode!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="salesCode"]' , value : this._salesCode});
}

if(this._counterPartyCode!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="counterPartyCode"]' , value : this._counterPartyCode});
}
if(this._counterPartyType!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="counterPartyType"]' , value : this._counterPartyType});
}

if(this._tradeCcy!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="tradeCcy"]' , value : this._tradeCcy});
}

if(this._settlementCcy!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="settlementCcy"]' , value : this._settlementCcy});
}

if(this._tradeDateFrom!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="tradeDateFrom"]' , value : this._tradeDateFrom});
}
if(this._tradeDateTo!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="tradeDateTo"]' , value : this._tradeDateTo});
}

if(this._valueDateFrom!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="valueDateFrom"]' , value : this._valueDateFrom});
}
if(this._valueDateTo!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="valueDateTo"]' , value : this._valueDateTo});
}

if(this._instrumentType!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="instrumentType"]' , value : this._instrumentType});
}

if(this._executionMarket!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="executionMarket"]' , value : this._executionMarket});
}

if(this._clearingParty!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="clearingParty"]' , value : this._clearingParty});
}

if(this._dvpEligible!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="dvpEligible"]' , value : this._dvpEligible});
}

if(this._buySellFlag!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="buySellFlag"]' , value : this._buySellFlag});
}

if(this._principalAgentFlag!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="principalAgentFlag"]' , value : this._principalAgentFlag});
}

if(this._principalAmountFrom!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="principalAmountFrom"]' , value : this._principalAmountFrom});
}
if(this._principalAmountTo!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="principalAmountTo"]' , value : this._principalAmountTo});
}

if(this._accountBalanceType!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="accountBalanceType"]' , value : this._accountBalanceType});
}

if(this._agentCode!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="agentCode"]' , value : this._agentCode});
}

if(this._quantityFrom!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="quantityFrom"]' , value : this._quantityFrom});
}
if(this._quantityTo!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="quantityTo"]' , value : this._quantityTo});
}

if(this._netAmountFrom!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="netAmountFrom"]' , value : this._netAmountFrom});
}
if(this._netAmountTo!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="netAmountTo"]' , value : this._netAmountTo});
}

if(this._excludePending!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="excludePending"]' , value : this._excludePending});
}

if(this._channelStr!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="channelStr"]' , value : this._channelStr});
}

if(this._orderReferenceNo!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="orderReferenceNo"]' , value : this._orderReferenceNo});
}

if(this._externalReferenceNo!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="externalReferenceNo"]' , value : this._externalReferenceNo});
}

if(this._cancelReferenceNo!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="cancelReferenceNo"]' , value : this._cancelReferenceNo});
}

if(this._etcReferenceNo!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="etcReferenceNo"]' , value : this._etcReferenceNo});
}

if(this._status!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="status"]' , value : this._status});
}

if(this._userId!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="userId"]' , value : this._userId});
}

if(this._formTEligibleFlag!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="formTEligibleFlag"]' , value : this._formTEligibleFlag});
}

if(this._allocationStatus!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="allocationStatus"]' , value : this._allocationStatus});
}

if(this._entryDateFrom!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="entryDateFrom"]' , value : this._entryDateFrom});
}
if(this._entryDateTo!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="entryDateTo"]' , value : this._entryDateTo});
}

if(this._updateDateFrom!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="updateDateFrom"]' , value : this._updateDateFrom});
}
if(this._updateDateTo!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="updateDateTo"]' , value : this._updateDateTo});
}

if(this._deliveryDateFrom!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="deliveryDateFrom"]' , value : this._deliveryDateFrom});
}
if(this._deliveryDateTo!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="deliveryDateTo"]' , value : this._deliveryDateTo});
}

if(this._compressedTradeFlag!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="compressedTradeFlag"]' , value : this._compressedTradeFlag});
}

if(this._shortSellingFlag!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="shortSellingFlag"]' , value : this._shortSellingFlag});
}

if(this._shortSellExemptFlag!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="shortSellExemptFlag"]' , value : this._shortSellExemptFlag});
}

if(this._dataSource!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="dataSource"]' , value : this._dataSource});
}

if(this._idConfirmationEligible!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="idConfirmationEligible"]' , value : this._idConfirmationEligible});
}

if(this._riskAssessment!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="riskAssessment"]' , value : this._riskAssessment});
}

if(this._tradingMode!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="tradingMode"]' , value : this._tradingMode});
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
