

import { BaseUIOperations } from "../../BaseUIOperations";
import { Assert } from "../../../utils/Assert";
export abstract class AbstractMovementQuery  extends BaseUIOperations {

    async doValidate() : Promise<any>{
Assert.notNull(this._movementBasis)
                 } 

    /** private variable for dateFrom() */
    private _dateFrom : string     
    /** private variable for dateTo() */
    private _dateTo : string     
    /** private variable for accountNo() */
    private _accountNo : string     
    /** private variable for agentCode() */
    private _agentCode : string     
    /** private variable for currency() */
    private _currency : string     
    /** private variable for instrumentType() */
    private _instrumentType : string     
    /** private variable for securityCode() */
    private _securityCode : string     
    /** private variable for appUpdDate() */
    private _appUpdDate : string     
    /** private variable for accountFrom() */
    private _accountFrom : string     
    /** private variable for accountTo() */
    private _accountTo : string     
    /** private variable for movementBasis() */
    private _movementBasis : string     
    /** private variable for accountBalanceType() */
    private _accountBalanceType : string     
    /** private variable for form() */
    private _form : string     
    /** private variable for sortField1() */
    private _sortField1 : string     
    /** private variable for sortField2() */
    private _sortField2 : string     
    /** private variable for sortField3() */
    private _sortField3 : string     
    /** private variable for sortField4() */
    private _sortField4 : string     
    /** This is the value of  
     * with a default Value "" 
     * of type select */
    public dateFrom(v : string) : AbstractMovementQuery {
        this._dateFrom=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type select */
    public dateTo(v : string) : AbstractMovementQuery {
        this._dateTo=v;
        return this;
    }
    
    /** This is the value of Account No 
     * with a default Value "" 
     * of type select */
    public accountNo(v : string) : AbstractMovementQuery {
        this._accountNo=v;
        return this;
    }
    
    /** This is the value of Agent Code 
     * with a default Value "" 
     * of type select */
    public agentCode(v : string) : AbstractMovementQuery {
        this._agentCode=v;
        return this;
    }
    
    /** This is the value of Currency 
     * with a default Value "" 
     * of type select */
    public currency(v : string) : AbstractMovementQuery {
        this._currency=v;
        return this;
    }
    
    /** This is the value of Instrument Type 
     * with a default Value "" 
     * of type select */
    public instrumentType(v : string) : AbstractMovementQuery {
        this._instrumentType=v;
        return this;
    }
    
    /** This is the value of Security 
     * with a default Value "" 
     * of type select */
    public securityCode(v : string) : AbstractMovementQuery {
        this._securityCode=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type select */
    public appUpdDate(v : string) : AbstractMovementQuery {
        this._appUpdDate=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type select */
    public accountFrom(v : string) : AbstractMovementQuery {
        this._accountFrom=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type select */
    public accountTo(v : string) : AbstractMovementQuery {
        this._accountTo=v;
        return this;
    }
    
    /** This is the value of Movement Basis 
     * with a default Value "" 
     * of type select */
    public movementBasis(v : string) : AbstractMovementQuery {
        this._movementBasis=v;
        return this;
    }
    
    /** This is the value of Account Balance Type 
     * with a default Value "" 
     * of type select */
    public accountBalanceType(v : string) : AbstractMovementQuery {
        this._accountBalanceType=v;
        return this;
    }
    
    /** This is the value of Form 
     * with a default Value "" 
     * of type select */
    public form(v : string) : AbstractMovementQuery {
        this._form=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type select */
    public sortField1(v : string) : AbstractMovementQuery {
        this._sortField1=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type select */
    public sortField2(v : string) : AbstractMovementQuery {
        this._sortField2=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type select */
    public sortField3(v : string) : AbstractMovementQuery {
        this._sortField3=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type select */
    public sortField4(v : string) : AbstractMovementQuery {
        this._sortField4=v;
        return this;
    }
    
    protected fetchFields() : any[] {
        let fields :any[] = []
    if(this._dateFrom!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="dateFrom"]' , value : this._dateFrom});
        }if(this._dateTo!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="dateTo"]' , value : this._dateTo});
        }if(this._accountNo!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="accountNo"]' , value : this._accountNo});
        }if(this._agentCode!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="agentCode"]' , value : this._agentCode});
        }if(this._currency!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="currency"]' , value : this._currency});
        }if(this._instrumentType!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="instrumentType"]' , value : this._instrumentType});
        }if(this._securityCode!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="securityCode"]' , value : this._securityCode});
        }if(this._appUpdDate!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="appUpdDate"]' , value : this._appUpdDate});
        }if(this._accountFrom!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="accountFrom"]' , value : this._accountFrom});
        }if(this._accountTo!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="accountTo"]' , value : this._accountTo});
        }if(this._movementBasis!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="movementBasis"]' , value : this._movementBasis});
        }if(this._accountBalanceType!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="accountBalanceType"]' , value : this._accountBalanceType});
        }if(this._form!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="form"]' , value : this._form});
        }if(this._sortField1!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="sortField1"]' , value : this._sortField1});
        }if(this._sortField2!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="sortField2"]' , value : this._sortField2});
        }if(this._sortField3!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="sortField3"]' , value : this._sortField3});
        }if(this._sortField4!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="sortField4"]' , value : this._sortField4});
        }
    return fields;

    }
}