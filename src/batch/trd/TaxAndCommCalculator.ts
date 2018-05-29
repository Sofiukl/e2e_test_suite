
import { ExecuteBatch } from "../ExecuteBatch";


export class TaxAndCommCalculator extends ExecuteBatch {

    batchName(): string {
        return "TRD/TaxAndCommCalculator"
    }

    private _date: string = undefined
    private _account: string = undefined
    
    defaultArguments(): string[] {
        let args: string[] = []


        if (this._date != undefined) {
            args.push("-d")
            args.push(this._date)
        }

        if (this._account != undefined) {
            args.push("-a")
            args.push(this._account)
        }

        return args
    }
    public date(v: string): TaxAndCommCalculator {
        this._date = v
        return this
    }

    public account(v: string): TaxAndCommCalculator {
        this._account = v
        return this
    }
}