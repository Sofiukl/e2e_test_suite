

import { BaseUIOperations } from "../../BaseUIOperations";
import { Assert } from "../../common/Assert";

export abstract class AbstractCashTransferAuthorization  extends BaseUIOperations {

    async doValidate() : Promise<any>{
Assert.notNull(this._operationObjective)
                 } 

    /** private variable for fromAccountNo() */
    private _fromAccountNo : string  = ""   
    /** private variable for toAccountNo() */
    private _toAccountNo : string  = ""   
    /** private variable for referenceNo() */
    private _referenceNo : string  = ""   
    /** private variable for transactionDateFrom() */
    private _transactionDateFrom : string  = ""   
    /** private variable for transactionDateTo() */
    private _transactionDateTo : string  = ""   
    /** private variable for txnReferenceNo() */
    private _txnReferenceNo : string  = ""   
    /** private variable for externalReferenceNo() */
    private _externalReferenceNo : string  = ""   
    /** private variable for paymentReferenceNo() */
    private _paymentReferenceNo : string  = ""   
    /** private variable for operationObjective() */
    private _operationObjective : string  = "CASH_AUTHORIZATION"   
    /** private variable for transferType() */
    private _transferType : string  = "TRANSFER_INTERNAL_OWN"   
    /** private variable for accountBalanceTypeFrom() */
    private _accountBalanceTypeFrom : string  = ""   
    /** private variable for accountBalanceTypeTo() */
    private _accountBalanceTypeTo : string  = ""   
    /** private variable for stockTransferStatus() */
    private _stockTransferStatus : string  = ""   
    /** private variable for dataSource() */
    private _dataSource : string  = ""   
    /** This is the value of From Account No 
     * with a default Value "" 
     * of type text */
    public fromAccountNo(v : string) : AbstractCashTransferAuthorization {
        this._fromAccountNo=v;
        return this;
    }
    
    /** This is the value of To Account No 
     * with a default Value "" 
     * of type text */
    public toAccountNo(v : string) : AbstractCashTransferAuthorization {
        this._toAccountNo=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type text */
    public referenceNo(v : string) : AbstractCashTransferAuthorization {
        this._referenceNo=v;
        return this;
    }
    
    /** This is the value of Transaction Date (From-To) 
     * with a default Value "" 
     * of type text */
    public transactionDateFrom(v : string) : AbstractCashTransferAuthorization {
        this._transactionDateFrom=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type text */
    public transactionDateTo(v : string) : AbstractCashTransferAuthorization {
        this._transactionDateTo=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type text */
    public txnReferenceNo(v : string) : AbstractCashTransferAuthorization {
        this._txnReferenceNo=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type text */
    public externalReferenceNo(v : string) : AbstractCashTransferAuthorization {
        this._externalReferenceNo=v;
        return this;
    }
    
    /** This is the value of Payment Reference No 
     * with a default Value "" 
     * of type text */
    public paymentReferenceNo(v : string) : AbstractCashTransferAuthorization {
        this._paymentReferenceNo=v;
        return this;
    }
    
    /** This is the value of Operation Objective 
     * with a default Value "CASH_AUTHORIZATION" 
     * of type select */
    public operationObjective(v : string) : AbstractCashTransferAuthorization {
        this._operationObjective=v;
        return this;
    }
    
    /** This is the value of Transfer Type 
     * with a default Value "TRANSFER_INTERNAL_OWN" 
     * of type select */
    public transferType(v : string) : AbstractCashTransferAuthorization {
        this._transferType=v;
        return this;
    }
    
    /** This is the value of From Account Balance Type 
     * with a default Value "" 
     * of type select */
    public accountBalanceTypeFrom(v : string) : AbstractCashTransferAuthorization {
        this._accountBalanceTypeFrom=v;
        return this;
    }
    
    /** This is the value of To Account Balance Type 
     * with a default Value "" 
     * of type select */
    public accountBalanceTypeTo(v : string) : AbstractCashTransferAuthorization {
        this._accountBalanceTypeTo=v;
        return this;
    }
    
    /** This is the value of Status 
     * with a default Value "" 
     * of type select */
    public stockTransferStatus(v : string) : AbstractCashTransferAuthorization {
        this._stockTransferStatus=v;
        return this;
    }
    
    /** This is the value of Data Source 
     * with a default Value "" 
     * of type select */
    public dataSource(v : string) : AbstractCashTransferAuthorization {
        this._dataSource=v;
        return this;
    }
    
    protected fetchFields() : any[] {
        let fields :any[] = []
    if(this._fromAccountNo!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="fromAccountNo"]' , value : this._fromAccountNo});
        }if(this._toAccountNo!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="toAccountNo"]' , value : this._toAccountNo});
        }if(this._referenceNo!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="referenceNo"]' , value : this._referenceNo});
        }if(this._transactionDateFrom!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="transactionDateFrom"]' , value : this._transactionDateFrom});
        }if(this._transactionDateTo!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="transactionDateTo"]' , value : this._transactionDateTo});
        }if(this._txnReferenceNo!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="txnReferenceNo"]' , value : this._txnReferenceNo});
        }if(this._externalReferenceNo!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="externalReferenceNo"]' , value : this._externalReferenceNo});
        }if(this._paymentReferenceNo!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="paymentReferenceNo"]' , value : this._paymentReferenceNo});
        }if(this._operationObjective!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="operationObjective"]' , value : this._operationObjective});
        }if(this._transferType!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="transferType"]' , value : this._transferType});
        }if(this._accountBalanceTypeFrom!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="accountBalanceTypeFrom"]' , value : this._accountBalanceTypeFrom});
        }if(this._accountBalanceTypeTo!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="accountBalanceTypeTo"]' , value : this._accountBalanceTypeTo});
        }if(this._stockTransferStatus!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="stockTransferStatus"]' , value : this._stockTransferStatus});
        }if(this._dataSource!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="dataSource"]' , value : this._dataSource});
        }
    return fields;

    }
}