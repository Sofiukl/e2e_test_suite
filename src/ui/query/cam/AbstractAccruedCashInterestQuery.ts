
import { BaseUIOperations } from "../../BaseUIOperations";


//Define the results Enum

enum ResultColumns {
    Reference_Number = "Reference Number",Account_No = "Account No",Account_Name = "Account Name",Currency = "Currency",Interest_Period = "Interest Period",Amount = "Amount",Posting_Status = "Posting Status",Posting_Date = "Posting Date",
}


        enum OperationObjective {
              QUERY ="QUERY",   WAIVEOFF ="WAIVEOFF", 
        }
        enum PostingStatus {
               COMPLETE ="COMPLETE",   OUTSTANDING ="OUTSTANDING", 
        }
        enum SortField1 {
              Account_No ="ACCOUNT_NO",   Currency ="SECURITY_ID", 
        }
        enum SortField2 {
               Account_No ="ACCOUNT_NO",   Currency ="SECURITY_ID", 
        }


export abstract class AbstractAccruedCashInterestQuery extends BaseUIOperations {

    static ResultColumns = ResultColumns
    
        static OperationObjective = OperationObjective;
        static PostingStatus = PostingStatus;
        static SortField1 = SortField1;
        static SortField2 = SortField2;


/**
 *    Private members 
*/


private _operationObjective : OperationObjective = undefined 

private _accountNo : string = undefined 

private _agentCode : string = undefined 

private _currency : string = undefined 

private _postingStatus : PostingStatus = undefined 

private _fromDate : string = undefined 

private _toDate : string = undefined 

private _postingFromDate : string = undefined 

private _postingToDate : string = undefined 

private _sortFieldOrder1 : string = undefined 
private _sortField1 : SortField1 = undefined 

private _sortFieldOrder2 : string = undefined 
private _sortField2 : SortField2 = undefined 



/**
 *   Accessor methods
*/


public operationObjective(v : OperationObjective ) : AbstractAccruedCashInterestQuery{
    this._operationObjective=v
    return this
}

/**
  Field with a default value of "C0000001-8"
*/


public accountNo(v : string) : AbstractAccruedCashInterestQuery{
    this._accountNo=v
    return this
}

/**
  Field with a default value of ""
*/


public agentCode(v : string) : AbstractAccruedCashInterestQuery{
    this._agentCode=v
    return this
}

/**
  Field with a default value of ""
*/


public currency(v : string) : AbstractAccruedCashInterestQuery{
    this._currency=v
    return this
}

public postingStatus(v : PostingStatus ) : AbstractAccruedCashInterestQuery{
    this._postingStatus=v
    return this
}

/**
  Field with a default value of "29-03-2018"
*/


public fromDate(v : string) : AbstractAccruedCashInterestQuery{
    this._fromDate=v
    return this
}

/**
  Field with a default value of ""
*/


public toDate(v : string) : AbstractAccruedCashInterestQuery{
    this._toDate=v
    return this
}

/**
  Field with a default value of ""
*/


public postingFromDate(v : string) : AbstractAccruedCashInterestQuery{
    this._postingFromDate=v
    return this
}

/**
  Field with a default value of ""
*/


public postingToDate(v : string) : AbstractAccruedCashInterestQuery{
    this._postingToDate=v
    return this
}

/**
  Field with a default value of ""
*/


public sortFieldOrder1(v : string) : AbstractAccruedCashInterestQuery{
    this._sortFieldOrder1=v
    return this
}
public sortField1(v : SortField1 ) : AbstractAccruedCashInterestQuery{
    this._sortField1=v
    return this
}

/**
  Field with a default value of ""
*/


public sortFieldOrder2(v : string) : AbstractAccruedCashInterestQuery{
    this._sortFieldOrder2=v
    return this
}
public sortField2(v : SortField2 ) : AbstractAccruedCashInterestQuery{
    this._sortField2=v
    return this
}




 protected fetchFields() : any[] {
        let fields :any[] = []

        if(this._operationObjective!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="operationObjective"]' , value : this._operationObjective});
}

if(this._accountNo!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="accountNo"]' , value : this._accountNo});
}

if(this._agentCode!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="agentCode"]' , value : this._agentCode});
}

if(this._currency!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="currency"]' , value : this._currency});
}

if(this._postingStatus!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="postingStatus"]' , value : this._postingStatus});
}

if(this._fromDate!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="fromDate"]' , value : this._fromDate});
}

if(this._toDate!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="toDate"]' , value : this._toDate});
}

if(this._postingFromDate!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="postingFromDate"]' , value : this._postingFromDate});
}

if(this._postingToDate!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="postingToDate"]' , value : this._postingToDate});
}

if(this._sortFieldOrder1!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="sortFieldOrder1"]' , value : this._sortFieldOrder1});
}
if(this._sortField1!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="sortField1"]' , value : this._sortField1});
}

if(this._sortFieldOrder2!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="sortFieldOrder2"]' , value : this._sortFieldOrder2});
}
if(this._sortField2!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="sortField2"]' , value : this._sortField2});
}


    return fields;

   }


}






