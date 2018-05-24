
import { BaseUIOperations } from "../../BaseUIOperations";
import { Assert } from "../../common/Assert";

export abstract class AbstractBalanceQuery  extends BaseUIOperations {
    async doValidate() : Promise<any>{
Assert.notNull(this._baseDate)
Assert.notNull(this._balanceBasis)

 } 

    /** private variable for baseDate() */
    private _baseDate : string     
    /** private variable for accountNo() */
    private _accountNo : string     
    /** private variable for salesId() */
    private _salesId : string     
    /** private variable for accountFrom() */
    private _accountFrom : string     
    /** private variable for accountTo() */
    private _accountTo : string     
    /** private variable for currency() */
    private _currency : string     
    /** private variable for securityCode() */
    private _securityCode : string     
    /** private variable for agentCode() */
    private _agentCode : string     
    /** private variable for instrumentType() */
    private _instrumentType : string     
    /** private variable for counterPartyCode() */
    private _counterPartyCode : string     
    /** private variable for issueCurrency() */
    private _issueCurrency : string     
    /** private variable for balanceBasis() */
    private _balanceBasis : string     
    /** private variable for accountBalanceType() */
    private _accountBalanceType : string     
    /** private variable for ledgerId() */
    private _ledgerId : string     
    /** private variable for form() */
    private _form : string     
    /** private variable for displayByAcBalanceType() */
    private _displayByAcBalanceType : string     
    /** private variable for displayZeroBalance() */
    private _displayZeroBalance : string     
    /** private variable for ledgerLevelReqd() */
    private _ledgerLevelReqd : string     
    /** private variable for complianceType() */
    private _complianceType : string     
    /** private variable for counterPartyType() */
    private _counterPartyType : string     
    /** private variable for displayLongShortBalance() */
    private _displayLongShortBalance : string     
    /** private variable for groupingLevel() */
    private _groupingLevel : string     
    /** private variable for defaultAccountBalance() */
    private _defaultAccountBalance : string     
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
    /** private variable for sortField6() */
    private _sortField6 : string     
    /** This is the value of Date 
     * with a default Value "" 
     * of type select */
    public baseDate(v : string) : AbstractBalanceQuery {
        this._baseDate=v;
        return this;
    }
    
    /** This is the value of Account No 
     * with a default Value "" 
     * of type select */
    public accountNo(v : string) : AbstractBalanceQuery {
        this._accountNo=v;
        return this;
    }
    
    /** This is the value of Sales Id 
     * with a default Value "" 
     * of type select */
    public salesId(v : string) : AbstractBalanceQuery {
        this._salesId=v;
        return this;
    }
    
