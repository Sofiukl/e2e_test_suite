
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
    
    protected fetchFields() : any[] {
        let fields :any[] = []
    if(this._accountNo!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="accountNo"]' , value : this._accountNo});
        }if(this._currency!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="currency"]' , value : this._currency});
        }if(this._baseDateFrom!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="baseDateFrom"]' , value : this._baseDateFrom});
        }if(this._baseDateTo!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="baseDateTo"]' , value : this._baseDateTo});
        }if(this._daysOfCallFrom!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="daysOfCallFrom"]' , value : this._daysOfCallFrom});
        }if(this._daysOfCallTo!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="daysOfCallTo"]' , value : this._daysOfCallTo});
        }if(this._accountClass!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="accountClass"]' , value : this._accountClass});
        }if(this._balancePl!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="balancePl"]' , value : this._balancePl});
        }if(this._daysOfCall!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="daysOfCall"]' , value : this._daysOfCall});
        }if(this._action!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="action"]' , value : this._action});
        }if(this._sortField1!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="sortField1"]' , value : this._sortField1});
        }if(this._sortField2!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="sortField2"]' , value : this._sortField2});
        }
    return fields;

    }
}