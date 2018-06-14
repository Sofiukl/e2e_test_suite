
import { BaseUIOperations } from "../../BaseUIOperations";


//Define the results Enum

enum ResultColumns {
    
}


        enum DataSource {
              MAI ="MAI",   SCREEN ="SCREEN",   SET ="SET", 
        }
        enum PriceType {
               MID_PRICE ="MID",   BID_PRICE ="BID",   ASKING_PRICE ="ASK",   CLOSING_PRICE ="CLOSE",   OPEN_PRICE ="OPEN",   HIGH_PRICE ="HIGH",   LOW_PRICE ="LOW",   LTP_PRICE ="LTP",   STATEMENT_PRICE ="STMNT",   SPECIAL_QUOTATION ="SQ",   PRIOR_CLOSE_PRICE ="PRIOR",   OFFER_PRICE ="OFFER",   CHANGE_PRICE ="CHANGE",   AVG_SHORT_SALE_PRICE ="AVGSS", 
        }
        enum InputPriceFormatStr {
              UNIT_PRICE ="UNIT PRICE", 
        }


export abstract class AbstractMarketPriceEntry extends BaseUIOperations {

    static ResultColumns = ResultColumns
    
        static DataSource = DataSource;
        static PriceType = PriceType;
        static InputPriceFormatStr = InputPriceFormatStr;


/**
 *    Private members 
*/


private _baseDate : string = undefined 

private _marketId : string = undefined 

private _securityCode : string = undefined 

private _dataSource : DataSource = undefined 

private _priceType : PriceType = undefined 

private _inputPriceStr : string = undefined 

private _accountNo : string = undefined 

private _inputPriceFormatStr : InputPriceFormatStr = undefined 

private _remarks : string = undefined 



/**
 *   Accessor methods
*/


/**
  Field with a default value of ""
*/


public baseDate(v : string) : AbstractMarketPriceEntry{
    this._baseDate=v
    return this
}

/**
  Field with a default value of ""
*/


public marketId(v : string) : AbstractMarketPriceEntry{
    this._marketId=v
    return this
}

/**
  Field with a default value of ""
*/


public securityCode(v : string) : AbstractMarketPriceEntry{
    this._securityCode=v
    return this
}

public dataSource(v : DataSource ) : AbstractMarketPriceEntry{
    this._dataSource=v
    return this
}

public priceType(v : PriceType ) : AbstractMarketPriceEntry{
    this._priceType=v
    return this
}

/**
  Field with a default value of ""
*/


public inputPriceStr(v : string) : AbstractMarketPriceEntry{
    this._inputPriceStr=v
    return this
}

/**
  Field with a default value of ""
*/


public accountNo(v : string) : AbstractMarketPriceEntry{
    this._accountNo=v
    return this
}

public inputPriceFormatStr(v : InputPriceFormatStr ) : AbstractMarketPriceEntry{
    this._inputPriceFormatStr=v
    return this
}

/**
  Field with a default value of ""
*/


public remarks(v : string) : AbstractMarketPriceEntry{
    this._remarks=v
    return this
}




 protected fetchFields() : any[] {
        let fields :any[] = []

        if(this._baseDate!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="baseDate"]' , value : this._baseDate});
}

if(this._marketId!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="marketId"]' , value : this._marketId});
}

if(this._securityCode!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="securityCode"]' , value : this._securityCode});
}

if(this._dataSource!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="dataSource"]' , value : this._dataSource});
}

if(this._priceType!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="priceType"]' , value : this._priceType});
}

if(this._inputPriceStr!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="inputPriceStr"]' , value : this._inputPriceStr});
}

if(this._accountNo!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="accountNo"]' , value : this._accountNo});
}

if(this._inputPriceFormatStr!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="inputPriceFormatStr"]' , value : this._inputPriceFormatStr});
}

if(this._remarks!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'input[name="remarks"]' , value : this._remarks});
}


    return fields;

   }


}






