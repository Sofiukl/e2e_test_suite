export class BalanceQuery  extends BaseUIOperations {
    async doExecute() : Promise<any>{
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
    /** This is the value of  
     * with a default Value "" 
     * of type select */
    public baseDate(v : string) : BalanceQuery {
        this._baseDate=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type select */
    public accountNo(v : string) : BalanceQuery {
        this._accountNo=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type select */
    public salesId(v : string) : BalanceQuery {
        this._salesId=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type select */
    public accountFrom(v : string) : BalanceQuery {
        this._accountFrom=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type select */
    public accountTo(v : string) : BalanceQuery {
        this._accountTo=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type select */
    public currency(v : string) : BalanceQuery {
        this._currency=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type select */
    public securityCode(v : string) : BalanceQuery {
        this._securityCode=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type select */
    public agentCode(v : string) : BalanceQuery {
        this._agentCode=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type select */
    public instrumentType(v : string) : BalanceQuery {
        this._instrumentType=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type select */
    public counterPartyCode(v : string) : BalanceQuery {
        this._counterPartyCode=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type select */
    public issueCurrency(v : string) : BalanceQuery {
        this._issueCurrency=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type select */
    public balanceBasis(v : string) : BalanceQuery {
        this._balanceBasis=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type select */
    public accountBalanceType(v : string) : BalanceQuery {
        this._accountBalanceType=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type select */
    public ledgerId(v : string) : BalanceQuery {
        this._ledgerId=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type select */
    public form(v : string) : BalanceQuery {
        this._form=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type select */
    public displayByAcBalanceType(v : string) : BalanceQuery {
        this._displayByAcBalanceType=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type select */
    public displayZeroBalance(v : string) : BalanceQuery {
        this._displayZeroBalance=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type select */
    public ledgerLevelReqd(v : string) : BalanceQuery {
        this._ledgerLevelReqd=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type select */
    public complianceType(v : string) : BalanceQuery {
        this._complianceType=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type select */
    public counterPartyType(v : string) : BalanceQuery {
        this._counterPartyType=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type select */
    public displayLongShortBalance(v : string) : BalanceQuery {
        this._displayLongShortBalance=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type select */
    public groupingLevel(v : string) : BalanceQuery {
        this._groupingLevel=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type select */
    public defaultAccountBalance(v : string) : BalanceQuery {
        this._defaultAccountBalance=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type select */
    public sortField1(v : string) : BalanceQuery {
        this._sortField1=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type select */
    public sortField2(v : string) : BalanceQuery {
        this._sortField2=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type select */
    public sortField3(v : string) : BalanceQuery {
        this._sortField3=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type select */
    public sortField4(v : string) : BalanceQuery {
        this._sortField4=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type select */
    public sortField5(v : string) : BalanceQuery {
        this._sortField5=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type select */
    public sortField6(v : string) : BalanceQuery {
        this._sortField6=v;
        return this;
    }
    }