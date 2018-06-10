
import { ExecuteBatch } from "../ExecuteBatch";


export class DailyCashAccrual extends ExecuteBatch {

    batchName(): string {
        return "CAM/DailyCashAccrual"
    }


    
    private _balanceType : string = undefined
    private _BalanceState : string = undefined
    private _postingDate : string = undefined
    private _account : string = undefined
    private _excludedAccounts : string = undefined
    private _calculateforholidays : boolean = false
    private _excludeCustodialAccounts : boolean = false
    private _dailyPosting : boolean = false
    private _excludeMarginAccounts : boolean = false
    private _accountClass : string = undefined
    
    
    defaultArguments(): string[] {
        let args: string[] = []

        
        if (this._balanceType != undefined) {
            args.push("-t")
            args.push(this._balanceType)
        }
        if (this._BalanceState != undefined) {
            args.push("-s")
            args.push(this._BalanceState)
        }
        if (this._postingDate != undefined) {
            args.push("-d")
            args.push(this._postingDate)
        }
        if (this._account != undefined) {
            args.push("-a")
            args.push(this._account)
        }
        if (this._excludedAccounts != undefined) {
            args.push("-x")
            args.push(this._excludedAccounts)
        }
        if (this._calculateforholidays) {
            args.push("-p")
    }
        if (this._excludeCustodialAccounts) {
            args.push("-c")
    }
        if (this._dailyPosting) {
            args.push("-q")
    }
        if (this._excludeMarginAccounts) {
            args.push("-m")
    }
        if (this._accountClass != undefined) {
            args.push("-r")
            args.push(this._accountClass)
        }

        return args
    }

    
        public balanceType(v: string): DailyCashAccrual {     
                this._balanceType = v                                 
                return this                                    
            }
        public BalanceState(v: string): DailyCashAccrual {     
                this._BalanceState = v                                 
                return this                                    
            }
        public postingDate(v: string): DailyCashAccrual {     
                this._postingDate = v                                 
                return this                                    
            }
        public account(v: string): DailyCashAccrual {     
                this._account = v                                 
                return this                                    
            }
        public excludedAccounts(v: string): DailyCashAccrual {     
                this._excludedAccounts = v                                 
                return this                                    
            }
        public calculateforholidays(): DailyCashAccrual {
                this._calculateforholidays = true                                 
                return this                                    
            }
        public excludeCustodialAccounts(): DailyCashAccrual {
                this._excludeCustodialAccounts = true                                 
                return this                                    
            }
        public dailyPosting(): DailyCashAccrual {
                this._dailyPosting = true                                 
                return this                                    
            }
        public excludeMarginAccounts(): DailyCashAccrual {
                this._excludeMarginAccounts = true                                 
                return this                                    
            }
        public accountClass(v: string): DailyCashAccrual {     
                this._accountClass = v                                 
                return this                                    
            }


            public cash(account : string) : DailyCashAccrual{
                
                this.balanceType("VALUE DATE")
                    .accountClass("CASH BALANCE")
                    .BalanceState("ALL")
                    .account(account)
                return this               
            }
            
            public credit(account : string) : DailyCashAccrual{
                
                this.balanceType("TRADE DATE")
                    .accountClass("CREDIT BALANCE")
                    .BalanceState("ALL")
                    .account(account)
                return this               
            }
}