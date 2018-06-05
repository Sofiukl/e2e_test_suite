import  child  from "child_process";
import {Constants} from "../Constants";
import { Context } from "../context/Context";

const imageGenerate = require("../utils/ImageGenerate")



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

        // if(args != undefined){
        //     args.forEach(element => {
        //         command += " "+element +" "    
        //     });
        // }

        console.log(" To Execute" + command );
        try{
            
            
        const result = await child.execSync(command );

        imageGenerate.saveImg(result.toString())
        console.log("stdout  " + result.toString());
        console.log("Executed " + this.batchName() + "Successfully" );
        
        }catch(exception){
            console.log(exception);
            return false
            
        }

        return true
    }

    abstract batchName() : string; 

    abstract defaultArguments() : string[];

   

}