import { ExecuteBatch } from "../ExecuteBatch";


export class ExecutionToTrade extends ExecuteBatch {

    batchName(): string {
        return "TRD/ExecutionToTrade"
    }

    private _tradedate: string = undefined
    private _account: string = undefined
    defaultArguments(): string[] {
        let args: string[] = []


        if (this._tradedate != undefined) {
            args.push("-d")
            args.push(this._tradedate)
        }

        if (this._account != undefined) {
            args.push("-a")
            args.push(this._account)
        }

        return args
    }
    public tradedate(v: string): ExecutionToTrade {
        this._tradedate = v
        return this
    }

    public account(v: string): ExecutionToTrade {
        this._account = v
        return this
    }
}