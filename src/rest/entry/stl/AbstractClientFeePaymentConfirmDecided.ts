
        import { AbstractRestService } from "../../AbstractRestService";
        
        export abstract class AbstractClientFeePaymentConfirmDecided extends AbstractRestService {
            /* Private variable to hold value of txnReferenceNo */
            private _txnReferenceNo : any[] = []
            
            /* Private variable to hold value of valueDate */
            private _valueDate : string = ""
            
            /* Private variable to hold value of settlementFor */
            private _settlementFor : string = "WIRE_INSTRUCTION"
            
            /* Private variable to hold value of cashSecurity */
            private _cashSecurity : string = "CASH"
            
            /* Private variable to hold value of paymentReceipt */
            private _paymentReceipt : string = "R"
            
            /* Private variable to hold value of priority */
            private _priority : string = "6"
            
            /* Private variable to hold value of wayOfPayment */
            private _wayOfPayment : string = "PAY_IN"
            
            /* Private variable to hold value of cpBankCode */
            private _cpBankCode : string = ""
            
            /* Private variable to hold value of cpSettleAccountName */
            private _cpSettleAccountName : string = ""
            
            /* Private variable to hold value of cpSettleAccountNo */
            private _cpSettleAccountNo : string = ""
            
            /* Private variable to hold value of ourBankCode */
            private _ourBankCode : string = "004-003"
            
            /* Private variable to hold value of ourSettleAcNo */
            private _ourSettleAcNo : string = "B000000281568817"
            
            /* Private variable to hold value of payInSlipFileReferenceName */
            private _payInSlipFileReferenceName : string = ""
            
            /* Private variable to hold value of externalReferenceNo */
            private _externalReferenceNo : string = "201804110000000012"
            
            /* Private variable to hold value of isAuthorizationReqd */
            private _isAuthorizationReqd : string = "N"
            
            /* Accessor for txnReferenceNo - Generally has default value of 201803160000457 */
                public addTxnReferenceNo(v : string) : AbstractClientFeePaymentConfirmDecided {
                    this._txnReferenceNo.push(v)
                    return this
                }
                
            /* Accessor for valueDate - Generally has default value of  */
                public valueDate(v : string) : AbstractClientFeePaymentConfirmDecided {
                    this._valueDate=v
                    return this
                }
                
            /* Accessor for settlementFor - Generally has default value of WIRE_INSTRUCTION */
                public settlementFor(v : string) : AbstractClientFeePaymentConfirmDecided {
                    this._settlementFor=v
                    return this
                }
                
            /* Accessor for cashSecurity - Generally has default value of CASH */
                public cashSecurity(v : string) : AbstractClientFeePaymentConfirmDecided {
                    this._cashSecurity=v
                    return this
                }
                
            /* Accessor for paymentReceipt - Generally has default value of R */
                public paymentReceipt(v : string) : AbstractClientFeePaymentConfirmDecided {
                    this._paymentReceipt=v
                    return this
                }
                
            /* Accessor for priority - Generally has default value of 6 */
                public priority(v : string) : AbstractClientFeePaymentConfirmDecided {
                    this._priority=v
                    return this
                }
                
            /* Accessor for wayOfPayment - Generally has default value of PAY_IN */
                public wayOfPayment(v : string) : AbstractClientFeePaymentConfirmDecided {
                    this._wayOfPayment=v
                    return this
                }
                
            /* Accessor for cpBankCode - Generally has default value of  */
                public cpBankCode(v : string) : AbstractClientFeePaymentConfirmDecided {
                    this._cpBankCode=v
                    return this
                }
                
            /* Accessor for cpSettleAccountName - Generally has default value of  */
                public cpSettleAccountName(v : string) : AbstractClientFeePaymentConfirmDecided {
                    this._cpSettleAccountName=v
                    return this
                }
                
            /* Accessor for cpSettleAccountNo - Generally has default value of  */
                public cpSettleAccountNo(v : string) : AbstractClientFeePaymentConfirmDecided {
                    this._cpSettleAccountNo=v
                    return this
                }
                
            /* Accessor for ourBankCode - Generally has default value of 004-003 */
                public ourBankCode(v : string) : AbstractClientFeePaymentConfirmDecided {
                    this._ourBankCode=v
                    return this
                }
                
            /* Accessor for ourSettleAcNo - Generally has default value of B000000281568817 */
                public ourSettleAcNo(v : string) : AbstractClientFeePaymentConfirmDecided {
                    this._ourSettleAcNo=v
                    return this
                }
                
            /* Accessor for payInSlipFileReferenceName - Generally has default value of  */
                public payInSlipFileReferenceName(v : string) : AbstractClientFeePaymentConfirmDecided {
                    this._payInSlipFileReferenceName=v
                    return this
                }
                
            /* Accessor for externalReferenceNo - Generally has default value of 201804110000000012 */
                public externalReferenceNo(v : string) : AbstractClientFeePaymentConfirmDecided {
                    this._externalReferenceNo=v
                    return this
                }
                
            /* Accessor for isAuthorizationReqd - Generally has default value of N */
                public isAuthorizationReqd(v : string) : AbstractClientFeePaymentConfirmDecided {
                    this._isAuthorizationReqd=v
                    return this
                }
                
        /* Clear method */
        public clear() : AbstractClientFeePaymentConfirmDecided {

    this. _txnReferenceNo = []
    
    this. _valueDate = ""
    
    this. _settlementFor = "WIRE_INSTRUCTION"
    
    this. _cashSecurity = "CASH"
    
    this. _paymentReceipt = "R"
    
    this. _priority = "6"
    
    this. _wayOfPayment = "PAY_IN"
    
    this. _cpBankCode = ""
    
    this. _cpSettleAccountName = ""
    
    this. _cpSettleAccountNo = ""
    
    this. _ourBankCode = "004-003"
    
    this. _ourSettleAcNo = "B000000281568817"
    
    this. _payInSlipFileReferenceName = ""
    
    this. _externalReferenceNo = "201804110000000012"
    
    this. _isAuthorizationReqd = "N"
          
            return this
        }
        
        
         getRequest() : any {
            let requestDataMap : any = {}

            var request  ={
                'requestDataMap' : requestDataMap
            } 
            requestDataMap["txnReferenceNo"] = this._txnReferenceNo == undefined ? [] : this._txnReferenceNo  
            requestDataMap["valueDate"] = this._valueDate == undefined ? "" : this._valueDate  
            requestDataMap["settlementFor"] = this._settlementFor == undefined ? "WIRE_INSTRUCTION" : this._settlementFor  
            requestDataMap["cashSecurity"] = this._cashSecurity == undefined ? "CASH" : this._cashSecurity  
            requestDataMap["paymentReceipt"] = this._paymentReceipt == undefined ? "R" : this._paymentReceipt  
            requestDataMap["priority"] = this._priority == undefined ? "6" : this._priority  
            requestDataMap["wayOfPayment"] = this._wayOfPayment == undefined ? "PAY_IN" : this._wayOfPayment  
            requestDataMap["cpBankCode"] = this._cpBankCode == undefined ? "" : this._cpBankCode  
            requestDataMap["cpSettleAccountName"] = this._cpSettleAccountName == undefined ? "" : this._cpSettleAccountName  
            requestDataMap["cpSettleAccountNo"] = this._cpSettleAccountNo == undefined ? "" : this._cpSettleAccountNo  
            requestDataMap["ourBankCode"] = this._ourBankCode == undefined ? "004-003" : this._ourBankCode  
            requestDataMap["ourSettleAcNo"] = this._ourSettleAcNo == undefined ? "B000000281568817" : this._ourSettleAcNo  
            requestDataMap["payInSlipFileReferenceName"] = this._payInSlipFileReferenceName == undefined ? "" : this._payInSlipFileReferenceName  
            requestDataMap["externalReferenceNo"] = this._externalReferenceNo == undefined ? "201804110000000012" : this._externalReferenceNo  
            requestDataMap["isAuthorizationReqd"] = this._isAuthorizationReqd == undefined ? "N" : this._isAuthorizationReqd  
            //////////////////
            //Add dynamic code here
            //////////////////
    
    
            return (request)
         }

                }