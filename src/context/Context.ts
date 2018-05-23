export class Context {

    private static instance: Context;

    private _applicationDate: string
    private _cashAccount: string
    private _creditAccount: string

    private _customerCode : string

    private constructor() {
        
        
    }
    static getInstance() {
        if (!Context.instance) {
            Context.instance = new Context();
            // ... any one time initialization goes here ...
        }
        return Context.instance;
    }



    public applicationDate(val? : string) : string {
        if(val!=undefined){
            this._applicationDate = val
        }
        return this._applicationDate
    }

    public creditAccount(val? : string) : string {
        if(val!=undefined){
            this._creditAccount = val
        }
        return this._creditAccount
    }

    public cashAccount(val? : string) : string {
        if(val!=undefined){
            this._cashAccount = val
        }
        return this._cashAccount
    }

    public customerCode(val? : string) : string {
        if(val!=undefined){
            this._customerCode = val
        }
        return this._customerCode
    }

  



    
   
    
    //add any method yous want here
}