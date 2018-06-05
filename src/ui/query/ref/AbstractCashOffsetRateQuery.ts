
import { BaseUIOperations } from "../../BaseUIOperations";


//Define the results Enum

enum ResultColumns {
    Currency = "Currency",Account_No = "Account No",Debit_Credit = "Debit/Credit",From_Date = "From Date",To_Date = "To Date",Offset_Rate = "Offset Rate (%)",Status = "Status",Rate_Type = "Rate Type",
}


        enum DebitCreditFlag {
               Credit ="C",   Debit ="D", 
        }


export abstract class AbstractCashOffsetRateQuery extends BaseUIOperations {

    static ResultColumns = ResultColumns
    
        static DebitCreditFlag = DebitCreditFlag;


/**
 *    Private members 
*/


private _ccyPkStr : string = undefined 

private _accountPkStr : string = undefined 

private _debitCreditFlag : DebitCreditFlag = undefined 

private _fromDateStr : string = undefined 

private _toDateStr : string = undefined 



/**
 *   Accessor methods
*/


/**
  Field with a default value of ""
*/


public ccyPkStr(v : string) : AbstractCashOffsetRateQuery{
    this._ccyPkStr=v
    return this
}

/**
  Field with a default value of ""
*/


public accountPkStr(v : string) : AbstractCashOffsetRateQuery{
    this._accountPkStr=v
    return this
}

public debitCreditFlag(v : DebitCreditFlag ) : AbstractCashOffsetRateQuery{
    this._debitCreditFlag=v
    return this
}

/**
  Field with a default value of "03-07-2018"
*/


public fromDateStr(v : string) : AbstractCashOffsetRateQuery{
    this._fromDateStr=v
    return this
}

/**
  Field with a default value of ""
*/


public toDateStr(v : string) : AbstractCashOffsetRateQuery{
    this._toDateStr=v
    return this
}




 protected fetchFields() : any[] {
        let fields :any[] = []

        if(this._ccyPkStr!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="ccyPkStr"]' , value : this._ccyPkStr});
}

if(this._accountPkStr!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="accountPkStr"]' , value : this._accountPkStr});
}

if(this._debitCreditFlag!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="debitCreditFlag"]' , value : this._debitCreditFlag});
}

if(this._fromDateStr!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="fromDateStr"]' , value : this._fromDateStr});
}

if(this._toDateStr!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="toDateStr"]' , value : this._toDateStr});
}


    return fields;

   }


}






