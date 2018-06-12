
import { ExecuteBatch } from "../ExecuteBatch";


export class FIFOPLCalculator extends ExecuteBatch {

    batchName(): string {
        return "CAM/FIFOPLCalculator"
    }


    
    private _accountNo : string = undefined
    private _securityId : string = undefined
    private _accountBalanaceType : string = undefined
    
    
    defaultArguments(): string[] {
        let args: string[] = []

        
        if (this._accountNo != undefined) {
            args.push("-a")
            args.push(this._accountNo)
        }
        if (this._securityId != undefined) {
            args.push("-s")
            args.push(this._securityId)
        }
        if (this._accountBalanaceType != undefined) {
            args.push("-b")
            args.push(this._accountBalanaceType)
        }

        return args
    }

    
        public accountNo(v: string): FIFOPLCalculator {     
                this._accountNo = v                                 
                return this                                    
            }
        public securityId(v: string): FIFOPLCalculator {     
                this._securityId = v                                 
                return this                                    
            }
        public accountBalanaceType(v: string): FIFOPLCalculator {     
                this._accountBalanaceType = v                                 
                return this                                    
            }
}