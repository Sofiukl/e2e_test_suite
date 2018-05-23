import { exec } from "child_process";
import {Constants} from "../Constants";
import { Context } from "../context/Context";


/*
Execute Batch Constract exports a single interface that must be implemented by all
implementations of batch
*/

export abstract class  ExecuteBatch {
    async execute(args : string[]) : Promise<boolean> {

        var command = Constants.batchBasePath + " " + this.batchName() + " " 

        
        if(this.defaultArguments() != undefined){
            this.defaultArguments().forEach(element => {
                command += " "+element +" "    
            });
        }

        if(args != undefined){
            args.forEach(element => {
                command += " "+element +" "    
            });
        }

        try{
        const { stdout, stderr } = await exec(command);
        
        console.log("Executed " + this.batchName() + "Successfully" );
        
        }catch(exception){
            console.log(exception);
            return false
            
        }

        return true
    }

    abstract batchName() : string; 

    abstract defaultArguments() : string[];

    addApplicationDate() : string[] {
        
        return ["-d" , Context.getInstance().applicationDate() ]

    }

    addAccount() : string[] {
        
        return ["-a " , Context.getInstance().creditAccount()] 

    }

}