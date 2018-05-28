
        import { AbstractRestService } from "../../AbstractRestService";
        
        export abstract class AbstractClientFeePaymentUndecidedEntry extends AbstractRestService {
            /* Private variable to hold value of accountNo */
            private _accountNo : string = ""
            
            /* Private variable to hold value of wireType */
            private _wireType : string = "FIRM_RECEIPT"
            
            /* Private variable to hold value of currencyCode */
            private _currencyCode : string = "THB"
            
            /* Private variable to hold value of accountBalanceType */
            private _accountBalanceType : string = "10"
            
            /* Private variable to hold value of markAsIncomplete */
            private _markAsIncomplete : string = "Y"
            
            /* Private variable to hold value of paymentDetail */
            private _paymentDetail : any[] = []
            
            /* Private variable to hold value of txnReferenceNo */
            private _txnReferenceNo : string = "201805110000789"
            
            /* Private variable to hold value of externalReferenceNo */
            private _externalReferenceNo : string = "0815322018041573125"
            
            /* Accessor for accountNo - Generally has default value of  */
                public accountNo(v : string) : AbstractClientFeePaymentUndecidedEntry {
                    this._accountNo=v
                    return this
                }
                
            /* Accessor for wireType - Generally has default value of FIRM_RECEIPT */
                public wireType(v : string) : AbstractClientFeePaymentUndecidedEntry {
                    this._wireType=v
                    return this
                }
                
            /* Accessor for currencyCode - Generally has default value of THB */
                public currencyCode(v : string) : AbstractClientFeePaymentUndecidedEntry {
                    this._currencyCode=v
                    return this
                }
                
            /* Accessor for accountBalanceType - Generally has default value of 10 */
                public accountBalanceType(v : string) : AbstractClientFeePaymentUndecidedEntry {
                    this._accountBalanceType=v
                    return this
                }
                
            /* Accessor for markAsIncomplete - Generally has default value of Y */
                public markAsIncomplete(v : string) : AbstractClientFeePaymentUndecidedEntry {
                    this._markAsIncomplete=v
                    return this
                }
                
            /* Accessor for paymentDetail - Generally has default value of [object Object] */
                public addPaymentDetail(wireAmount : string ,reasonCode : string ) : AbstractClientFeePaymentUndecidedEntry {
                    this._paymentDetail.push({wireAmount : wireAmount,reasonCode : reasonCode})
                    return this
                }
                
            /* Accessor for txnReferenceNo - Generally has default value of 201805110000789 */
                public txnReferenceNo(v : string) : AbstractClientFeePaymentUndecidedEntry {
                    this._txnReferenceNo=v
                    return this
                }
                
            /* Accessor for externalReferenceNo - Generally has default value of 0815322018041573125 */
                public externalReferenceNo(v : string) : AbstractClientFeePaymentUndecidedEntry {
                    this._externalReferenceNo=v
                    return this
                }
                
        /* Clear method */
        public clear() : AbstractClientFeePaymentUndecidedEntry {

    this. _accountNo = ""
    
    this. _wireType = "FIRM_RECEIPT"
    
    this. _currencyCode = "THB"
    
    this. _accountBalanceType = "10"
    
    this. _markAsIncomplete = "Y"
    
    this. _paymentDetail = []
    
    this. _txnReferenceNo = "201805110000789"
    
    this. _externalReferenceNo = "0815322018041573125"
          
            return this
        }
        
        
         getRequest() : any {
            let requestDataMap : any = {}

            var request  ={
                'requestDataMap' : requestDataMap
            } 
            requestDataMap["accountNo"] = this._accountNo == undefined ? "" : this._accountNo  
            requestDataMap["wireType"] = this._wireType == undefined ? "FIRM_RECEIPT" : this._wireType  
            requestDataMap["currencyCode"] = this._currencyCode == undefined ? "THB" : this._currencyCode  
            requestDataMap["accountBalanceType"] = this._accountBalanceType == undefined ? "10" : this._accountBalanceType  
            requestDataMap["markAsIncomplete"] = this._markAsIncomplete == undefined ? "Y" : this._markAsIncomplete  
            requestDataMap["paymentDetail"] = this._paymentDetail == undefined ? [] : this._paymentDetail  
            requestDataMap["txnReferenceNo"] = this._txnReferenceNo == undefined ? "201805110000789" : this._txnReferenceNo  
            requestDataMap["externalReferenceNo"] = this._externalReferenceNo == undefined ? "0815322018041573125" : this._externalReferenceNo  
            //////////////////
            //Add dynamic code here
            //////////////////
    
    
            return (request)
         }

                }