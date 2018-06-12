
import { BaseUIOperations } from "../BaseUIOperations";


//Define the results Enum

enum ResultColumns {
    
}


        enum SqlId {
               AC002___Account_Listing_Report ="AC002",   AC005___Account_Listing___Trade_Information ="AC005",   AVSTL___STR_2Avoid_Settlement ="AVSTL",   BLOR8___BOR_LOR_8 ="BLOR8",   BOTOR___BOT_Outstanding_Report ="BOTOR",   CAMDS___Delist_Securities_Report ="CAMDS",   CAMLE___Last_Exercise_Warrant_Report ="CAMLE",   CAMMI___Monthly_Interest_Report ="CAMMI",   CAMOC___Over_Credit_Report ="CAMOC",   CDARB___STR_6_Reactivation_For_Buy_Sell ="CDARB",   CDDCT___STR_3Complex_Transaction ="CDDCT",   CDDED___STR_6_Reactivation_For_Deposit ="CDDED",   CDDNT___STR_7_Dep_No_Trade ="CDDNT",   CDDRF___STR_6_Reactivation_For_Withdrawal ="CDDRF",   CDDSA___STR_5Several_Account ="CDDSA",   CDICL___STR_10_Increase_credit ="CDICL",   CDILV___STR_9Ignore_Loss_Value ="CDILV",   CDOSW___STR_82OSS ="CDOSW",   CDRES___STR_6Reactivated_Summary_Section ="CDRES",   CDUTX___STR_4Unexplained_Transfer ="CDUTX",   CS004___Daily_Receive_from_Customer_Report ="CS004",   CS005___Daily_Payment_to_Customer ="CS005",   CS007___Cash_Balance_Control ="CS007",   CS008___Export_ATS_Reconcile_Report ="CS008",   CS009___Daily_Tax_Invoice_Register_Report ="CS009",   RM001___Accrued_Interest ="RM001",   RM002___Margin_Level_Report ="RM002",   RM003___Order_Register_Report ="RM003",   RM004___Statement_of_Credit_Balance_Account ="RM004",   RM005___Stock_Concentration_Report ="RM005",   RM006___Turn_Overlist_Securities_Report ="RM006",   RM007___Trading_Volume_By_Account_Type ="RM007",   RM009___Overdue_Report ="RM009",   RM010___Changed_and_Cancelled_by_order_rpt ="RM010",   SGRCB___Segregate_Cash_Balance_Report ="SGRCB",   ST001___Split_Share_Report ="ST001",   ST004___Warning_Mismatch_Report ="ST004",   ST005___Credit_Share_Report ="ST005",   STLFS___Daily_Forecast_Settlement_Report ="STLFS",   TR003___Top_Trading_Volume_by_Customer ="TR003", 
        }


export abstract class AbstractMultipurposeReportQuery extends BaseUIOperations {

    static ResultColumns = ResultColumns
    
        static SqlId = SqlId;


/**
 *    Private members 
*/


private _sqlId : SqlId = undefined 



/**
 *   Accessor methods
*/


public sqlId(v : SqlId ) : AbstractMultipurposeReportQuery{
    this._sqlId=v
    return this
}




 protected fetchFields() : any[] {
        let fields :any[] = []

        if(this._sqlId!=undefined){
  fields.push({ 'type' : 'text' , 'selector' : 'select[name="sqlId"]' , value : this._sqlId});
}


    return fields;

   }


}






