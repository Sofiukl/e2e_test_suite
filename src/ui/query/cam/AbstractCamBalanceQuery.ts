
import { BaseUIOperations } from "../../BaseUIOperations";


//Define the results Enum

enum ResultColumns {
    Account_No = "Account No",Customer_Code = "Customer Code",Agent_Code = "Agent Code",Main_Sales_Code = "Main Sales Code",Office_Id = "Office Id",Account_Name = "Account Name",Security_Code_Default = "Security Code Default",Security_Code_Symbol = "Security Code Symbol",Security_Name = "Security Name",Issue_Currency = "Issue Currency",Last_Activity_date = "Last Activity date",Balance = "Balance",Ledger = "Ledger",Form = "Form",Account_Balance_Type = "Account Balance Type",
}


        enum BalanceBasis {
               ALLOCABLE_BALANCE ="ALLOCABLE BALANCE",   EARLY_CREDIT ="EARLY CREDIT",   RIGHTS_BALANCE ="RIGHTS BALANCE",   SETTLE_DATE_BALANCE ="SETTLEMENT DATE",   TRADE_DATE_BALANCE ="TRADE DATE",   VALUE_DATE_BALANCE ="VALUE DATE", 
        }
        enum AccountBalanceType {
               _Free ="10",   _Margin ="11",   _Pledge ="12",   _Collateral ="13",   _Physical ="14",   _IPO ="15",   _Register ="16",   _Expect_Rights ="17",   _Rights ="18",   _Blocked ="19", 
        }
        enum LedgerId {
             
        }
        enum Form {
               BOOK_ENTRY ="BOOK ENTRY", 
        }
        enum DisplayByAcBalanceType {
              No ="N",   Yes ="Y", 
        }
        enum DisplayZeroBalance {
              No ="N",   Yes ="Y", 
        }
        enum LedgerLevelReqd {
              NOT_REQUIRED ="NOT REQUIRED",   REQUIRED ="REQUIRED", 
        }
        enum ComplianceType {
               ETF ="ETF",   NASD_RULE_ ="NASD RULE 11830",   REG_S ="REG S",   RULE_A ="RULE 144A", 
        }
        enum CounterPartyType {
               CLIENT ="CLIENT",   FIRM ="INTERNAL", 
        }
        enum DisplayLongShortBalance {
               LONG ="L",   SHORT ="S", 
        }
        enum GroupingLevel {
              Account ="ACCOUNT",   Agent ="AGENT",   Customer ="CUSTOMER",   Branch ="BRANCH",   Sales ="SALES", 
        }
        enum DefaultAccountBalance {
               No ="N",   Yes ="Y", 
        }
        enum SortField1 {
              Account_No ="ACCOUNT_NO",   Account_Balance_Type ="ACCOUNT_BALANCE_TYPE",   Security ="SECURITY_ID",   Office_Id ="OFFICE_ID",   Trade_CCY_of_Instrument ="TRADE_CCY",   Instrument_Type ="INSTRUMENT_TYPE",   Agent_Code ="AGENT_CODE", 
        }
        enum SortField2 {
               Account_No ="ACCOUNT_NO",   Account_Balance_Type ="ACCOUNT_BALANCE_TYPE",   Security ="SECURITY_ID",   Office_Id ="OFFICE_ID",   Trade_CCY_of_Instrument ="TRADE_CCY",   Instrument_Type ="INSTRUMENT_TYPE",   Agent_Code ="AGENT_CODE", 
        }
        enum SortField3 {
               Account_No ="ACCOUNT_NO",   Account_Balance_Type ="ACCOUNT_BALANCE_TYPE",   Security ="SECURITY_ID",   Office_Id ="OFFICE_ID",   Trade_CCY_of_Instrument ="TRADE_CCY",   Instrument_Type ="INSTRUMENT_TYPE",   Agent_Code ="AGENT_CODE", 
        }
        enum SortField4 {
               Account_No ="ACCOUNT_NO",   Account_Balance_Type ="ACCOUNT_BALANCE_TYPE",   Security ="SECURITY_ID",   Office_Id ="OFFICE_ID",   Trade_CCY_of_Instrument ="TRADE_CCY",   Instrument_Type ="INSTRUMENT_TYPE",   Agent_Code ="AGENT_CODE", 
        }
        enum SortField5 {
               Account_No ="ACCOUNT_NO",   Account_Balance_Type ="ACCOUNT_BALANCE_TYPE",   Security ="SECURITY_ID",   Office_Id ="OFFICE_ID",   Trade_CCY_of_Instrument ="TRADE_CCY",   Instrument_Type ="INSTRUMENT_TYPE",   Agent_Code ="AGENT_CODE", 
        }
        enum SortField6 {
               Account_No ="ACCOUNT_NO",   Account_Balance_Type ="ACCOUNT_BALANCE_TYPE",   Security ="SECURITY_ID",   Office_Id ="OFFICE_ID",   Trade_CCY_of_Instrument ="TRADE_CCY",   Instrument_Type ="INSTRUMENT_TYPE",   Agent_Code ="AGENT_CODE", 
        }


