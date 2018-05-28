

import { BaseUIOperations } from "../../BaseUIOperations";
import { Assert } from "../../common/Assert";

export abstract class AbstractPortfolioQuery  extends BaseUIOperations {

    async doValidate() : Promise<any>{
Assert.notNull(this._baseDate)
                Assert.notNull(this._balanceBasis)
                 } 

    /** private variable for baseDate() */
    private _baseDate : string     
    /** private variable for currency() */
    private _currency : string     
    /** private variable for accountNo() */
    private _accountNo : string     
    /** private variable for agentCode() */
    private _agentCode : string     
    /** private variable for securityCode() */
    private _securityCode : string     
    /** private variable for issueCurrency() */
    private _issueCurrency : string     
    /** private variable for instrumentType() */
    private _instrumentType : string     
    /** private variable for strategyCode() */
    private _strategyCode : string     
    /** private variable for counterPartyCode() */
    private _counterPartyCode : string     
    /** private variable for salesCode() */
    private _salesCode : string     
    /** private variable for accountBalanceType() */
    private _accountBalanceType : string     
    /** private variable for balanceBasis() */
    private _balanceBasis : string     
    /** private variable for inventoryAccountType() */
    private _inventoryAccountType : string     
    /** private variable for longShortCategory() */
    private _longShortCategory : string     
    /** private variable for balancePl() */
    private _balancePl : string     
    /** private variable for counterPartyType() */
    private _counterPartyType : string     
    /** private variable for sortField1() */
    private _sortField1 : string     
    /** private variable for sortField2() */
    private _sortField2 : string     
    /** private variable for sortField3() */
    private _sortField3 : string     
    /** private variable for sortField4() */
    private _sortField4 : string     
    /** private variable for sortField5() */
    private _sortField5 : string     
    /** This is the value of Date 
     * with a default Value "" 
     * of type select */
    public baseDate(v : string) : AbstractPortfolioQuery {
        this._baseDate=v;
        return this;
    }
    
    /** This is the value of Currency 
     * with a default Value "" 
     * of type select */
    public currency(v : string) : AbstractPortfolioQuery {
        this._currency=v;
        return this;
    }
    
    /** This is the value of Account No 
     * with a default Value "" 
     * of type select */
    public accountNo(v : string) : AbstractPortfolioQuery {
        this._accountNo=v;
        return this;
    }
    
    /** This is the value of Agent Code 
     * with a default Value "" 
     * of type select */
    public agentCode(v : string) : AbstractPortfolioQuery {
        this._agentCode=v;
        return this;
    }
    
    /** This is the value of Security Code 
     * with a default Value "" 
     * of type select */
    public securityCode(v : string) : AbstractPortfolioQuery {
        this._securityCode=v;
        return this;
    }
    
    /** This is the value of Issue Currency 
     * with a default Value "" 
     * of type select */
    public issueCurrency(v : string) : AbstractPortfolioQuery {
        this._issueCurrency=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type select */
    public instrumentType(v : string) : AbstractPortfolioQuery {
        this._instrumentType=v;
        return this;
    }
    
    /** This is the value of Strategy Code 
     * with a default Value "" 
     * of type select */
    public strategyCode(v : string) : AbstractPortfolioQuery {
        this._strategyCode=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type select */
    public counterPartyCode(v : string) : AbstractPortfolioQuery {
        this._counterPartyCode=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type select */
    public salesCode(v : string) : AbstractPortfolioQuery {
        this._salesCode=v;
        return this;
    }
    
    /** This is the value of Account Balance Type 
     * with a default Value "" 
     * of type select */
    public accountBalanceType(v : string) : AbstractPortfolioQuery {
        this._accountBalanceType=v;
        return this;
    }
    
    /** This is the value of Balance Basis 
     * with a default Value "" 
     * of type select */
    public balanceBasis(v : string) : AbstractPortfolioQuery {
        this._balanceBasis=v;
        return this;
    }
    
    /** This is the value of Inventory Account Type 
     * with a default Value "" 
     * of type select */
    public inventoryAccountType(v : string) : AbstractPortfolioQuery {
        this._inventoryAccountType=v;
        return this;
    }
    
    /** This is the value of Long/Short Category 
     * with a default Value "" 
     * of type select */
    public longShortCategory(v : string) : AbstractPortfolioQuery {
        this._longShortCategory=v;
        return this;
    }
    
    /** This is the value of Include Zero Balance Portfolios 
     * with a default Value "" 
     * of type select */
    public balancePl(v : string) : AbstractPortfolioQuery {
        this._balancePl=v;
        return this;
    }
    
    /** This is the value of Counter Party Code 
     * with a default Value "" 
     * of type select */
    public counterPartyType(v : string) : AbstractPortfolioQuery {
        this._counterPartyType=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type select */
    public sortField1(v : string) : AbstractPortfolioQuery {
        this._sortField1=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type select */
    public sortField2(v : string) : AbstractPortfolioQuery {
        this._sortField2=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type select */
    public sortField3(v : string) : AbstractPortfolioQuery {
        this._sortField3=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type select */
    public sortField4(v : string) : AbstractPortfolioQuery {
        this._sortField4=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type select */
    public sortField5(v : string) : AbstractPortfolioQuery {
        this._sortField5=v;
        return this;
    }
    
    protected fetchFields() : any[] {
        let fields :any[] = []
    if(this._baseDate!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="baseDate"]' , value : this._baseDate});
        }if(this._currency!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="currency"]' , value : this._currency});
        }if(this._accountNo!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="accountNo"]' , value : this._accountNo});
        }if(this._agentCode!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="agentCode"]' , value : this._agentCode});
        }if(this._securityCode!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="securityCode"]' , value : this._securityCode});
        }if(this._issueCurrency!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="issueCurrency"]' , value : this._issueCurrency});
        }if(this._instrumentType!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="instrumentType"]' , value : this._instrumentType});
        }if(this._strategyCode!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="strategyCode"]' , value : this._strategyCode});
        }if(this._counterPartyCode!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="counterPartyCode"]' , value : this._counterPartyCode});
        }if(this._salesCode!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="salesCode"]' , value : this._salesCode});
        }if(this._accountBalanceType!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="accountBalanceType"]' , value : this._accountBalanceType});
        }if(this._balanceBasis!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="balanceBasis"]' , value : this._balanceBasis});
        }if(this._inventoryAccountType!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="inventoryAccountType"]' , value : this._inventoryAccountType});
        }if(this._longShortCategory!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="longShortCategory"]' , value : this._longShortCategory});
        }if(this._balancePl!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="balancePl"]' , value : this._balancePl});
        }if(this._counterPartyType!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="counterPartyType"]' , value : this._counterPartyType});
        }if(this._sortField1!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="sortField1"]' , value : this._sortField1});
        }if(this._sortField2!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="sortField2"]' , value : this._sortField2});
        }if(this._sortField3!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="sortField3"]' , value : this._sortField3});
        }if(this._sortField4!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="sortField4"]' , value : this._sortField4});
        }if(this._sortField5!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="sortField5"]' , value : this._sortField5});
        }
    return fields;

    }
}