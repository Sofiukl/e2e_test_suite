
import { BaseUIOperations } from "../../BaseUIOperations";


//Define the results Enum

enum ResultColumns {
    View = "View",Currency = "Currency",Debit_Credit = "Debit/Credit",Base_Rate = "Base Rate(%)",Minimum_Rate = "Minimum Rate(%)",Maximum_Rate = "Maximum Rate(%)",From_Date = "From Date",To_Date = "To Date",Status = "Status",Rate_Type = "Rate Type",Floating_Rate_Type = "Floating Rate Type",Base_Rate_For = "Base Rate For",Account_Class = "Account Class",
}


        enum DebitCreditFlag {
               Credit ="C",   Debit ="D", 
        }
        enum FloatingRateType {
               Prime ="Prime",   HIBOR ="HIBOR", 
        }
        enum BaseRateFor {
               Regular ="REGULAR",   Margin_Call ="MARGIN", 
        }


export abstract class AbstractCashBaseRateQuery extends BaseUIOperations {

    static ResultColumns = ResultColumns
    
        static DebitCreditFlag = DebitCreditFlag;
        static FloatingRateType = FloatingRateType;
        static BaseRateFor = BaseRateFor;


/**
 *    Private members 
*/


private _currency : string = undefined 

private _debitCreditFlag : DebitCreditFlag = undefined 

private _fromDate : string = undefined 

private _toDate : string = undefined 

private _floatingRateType : FloatingRateType = undefined 

private _baseRateFor : BaseRateFor = undefined 



/**
 *   Accessor methods
*/


/**
  Field with a default value of ""
*/


public currency(v : string) : AbstractCashBaseRateQuery{
    this._currency=v
    return this
}

public debitCreditFlag(v : DebitCreditFlag ) : AbstractCashBaseRateQuery{
    this._debitCreditFlag=v
    return this
}

/**
  Field with a default value of ""
*/


public fromDate(v : string) : AbstractCashBaseRateQuery{
    this._fromDate=v
    return this
}

/**
  Field with a default value of ""
*/


public toDate(v : string) : AbstractCashBaseRateQuery{
    this._toDate=v
    return this
}

public floatingRateType(v : FloatingRateType ) : AbstractCashBaseRateQuery{
    this._floatingRateType=v
    return this
}

public baseRateFor(v : BaseRateFor ) : AbstractCashBaseRateQuery{
    this._baseRateFor=v
    return this
}




 protected fetchFields() : any[] {
        let fields :any[] = []

        if(this._currency!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="currency"]' , value : this._currency});
}

if(this._debitCreditFlag!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="debitCreditFlag"]' , value : this._debitCreditFlag});
}

if(this._fromDate!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="fromDate"]' , value : this._fromDate});
}

if(this._toDate!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="toDate"]' , value : this._toDate});
}

if(this._floatingRateType!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="floatingRateType"]' , value : this._floatingRateType});
}

if(this._baseRateFor!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="baseRateFor"]' , value : this._baseRateFor});
}


    return fields;

   }


}