export abstract class AbstractCamBalanceQuery extends BaseUIOperations {

    static ResultColumns = ResultColumns
    
        static BalanceBasis = BalanceBasis;
        static AccountBalanceType = AccountBalanceType;
        static LedgerId = LedgerId;
        static Form = Form;
        static DisplayByAcBalanceType = DisplayByAcBalanceType;
        static DisplayZeroBalance = DisplayZeroBalance;
        static LedgerLevelReqd = LedgerLevelReqd;
        static ComplianceType = ComplianceType;
        static CounterPartyType = CounterPartyType;
        static DisplayLongShortBalance = DisplayLongShortBalance;
        static GroupingLevel = GroupingLevel;
        static DefaultAccountBalance = DefaultAccountBalance;
        static SortField1 = SortField1;
        static SortField2 = SortField2;
        static SortField3 = SortField3;
        static SortField4 = SortField4;
        static SortField5 = SortField5;
        static SortField6 = SortField6;


/**
 *    Private members 
*/


private _baseDate : string = undefined 

private _balanceBasis : BalanceBasis = undefined 

private _accountNo : string = undefined 

private _accountBalanceType : AccountBalanceType = undefined 

private _salesId : string = undefined 

private _accountFrom : string = undefined 
private _accountTo : string = undefined 

private _ledgerId : LedgerId = undefined 

private _currency : string = undefined 

private _securityCode : string = undefined 

private _agentCode : string = undefined 

private _instrumentType : string = undefined 

private _form : Form = undefined 

private _displayByAcBalanceType : DisplayByAcBalanceType = undefined 

private _displayZeroBalance : DisplayZeroBalance = undefined 

private _ledgerLevelReqd : LedgerLevelReqd = undefined 

private _complianceType : ComplianceType = undefined 

private _counterPartyCode : string = undefined 
private _counterPartyType : CounterPartyType = undefined 

private _displayLongShortBalance : DisplayLongShortBalance = undefined 

private _issueCurrency : string = undefined 

private _groupingLevel : GroupingLevel = undefined 

private _defaultAccountBalance : DefaultAccountBalance = undefined 

private _sortFieldOrder1 : string = undefined 
private _sortField1 : SortField1 = undefined 

private _sortFieldOrder2 : string = undefined 
private _sortField2 : SortField2 = undefined 

private _sortFieldOrder3 : string = undefined 
private _sortField3 : SortField3 = undefined 

private _sortFieldOrder4 : string = undefined 
private _sortField4 : SortField4 = undefined 

private _sortFieldOrder5 : string = undefined 
private _sortField5 : SortField5 = undefined 

private _sortFieldOrder6 : string = undefined 
private _sortField6 : SortField6 = undefined 



/**
 *   Accessor methods
*/


/**
  Field with a default value of "03-07-2018"
*/
public baseDate(v : string) : AbstractCamBalanceQuery{
    this._baseDate=v
    return this
}

public balanceBasis(v : BalanceBasis ) : AbstractCamBalanceQuery{
    this._balanceBasis=v
    return this
}

/**
  Field with a default value of ""
*/
public accountNo(v : string) : AbstractCamBalanceQuery{
    this._accountNo=v
    return this
}

public accountBalanceType(v : AccountBalanceType ) : AbstractCamBalanceQuery{
    this._accountBalanceType=v
    return this
}

/**
  Field with a default value of ""
*/
public salesId(v : string) : AbstractCamBalanceQuery{
    this._salesId=v
    return this
}

/**
  Field with a default value of ""
*/
public accountFrom(v : string) : AbstractCamBalanceQuery{
    this._accountFrom=v
    return this
}
/**
  Field with a default value of ""
*/
public accountTo(v : string) : AbstractCamBalanceQuery{
    this._accountTo=v
    return this
}

public ledgerId(v : LedgerId ) : AbstractCamBalanceQuery{
    this._ledgerId=v
    return this
}

/**
  Field with a default value of ""
*/
public currency(v : string) : AbstractCamBalanceQuery{
    this._currency=v
    return this
}

/**
  Field with a default value of ""
*/
public securityCode(v : string) : AbstractCamBalanceQuery{
    this._securityCode=v
    return this
}

/**
  Field with a default value of ""
*/
public agentCode(v : string) : AbstractCamBalanceQuery{
    this._agentCode=v
    return this
}

/**
  Field with a default value of ""
*/
public instrumentType(v : string) : AbstractCamBalanceQuery{
    this._instrumentType=v
    return this
}

public form(v : Form ) : AbstractCamBalanceQuery{
    this._form=v
    return this
}

public displayByAcBalanceType(v : DisplayByAcBalanceType ) : AbstractCamBalanceQuery{
    this._displayByAcBalanceType=v
    return this
}

public displayZeroBalance(v : DisplayZeroBalance ) : AbstractCamBalanceQuery{
    this._displayZeroBalance=v
    return this
}

public ledgerLevelReqd(v : LedgerLevelReqd ) : AbstractCamBalanceQuery{
    this._ledgerLevelReqd=v
    return this
}

public complianceType(v : ComplianceType ) : AbstractCamBalanceQuery{
    this._complianceType=v
    return this
}

/**
  Field with a default value of ""
*/
public counterPartyCode(v : string) : AbstractCamBalanceQuery{
    this._counterPartyCode=v
    return this
}
public counterPartyType(v : CounterPartyType ) : AbstractCamBalanceQuery{
    this._counterPartyType=v
    return this
}

public displayLongShortBalance(v : DisplayLongShortBalance ) : AbstractCamBalanceQuery{
    this._displayLongShortBalance=v
    return this
}

/**
  Field with a default value of ""
*/
public issueCurrency(v : string) : AbstractCamBalanceQuery{
    this._issueCurrency=v
    return this
}

public groupingLevel(v : GroupingLevel ) : AbstractCamBalanceQuery{
    this._groupingLevel=v
    return this
}

public defaultAccountBalance(v : DefaultAccountBalance ) : AbstractCamBalanceQuery{
    this._defaultAccountBalance=v
    return this
}

/**
  Field with a default value of ""
*/
public sortFieldOrder1(v : string) : AbstractCamBalanceQuery{
    this._sortFieldOrder1=v
    return this
}
public sortField1(v : SortField1 ) : AbstractCamBalanceQuery{
    this._sortField1=v
    return this
}

/**
  Field with a default value of ""
*/
public sortFieldOrder2(v : string) : AbstractCamBalanceQuery{
    this._sortFieldOrder2=v
    return this
}
public sortField2(v : SortField2 ) : AbstractCamBalanceQuery{
    this._sortField2=v
    return this
}

/**
  Field with a default value of ""
*/
public sortFieldOrder3(v : string) : AbstractCamBalanceQuery{
    this._sortFieldOrder3=v
    return this
}
public sortField3(v : SortField3 ) : AbstractCamBalanceQuery{
    this._sortField3=v
    return this
}

/**
  Field with a default value of ""
*/
public sortFieldOrder4(v : string) : AbstractCamBalanceQuery{
    this._sortFieldOrder4=v
    return this
}
public sortField4(v : SortField4 ) : AbstractCamBalanceQuery{
    this._sortField4=v
    return this
}

/**
  Field with a default value of ""
*/
public sortFieldOrder5(v : string) : AbstractCamBalanceQuery{
    this._sortFieldOrder5=v
    return this
}
public sortField5(v : SortField5 ) : AbstractCamBalanceQuery{
    this._sortField5=v
    return this
}

/**
  Field with a default value of ""
*/
public sortFieldOrder6(v : string) : AbstractCamBalanceQuery{
    this._sortFieldOrder6=v
    return this
}
public sortField6(v : SortField6 ) : AbstractCamBalanceQuery{
    this._sortField6=v
    return this
}




