

import { BaseUIOperations } from "../../BaseUIOperations";
import { Assert } from "../../../utils/Assert";


export abstract class AbstractCashIOEntry  extends BaseUIOperations {

    async doValidate() : Promise<any>{
Assert.notNull(this._cashInReason)
                Assert.notNull(this._cashOutReason)
                 } 

    /** private variable for cashInDateStr() */
    private _cashInDateStr : string     
    /** private variable for cashInTime() */
    private _cashInTime : string     
    /** private variable for cashOutDateStr() */
    private _cashOutDateStr : string     
    /** private variable for cashOutTime() */
    private _cashOutTime : string     
    /** private variable for entry.currency() */
    private _entrycurrency : string     
    /** private variable for entry.amountStr() */
    private _entryamountStr : string     
    /** private variable for entry.externalReferenceNo() */
    private _entryexternalReferenceNo : string     
    /** private variable for entry.chequeNo() */
    private _entrychequeNo : string     
    /** private variable for entry.custodianBank() */
    private _entrycustodianBank : string     
    /** private variable for entry.accountSubCodeDisp() */
    private _entryaccountSubCodeDisp : string     
    /** private variable for entry.sourceInstrument() */
    private _entrysourceInstrument : string     
    /** private variable for entry.remarks() */
    private _entryremarks : string     
    /** private variable for entry.remarksForReport() */
    private _entryremarksForReport : string     
    /** private variable for entry.statementDescription() */
    private _entrystatementDescription : string     
    /** private variable for cashInAccountNo() */
    private _cashInAccountNo : string     
    /** private variable for cashInOtherGleLedgerCode() */
    private _cashInOtherGleLedgerCode : string     
    /** private variable for cashOutAccountNo() */
    private _cashOutAccountNo : string     
    /** private variable for cashOutOtherGleLedgerCode() */
    private _cashOutOtherGleLedgerCode : string     
    /** private variable for entry.inOut() */
    private _entryinOut : string     
    /** private variable for entry.taxIncomeType() */
    private _entrytaxIncomeType : string     
    /** private variable for entry.wayOfSettlement() */
    private _entrywayOfSettlement : string     
    /** private variable for entry.mode() */
    private _entrymode : string     
    /** private variable for cashInReason() */
    private _cashInReason : string     
    /** private variable for cashOutReason() */
    private _cashOutReason : string     
    /** private variable for entry.noCam01Required() */
    private _entrynoCam01Required : string     
    /** private variable for cashInAccountCode() */
    private _cashInAccountCode : string     
    /** private variable for cashInAccountBalanceTypeStr() */
    private _cashInAccountBalanceTypeStr : string     
    /** private variable for cashOutAccountCode() */
    private _cashOutAccountCode : string     
    /** private variable for cashOutAccountBalanceTypeStr() */
    private _cashOutAccountBalanceTypeStr : string     
    /** This is the value of Cash In Date 
     * with a default Value "" 
     * of type select */
    public cashInDateStr(v : string) : AbstractCashIOEntry {
        this._cashInDateStr=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type select */
    public cashInTime(v : string) : AbstractCashIOEntry {
        this._cashInTime=v;
        return this;
    }
    
    /** This is the value of Cash Out Date 
     * with a default Value "" 
     * of type select */
    public cashOutDateStr(v : string) : AbstractCashIOEntry {
        this._cashOutDateStr=v;
        return this;
    }
    
    /** This is the value of  
     * with a default Value "" 
     * of type select */
    public cashOutTime(v : string) : AbstractCashIOEntry {
        this._cashOutTime=v;
        return this;
    }
    
    /** This is the value of Ccy 
     * with a default Value "" 
     * of type select */
    public entrycurrency(v : string) : AbstractCashIOEntry {
        this._entrycurrency=v;
        return this;
    }
    
    /** This is the value of Amount 
     * with a default Value "" 
     * of type select */
    public entryamountStr(v : string) : AbstractCashIOEntry {
        this._entryamountStr=v;
        return this;
    }
    
    /** This is the value of External Reference No 
     * with a default Value "" 
     * of type select */
    public entryexternalReferenceNo(v : string) : AbstractCashIOEntry {
        this._entryexternalReferenceNo=v;
        return this;
    }
    
    /** This is the value of Cheque/Reference Number 
     * with a default Value "" 
     * of type select */
    public entrychequeNo(v : string) : AbstractCashIOEntry {
        this._entrychequeNo=v;
        return this;
    }
    
    /** This is the value of Our Bank 
     * with a default Value "" 
     * of type select */
    public entrycustodianBank(v : string) : AbstractCashIOEntry {
        this._entrycustodianBank=v;
        return this;
    }
    
    /** This is the value of GLE Sub Code 
     * with a default Value "" 
     * of type select */
    public entryaccountSubCodeDisp(v : string) : AbstractCashIOEntry {
        this._entryaccountSubCodeDisp=v;
        return this;
    }
    
    /** This is the value of Security Code 
     * with a default Value "" 
     * of type select */
    public entrysourceInstrument(v : string) : AbstractCashIOEntry {
        this._entrysourceInstrument=v;
        return this;
    }
    
    /** This is the value of Remarks 
     * with a default Value "" 
     * of type select */
    public entryremarks(v : string) : AbstractCashIOEntry {
        this._entryremarks=v;
        return this;
    }
    
    /** This is the value of Remarks For Report 
     * with a default Value "" 
     * of type select */
    public entryremarksForReport(v : string) : AbstractCashIOEntry {
        this._entryremarksForReport=v;
        return this;
    }
    
    /** This is the value of Statement Description 
     * with a default Value "" 
     * of type select */
    public entrystatementDescription(v : string) : AbstractCashIOEntry {
        this._entrystatementDescription=v;
        return this;
    }
    
    /** This is the value of Account No 
     * with a default Value "" 
     * of type select */
    public cashInAccountNo(v : string) : AbstractCashIOEntry {
        this._cashInAccountNo=v;
        return this;
    }
    
    /** This is the value of Other GLE Ledger Code 
     * with a default Value "" 
     * of type select */
    public cashInOtherGleLedgerCode(v : string) : AbstractCashIOEntry {
        this._cashInOtherGleLedgerCode=v;
        return this;
    }
    
    /** This is the value of Account No 
     * with a default Value "" 
     * of type select */
    public cashOutAccountNo(v : string) : AbstractCashIOEntry {
        this._cashOutAccountNo=v;
        return this;
    }
    
    /** This is the value of Other GLE Ledger Code 
     * with a default Value "" 
     * of type select */
    public cashOutOtherGleLedgerCode(v : string) : AbstractCashIOEntry {
        this._cashOutOtherGleLedgerCode=v;
        return this;
    }
    
    /** This is the value of Cash In/Out 
     * with a default Value "" 
     * of type select */
    public entryinOut(v : string) : AbstractCashIOEntry {
        this._entryinOut=v;
        return this;
    }
    
    /** This is the value of Tax Income Type 
     * with a default Value "" 
     * of type select */
    public entrytaxIncomeType(v : string) : AbstractCashIOEntry {
        this._entrytaxIncomeType=v;
        return this;
    }
    
    /** This is the value of Way Of Settlement 
     * with a default Value "" 
     * of type select */
    public entrywayOfSettlement(v : string) : AbstractCashIOEntry {
        this._entrywayOfSettlement=v;
        return this;
    }
    
    /** This is the value of Mode 
     * with a default Value "" 
     * of type select */
    public entrymode(v : string) : AbstractCashIOEntry {
        this._entrymode=v;
        return this;
    }
    
    /** This is the value of Cash In Reason Code 
     * with a default Value "" 
     * of type select */
    public cashInReason(v : string) : AbstractCashIOEntry {
        this._cashInReason=v;
        return this;
    }
    
    /** This is the value of Cash Out Reason Code 
     * with a default Value "" 
     * of type select */
    public cashOutReason(v : string) : AbstractCashIOEntry {
        this._cashOutReason=v;
        return this;
    }
    
    /** This is the value of No CAM01 Required 
     * with a default Value "" 
     * of type select */
    public entrynoCam01Required(v : string) : AbstractCashIOEntry {
        this._entrynoCam01Required=v;
        return this;
    }
    
    /** This is the value of GLE Ledger Code 
     * with a default Value "" 
     * of type select */
    public cashInAccountCode(v : string) : AbstractCashIOEntry {
        this._cashInAccountCode=v;
        return this;
    }
    
    /** This is the value of Account Balance Type  
     * with a default Value "" 
     * of type select */
    public cashInAccountBalanceTypeStr(v : string) : AbstractCashIOEntry {
        this._cashInAccountBalanceTypeStr=v;
        return this;
    }
    
    /** This is the value of GLE Ledger Code 
     * with a default Value "" 
     * of type select */
    public cashOutAccountCode(v : string) : AbstractCashIOEntry {
        this._cashOutAccountCode=v;
        return this;
    }
    
    /** This is the value of Account Balance Type  
     * with a default Value "" 
     * of type select */
    public cashOutAccountBalanceTypeStr(v : string) : AbstractCashIOEntry {
        this._cashOutAccountBalanceTypeStr=v;
        return this;
    }
    
    protected fetchFields() : any[] {
        let fields :any[] = []
    if(this._cashInDateStr!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="cashInDateStr"]' , value : this._cashInDateStr});
        }if(this._cashInTime!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="cashInTime"]' , value : this._cashInTime});
        }if(this._cashOutDateStr!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="cashOutDateStr"]' , value : this._cashOutDateStr});
        }if(this._cashOutTime!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="cashOutTime"]' , value : this._cashOutTime});
        }if(this._entrycurrency!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="entry.currency"]' , value : this._entrycurrency});
        }if(this._entryamountStr!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="entry.amountStr"]' , value : this._entryamountStr});
        }if(this._entryexternalReferenceNo!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="entry.externalReferenceNo"]' , value : this._entryexternalReferenceNo});
        }if(this._entrychequeNo!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="entry.chequeNo"]' , value : this._entrychequeNo});
        }if(this._entrycustodianBank!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="entry.custodianBank"]' , value : this._entrycustodianBank});
        }if(this._entryaccountSubCodeDisp!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="entry.accountSubCodeDisp"]' , value : this._entryaccountSubCodeDisp});
        }if(this._entrysourceInstrument!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="entry.sourceInstrument"]' , value : this._entrysourceInstrument});
        }if(this._entryremarks!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="entry.remarks"]' , value : this._entryremarks});
        }if(this._entryremarksForReport!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="entry.remarksForReport"]' , value : this._entryremarksForReport});
        }if(this._entrystatementDescription!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="entry.statementDescription"]' , value : this._entrystatementDescription});
        }if(this._cashInAccountNo!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="cashInAccountNo"]' , value : this._cashInAccountNo});
        }if(this._cashInOtherGleLedgerCode!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="cashInOtherGleLedgerCode"]' , value : this._cashInOtherGleLedgerCode});
        }if(this._cashOutAccountNo!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="cashOutAccountNo"]' , value : this._cashOutAccountNo});
        }if(this._cashOutOtherGleLedgerCode!=undefined){
            fields.push({ 'type' : 'text' , 'selector' : 'input[name="cashOutOtherGleLedgerCode"]' , value : this._cashOutOtherGleLedgerCode});
        }if(this._entryinOut!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="entry.inOut"]' , value : this._entryinOut});
        }if(this._entrytaxIncomeType!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="entry.taxIncomeType"]' , value : this._entrytaxIncomeType});
        }if(this._entrywayOfSettlement!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="entry.wayOfSettlement"]' , value : this._entrywayOfSettlement});
        }if(this._entrymode!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="entry.mode"]' , value : this._entrymode});
        }if(this._cashInReason!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="cashInReason"]' , value : this._cashInReason});
        }if(this._cashOutReason!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="cashOutReason"]' , value : this._cashOutReason});
        }if(this._entrynoCam01Required!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="entry.noCam01Required"]' , value : this._entrynoCam01Required});
        }if(this._cashInAccountCode!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="cashInAccountCode"]' , value : this._cashInAccountCode});
        }if(this._cashInAccountBalanceTypeStr!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="cashInAccountBalanceTypeStr"]' , value : this._cashInAccountBalanceTypeStr});
        }if(this._cashOutAccountCode!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="cashOutAccountCode"]' , value : this._cashOutAccountCode});
        }if(this._cashOutAccountBalanceTypeStr!=undefined){
            fields.push({ 'type' : 'select' , 'selector' : 'select[name="cashOutAccountBalanceTypeStr"]' , value : this._cashOutAccountBalanceTypeStr});
        }
    return fields;

    }
}