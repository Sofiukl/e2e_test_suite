import { ConnectionPool } from "./common/ConnectionPool";
import { ExcelUtils } from "../utils/ExcelUtils";



export class ApplicationDate{


    public static  getCurrent() : string {

        let sql = "SELECT to_char(MAX(APPLICATION_DATE),'DD-MM-YYYY') FROM REF_CLOSING_STATUS WHERE ENTERPRISE_ID = 'GMO'"

         let result  = ConnectionPool.getInstance().query(sql)

         
         
         return result[1][0]

    }

    /**
     * 
     * @param date Provide date in the DD-MM-YYYY format
     */
    public static updateApplicationDate(date : string){

        ExcelUtils.getInstance().addHeading(`Changing Application Date to [${date}]`)

        let sql = "UPDATE REF_CLOSING_STATUS SET APPLICATION_DATE =  TO_DATE('"+date+"','DD-MM-YYYY')"

        ConnectionPool.getInstance().update(sql)

        ExcelUtils.getInstance().addText(sql)


    }







}