 protected fetchFields() : any[] {
        let fields :any[] = []

        if(this._baseDate!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="baseDate"]' , value : this._baseDate});
}

if(this._balanceBasis!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="balanceBasis"]' , value : this._balanceBasis});
}

if(this._accountNo!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="accountNo"]' , value : this._accountNo});
}

if(this._accountBalanceType!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="accountBalanceType"]' , value : this._accountBalanceType});
}

if(this._salesId!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="salesId"]' , value : this._salesId});
}

if(this._accountFrom!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="accountFrom"]' , value : this._accountFrom});
}
if(this._accountTo!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="accountTo"]' , value : this._accountTo});
}

if(this._ledgerId!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="ledgerId"]' , value : this._ledgerId});
}

if(this._currency!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="currency"]' , value : this._currency});
}

if(this._securityCode!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="securityCode"]' , value : this._securityCode});
}

if(this._agentCode!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="agentCode"]' , value : this._agentCode});
}

if(this._instrumentType!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="instrumentType"]' , value : this._instrumentType});
}

if(this._form!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="form"]' , value : this._form});
}

if(this._displayByAcBalanceType!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="displayByAcBalanceType"]' , value : this._displayByAcBalanceType});
}

if(this._displayZeroBalance!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="displayZeroBalance"]' , value : this._displayZeroBalance});
}

