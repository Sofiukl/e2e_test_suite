
import { ExecuteBatch } from "../ExecuteBatch";


export class TaxAndCommCalculator extends ExecuteBatch {


    private _account : string = ""
    private _applicationDate : string = ""

   batchName() : string{
        return "TRD/TaxAndCommCalculator"
   }

   
   defaultArguments() : string[]{

    let args : string[] = []

    if(this._account != undefined ){
        args.push("-a")
        args.push(this._account)
    }

    if(this._applicationDate != undefined ){
        args.push("-d")
        args.push(this._applicationDate)
    }


    return args
       

   }


   public account(v : string) : TaxAndCommCalculator {
       this._account=v
       return this
   }

   public applicationDate(v : string) : TaxAndCommCalculator {
    this._applicationDate=v
    return this
}

}