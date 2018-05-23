
import { ExecuteBatch } from "../ExecuteBatch";


class FIFOPLCalculator extends ExecuteBatch {

    private _isLMVRequired : boolean = false

   
public setLmv(lmv? : boolean) : FIFOPLCalculator{
    this._isLMVRequired=lmv == undefined?false:lmv
    return this;
}

    
   batchName() : string{
        return "CAM/MarginPurchasePowerCalculator"
   }

   
   defaultArguments() : string[]{
       return this.addAccount().concat(this.addApplicationDate()).concat("-l",this._isLMVRequired ? "Y" : "N")
   }

}