if(this._ledgerLevelReqd!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="ledgerLevelReqd"]' , value : this._ledgerLevelReqd});
}

if(this._complianceType!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="complianceType"]' , value : this._complianceType});
}

if(this._counterPartyCode!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="counterPartyCode"]' , value : this._counterPartyCode});
}
if(this._counterPartyType!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="counterPartyType"]' , value : this._counterPartyType});
}

if(this._displayLongShortBalance!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="displayLongShortBalance"]' , value : this._displayLongShortBalance});
}

if(this._issueCurrency!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="issueCurrency"]' , value : this._issueCurrency});
}

if(this._groupingLevel!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="groupingLevel"]' , value : this._groupingLevel});
}

if(this._defaultAccountBalance!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="defaultAccountBalance"]' , value : this._defaultAccountBalance});
}

if(this._sortFieldOrder1!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="sortFieldOrder1"]' , value : this._sortFieldOrder1});
}
if(this._sortField1!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="sortField1"]' , value : this._sortField1});
}

if(this._sortFieldOrder2!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="sortFieldOrder2"]' , value : this._sortFieldOrder2});
}
if(this._sortField2!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="sortField2"]' , value : this._sortField2});
}

if(this._sortFieldOrder3!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="sortFieldOrder3"]' , value : this._sortFieldOrder3});
}
if(this._sortField3!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="sortField3"]' , value : this._sortField3});
}

if(this._sortFieldOrder4!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="sortFieldOrder4"]' , value : this._sortFieldOrder4});
}
if(this._sortField4!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="sortField4"]' , value : this._sortField4});
}

if(this._sortFieldOrder5!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="sortFieldOrder5"]' , value : this._sortFieldOrder5});
}
if(this._sortField5!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="sortField5"]' , value : this._sortField5});
}

if(this._sortFieldOrder6!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="sortFieldOrder6"]' , value : this._sortFieldOrder6});
}
if(this._sortField6!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="sortField6"]' , value : this._sortField6});
}


    return fields;

   }


}






