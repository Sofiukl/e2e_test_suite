

import { ExecuteBatch } from "../ExecuteBatch";


export class MarginPurchasePowerCalculator extends ExecuteBatch {

    batchName(): string {
        return "CAM/MarginPurchasePowerCalculator"
    }

    private _rundate: string = undefined
    private _schemeid: string = undefined
    private _accruedinterest: string = undefined
    private _accountno: string = undefined
    private _lmvrequired: string = undefined
    
    defaultArguments(): string[] {
        let args: string[] = []


        if (this._rundate != undefined) {
            args.push("-d")
            args.push(this._rundate)
        }

        if (this._schemeid != undefined) {
            args.push("-s")
            args.push(this._schemeid)
        }

        if (this._accruedinterest != undefined) {
            args.push("-i")
            args.push(this._accruedinterest)
        }

        if (this._accountno != undefined) {
            args.push("-a")
            args.push(this._accountno)
        }

        if (this._lmvrequired != undefined) {
            args.push("-l")
            args.push(this._lmvrequired)
        }

        return args
    }
    public rundate(v: string): MarginPurchasePowerCalculator {
        this._rundate = v
        return this
    }

    public schemeid(v: string): MarginPurchasePowerCalculator {
        this._schemeid = v
        return this
    }

    public accruedinterest(v: string): MarginPurchasePowerCalculator {
        this._accruedinterest = v
        return this
    }

    public accountno(v: string): MarginPurchasePowerCalculator {
        this._accountno = v
        return this
    }

    public lmvrequired(v: string): MarginPurchasePowerCalculator {
        this._lmvrequired = v
        return this
    }


    public morning(account? : string): MarginPurchasePowerCalculator {
        this.lmvrequired("N").accountno(account)
        return this
    }

    public evening(account? : string): MarginPurchasePowerCalculator {
        this.lmvrequired("Y").accountno(account)
        return this
    }


}
