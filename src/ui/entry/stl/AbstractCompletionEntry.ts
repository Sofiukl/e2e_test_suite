
import { BaseUIOperations } from "../../BaseUIOperations";
import { Assert } from "../../common/Assert";

export abstract class AbstractCompletionEntry  extends BaseUIOperations {
    async doValidate() : Promise<any>{

 } 

    /** private variable for settlementReferenceNo() */
    private _settlementReferenceNo : string     
    /** private variable for senderReferenceNo() */
    private _senderReferenceNo : string     
    /** private variable for tradeDateFrom() */
    private _tradeDateFrom : string     
    /** private variable for tradeDateTo() */
    private _tradeDateTo : string     
    /** private variable for valueDateFrom() */
    private _valueDateFrom : string     
    /** private variable for valueDateTo() */
    private _valueDateTo : string     
    /** private variable for firmBankAccount() */
    private _firmBankAccount : string     
    /** private variable for accountNo() */
    private _accountNo : string     
    /** private variable for agentCode() */
    private _agentCode : string     
    /** private variable for firmBankCode() */
    private _firmBankCode : string     
    /** private variable for securityCode() */
    private _securityCode : string     
    /** private variable for settlementCcy() */
    private _settlementCcy : string     
    /** private variable for entryDateFrom() */
    private _entryDateFrom : string     
    /** private variable for entryDateTo() */
    private _entryDateTo : string     
    /** private variable for instructionReferenceNo() */
    private _instructionReferenceNo : string     
    /** private variable for correspondingSecurityId() */
    private _correspondingSecurityId : string     
    /** private variable for chequeNo() */
    private _chequeNo : string     
    /** private variable for externalReferenceNo() */
    private _externalReferenceNo : string     
    /** private variable for paymentReferenceNo() */
    private _paymentReferenceNo : string     
    /** private variable for settleCompletionFor() */
    private _settleCompletionFor : string     
    /** private variable for finInstGroup() */
    private _finInstGroup : string     
    /** private variable for settlementMode() */
    private _settlementMode : string     
    /** private variable for instructionType() */
    private _instructionType : string     
    /** private variable for settlementStatus() */
    private _settlementStatus : string     
    /** private variable for contSettleStatus() */
    private _contSettleStatus : string     
    /** private variable for settleQueryFor() */
    private _settleQueryFor : string     
    /** private variable for tradeType() */
    private _tradeType : string     
    /** private variable for subTradeType() */
    private _subTradeType : string     
    /** private variable for wayOfPayment() */
    private _wayOfPayment : string     
    /** private variable for sortField1() */
    private _sortField1 : string     
    /** private variable for sortField2() */
    private _sortField2 : string     
    /** private variable for sortField3() */
    private _sortField3 : string     
    /** This is the value of Settlement Reference No. 
     * with a default Value "" 
     * of type select */
    public settlementReferenceNo(v : string) : AbstractCompletionEntry {
        this._settlementReferenceNo=v;
        return this;
    }
    
    /** This is the value of Sender Reference No. 
     * with a default Value "" 
     * of type select */
    public senderReferenceNo(v : string) : AbstractCompletionEntry {
        this._senderReferenceNo=v;
        return this;
    }
    
