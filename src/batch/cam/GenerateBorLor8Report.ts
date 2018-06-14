
import { ExecuteBatch } from "../ExecuteBatch";


export class GenerateBorLor8Report extends ExecuteBatch {

    batchName(): string {
        return "CAM/GenerateBorLor8Report"
    }


    
    private _reportId : string = undefined
    private _baseDate : string = undefined
    
    
    defaultArguments(): string[] {
        let args: string[] = []

        
        if (this._reportId != undefined) {
            args.push("-r")
            args.push(this._reportId)
        }
        if (this._baseDate != undefined) {
            args.push("-d")
            args.push(this._baseDate)
        }

        return args
    }

    
        public reportId(v: string): GenerateBorLor8Report {
                this._reportId = v                                 
                return this                                    
            }
        public baseDate(v: string): GenerateBorLor8Report {     
                this._baseDate = v                                 
                return this                                    
            }
}