
import { ExecuteBatch } from "../ExecuteBatch";
import { ApplicationDate } from "../../db/ApplicationDate";
import winston from "winston";
import fs from "fs";
import { Constants } from "../../Constants";
import { ExcelUtils } from "../../utils/ExcelUtils";


export class UpdateInterestRate extends ExecuteBatch {

    private _records : string[][] = [["accountNo","fromDate","toDate","type","interest"]]
    
    
    /**
     * 
     * @param accountNo  - Account No for which impacted
     * @param fromDate - yyyyMMdd format
     * @param toDate - yyyyMMdd format or null
     * @param type  - C or D for Credit or Debit
     * @param interest  - Total Interest
     */
    public addRecord(accountNo : string, fromDate : string , toDate : string , type : string , interest : string) : UpdateInterestRate{
        this._records.push([accountNo,fromDate,toDate == null ? "" : toDate , type == null ? "" : type , interest])
        return this
    }

    

    batchName(): string {
        return "CAM/UpdateInterestRate"
    }


    /**
     * Initialize the file
     */
    init(){
        

        let applicationDate = ApplicationDate.getCurrent()
        //create file

        let fileContent = ""
        
        this._records.forEach(row => {

            fileContent+=row.join("|")
            fileContent+="\r\n"
            
        });

        let fileName =Constants.inputFileBasePath + "updateInterest/" + "margin-interest_igv_" +applicationDate+".csv"
        winston.silly("Creating a file : "+ fileName )
        winston.silly("Contents : " + fileContent)

        try{
            fs.unlinkSync(fileName)
        }catch(error){}
        

        fs.writeFileSync(fileName , fileContent)

        ExcelUtils.getInstance().addText(fileContent)

    }
    
    
    defaultArguments(): string[] {
        let args: string[] = []

        

        return args
    }

    
}