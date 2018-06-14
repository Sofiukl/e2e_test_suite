import  child  from "child_process";
import {Constants} from "../Constants";
import { ExcelUtils } from "../utils/ExcelUtils";
import { PageContext } from "../context/PageContext";
import { DateUtils } from "../utils/DateUtils";




/*
Execute Batch Constract exports a single interface that must be implemented by all
implementations of batch
*/

export abstract class  ExecuteBatch {
    async execute() : Promise<boolean> {

        this.init()



        var command = Constants.batchBasePath + " -e GMO " + this.batchName() + "" 

        ExcelUtils.getInstance().addHeading(`Executing Batch : ${this.batchName()}`)
        

        
        if(this.defaultArguments() != undefined) {
            this.defaultArguments().forEach(element => {
                if(element.indexOf(' ')>-1){
                    element=`"${element}"`
                }
                command += " "+element +" "
            });
        }

        //console.log(" To Execute" + command );
        ExcelUtils.getInstance().addCommand(command)
        try{
            
            
        const result = await child.execSync(command );


        ExcelUtils.getInstance().addHeading(`Results of Batch : ${this.batchName()}`)

        ExcelUtils.getInstance().addCommand(result.toString())

        await DateUtils.sleep(2000)
        
        }catch(exception){
            //console.log(exception);
            
            return false
            
        }

        return true
    }

    protected abstract batchName() : string; 

    protected abstract defaultArguments() : string[];

    
    protected init() {

    }

            

}