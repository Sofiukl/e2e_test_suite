
        import { AbstractRestService } from "../../AbstractRestService";
        
        export abstract class AbstractClientWithdrawEntry extends AbstractRestService {
            /* Private variable to hold value of accountNo */
            private _accountNo : string = "C012345699-8"
            
            /* Private variable to hold value of ourSettlementAccountNo */
            private _ourSettlementAccountNo : string = "B000000281568817"
            
            /* Private variable to hold value of currencyCode */
            private _currencyCode : string = "THB"
            
            /* Private variable to hold value of paymentDate */
            private _paymentDate : string = "03-07-2018"
            
            /* Private variable to hold value of transactionDate */
            private _transactionDate : string = "03-07-2018"
            
            /* Private variable to hold value of withdrawableAmount */
            private _withdrawableAmount : string = "3000"
            
            /* Private variable to hold value of settlementFor */
            private _settlementFor : string = "WIRE_INSTRUCTION"
            
            /* Private variable to hold value of cashSecurity */
            private _cashSecurity : string = "CASH"
            
            /* Private variable to hold value of paymentReceipt */
            private _paymentReceipt : string = "P"
            
            /* Private variable to hold value of priority */
            private _priority : string = "1"
            
            /* Private variable to hold value of txnReferenceNo */
            private _txnReferenceNo : string = "PR2017111100108"
            
            /* Private variable to hold value of externalReferenceNo */
            private _externalReferenceNo : string = "EXT123408"
            
            /* Accessor for accountNo - Generally has default value of C012345699-8 */
            public accountNo(v : string) : AbstractClientWithdrawEntry {
                this._accountNo=v
                return this
            }
            
            /* Accessor for ourSettlementAccountNo - Generally has default value of B000000281568817 */
            public ourSettlementAccountNo(v : string) : AbstractClientWithdrawEntry {
                this._ourSettlementAccountNo=v
                return this
            }
            
            /* Accessor for currencyCode - Generally has default value of THB */
            public currencyCode(v : string) : AbstractClientWithdrawEntry {
                this._currencyCode=v
                return this
            }
            
            /* Accessor for paymentDate - Generally has default value of 03-07-2018 */
            public paymentDate(v : string) : AbstractClientWithdrawEntry {
                this._paymentDate=v
                return this
            }
            
            /* Accessor for transactionDate - Generally has default value of 03-07-2018 */
            public transactionDate(v : string) : AbstractClientWithdrawEntry {
                this._transactionDate=v
                return this
            }
            
            /* Accessor for withdrawableAmount - Generally has default value of 3000 */
            public withdrawableAmount(v : string) : AbstractClientWithdrawEntry {
                this._withdrawableAmount=v
                return this
            }
            
            /* Accessor for settlementFor - Generally has default value of WIRE_INSTRUCTION */
            public settlementFor(v : string) : AbstractClientWithdrawEntry {
                this._settlementFor=v
                return this
            }
            
            /* Accessor for cashSecurity - Generally has default value of CASH */
            public cashSecurity(v : string) : AbstractClientWithdrawEntry {
                this._cashSecurity=v
                return this
            }
            
            /* Accessor for paymentReceipt - Generally has default value of P */
            public paymentReceipt(v : string) : AbstractClientWithdrawEntry {
                this._paymentReceipt=v
                return this
            }
            
            /* Accessor for priority - Generally has default value of 2 */
            public priority(v : string) : AbstractClientWithdrawEntry {
                this._priority=v
                return this
            }
            
            /* Accessor for txnReferenceNo - Generally has default value of PR2017111100108 */
            public txnReferenceNo(v : string) : AbstractClientWithdrawEntry {
                this._txnReferenceNo=v
                return this
            }
            
            /* Accessor for externalReferenceNo - Generally has default value of EXT123408 */
            public externalReferenceNo(v : string) : AbstractClientWithdrawEntry {
                this._externalReferenceNo=v
                return this
            }
            
        
         getRequest() : any {
            let requestDataMap : any = {}

            var request  ={
                'requestDataMap' : requestDataMap
            } 
            requestDataMap["accountNo"] = this._accountNo == undefined ? "C012345699-8" : this._accountNo  
            requestDataMap["ourSettlementAccountNo"] = this._ourSettlementAccountNo == undefined ? "B000000281568817" : this._ourSettlementAccountNo  
            requestDataMap["currencyCode"] = this._currencyCode == undefined ? "THB" : this._currencyCode  
            requestDataMap["paymentDate"] = this._paymentDate == undefined ? "03-07-2018" : this._paymentDate  
            requestDataMap["transactionDate"] = this._transactionDate == undefined ? "03-07-2018" : this._transactionDate  
            requestDataMap["withdrawableAmount"] = this._withdrawableAmount == undefined ? "3000" : this._withdrawableAmount  
            requestDataMap["settlementFor"] = this._settlementFor == undefined ? "WIRE_INSTRUCTION" : this._settlementFor  
            requestDataMap["cashSecurity"] = this._cashSecurity == undefined ? "CASH" : this._cashSecurity  
            requestDataMap["paymentReceipt"] = this._paymentReceipt == undefined ? "P" : this._paymentReceipt  
            requestDataMap["priority"] = this._priority == undefined ? "2" : this._priority  
            requestDataMap["txnReferenceNo"] = this._txnReferenceNo == undefined ? "PR2017111100108" : this._txnReferenceNo  
            requestDataMap["externalReferenceNo"] = this._externalReferenceNo == undefined ? "EXT123408" : this._externalReferenceNo  
            //////////////////
            //Add dynamic code here
            //////////////////
    
    
            return (request)
         }

                }