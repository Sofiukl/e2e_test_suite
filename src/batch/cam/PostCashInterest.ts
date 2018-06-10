
import { ExecuteBatch } from "../ExecuteBatch";


export class PostCashInterest extends ExecuteBatch {

    batchName(): string {
        return "CAM/PostCashInterest"
    }


    
    private _date : string = undefined
    
    
    defaultArguments(): string[] {
        let args: string[] = []

        
        if (this._date != undefined) {
            args.push("-d")
            args.push(this._date)
        }

        return args
    }

    
        public date(v: string): PostCashInterest {     
                this._date = v                                 
                return this                                    
            }
}