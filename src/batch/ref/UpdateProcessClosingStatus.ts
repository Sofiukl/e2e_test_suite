
import { ExecuteBatch } from "../ExecuteBatch";


export class UpdateProcessClosingStatus extends ExecuteBatch {

    batchName(): string {
        return "REF/UpdateProcessClosingStatus"
    }


    
    private _noOfMonthlyBusinessDays : string = undefined
    private _noOfAnnualBusinessDays : string = undefined
    
    
    defaultArguments(): string[] {
        let args: string[] = []

        
        if (this._noOfMonthlyBusinessDays != undefined) {
            args.push("-o")
            args.push(this._noOfMonthlyBusinessDays)
        }
        if (this._noOfAnnualBusinessDays != undefined) {
            args.push("-y")
            args.push(this._noOfAnnualBusinessDays)
        }

        return args
    }

    
        public noOfMonthlyBusinessDays(v: string): UpdateProcessClosingStatus {     
                this._noOfMonthlyBusinessDays = v                                 
                return this                                    
            }
        public noOfAnnualBusinessDays(v: string): UpdateProcessClosingStatus {     
                this._noOfAnnualBusinessDays = v                                 
                return this                                    
            }
}