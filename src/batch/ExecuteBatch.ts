import  child  from "child_process";
import {Constants} from "../Constants";
import { Context } from "../context/Context";
import { ExcelUtils } from "../utils/ExcelUtils";




/*
Execute Batch Constract exports a single interface that must be implemented by all
implementations of batch
*/

export abstract class  ExecuteBatch {
    async execute() : Promise<boolean> {

        var command = Constants.batchBasePath + " -e GMO " + this.batchName() + "" 

        console.log(command);
        

        
        if(this.defaultArguments() != undefined) {
            this.defaultArguments().forEach(element => {
                command += " "+element +" "    
            });
        }

        console.log(" To Execute" + command );
        ExcelUtils.getInstance().addCommand(command)
        try{
            
            
        const result = await child.execSync(command );


        ExcelUtils.getInstance().addCommand(result.toString())
        
        }catch(exception){
            console.log(exception);
            return false
            
        }

        return true
    }

    abstract batchName() : string; 

    abstract defaultArguments() : string[];

            

}