
import { ExecuteBatch } from "../ExecuteBatch";


export class AutoCompletion extends ExecuteBatch {

    batchName(): string {
        return "STL/AutoCompletion"
    }


    
    private _date : string = undefined
    private _valueDateConditionFlag : string = undefined
    private _batchCommitSize : string = undefined
    private _valueDateOption : boolean = false
    private _counterPartyType : string = undefined
    private _counterPartyAccount : string = undefined
    private _executionMarket : string = undefined
    private _instructionType : string = undefined
    
    
    defaultArguments(): string[] {
        let args: string[] = []

        
        if (this._date != undefined) {
            args.push("-d")
            args.push(this._date)
        }
        if (this._valueDateConditionFlag != undefined) {
            args.push("-f")
            args.push(this._valueDateConditionFlag)
        }
        if (this._batchCommitSize != undefined) {
            args.push("-b")
            args.push(this._batchCommitSize)
        }
        if (this._valueDateOption) {
            args.push("-v")
    }
        if (this._counterPartyType != undefined) {
            args.push("-c")
            args.push(this._counterPartyType)
        }
        if (this._counterPartyAccount != undefined) {
            args.push("-a")
            args.push(this._counterPartyAccount)
        }
        if (this._executionMarket != undefined) {
            args.push("-m")
            args.push(this._executionMarket)
        }
        if (this._instructionType != undefined) {
            args.push("-i")
            args.push(this._instructionType)
        }

        return args
    }

    
        public date(v: string): AutoCompletion {     
                this._date = v                                 
                return this                                    
            }
        public valueDateConditionFlag(v: string): AutoCompletion {     
                this._valueDateConditionFlag = v                                 
                return this                                    
            }
        public batchCommitSize(v: string): AutoCompletion {     
                this._batchCommitSize = v                                 
                return this                                    
            }
        public valueDateOption(): AutoCompletion {
                this._valueDateOption = true                                 
                return this                                    
            }
        public counterPartyType(v: string): AutoCompletion {     
                this._counterPartyType = v                                 
                return this                                    
            }
        public counterPartyAccount(v: string): AutoCompletion {     
                this._counterPartyAccount = v                                 
                return this                                    
            }
        public executionMarket(v: string): AutoCompletion {     
                this._executionMarket = v                                 
                return this                                    
            }
        public instructionType(v: string): AutoCompletion {     
                this._instructionType = v                                 
                return this                                    
            }

        public  async bod(){
            // -f l -v -i CASH_FREE_DELIVER,CASH_FREE_RECEIVE
            await new AutoCompletion().valueDateConditionFlag("l")
                    .valueDateOption()
                    .instructionType("CASH_FREE_DELIVER,CASH_FREE_RECEIVE")
                    .execute()
        }

        public  async eod(){
            // -f l -v -i CASH_FREE_DELIVER,CASH_FREE_RECEIVE
            await new AutoCompletion().valueDateConditionFlag("l")
                    .valueDateOption()
                    .execute()
        }

}