    /** This is the value of Trade Date From-To 
     * with a default Value "" 
     * of type select */
    public tradeDateFrom(v : string) : AbstractCompletionEntry {
        this._tradeDateFrom=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type select */
    public tradeDateTo(v : string) : AbstractCompletionEntry {
        this._tradeDateTo=v;
        return this;
    }
    
    /** This is the value of Value Date From-To 
     * with a default Value "" 
     * of type select */
    public valueDateFrom(v : string) : AbstractCompletionEntry {
        this._valueDateFrom=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type select */
    public valueDateTo(v : string) : AbstractCompletionEntry {
        this._valueDateTo=v;
        return this;
    }
    
    /** This is the value of Settlement A/C 
     * with a default Value "" 
     * of type select */
    public firmBankAccount(v : string) : AbstractCompletionEntry {
        this._firmBankAccount=v;
        return this;
    }
    
    /** This is the value of Account No. 
     * with a default Value "" 
     * of type select */
    public accountNo(v : string) : AbstractCompletionEntry {
        this._accountNo=v;
        return this;
    }
    
    /** This is the value of Agent Code 
     * with a default Value "" 
     * of type select */
    public agentCode(v : string) : AbstractCompletionEntry {
        this._agentCode=v;
        return this;
    }
    
    /** This is the value of Firm Settlement Bank 
     * with a default Value "" 
     * of type select */
    public firmBankCode(v : string) : AbstractCompletionEntry {
        this._firmBankCode=v;
        return this;
    }
    
    /** This is the value of Security Code 
     * with a default Value "" 
     * of type select */
    public securityCode(v : string) : AbstractCompletionEntry {
        this._securityCode=v;
        return this;
    }
    
    /** This is the value of Settlement Ccy 
     * with a default Value "" 
     * of type select */
    public settlementCcy(v : string) : AbstractCompletionEntry {
        this._settlementCcy=v;
        return this;
    }
    
    /** This is the value of Input Date From-To 
     * with a default Value "" 
     * of type select */
    public entryDateFrom(v : string) : AbstractCompletionEntry {
        this._entryDateFrom=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type select */
    public entryDateTo(v : string) : AbstractCompletionEntry {
        this._entryDateTo=v;
        return this;
    }
    
    /** This is the value of Instruction Reference No. 
     * with a default Value "" 
     * of type select */
    public instructionReferenceNo(v : string) : AbstractCompletionEntry {
        this._instructionReferenceNo=v;
        return this;
    }
    
    /** This is the value of Corresponding Security Id 
     * with a default Value "" 
     * of type select */
    public correspondingSecurityId(v : string) : AbstractCompletionEntry {
        this._correspondingSecurityId=v;
        return this;
    }
    
    /** This is the value of Cheque No / Txn Reference No 
     * with a default Value "" 
     * of type select */
    public chequeNo(v : string) : AbstractCompletionEntry {
        this._chequeNo=v;
        return this;
    }
    
    /** This is the value of External Reference No. 
     * with a default Value "" 
     * of type select */
    public externalReferenceNo(v : string) : AbstractCompletionEntry {
        this._externalReferenceNo=v;
        return this;
    }
    
    /** This is the value of Payment Reference No 
     * with a default Value "" 
     * of type select */
    public paymentReferenceNo(v : string) : AbstractCompletionEntry {
        this._paymentReferenceNo=v;
        return this;
    }
    
    /** This is the value of Completion For 
     * with a default Value "" 
     * of type select */
    public settleCompletionFor(v : string) : AbstractCompletionEntry {
        this._settleCompletionFor=v;
        return this;
    }
    
    /** This is the value of FinInst Group 
     * with a default Value "" 
     * of type select */
    public finInstGroup(v : string) : AbstractCompletionEntry {
        this._finInstGroup=v;
        return this;
    }
    
    /** This is the value of Settlement Mode 
     * with a default Value "" 
     * of type select */
    public settlementMode(v : string) : AbstractCompletionEntry {
        this._settlementMode=v;
        return this;
    }
    
    /** This is the value of Instruction Type 
     * with a default Value "" 
     * of type select */
    public instructionType(v : string) : AbstractCompletionEntry {
        this._instructionType=v;
        return this;
    }
    
    /** This is the value of Settlement Status 
     * with a default Value "" 
     * of type select */
    public settlementStatus(v : string) : AbstractCompletionEntry {
        this._settlementStatus=v;
        return this;
    }
    
    /** This is the value of Contractual Settlement Status 
     * with a default Value "" 
     * of type select */
    public contSettleStatus(v : string) : AbstractCompletionEntry {
        this._contSettleStatus=v;
        return this;
    }
    
    /** This is the value of Settlement Query For 
     * with a default Value "" 
     * of type select */
    public settleQueryFor(v : string) : AbstractCompletionEntry {
        this._settleQueryFor=v;
        return this;
    }
    
    /** This is the value of Trade Type 
     * with a default Value "" 
     * of type select */
    public tradeType(v : string) : AbstractCompletionEntry {
        this._tradeType=v;
        return this;
    }
    
    /** This is the value of Sub Trade Type 
     * with a default Value "" 
     * of type select */
    public subTradeType(v : string) : AbstractCompletionEntry {
        this._subTradeType=v;
        return this;
    }
    
    /** This is the value of Way Of Payment 
     * with a default Value "" 
     * of type select */
    public wayOfPayment(v : string) : AbstractCompletionEntry {
        this._wayOfPayment=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type select */
    public sortField1(v : string) : AbstractCompletionEntry {
        this._sortField1=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type select */
    public sortField2(v : string) : AbstractCompletionEntry {
        this._sortField2=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type select */
    public sortField3(v : string) : AbstractCompletionEntry {
        this._sortField3=v;
        return this;
    }
    
    protected fetchFields() : any[] {
        let fields :any[] = []
    if(this._settlementReferenceNo!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="settlementReferenceNo"]' , value : this._settlementReferenceNo});
        }if(this._senderReferenceNo!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="senderReferenceNo"]' , value : this._senderReferenceNo});
        }if(this._tradeDateFrom!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="tradeDateFrom"]' , value : this._tradeDateFrom});
        }if(this._tradeDateTo!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="tradeDateTo"]' , value : this._tradeDateTo});
        }if(this._valueDateFrom!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="valueDateFrom"]' , value : this._valueDateFrom});
        }if(this._valueDateTo!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="valueDateTo"]' , value : this._valueDateTo});
        }if(this._firmBankAccount!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="firmBankAccount"]' , value : this._firmBankAccount});
        }if(this._accountNo!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="accountNo"]' , value : this._accountNo});
        }if(this._agentCode!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="agentCode"]' , value : this._agentCode});
        }if(this._firmBankCode!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="firmBankCode"]' , value : this._firmBankCode});
        }if(this._securityCode!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="securityCode"]' , value : this._securityCode});
        }if(this._settlementCcy!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="settlementCcy"]' , value : this._settlementCcy});
        }if(this._entryDateFrom!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="entryDateFrom"]' , value : this._entryDateFrom});
        }if(this._entryDateTo!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="entryDateTo"]' , value : this._entryDateTo});
        }if(this._instructionReferenceNo!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="instructionReferenceNo"]' , value : this._instructionReferenceNo});
        }if(this._correspondingSecurityId!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="correspondingSecurityId"]' , value : this._correspondingSecurityId});
        }if(this._chequeNo!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="chequeNo"]' , value : this._chequeNo});
        }if(this._externalReferenceNo!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="externalReferenceNo"]' , value : this._externalReferenceNo});
        }if(this._paymentReferenceNo!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="paymentReferenceNo"]' , value : this._paymentReferenceNo});
        }if(this._settleCompletionFor!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="settleCompletionFor"]' , value : this._settleCompletionFor});
        }if(this._finInstGroup!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="finInstGroup"]' , value : this._finInstGroup});
        }if(this._settlementMode!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="settlementMode"]' , value : this._settlementMode});
        }if(this._instructionType!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="instructionType"]' , value : this._instructionType});
        }if(this._settlementStatus!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="settlementStatus"]' , value : this._settlementStatus});
        }if(this._contSettleStatus!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="contSettleStatus"]' , value : this._contSettleStatus});
        }if(this._settleQueryFor!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="settleQueryFor"]' , value : this._settleQueryFor});
        }if(this._tradeType!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="tradeType"]' , value : this._tradeType});
        }if(this._subTradeType!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="subTradeType"]' , value : this._subTradeType});
        }if(this._wayOfPayment!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="wayOfPayment"]' , value : this._wayOfPayment});
        }if(this._sortField1!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="sortField1"]' , value : this._sortField1});
        }if(this._sortField2!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="sortField2"]' , value : this._sortField2});
        }if(this._sortField3!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="sortField3"]' , value : this._sortField3});
        }
    return fields;

    }
}