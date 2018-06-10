
import { ExecuteBatch } from "../ExecuteBatch";


export class SetMarker extends ExecuteBatch {

    batchName(): string {
        return "REF/SetMarker"
    }


    
    private _marker : string = undefined
    private _resetMarker : boolean = false
    
    
    defaultArguments(): string[] {
        let args: string[] = []

        
        if (this._marker != undefined) {
            args.push("-m")
            args.push(this._marker)
        }
        if (this._resetMarker) {
            args.push("-r")
    }

        return args
    }

    
        public marker(v: string): SetMarker {     
                this._marker = v                                 
                return this                                    
            }
        public resetMarker(): SetMarker {
                this._resetMarker = true                                 
                return this                                    
            }
}