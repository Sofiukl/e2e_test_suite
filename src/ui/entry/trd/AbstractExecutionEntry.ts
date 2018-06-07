

import { BaseUIOperations } from "../../BaseUIOperations";
import { Assert } from "../../../utils/Assert";

export abstract class AbstractExecutionEntry  extends BaseUIOperations {

    /** private variable for execScreenData.tradeDateStr() */
    private _tradeDateStr : string  = ""   
    /** private variable for execScreenData.executionTime() */
    private _executionTime : string  = ""   
    /** private variable for execScreenData.valueDateStr() */
    private _valueDateStr : string  = ""   
    /** private variable for execScreenData.cashValueDateStr() */
    private _cashValueDateStr : string  = ""   
    /** private variable for execScreenData.clientAccount() */
    private _clientAccount : string  = ""   
    /** private variable for execScreenData.inventoryAccountNo() */
    private _inventoryAccountNo : string  = "P400000-1"   
    /** private variable for execScreenData.brokerAccount() */
    private _brokerAccount : string  = "K0000001"   
    /** private variable for execScreenData.securityInfo() */
    private _securityInfo : string  = "AAV"   
    /** private variable for execScreenData.quantityStr() */
    private _quantityStr : string  = "100"   
    /** private variable for execScreenData.inputPriceStr() */
    private _inputPriceStr : string  = "20"   
    /** private variable for execScreenData.salesCode() */
    private _salesCode : string  = ""   
    /** private variable for execScreenData.tradeCurrency() */
    private _tradeCurrency : string  = ""   
    /** private variable for execScreenData.executionMarket() */
    private _executionMarket : string  = ""   
    /** private variable for execScreenData.settlementCurrency() */
    private _settlementCurrency : string  = ""   
    /** private variable for execScreenData.exchangeRate() */
    private _exchangeRate : string  = ""   
    /** private variable for execScreenData.stepOutAccountNo() */
    private _stepOutAccountNo : string  = ""   
    /** private variable for execScreenData.wiPriceCommAdjustmentRateStr() */
    private _wiPriceCommAdjustmentRateStr : string  = ""   
    /** private variable for execScreenData.tradeReferenceNo() */
    private _tradeReferenceNo : string  = ""   
    /** private variable for execScreenData.senderReferenceNo() */
    private _senderReferenceNo : string  = "OD-000000001"   
    /** private variable for execScreenData.sourceReferenceNo() */
    private _sourceReferenceNo : string  = "TD-000000001"   
    /** private variable for execScreenData.cpAccountNo() */
    private _cpAccountNo : string  = "C012345699-8"   
    /** private variable for execScreenData.tradeType() */
    private _tradeType : string  = "EQUITY"   
    /** private variable for execScreenData.subTradeTypePk() */
    private _subTradeTypePk : string  = ""   
    /** private variable for execScreenData.buySellOrientation() */
    private _buySellOrientation : string  = "FB"   
    /** private variable for execScreenData.shortSellingFlag() */
    private _shortSellingFlag : string  = ""   
    /** private variable for execScreenData.shortSellExemptFlag() */
    private _shortSellExemptFlag : string  = ""   
    /** private variable for execScreenData.principalType() */
    private _principalType : string  = "Agency"   
    /** private variable for execScreenData.deliveryMethod() */
    private _deliveryMethod : string  = ""   
    /** private variable for execScreenData.grossNetType() */
    private _grossNetType : string  = "GROSS"   
    /** private variable for execScreenData.inputPriceFormat() */
    private _inputPriceFormat : string  = "UNIT PRICE"   
    /** private variable for execScreenData.accountBalanceTypeStr() */
    private _accountBalanceTypeStr : string  = "10"   
    /** private variable for execScreenData.executionMethod() */
    private _executionMethod : string  = ""   
    /** private variable for execScreenData.calculationType() */
    private _calculationType : string  = ""   
    /** private variable for execScreenData.stepInOutFlag() */
    private _stepInOutFlag : string  = ""   
    /** private variable for execScreenData.exCouponFlag() */
    private _exCouponFlag : string  = "N"   
    /** private variable for execScreenData.dirtyPriceFlag() */
    private _dirtyPriceFlag : string  = "N"   
    /** private variable for execScreenData.negativeAccruedInterestFlag() */
    private _negativeAccruedInterestFlag : string  = "N"   
    /** private variable for execScreenData.wiCommFlag() */
    private _wiCommFlag : string  = "Y"   
    /** private variable for execScreenData.asCustomerFlag() */
    private _asCustomerFlag : string  = ""   
    /** private variable for execScreenData.nsccReportEligibleFlag() */
    private _nsccReportEligibleFlag : string  = ""   
    /** private variable for execScreenData.compressionReqdFlag() */
    private _compressionReqdFlag : string  = ""   
    /** private variable for tradeChannel() */
    private _tradeChannel : string  = "INTERNET"   
    /** This is the value of Trade Date 
     * with a default Value "" 
     * of type text */
    public tradeDateStr(v : string) : AbstractExecutionEntry {
        this._tradeDateStr=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type text */
    public executionTime(v : string) : AbstractExecutionEntry {
        this._executionTime=v;
        return this;
    }
    
    /** This is the value of Value Date 
     * with a default Value "" 
     * of type text */
    public valueDateStr(v : string) : AbstractExecutionEntry {
        this._valueDateStr=v;
        return this;
    }
    
    /** This is the value of Cash Value Date 
     * with a default Value "" 
     * of type text */
    public cashValueDateStr(v : string) : AbstractExecutionEntry {
        this._cashValueDateStr=v;
        return this;
    }
    
    /** This is the value of Account No 
     * with a default Value "" 
     * of type text */
    public clientAccount(v : string) : AbstractExecutionEntry {
        this._clientAccount=v;
        return this;
    }
    
    /** This is the value of Inventory Account No 
     * with a default Value "P400000-1" 
     * of type text */
    public inventoryAccountNo(v : string) : AbstractExecutionEntry {
        this._inventoryAccountNo=v;
        return this;
    }
    
    /** This is the value of Account No 
     * with a default Value "K0000001" 
     * of type text */
    public brokerAccount(v : string) : AbstractExecutionEntry {
        this._brokerAccount=v;
        return this;
    }
    
    /** This is the value of Security 
     * with a default Value "AAV" 
     * of type text */
    public securityInfo(v : string) : AbstractExecutionEntry {
        this._securityInfo=v;
        return this;
    }
    
    /** This is the value of Quantity 
     * with a default Value "100" 
     * of type text */
    public quantityStr(v : string) : AbstractExecutionEntry {
        this._quantityStr=v;
        return this;
    }
    
    /** This is the value of Input Price 
     * with a default Value "20" 
     * of type text */
    public inputPriceStr(v : string) : AbstractExecutionEntry {
        this._inputPriceStr=v;
        return this;
    }
    
    /** This is the value of Sales Code 
     * with a default Value "" 
     * of type text */
    public salesCode(v : string) : AbstractExecutionEntry {
        this._salesCode=v;
        return this;
    }
    
    /** This is the value of Trade Currency 
     * with a default Value "THB/ISO3A" 
     * of type text */
    public tradeCurrency(v : string) : AbstractExecutionEntry {
        this._tradeCurrency=v;
        return this;
    }
    
    /** This is the value of Execution Market 
     * with a default Value "" 
     * of type text */
    public executionMarket(v : string) : AbstractExecutionEntry {
        this._executionMarket=v;
        return this;
    }
    
    /** This is the value of Settlement Currency 
     * with a default Value "" 
     * of type text */
    public settlementCurrency(v : string) : AbstractExecutionEntry {
        this._settlementCurrency=v;
        return this;
    }
    
    /** This is the value of Exchange Rate 
     * with a default Value "" 
     * of type text */
    public exchangeRate(v : string) : AbstractExecutionEntry {
        this._exchangeRate=v;
        return this;
    }
    
    /** This is the value of Step Out Account 
     * with a default Value "" 
     * of type text */
    public stepOutAccountNo(v : string) : AbstractExecutionEntry {
        this._stepOutAccountNo=v;
        return this;
    }
    
    /** This is the value of WI Price Comm Adjustment Rate 
     * with a default Value "" 
     * of type text */
    public wiPriceCommAdjustmentRateStr(v : string) : AbstractExecutionEntry {
        this._wiPriceCommAdjustmentRateStr=v;
        return this;
    }
    
    /** This is the value of Trade Reference No 
     * with a default Value "" 
     * of type text */
    public tradeReferenceNo(v : string) : AbstractExecutionEntry {
        this._tradeReferenceNo=v;
        return this;
    }
    
    /** This is the value of Deal Id 
     * with a default Value "OD-000000001" 
     * of type text */
    public senderReferenceNo(v : string) : AbstractExecutionEntry {
        this._senderReferenceNo=v;
        return this;
    }
    
    /** This is the value of Trade Id 
     * with a default Value "TD-000000001" 
     * of type text */
    public sourceReferenceNo(v : string) : AbstractExecutionEntry {
        this._sourceReferenceNo=v;
        return this;
    }
    
    /** This is the value of CP Account No * 
     * with a default Value "C012345699-8" 
     * of type text */
    public cpAccountNo(v : string) : AbstractExecutionEntry {
        this._cpAccountNo=v;
        return this;
    }
    
    /** This is the value of Trade Type 
     * with a default Value "EQUITY" 
     * of type select */
    public tradeType(v : string) : AbstractExecutionEntry {
        this._tradeType=v;
        return this;
    }
    
    /** This is the value of Sub Trade Type 
     * with a default Value "" 
     * of type select */
    public subTradeTypePk(v : string) : AbstractExecutionEntry {
        this._subTradeTypePk=v;
        return this;
    }
    
    /** This is the value of Buy/Sell Orientation 
     * with a default Value "FB" 
     * of type select */
    public buySellOrientation(v : string) : AbstractExecutionEntry {
        this._buySellOrientation=v;
        return this;
    }
    
    /** This is the value of Short Selling Flag 
     * with a default Value "" 
     * of type select */
    public shortSellingFlag(v : string) : AbstractExecutionEntry {
        this._shortSellingFlag=v;
        return this;
    }
    
    /** This is the value of Short Sell Exempt Flag 
     * with a default Value "" 
     * of type select */
    public shortSellExemptFlag(v : string) : AbstractExecutionEntry {
        this._shortSellExemptFlag=v;
        return this;
    }
    
    /** This is the value of Principal Type 
     * with a default Value "Agency" 
     * of type select */
    public principalType(v : string) : AbstractExecutionEntry {
        this._principalType=v;
        return this;
    }
    
    /** This is the value of Delivery Method 
     * with a default Value "" 
     * of type select */
    public deliveryMethod(v : string) : AbstractExecutionEntry {
        this._deliveryMethod=v;
        return this;
    }
    
    /** This is the value of Gross/Net Type 
     * with a default Value "GROSS" 
     * of type select */
    public grossNetType(v : string) : AbstractExecutionEntry {
        this._grossNetType=v;
        return this;
    }
    
    /** This is the value of Input Price Format 
     * with a default Value "UNIT PRICE" 
     * of type select */
    public inputPriceFormat(v : string) : AbstractExecutionEntry {
        this._inputPriceFormat=v;
        return this;
    }
    
    /** This is the value of Account Balance Type 
     * with a default Value "10" 
     * of type select */
    public accountBalanceTypeStr(v : string) : AbstractExecutionEntry {
        this._accountBalanceTypeStr=v;
        return this;
    }
    
    /** This is the value of Execution Method 
     * with a default Value "" 
     * of type select */
    public executionMethod(v : string) : AbstractExecutionEntry {
        this._executionMethod=v;
        return this;
    }
    
    /** This is the value of Calculation Type 
     * with a default Value "" 
     * of type select */
    public calculationType(v : string) : AbstractExecutionEntry {
        this._calculationType=v;
        return this;
    }
    
    /** This is the value of Step In/Out Flag 
     * with a default Value "" 
     * of type select */
    public stepInOutFlag(v : string) : AbstractExecutionEntry {
        this._stepInOutFlag=v;
        return this;
    }
    
    /** This is the value of Excoupon Flag 
     * with a default Value "N" 
     * of type select */
    public exCouponFlag(v : string) : AbstractExecutionEntry {
        this._exCouponFlag=v;
        return this;
    }
    
    /** This is the value of Dirty Price Flag 
     * with a default Value "N" 
     * of type select */
    public dirtyPriceFlag(v : string) : AbstractExecutionEntry {
        this._dirtyPriceFlag=v;
        return this;
    }
    
    /** This is the value of Negative Accrued Interest Flag 
     * with a default Value "N" 
     * of type select */
    public negativeAccruedInterestFlag(v : string) : AbstractExecutionEntry {
        this._negativeAccruedInterestFlag=v;
        return this;
    }
    
    /** This is the value of WI Commission Flag 
     * with a default Value "Y" 
     * of type select */
    public wiCommFlag(v : string) : AbstractExecutionEntry {
        this._wiCommFlag=v;
        return this;
    }
    
    /** This is the value of As Customer Flag 
     * with a default Value "" 
     * of type select */
    public asCustomerFlag(v : string) : AbstractExecutionEntry {
        this._asCustomerFlag=v;
        return this;
    }
    
    /** This is the value of NSCC Report Eligible 
     * with a default Value "" 
     * of type select */
    public nsccReportEligibleFlag(v : string) : AbstractExecutionEntry {
        this._nsccReportEligibleFlag=v;
        return this;
    }
    
    /** This is the value of Compression Req. Flag 
     * with a default Value "" 
     * of type select */
    public compressionReqdFlag(v : string) : AbstractExecutionEntry {
        this._compressionReqdFlag=v;
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
    if(this._tradeDateStr!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="execScreenData.tradeDateStr"]' , value : this._tradeDateStr});
        }if(this._executionTime!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="execScreenData.executionTime"]' , value : this._executionTime});
        }if(this._valueDateStr!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="execScreenData.valueDateStr"]' , value : this._valueDateStr});
        }if(this._cashValueDateStr!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="execScreenData.cashValueDateStr"]' , value : this._cashValueDateStr});
        }if(this._clientAccount!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="execScreenData.clientAccount"]' , value : this._clientAccount});
        }if(this._inventoryAccountNo!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="execScreenData.inventoryAccountNo"]' , value : this._inventoryAccountNo});
        }if(this._brokerAccount!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="execScreenData.brokerAccount"]' , value : this._brokerAccount});
        }if(this._securityInfo!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="execScreenData.securityInfo"]' , value : this._securityInfo});
        }if(this._quantityStr!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="execScreenData.quantityStr"]' , value : this._quantityStr});
        }if(this._inputPriceStr!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="execScreenData.inputPriceStr"]' , value : this._inputPriceStr});
        }if(this._salesCode!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="execScreenData.salesCode"]' , value : this._salesCode});
        }if(this._tradeCurrency!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="execScreenData.tradeCurrency"]' , value : this._tradeCurrency});
        }if(this._executionMarket!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="execScreenData.executionMarket"]' , value : this._executionMarket});
        }if(this._settlementCurrency!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="execScreenData.settlementCurrency"]' , value : this._settlementCurrency});
        }if(this._exchangeRate!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="execScreenData.exchangeRate"]' , value : this._exchangeRate});
        }if(this._stepOutAccountNo!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="execScreenData.stepOutAccountNo"]' , value : this._stepOutAccountNo});
        }if(this._wiPriceCommAdjustmentRateStr!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="execScreenData.wiPriceCommAdjustmentRateStr"]' , value : this._wiPriceCommAdjustmentRateStr});
        }if(this._tradeReferenceNo!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="execScreenData.tradeReferenceNo"]' , value : this._tradeReferenceNo});
        }if(this._senderReferenceNo!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="execScreenData.senderReferenceNo"]' , value : this._senderReferenceNo});
        }if(this._sourceReferenceNo!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="execScreenData.sourceReferenceNo"]' , value : this._sourceReferenceNo});
        }if(this._cpAccountNo!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="execScreenData.cpAccountNo"]' , value : this._cpAccountNo});
        }if(this._tradeType!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="execScreenData.tradeType"]' , value : this._tradeType});
        }if(this._subTradeTypePk!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="execScreenData.subTradeTypePk"]' , value : this._subTradeTypePk});
        }if(this._buySellOrientation!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="execScreenData.buySellOrientation"]' , value : this._buySellOrientation});
        }if(this._shortSellingFlag!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="execScreenData.shortSellingFlag"]' , value : this._shortSellingFlag});
        }if(this._shortSellExemptFlag!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="execScreenData.shortSellExemptFlag"]' , value : this._shortSellExemptFlag});
        }if(this._principalType!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="execScreenData.principalType"]' , value : this._principalType});
        }if(this._deliveryMethod!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="execScreenData.deliveryMethod"]' , value : this._deliveryMethod});
        }if(this._grossNetType!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="execScreenData.grossNetType"]' , value : this._grossNetType});
        }if(this._inputPriceFormat!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="execScreenData.inputPriceFormat"]' , value : this._inputPriceFormat});
        }if(this._accountBalanceTypeStr!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="execScreenData.accountBalanceTypeStr"]' , value : this._accountBalanceTypeStr});
        }if(this._executionMethod!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="execScreenData.executionMethod"]' , value : this._executionMethod});
        }if(this._calculationType!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="execScreenData.calculationType"]' , value : this._calculationType});
        }if(this._stepInOutFlag!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="execScreenData.stepInOutFlag"]' , value : this._stepInOutFlag});
        }if(this._exCouponFlag!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="execScreenData.exCouponFlag"]' , value : this._exCouponFlag});
        }if(this._dirtyPriceFlag!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="execScreenData.dirtyPriceFlag"]' , value : this._dirtyPriceFlag});
        }if(this._negativeAccruedInterestFlag!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="execScreenData.negativeAccruedInterestFlag"]' , value : this._negativeAccruedInterestFlag});
        }if(this._wiCommFlag!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="execScreenData.wiCommFlag"]' , value : this._wiCommFlag});
        }if(this._asCustomerFlag!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="execScreenData.asCustomerFlag"]' , value : this._asCustomerFlag});
        }if(this._nsccReportEligibleFlag!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="execScreenData.nsccReportEligibleFlag"]' , value : this._nsccReportEligibleFlag});
        }if(this._compressionReqdFlag!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="execScreenData.compressionReqdFlag"]' , value : this._compressionReqdFlag});
        }if(this._tradeChannel!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="tradeChannel"]' , value : this._tradeChannel});
        }
    return fields;

    }
}