    /** This is the value of Account Range(From - To) 
     * with a default Value "" 
     * of type select */
    public accountFrom(v : string) : AbstractBalanceQuery {
        this._accountFrom=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type select */
    public accountTo(v : string) : AbstractBalanceQuery {
        this._accountTo=v;
        return this;
    }
    
    /** This is the value of Ccy 
     * with a default Value "" 
     * of type select */
    public currency(v : string) : AbstractBalanceQuery {
        this._currency=v;
        return this;
    }
    
    /** This is the value of Security 
     * with a default Value "" 
     * of type select */
    public securityCode(v : string) : AbstractBalanceQuery {
        this._securityCode=v;
        return this;
    }
    
    /** This is the value of Agent Code 
     * with a default Value "" 
     * of type select */
    public agentCode(v : string) : AbstractBalanceQuery {
        this._agentCode=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type select */
    public instrumentType(v : string) : AbstractBalanceQuery {
        this._instrumentType=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type select */
    public counterPartyCode(v : string) : AbstractBalanceQuery {
        this._counterPartyCode=v;
        return this;
    }
    
    /** This is the value of Issue Currency 
     * with a default Value "" 
     * of type select */
    public issueCurrency(v : string) : AbstractBalanceQuery {
        this._issueCurrency=v;
        return this;
    }
    
    /** This is the value of Balance Basis 
     * with a default Value "" 
     * of type select */
    public balanceBasis(v : string) : AbstractBalanceQuery {
        this._balanceBasis=v;
        return this;
    }
    
    /** This is the value of Account Balance Type 
     * with a default Value "" 
     * of type select */
    public accountBalanceType(v : string) : AbstractBalanceQuery {
        this._accountBalanceType=v;
        return this;
    }
    
    /** This is the value of Ledger 
     * with a default Value "" 
     * of type select */
    public ledgerId(v : string) : AbstractBalanceQuery {
        this._ledgerId=v;
        return this;
    }
    
    /** This is the value of Form 
     * with a default Value "" 
     * of type select */
    public form(v : string) : AbstractBalanceQuery {
        this._form=v;
        return this;
    }
    
    /** This is the value of Display by A/C Balance Type 
     * with a default Value "" 
     * of type select */
    public displayByAcBalanceType(v : string) : AbstractBalanceQuery {
        this._displayByAcBalanceType=v;
        return this;
    }
    
    /** This is the value of Display 0 balance 
     * with a default Value "" 
     * of type select */
    public displayZeroBalance(v : string) : AbstractBalanceQuery {
        this._displayZeroBalance=v;
        return this;
    }
    
    /** This is the value of Ledger Level Balance 
     * with a default Value "" 
     * of type select */
    public ledgerLevelReqd(v : string) : AbstractBalanceQuery {
        this._ledgerLevelReqd=v;
        return this;
    }
    
    /** This is the value of Compliance Type 
     * with a default Value "" 
     * of type select */
    public complianceType(v : string) : AbstractBalanceQuery {
        this._complianceType=v;
        return this;
    }
    
    /** This is the value of Counter Party Code 
     * with a default Value "" 
     * of type select */
    public counterPartyType(v : string) : AbstractBalanceQuery {
        this._counterPartyType=v;
        return this;
    }
    
    /** This is the value of Security Balance 
     * with a default Value "" 
     * of type select */
    public displayLongShortBalance(v : string) : AbstractBalanceQuery {
        this._displayLongShortBalance=v;
        return this;
    }
    
    /** This is the value of Grouping Level 
     * with a default Value "" 
     * of type select */
    public groupingLevel(v : string) : AbstractBalanceQuery {
        this._groupingLevel=v;
        return this;
    }
    
    /** This is the value of Display Default Account Balance 
     * with a default Value "" 
     * of type select */
    public defaultAccountBalance(v : string) : AbstractBalanceQuery {
        this._defaultAccountBalance=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type select */
    public sortField1(v : string) : AbstractBalanceQuery {
        this._sortField1=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type select */
    public sortField2(v : string) : AbstractBalanceQuery {
        this._sortField2=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type select */
    public sortField3(v : string) : AbstractBalanceQuery {
        this._sortField3=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type select */
    public sortField4(v : string) : AbstractBalanceQuery {
        this._sortField4=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type select */
    public sortField5(v : string) : AbstractBalanceQuery {
        this._sortField5=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type select */
    public sortField6(v : string) : AbstractBalanceQuery {
        this._sortField6=v;
        return this;
    }
    
    protected fetchFields() : any[] {
        let fields :any[] = []
    if(this._baseDate!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="baseDate"]' , value : this._baseDate});
        }if(this._accountNo!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="accountNo"]' , value : this._accountNo});
        }if(this._salesId!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="salesId"]' , value : this._salesId});
        }if(this._accountFrom!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="accountFrom"]' , value : this._accountFrom});
        }if(this._accountTo!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="accountTo"]' , value : this._accountTo});
        }if(this._currency!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="currency"]' , value : this._currency});
        }if(this._securityCode!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="securityCode"]' , value : this._securityCode});
        }if(this._agentCode!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="agentCode"]' , value : this._agentCode});
        }if(this._instrumentType!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="instrumentType"]' , value : this._instrumentType});
        }if(this._counterPartyCode!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="counterPartyCode"]' , value : this._counterPartyCode});
        }if(this._issueCurrency!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="issueCurrency"]' , value : this._issueCurrency});
        }if(this._balanceBasis!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="balanceBasis"]' , value : this._balanceBasis});
        }if(this._accountBalanceType!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="accountBalanceType"]' , value : this._accountBalanceType});
        }if(this._ledgerId!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="ledgerId"]' , value : this._ledgerId});
        }if(this._form!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="form"]' , value : this._form});
        }if(this._displayByAcBalanceType!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="displayByAcBalanceType"]' , value : this._displayByAcBalanceType});
        }if(this._displayZeroBalance!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="displayZeroBalance"]' , value : this._displayZeroBalance});
        }if(this._ledgerLevelReqd!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="ledgerLevelReqd"]' , value : this._ledgerLevelReqd});
        }if(this._complianceType!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="complianceType"]' , value : this._complianceType});
        }if(this._counterPartyType!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="counterPartyType"]' , value : this._counterPartyType});
        }if(this._displayLongShortBalance!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="displayLongShortBalance"]' , value : this._displayLongShortBalance});
        }if(this._groupingLevel!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="groupingLevel"]' , value : this._groupingLevel});
        }if(this._defaultAccountBalance!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="defaultAccountBalance"]' , value : this._defaultAccountBalance});
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
        }if(this._sortField6!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="sortField6"]' , value : this._sortField6});
        }
    return fields;

    }
}