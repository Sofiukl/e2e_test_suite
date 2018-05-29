

import { BaseUIOperations } from "../../BaseUIOperations";
import { Assert } from "../../../utils/Assert";

export abstract class AbstractExecutionEntry  extends BaseUIOperations {

    /** private variable for execScreenData.tradeDateStr() */
    private _execScreenDatatradeDateStr : string  = ""   
    /** private variable for execScreenData.executionTime() */
    private _execScreenDataexecutionTime : string  = ""   
    /** private variable for execScreenData.valueDateStr() */
    private _execScreenDatavalueDateStr : string  = ""   
    /** private variable for execScreenData.cashValueDateStr() */
    private _execScreenDatacashValueDateStr : string  = ""   
    /** private variable for execScreenData.clientAccount() */
    private _execScreenDataclientAccount : string  = ""   
    /** private variable for execScreenData.inventoryAccountNo() */
    private _execScreenDatainventoryAccountNo : string  = "P400000-1"   
    /** private variable for execScreenData.brokerAccount() */
    private _execScreenDatabrokerAccount : string  = "K0000001"   
    /** private variable for execScreenData.securityInfo() */
    private _execScreenDatasecurityInfo : string  = "AAV"   
    /** private variable for execScreenData.quantityStr() */
    private _execScreenDataquantityStr : string  = "100"   
    /** private variable for execScreenData.inputPriceStr() */
    private _execScreenDatainputPriceStr : string  = "20"   
    /** private variable for execScreenData.salesCode() */
    private _execScreenDatasalesCode : string  = ""   
    /** private variable for execScreenData.tradeCurrency() */
    private _execScreenDatatradeCurrency : string  = ""   
    /** private variable for execScreenData.executionMarket() */
    private _execScreenDataexecutionMarket : string  = ""   
    /** private variable for execScreenData.settlementCurrency() */
    private _execScreenDatasettlementCurrency : string  = ""   
    /** private variable for execScreenData.exchangeRate() */
    private _execScreenDataexchangeRate : string  = ""   
    /** private variable for execScreenData.stepOutAccountNo() */
    private _execScreenDatastepOutAccountNo : string  = ""   
    /** private variable for execScreenData.wiPriceCommAdjustmentRateStr() */
    private _execScreenDatawiPriceCommAdjustmentRateStr : string  = ""   
    /** private variable for execScreenData.tradeReferenceNo() */
    private _execScreenDatatradeReferenceNo : string  = ""   
    /** private variable for execScreenData.senderReferenceNo() */
    private _execScreenDatasenderReferenceNo : string  = "OD-000000001"   
    /** private variable for execScreenData.sourceReferenceNo() */
    private _execScreenDatasourceReferenceNo : string  = "TD-000000001"   
    /** private variable for execScreenData.cpAccountNo() */
    private _execScreenDatacpAccountNo : string  = "C012345699-8"   
    /** private variable for execScreenData.tradeType() */
    private _execScreenDatatradeType : string  = "EQUITY"   
    /** private variable for execScreenData.subTradeTypePk() */
    private _execScreenDatasubTradeTypePk : string  = ""   
    /** private variable for execScreenData.buySellOrientation() */
    private _execScreenDatabuySellOrientation : string  = "FB"   
    /** private variable for execScreenData.shortSellingFlag() */
    private _execScreenDatashortSellingFlag : string  = ""   
    /** private variable for execScreenData.shortSellExemptFlag() */
    private _execScreenDatashortSellExemptFlag : string  = ""   
    /** private variable for execScreenData.principalType() */
    private _execScreenDataprincipalType : string  = "Agency"   
    /** private variable for execScreenData.deliveryMethod() */
    private _execScreenDatadeliveryMethod : string  = ""   
    /** private variable for execScreenData.grossNetType() */
    private _execScreenDatagrossNetType : string  = "GROSS"   
    /** private variable for execScreenData.inputPriceFormat() */
    private _execScreenDatainputPriceFormat : string  = "UNIT PRICE"   
    /** private variable for execScreenData.accountBalanceTypeStr() */
    private _execScreenDataaccountBalanceTypeStr : string  = "10"   
    /** private variable for execScreenData.executionMethod() */
    private _execScreenDataexecutionMethod : string  = ""   
    /** private variable for execScreenData.calculationType() */
    private _execScreenDatacalculationType : string  = ""   
    /** private variable for execScreenData.stepInOutFlag() */
    private _execScreenDatastepInOutFlag : string  = ""   
    /** private variable for execScreenData.exCouponFlag() */
    private _execScreenDataexCouponFlag : string  = "N"   
    /** private variable for execScreenData.dirtyPriceFlag() */
    private _execScreenDatadirtyPriceFlag : string  = "N"   
    /** private variable for execScreenData.negativeAccruedInterestFlag() */
    private _execScreenDatanegativeAccruedInterestFlag : string  = "N"   
    /** private variable for execScreenData.wiCommFlag() */
    private _execScreenDatawiCommFlag : string  = "Y"   
    /** private variable for execScreenData.asCustomerFlag() */
    private _execScreenDataasCustomerFlag : string  = ""   
    /** private variable for execScreenData.nsccReportEligibleFlag() */
    private _execScreenDatansccReportEligibleFlag : string  = ""   
    /** private variable for execScreenData.compressionReqdFlag() */
    private _execScreenDatacompressionReqdFlag : string  = ""   
    /** private variable for tradeChannel() */
    private _tradeChannel : string  = "INTERNET"   
    /** This is the value of Trade Date 
     * with a default Value "" 
     * of type text */
    public execScreenDatatradeDateStr(v : string) : AbstractExecutionEntry {
        this._execScreenDatatradeDateStr=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type text */
    public execScreenDataexecutionTime(v : string) : AbstractExecutionEntry {
        this._execScreenDataexecutionTime=v;
        return this;
    }
    
    /** This is the value of Value Date 
     * with a default Value "" 
     * of type text */
    public execScreenDatavalueDateStr(v : string) : AbstractExecutionEntry {
        this._execScreenDatavalueDateStr=v;
        return this;
    }
    
    /** This is the value of Cash Value Date 
     * with a default Value "" 
     * of type text */
    public execScreenDatacashValueDateStr(v : string) : AbstractExecutionEntry {
        this._execScreenDatacashValueDateStr=v;
        return this;
    }
    
    /** This is the value of Account No 
     * with a default Value "" 
     * of type text */
    public execScreenDataclientAccount(v : string) : AbstractExecutionEntry {
        this._execScreenDataclientAccount=v;
        return this;
    }
    
    /** This is the value of Inventory Account No 
     * with a default Value "P400000-1" 
     * of type text */
    public execScreenDatainventoryAccountNo(v : string) : AbstractExecutionEntry {
        this._execScreenDatainventoryAccountNo=v;
        return this;
    }
    
    /** This is the value of Account No 
     * with a default Value "K0000001" 
     * of type text */
    public execScreenDatabrokerAccount(v : string) : AbstractExecutionEntry {
        this._execScreenDatabrokerAccount=v;
        return this;
    }
    
    /** This is the value of Security 
     * with a default Value "AAV" 
     * of type text */
    public execScreenDatasecurityInfo(v : string) : AbstractExecutionEntry {
        this._execScreenDatasecurityInfo=v;
        return this;
    }
    
    /** This is the value of Quantity 
     * with a default Value "100" 
     * of type text */
    public execScreenDataquantityStr(v : string) : AbstractExecutionEntry {
        this._execScreenDataquantityStr=v;
        return this;
    }
    
    /** This is the value of Input Price 
     * with a default Value "20" 
     * of type text */
    public execScreenDatainputPriceStr(v : string) : AbstractExecutionEntry {
        this._execScreenDatainputPriceStr=v;
        return this;
    }
    
    /** This is the value of Sales Code 
     * with a default Value "" 
     * of type text */
    public execScreenDatasalesCode(v : string) : AbstractExecutionEntry {
        this._execScreenDatasalesCode=v;
        return this;
    }
    
    /** This is the value of Trade Currency 
     * with a default Value "THB/ISO3A" 
     * of type text */
    public execScreenDatatradeCurrency(v : string) : AbstractExecutionEntry {
        this._execScreenDatatradeCurrency=v;
        return this;
    }
    
    /** This is the value of Execution Market 
     * with a default Value "" 
     * of type text */
    public execScreenDataexecutionMarket(v : string) : AbstractExecutionEntry {
        this._execScreenDataexecutionMarket=v;
        return this;
    }
    
    /** This is the value of Settlement Currency 
     * with a default Value "" 
     * of type text */
    public execScreenDatasettlementCurrency(v : string) : AbstractExecutionEntry {
        this._execScreenDatasettlementCurrency=v;
        return this;
    }
    
    /** This is the value of Exchange Rate 
     * with a default Value "" 
     * of type text */
    public execScreenDataexchangeRate(v : string) : AbstractExecutionEntry {
        this._execScreenDataexchangeRate=v;
        return this;
    }
    
    /** This is the value of Step Out Account 
     * with a default Value "" 
     * of type text */
    public execScreenDatastepOutAccountNo(v : string) : AbstractExecutionEntry {
        this._execScreenDatastepOutAccountNo=v;
        return this;
    }
    
    /** This is the value of WI Price Comm Adjustment Rate 
     * with a default Value "" 
     * of type text */
    public execScreenDatawiPriceCommAdjustmentRateStr(v : string) : AbstractExecutionEntry {
        this._execScreenDatawiPriceCommAdjustmentRateStr=v;
        return this;
    }
    
    /** This is the value of Trade Reference No 
     * with a default Value "" 
     * of type text */
    public execScreenDatatradeReferenceNo(v : string) : AbstractExecutionEntry {
        this._execScreenDatatradeReferenceNo=v;
        return this;
    }
    
    /** This is the value of Deal Id 
     * with a default Value "OD-000000001" 
     * of type text */
    public execScreenDatasenderReferenceNo(v : string) : AbstractExecutionEntry {
        this._execScreenDatasenderReferenceNo=v;
        return this;
    }
    
    /** This is the value of Trade Id 
     * with a default Value "TD-000000001" 
     * of type text */
    public execScreenDatasourceReferenceNo(v : string) : AbstractExecutionEntry {
        this._execScreenDatasourceReferenceNo=v;
        return this;
    }
    
    /** This is the value of CP Account No * 
     * with a default Value "C012345699-8" 
     * of type text */
    public execScreenDatacpAccountNo(v : string) : AbstractExecutionEntry {
        this._execScreenDatacpAccountNo=v;
        return this;
    }
    
    /** This is the value of Trade Type 
     * with a default Value "EQUITY" 
     * of type select */
    public execScreenDatatradeType(v : string) : AbstractExecutionEntry {
        this._execScreenDatatradeType=v;
        return this;
    }
    
    /** This is the value of Sub Trade Type 
     * with a default Value "" 
     * of type select */
    public execScreenDatasubTradeTypePk(v : string) : AbstractExecutionEntry {
        this._execScreenDatasubTradeTypePk=v;
        return this;
    }
    
    /** This is the value of Buy/Sell Orientation 
     * with a default Value "FB" 
     * of type select */
    public execScreenDatabuySellOrientation(v : string) : AbstractExecutionEntry {
        this._execScreenDatabuySellOrientation=v;
        return this;
    }
    
    /** This is the value of Short Selling Flag 
     * with a default Value "" 
     * of type select */
    public execScreenDatashortSellingFlag(v : string) : AbstractExecutionEntry {
        this._execScreenDatashortSellingFlag=v;
        return this;
    }
    
    /** This is the value of Short Sell Exempt Flag 
     * with a default Value "" 
     * of type select */
    public execScreenDatashortSellExemptFlag(v : string) : AbstractExecutionEntry {
        this._execScreenDatashortSellExemptFlag=v;
        return this;
    }
    
    /** This is the value of Principal Type 
     * with a default Value "Agency" 
     * of type select */
    public execScreenDataprincipalType(v : string) : AbstractExecutionEntry {
        this._execScreenDataprincipalType=v;
        return this;
    }
    
    /** This is the value of Delivery Method 
     * with a default Value "" 
     * of type select */
    public execScreenDatadeliveryMethod(v : string) : AbstractExecutionEntry {
        this._execScreenDatadeliveryMethod=v;
        return this;
    }
    
    /** This is the value of Gross/Net Type 
     * with a default Value "GROSS" 
     * of type select */
    public execScreenDatagrossNetType(v : string) : AbstractExecutionEntry {
        this._execScreenDatagrossNetType=v;
        return this;
    }
    
    /** This is the value of Input Price Format 
     * with a default Value "UNIT PRICE" 
     * of type select */
    public execScreenDatainputPriceFormat(v : string) : AbstractExecutionEntry {
        this._execScreenDatainputPriceFormat=v;
        return this;
    }
    
    /** This is the value of Account Balance Type 
     * with a default Value "10" 
     * of type select */
    public execScreenDataaccountBalanceTypeStr(v : string) : AbstractExecutionEntry {
        this._execScreenDataaccountBalanceTypeStr=v;
        return this;
    }
    
    /** This is the value of Execution Method 
     * with a default Value "" 
     * of type select */
    public execScreenDataexecutionMethod(v : string) : AbstractExecutionEntry {
        this._execScreenDataexecutionMethod=v;
        return this;
    }
    
    /** This is the value of Calculation Type 
     * with a default Value "" 
     * of type select */
    public execScreenDatacalculationType(v : string) : AbstractExecutionEntry {
        this._execScreenDatacalculationType=v;
        return this;
    }
    
    /** This is the value of Step In/Out Flag 
     * with a default Value "" 
     * of type select */
    public execScreenDatastepInOutFlag(v : string) : AbstractExecutionEntry {
        this._execScreenDatastepInOutFlag=v;
        return this;
    }
    
    /** This is the value of Excoupon Flag 
     * with a default Value "N" 
     * of type select */
    public execScreenDataexCouponFlag(v : string) : AbstractExecutionEntry {
        this._execScreenDataexCouponFlag=v;
        return this;
    }
    
    /** This is the value of Dirty Price Flag 
     * with a default Value "N" 
     * of type select */
    public execScreenDatadirtyPriceFlag(v : string) : AbstractExecutionEntry {
        this._execScreenDatadirtyPriceFlag=v;
        return this;
    }
    
    /** This is the value of Negative Accrued Interest Flag 
     * with a default Value "N" 
     * of type select */
    public execScreenDatanegativeAccruedInterestFlag(v : string) : AbstractExecutionEntry {
        this._execScreenDatanegativeAccruedInterestFlag=v;
        return this;
    }
    
    /** This is the value of WI Commission Flag 
     * with a default Value "Y" 
     * of type select */
    public execScreenDatawiCommFlag(v : string) : AbstractExecutionEntry {
        this._execScreenDatawiCommFlag=v;
        return this;
    }
    
    /** This is the value of As Customer Flag 
     * with a default Value "" 
     * of type select */
    public execScreenDataasCustomerFlag(v : string) : AbstractExecutionEntry {
        this._execScreenDataasCustomerFlag=v;
        return this;
    }
    
    /** This is the value of NSCC Report Eligible 
     * with a default Value "" 
     * of type select */
    public execScreenDatansccReportEligibleFlag(v : string) : AbstractExecutionEntry {
        this._execScreenDatansccReportEligibleFlag=v;
        return this;
    }
    
    /** This is the value of Compression Req. Flag 
     * with a default Value "" 
     * of type select */
    public execScreenDatacompressionReqdFlag(v : string) : AbstractExecutionEntry {
        this._execScreenDatacompressionReqdFlag=v;
        return this;
    }
    
    /** This is the value of Trade Channel 
     * with a default Value "INTERNET" 
     * of type select */
    public tradeChannel(v : string) : AbstractExecutionEntry {
        this._tradeChannel=v;
        return this;
    }
    
    protected fetchFields() : any[] {
        let fields :any[] = []
    if(this._execScreenDatatradeDateStr!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="execScreenData.tradeDateStr"]' , value : this._execScreenDatatradeDateStr});
        }if(this._execScreenDataexecutionTime!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="execScreenData.executionTime"]' , value : this._execScreenDataexecutionTime});
        }if(this._execScreenDatavalueDateStr!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="execScreenData.valueDateStr"]' , value : this._execScreenDatavalueDateStr});
        }if(this._execScreenDatacashValueDateStr!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="execScreenData.cashValueDateStr"]' , value : this._execScreenDatacashValueDateStr});
        }if(this._execScreenDataclientAccount!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="execScreenData.clientAccount"]' , value : this._execScreenDataclientAccount});
        }if(this._execScreenDatainventoryAccountNo!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="execScreenData.inventoryAccountNo"]' , value : this._execScreenDatainventoryAccountNo});
        }if(this._execScreenDatabrokerAccount!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="execScreenData.brokerAccount"]' , value : this._execScreenDatabrokerAccount});
        }if(this._execScreenDatasecurityInfo!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="execScreenData.securityInfo"]' , value : this._execScreenDatasecurityInfo});
        }if(this._execScreenDataquantityStr!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="execScreenData.quantityStr"]' , value : this._execScreenDataquantityStr});
        }if(this._execScreenDatainputPriceStr!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="execScreenData.inputPriceStr"]' , value : this._execScreenDatainputPriceStr});
        }if(this._execScreenDatasalesCode!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="execScreenData.salesCode"]' , value : this._execScreenDatasalesCode});
        }if(this._execScreenDatatradeCurrency!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="execScreenData.tradeCurrency"]' , value : this._execScreenDatatradeCurrency});
        }if(this._execScreenDataexecutionMarket!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="execScreenData.executionMarket"]' , value : this._execScreenDataexecutionMarket});
        }if(this._execScreenDatasettlementCurrency!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="execScreenData.settlementCurrency"]' , value : this._execScreenDatasettlementCurrency});
        }if(this._execScreenDataexchangeRate!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="execScreenData.exchangeRate"]' , value : this._execScreenDataexchangeRate});
        }if(this._execScreenDatastepOutAccountNo!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="execScreenData.stepOutAccountNo"]' , value : this._execScreenDatastepOutAccountNo});
        }if(this._execScreenDatawiPriceCommAdjustmentRateStr!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="execScreenData.wiPriceCommAdjustmentRateStr"]' , value : this._execScreenDatawiPriceCommAdjustmentRateStr});
        }if(this._execScreenDatatradeReferenceNo!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="execScreenData.tradeReferenceNo"]' , value : this._execScreenDatatradeReferenceNo});
        }if(this._execScreenDatasenderReferenceNo!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="execScreenData.senderReferenceNo"]' , value : this._execScreenDatasenderReferenceNo});
        }if(this._execScreenDatasourceReferenceNo!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="execScreenData.sourceReferenceNo"]' , value : this._execScreenDatasourceReferenceNo});
        }if(this._execScreenDatacpAccountNo!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="execScreenData.cpAccountNo"]' , value : this._execScreenDatacpAccountNo});
        }if(this._execScreenDatatradeType!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="execScreenData.tradeType"]' , value : this._execScreenDatatradeType});
        }if(this._execScreenDatasubTradeTypePk!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="execScreenData.subTradeTypePk"]' , value : this._execScreenDatasubTradeTypePk});
        }if(this._execScreenDatabuySellOrientation!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="execScreenData.buySellOrientation"]' , value : this._execScreenDatabuySellOrientation});
        }if(this._execScreenDatashortSellingFlag!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="execScreenData.shortSellingFlag"]' , value : this._execScreenDatashortSellingFlag});
        }if(this._execScreenDatashortSellExemptFlag!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="execScreenData.shortSellExemptFlag"]' , value : this._execScreenDatashortSellExemptFlag});
        }if(this._execScreenDataprincipalType!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="execScreenData.principalType"]' , value : this._execScreenDataprincipalType});
        }if(this._execScreenDatadeliveryMethod!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="execScreenData.deliveryMethod"]' , value : this._execScreenDatadeliveryMethod});
        }if(this._execScreenDatagrossNetType!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="execScreenData.grossNetType"]' , value : this._execScreenDatagrossNetType});
        }if(this._execScreenDatainputPriceFormat!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="execScreenData.inputPriceFormat"]' , value : this._execScreenDatainputPriceFormat});
        }if(this._execScreenDataaccountBalanceTypeStr!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="execScreenData.accountBalanceTypeStr"]' , value : this._execScreenDataaccountBalanceTypeStr});
        }if(this._execScreenDataexecutionMethod!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="execScreenData.executionMethod"]' , value : this._execScreenDataexecutionMethod});
        }if(this._execScreenDatacalculationType!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="execScreenData.calculationType"]' , value : this._execScreenDatacalculationType});
        }if(this._execScreenDatastepInOutFlag!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="execScreenData.stepInOutFlag"]' , value : this._execScreenDatastepInOutFlag});
        }if(this._execScreenDataexCouponFlag!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="execScreenData.exCouponFlag"]' , value : this._execScreenDataexCouponFlag});
        }if(this._execScreenDatadirtyPriceFlag!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="execScreenData.dirtyPriceFlag"]' , value : this._execScreenDatadirtyPriceFlag});
        }if(this._execScreenDatanegativeAccruedInterestFlag!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="execScreenData.negativeAccruedInterestFlag"]' , value : this._execScreenDatanegativeAccruedInterestFlag});
        }if(this._execScreenDatawiCommFlag!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="execScreenData.wiCommFlag"]' , value : this._execScreenDatawiCommFlag});
        }if(this._execScreenDataasCustomerFlag!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="execScreenData.asCustomerFlag"]' , value : this._execScreenDataasCustomerFlag});
        }if(this._execScreenDatansccReportEligibleFlag!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="execScreenData.nsccReportEligibleFlag"]' , value : this._execScreenDatansccReportEligibleFlag});
        }if(this._execScreenDatacompressionReqdFlag!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="execScreenData.compressionReqdFlag"]' , value : this._execScreenDatacompressionReqdFlag});
        }if(this._tradeChannel!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="tradeChannel"]' , value : this._tradeChannel});
        }
    return fields;

    }
}