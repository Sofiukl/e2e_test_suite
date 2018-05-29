

import { BaseUIOperations } from "../../BaseUIOperations";
import { Assert } from "../../../utils/Assert";

export abstract class AbstractCashTransferEntry  extends BaseUIOperations {

    async doValidate() : Promise<any>{
Assert.notNull(this._currency)
                Assert.notNull(this._fromAccount)
                Assert.notNull(this._toAccount)
                Assert.notNull(this._transferAmount)
                Assert.notNull(this._transferType)
                Assert.notNull(this._cam01Required)
                Assert.notNull(this._accountBalanceTypeFrom)
                Assert.notNull(this._accountBalanceTypeTo)
                Assert.notNull(this._authorizationRequired)
                Assert.notNull(this._creditLedgerCode)
                Assert.notNull(this._debitLedgerCode)
                 } 

    /** private variable for currency() */
    private _currency : string  = "THB"   
    /** private variable for fromAccount() */
    private _fromAccount : string  = ""   
    /** private variable for toAccount() */
    private _toAccount : string  = ""   
    /** private variable for transferAmount() */
    private _transferAmount : string  = ""   
    /** private variable for externalReferenceNo() */
    private _externalReferenceNo : string  = ""   
    /** private variable for txnReferenceNo() */
    private _txnReferenceNo : string  = ""   
    /** private variable for transferType() */
    private _transferType : string  = "TRANSFER_INTERNAL_OWN"   
    /** private variable for cam01Required() */
    private _cam01Required : string  = "N"   
    /** private variable for accountBalanceTypeFrom() */
    private _accountBalanceTypeFrom : string  = "10"   
    /** private variable for accountBalanceTypeTo() */
    private _accountBalanceTypeTo : string  = "10"   
    /** private variable for authorizationRequired() */
    private _authorizationRequired : string  = "Y"   
    /** private variable for creditLedgerCode() */
    private _creditLedgerCode : string  = "600005"   
    /** private variable for debitLedgerCode() */
    private _debitLedgerCode : string  = "600005"   
    /** This is the value of Currency 
     * with a default Value "THB" 
     * of type text */
    public currency(v : string) : AbstractCashTransferEntry {
        this._currency=v;
        return this;
    }
    
    /** This is the value of From Account No 
     * with a default Value "" 
     * of type text */
    public fromAccount(v : string) : AbstractCashTransferEntry {
        this._fromAccount=v;
        return this;
    }
    
    /** This is the value of To Account No 
     * with a default Value "" 
     * of type text */
    public toAccount(v : string) : AbstractCashTransferEntry {
        this._toAccount=v;
        return this;
    }
    
    /** This is the value of Transfer Amount 
     * with a default Value "" 
     * of type text */
    public transferAmount(v : string) : AbstractCashTransferEntry {
        this._transferAmount=v;
        return this;
    }
    
    /** This is the value of External Reference No 
     * with a default Value "" 
     * of type text */
    public externalReferenceNo(v : string) : AbstractCashTransferEntry {
        this._externalReferenceNo=v;
        return this;
    }
    
    /** This is the value of Txn Reference No 
     * with a default Value "" 
     * of type text */
    public txnReferenceNo(v : string) : AbstractCashTransferEntry {
        this._txnReferenceNo=v;
        return this;
    }
    
    /** This is the value of Transfer Type 
     * with a default Value "TRANSFER_INTERNAL_OWN" 
     * of type select */
    public transferType(v : string) : AbstractCashTransferEntry {
        this._transferType=v;
        return this;
    }
    
    /** This is the value of No CAM01 Required 
     * with a default Value "N" 
     * of type select */
    public cam01Required(v : string) : AbstractCashTransferEntry {
        this._cam01Required=v;
        return this;
    }
    
    /** This is the value of From Account Balance Type 
     * with a default Value "10" 
     * of type select */
    public accountBalanceTypeFrom(v : string) : AbstractCashTransferEntry {
        this._accountBalanceTypeFrom=v;
        return this;
    }
    
    /** This is the value of To Account Balance Type 
     * with a default Value "10" 
     * of type select */
    public accountBalanceTypeTo(v : string) : AbstractCashTransferEntry {
        this._accountBalanceTypeTo=v;
        return this;
    }
    
    /** This is the value of Authorization Required 
     * with a default Value "Y" 
     * of type select */
    public authorizationRequired(v : string) : AbstractCashTransferEntry {
        this._authorizationRequired=v;
        return this;
    }
    
    /** This is the value of Credit Ledger Code 
     * with a default Value "600005" 
     * of type select */
    public creditLedgerCode(v : string) : AbstractCashTransferEntry {
        this._creditLedgerCode=v;
        return this;
    }
    
    /** This is the value of Debit Ledger Code 
     * with a default Value "600005" 
     * of type select */
    public debitLedgerCode(v : string) : AbstractCashTransferEntry {
        this._debitLedgerCode=v;
        return this;
    }
    
    protected fetchFields() : any[] {
        let fields :any[] = []
    if(this._currency!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="currency"]' , value : this._currency});
        }if(this._fromAccount!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="fromAccount"]' , value : this._fromAccount});
        }if(this._toAccount!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="toAccount"]' , value : this._toAccount});
        }if(this._transferAmount!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="transferAmount"]' , value : this._transferAmount});
        }if(this._externalReferenceNo!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="externalReferenceNo"]' , value : this._externalReferenceNo});
        }if(this._txnReferenceNo!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="txnReferenceNo"]' , value : this._txnReferenceNo});
        }if(this._transferType!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="transferType"]' , value : this._transferType});
        }if(this._cam01Required!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="cam01Required"]' , value : this._cam01Required});
        }if(this._accountBalanceTypeFrom!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="accountBalanceTypeFrom"]' , value : this._accountBalanceTypeFrom});
        }if(this._accountBalanceTypeTo!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="accountBalanceTypeTo"]' , value : this._accountBalanceTypeTo});
        }if(this._authorizationRequired!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="authorizationRequired"]' , value : this._authorizationRequired});
        }if(this._creditLedgerCode!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="creditLedgerCode"]' , value : this._creditLedgerCode});
        }if(this._debitLedgerCode!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="debitLedgerCode"]' , value : this._debitLedgerCode});
        }
    return fields;

    }
}