
import { ExecuteBatch } from "../ExecuteBatch";


export class GenerateDailyConfirmation extends ExecuteBatch {

    batchName(): string {
        return "TRD/GenerateDailyConfirmation"
    }


    
    private _reportId : string = undefined
    private _accountNo : string = undefined
    private _tradeDate : string = undefined
    
    
    defaultArguments(): string[] {
        let args: string[] = []

        
        if (this._reportId != undefined) {
            args.push("-r")
            args.push(this._reportId)
        }
        if (this._accountNo != undefined) {
            args.push("-a")
            args.push(this._accountNo)
        }
        if (this._tradeDate != undefined) {
            args.push("-d")
            args.push(this._tradeDate)
        }

        return args
    }

    
        public reportId(v: string): GenerateDailyConfirmation {     
                this._reportId = v                                 
                return this                                    
            }
        public accountNo(v: string): GenerateDailyConfirmation {     
                this._accountNo = v                                 
                return this                                    
            }
        public tradeDate(v: string): GenerateDailyConfirmation {     
                this._tradeDate = v                                 
                return this                                    
            }
}