
import { BaseUIOperations } from "../../BaseUIOperations";
import { Assert } from "../../common/Assert";

export abstract class AbstractRiskParameterQuery  extends BaseUIOperations {
    async doValidate() : Promise<any>{
Assert.notNull(this._baseDateFrom)

 } 

    /** private variable for accountNo() */
    private _accountNo : string     
    /** private variable for currency() */
    private _currency : string     
    /** private variable for baseDateFrom() */
    private _baseDateFrom : string     
    /** private variable for baseDateTo() */
    private _baseDateTo : string     
    /** private variable for daysOfCallFrom() */
    private _daysOfCallFrom : string     
    /** private variable for daysOfCallTo() */
    private _daysOfCallTo : string     
    /** private variable for accountClass() */
    private _accountClass : string     
    /** private variable for balancePl() */
    private _balancePl : string     
    /** private variable for daysOfCall() */
    private _daysOfCall : string     
    /** private variable for action() */
    private _action : string     
    /** private variable for sortField1() */
    private _sortField1 : string     
    /** private variable for sortField2() */
    private _sortField2 : string     
    /** This is the value of Account No 
     * with a default Value "" 
     * of type select */
    public accountNo(v : string) : AbstractRiskParameterQuery {
        this._accountNo=v;
        return this;
    }
    
    /** This is the value of Currency 
     * with a default Value "" 
     * of type select */
    public currency(v : string) : AbstractRiskParameterQuery {
        this._currency=v;
        return this;
    }
    
    /** This is the value of Base Date From-To 
     * with a default Value "" 
     * of type select */
    public baseDateFrom(v : string) : AbstractRiskParameterQuery {
        this._baseDateFrom=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type select */
    public baseDateTo(v : string) : AbstractRiskParameterQuery {
        this._baseDateTo=v;
        return this;
    }
    
    /** This is the value of From Days Of Call 
     * with a default Value "" 
     * of type select */
    public daysOfCallFrom(v : string) : AbstractRiskParameterQuery {
        this._daysOfCallFrom=v;
        return this;
    }
    
    /** This is the value of To Days Of Call 
     * with a default Value "" 
     * of type select */
    public daysOfCallTo(v : string) : AbstractRiskParameterQuery {
        this._daysOfCallTo=v;
        return this;
    }
    
    /** This is the value of Account Class 
     * with a default Value "" 
     * of type select */
    public accountClass(v : string) : AbstractRiskParameterQuery {
        this._accountClass=v;
        return this;
    }
    
    /** This is the value of Include Zero Balance 
     * with a default Value "" 
     * of type select */
    public balancePl(v : string) : AbstractRiskParameterQuery {
        this._balancePl=v;
        return this;
    }
    
    /** This is the value of Include Days Of Call 
     * with a default Value "" 
     * of type select */
    public daysOfCall(v : string) : AbstractRiskParameterQuery {
        this._daysOfCall=v;
        return this;
    }
    
    /** This is the value of Action 
     * with a default Value "" 
     * of type select */
    public action(v : string) : AbstractRiskParameterQuery {
        this._action=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type select */
    public sortField1(v : string) : AbstractRiskParameterQuery {
        this._sortField1=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type select */
    public sortField2(v : string) : AbstractRiskParameterQuery {
        this._sortField2=v;
        return this;
    }
    }