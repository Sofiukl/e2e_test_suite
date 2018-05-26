
        import { AbstractRestService } from "../../AbstractRestService";
        
        export abstract class AbstractClientFeePaymentEntry extends AbstractRestService {
            /* Private variable to hold value of wireType */
            private _wireType : string = "FIRM_RECEIPT"
            
            /* Private variable to hold value of accountNo */
            private _accountNo : string = "C10001107"
            
            /* Private variable to hold value of currencyCode */
            private _currencyCode : string = "THB"
            
            /* Private variable to hold value of valueDate */
            private _valueDate : string = "11-01-2018"
            
            /* Private variable to hold value of txnReferenceNo */
            private _txnReferenceNo : string = "CP0000649"
            
            /* Private variable to hold value of paymentDetail */
            private _paymentDetail : any[] = []
            
            /* Private variable to hold value of accountBalanceType */
            private _accountBalanceType : string = "10"
            
            /* Private variable to hold value of projectId */
            private _projectId : string = ""
            
            /* Private variable to hold value of tradeType */
            private _tradeType : string = ""
            
            /* Private variable to hold value of subTradeType */
            private _subTradeType : string = ""
            
            /* Private variable to hold value of inventoryAccount */
            private _inventoryAccount : string = ""
            
            /* Private variable to hold value of salesCode */
            private _salesCode : string = ""
            
            /* Private variable to hold value of clearingParty */
            private _clearingParty : string = ""
            
            /* Private variable to hold value of dvpEligibleFlag */
            private _dvpEligibleFlag : string = ""
            
            /* Private variable to hold value of firmCollateral */
            private _firmCollateral : string = ""
            
            /* Private variable to hold value of correspondingSecurityId */
            private _correspondingSecurityId : string = ""
            
            /* Private variable to hold value of otherLedger */
            private _otherLedger : string = ""
            
            /* Private variable to hold value of remarks */
            private _remarks : string = ""
            
            /* Private variable to hold value of remarksForReport */
            private _remarksForReport : string = ""
            
            /* Private variable to hold value of chequeDate */
            private _chequeDate : string = ""
            
            /* Private variable to hold value of beneficiaryName */
            private _beneficiaryName : string = ""
            
            /* Private variable to hold value of cashTxnStatus */
            private _cashTxnStatus : string = ""
            
            /* Private variable to hold value of wayOfPayment */
            private _wayOfPayment : string = ""
            
            /* Private variable to hold value of settlementFor */
            private _settlementFor : string = ""
            
            /* Private variable to hold value of cashSecurity */
            private _cashSecurity : string = ""
            
            /* Private variable to hold value of paymentReceipt */
            private _paymentReceipt : string = ""
            
            /* Private variable to hold value of priority */
            private _priority : string = ""
            
            /* Private variable to hold value of cpSettleAccountNo */
            private _cpSettleAccountNo : string = ""
            
            /* Private variable to hold value of cpSettleAccountName */
            private _cpSettleAccountName : string = ""
            
            /* Private variable to hold value of ourSettleAcNo */
            private _ourSettleAcNo : string = ""
            
            /* Private variable to hold value of ourIntermediaryInfo */
            private _ourIntermediaryInfo : string = ""
            
            /* Private variable to hold value of externalReferenceNo */
            private _externalReferenceNo : string = ""
            
            /* Private variable to hold value of payInSlipFileReferenceName */
            private _payInSlipFileReferenceName : string = ""
            
            /* Private variable to hold value of markAsIncomplete */
            private _markAsIncomplete : string = "Y"
            
            /* Accessor for wireType - Generally has default value of FIRM_RECEIPT */
                public wireType(v : string) : AbstractClientFeePaymentEntry {
                    this._wireType=v
                    return this
                }
                
            /* Accessor for accountNo - Generally has default value of C10001107 */
                public accountNo(v : string) : AbstractClientFeePaymentEntry {
                    this._accountNo=v
                    return this
                }
                
            /* Accessor for currencyCode - Generally has default value of THB */
                public currencyCode(v : string) : AbstractClientFeePaymentEntry {
                    this._currencyCode=v
                    return this
                }
                
            /* Accessor for valueDate - Generally has default value of 11-01-2018 */
                public valueDate(v : string) : AbstractClientFeePaymentEntry {
                    this._valueDate=v
                    return this
                }
                
            /* Accessor for txnReferenceNo - Generally has default value of CP0000649 */
                public txnReferenceNo(v : string) : AbstractClientFeePaymentEntry {
                    this._txnReferenceNo=v
                    return this
                }
                
            /* Accessor for paymentDetail - Generally has default value of [object Object],[object Object] */
                public addPaymentDetail(wireAmount : string ,reasonCode : string ) : AbstractClientFeePaymentEntry {
                    this._paymentDetail.push({wireAmount : wireAmount,reasonCode : reasonCode})
                    return this
                }
                
            /* Accessor for accountBalanceType - Generally has default value of 10 */
                public accountBalanceType(v : string) : AbstractClientFeePaymentEntry {
                    this._accountBalanceType=v
                    return this
                }
                
            /* Accessor for projectId - Generally has default value of  */
                public projectId(v : string) : AbstractClientFeePaymentEntry {
                    this._projectId=v
                    return this
                }
                
            /* Accessor for tradeType - Generally has default value of  */
                public tradeType(v : string) : AbstractClientFeePaymentEntry {
                    this._tradeType=v
                    return this
                }
                
            /* Accessor for subTradeType - Generally has default value of  */
                public subTradeType(v : string) : AbstractClientFeePaymentEntry {
                    this._subTradeType=v
                    return this
                }
                
            /* Accessor for inventoryAccount - Generally has default value of  */
                public inventoryAccount(v : string) : AbstractClientFeePaymentEntry {
                    this._inventoryAccount=v
                    return this
                }
                
            /* Accessor for salesCode - Generally has default value of  */
                public salesCode(v : string) : AbstractClientFeePaymentEntry {
                    this._salesCode=v
                    return this
                }
                
            /* Accessor for clearingParty - Generally has default value of  */
                public clearingParty(v : string) : AbstractClientFeePaymentEntry {
                    this._clearingParty=v
                    return this
                }
                
            /* Accessor for dvpEligibleFlag - Generally has default value of  */
                public dvpEligibleFlag(v : string) : AbstractClientFeePaymentEntry {
                    this._dvpEligibleFlag=v
                    return this
                }
                
            /* Accessor for firmCollateral - Generally has default value of  */
                public firmCollateral(v : string) : AbstractClientFeePaymentEntry {
                    this._firmCollateral=v
                    return this
                }
                
            /* Accessor for correspondingSecurityId - Generally has default value of  */
                public correspondingSecurityId(v : string) : AbstractClientFeePaymentEntry {
                    this._correspondingSecurityId=v
                    return this
                }
                
            /* Accessor for otherLedger - Generally has default value of  */
                public otherLedger(v : string) : AbstractClientFeePaymentEntry {
                    this._otherLedger=v
                    return this
                }
                
            /* Accessor for remarks - Generally has default value of  */
                public remarks(v : string) : AbstractClientFeePaymentEntry {
                    this._remarks=v
                    return this
                }
                
            /* Accessor for remarksForReport - Generally has default value of  */
                public remarksForReport(v : string) : AbstractClientFeePaymentEntry {
                    this._remarksForReport=v
                    return this
                }
                
            /* Accessor for chequeDate - Generally has default value of  */
                public chequeDate(v : string) : AbstractClientFeePaymentEntry {
                    this._chequeDate=v
                    return this
                }
                
            /* Accessor for beneficiaryName - Generally has default value of  */
                public beneficiaryName(v : string) : AbstractClientFeePaymentEntry {
                    this._beneficiaryName=v
                    return this
                }
                
            /* Accessor for cashTxnStatus - Generally has default value of  */
                public cashTxnStatus(v : string) : AbstractClientFeePaymentEntry {
                    this._cashTxnStatus=v
                    return this
                }
                
            /* Accessor for wayOfPayment - Generally has default value of  */
                public wayOfPayment(v : string) : AbstractClientFeePaymentEntry {
                    this._wayOfPayment=v
                    return this
                }
                
            /* Accessor for settlementFor - Generally has default value of  */
                public settlementFor(v : string) : AbstractClientFeePaymentEntry {
                    this._settlementFor=v
                    return this
                }
                
            /* Accessor for cashSecurity - Generally has default value of  */
                public cashSecurity(v : string) : AbstractClientFeePaymentEntry {
                    this._cashSecurity=v
                    return this
                }
                
            /* Accessor for paymentReceipt - Generally has default value of  */
                public paymentReceipt(v : string) : AbstractClientFeePaymentEntry {
                    this._paymentReceipt=v
                    return this
                }
                
            /* Accessor for priority - Generally has default value of  */
                public priority(v : string) : AbstractClientFeePaymentEntry {
                    this._priority=v
                    return this
                }
                
            /* Accessor for cpSettleAccountNo - Generally has default value of  */
                public cpSettleAccountNo(v : string) : AbstractClientFeePaymentEntry {
                    this._cpSettleAccountNo=v
                    return this
                }
                
            /* Accessor for cpSettleAccountName - Generally has default value of  */
                public cpSettleAccountName(v : string) : AbstractClientFeePaymentEntry {
                    this._cpSettleAccountName=v
                    return this
                }
                
            /* Accessor for ourSettleAcNo - Generally has default value of  */
                public ourSettleAcNo(v : string) : AbstractClientFeePaymentEntry {
                    this._ourSettleAcNo=v
                    return this
                }
                
            /* Accessor for ourIntermediaryInfo - Generally has default value of  */
                public ourIntermediaryInfo(v : string) : AbstractClientFeePaymentEntry {
                    this._ourIntermediaryInfo=v
                    return this
                }
                
            /* Accessor for externalReferenceNo - Generally has default value of  */
                public externalReferenceNo(v : string) : AbstractClientFeePaymentEntry {
                    this._externalReferenceNo=v
                    return this
                }
                
            /* Accessor for payInSlipFileReferenceName - Generally has default value of  */
                public payInSlipFileReferenceName(v : string) : AbstractClientFeePaymentEntry {
                    this._payInSlipFileReferenceName=v
                    return this
                }
                
            /* Accessor for markAsIncomplete - Generally has default value of Y */
                public markAsIncomplete(v : string) : AbstractClientFeePaymentEntry {
                    this._markAsIncomplete=v
                    return this
                }
                
        
         getRequest() : any {
            let requestDataMap : any = {}

            var request  ={
                'requestDataMap' : requestDataMap
            } 
            requestDataMap["wireType"] = this._wireType == undefined ? "FIRM_RECEIPT" : this._wireType  
            requestDataMap["accountNo"] = this._accountNo == undefined ? "C10001107" : this._accountNo  
            requestDataMap["currencyCode"] = this._currencyCode == undefined ? "THB" : this._currencyCode  
            requestDataMap["valueDate"] = this._valueDate == undefined ? "11-01-2018" : this._valueDate  
            requestDataMap["txnReferenceNo"] = this._txnReferenceNo == undefined ? "CP0000649" : this._txnReferenceNo  
            requestDataMap["paymentDetail"] = this._paymentDetail == undefined ? [] : this._paymentDetail  
            requestDataMap["accountBalanceType"] = this._accountBalanceType == undefined ? "10" : this._accountBalanceType  
            requestDataMap["projectId"] = this._projectId == undefined ? "" : this._projectId  
            requestDataMap["tradeType"] = this._tradeType == undefined ? "" : this._tradeType  
            requestDataMap["subTradeType"] = this._subTradeType == undefined ? "" : this._subTradeType  
            requestDataMap["inventoryAccount"] = this._inventoryAccount == undefined ? "" : this._inventoryAccount  
            requestDataMap["salesCode"] = this._salesCode == undefined ? "" : this._salesCode  
            requestDataMap["clearingParty"] = this._clearingParty == undefined ? "" : this._clearingParty  
            requestDataMap["dvpEligibleFlag"] = this._dvpEligibleFlag == undefined ? "" : this._dvpEligibleFlag  
            requestDataMap["firmCollateral"] = this._firmCollateral == undefined ? "" : this._firmCollateral  
            requestDataMap["correspondingSecurityId"] = this._correspondingSecurityId == undefined ? "" : this._correspondingSecurityId  
            requestDataMap["otherLedger"] = this._otherLedger == undefined ? "" : this._otherLedger  
            requestDataMap["remarks"] = this._remarks == undefined ? "" : this._remarks  
            requestDataMap["remarksForReport"] = this._remarksForReport == undefined ? "" : this._remarksForReport  
            requestDataMap["chequeDate"] = this._chequeDate == undefined ? "" : this._chequeDate  
            requestDataMap["beneficiaryName"] = this._beneficiaryName == undefined ? "" : this._beneficiaryName  
            requestDataMap["cashTxnStatus"] = this._cashTxnStatus == undefined ? "" : this._cashTxnStatus  
            requestDataMap["wayOfPayment"] = this._wayOfPayment == undefined ? "" : this._wayOfPayment  
            requestDataMap["settlementFor"] = this._settlementFor == undefined ? "" : this._settlementFor  
            requestDataMap["cashSecurity"] = this._cashSecurity == undefined ? "" : this._cashSecurity  
            requestDataMap["paymentReceipt"] = this._paymentReceipt == undefined ? "" : this._paymentReceipt  
            requestDataMap["priority"] = this._priority == undefined ? "" : this._priority  
            requestDataMap["cpSettleAccountNo"] = this._cpSettleAccountNo == undefined ? "" : this._cpSettleAccountNo  
            requestDataMap["cpSettleAccountName"] = this._cpSettleAccountName == undefined ? "" : this._cpSettleAccountName  
            requestDataMap["ourSettleAcNo"] = this._ourSettleAcNo == undefined ? "" : this._ourSettleAcNo  
            requestDataMap["ourIntermediaryInfo"] = this._ourIntermediaryInfo == undefined ? "" : this._ourIntermediaryInfo  
            requestDataMap["externalReferenceNo"] = this._externalReferenceNo == undefined ? "" : this._externalReferenceNo  
            requestDataMap["payInSlipFileReferenceName"] = this._payInSlipFileReferenceName == undefined ? "" : this._payInSlipFileReferenceName  
            requestDataMap["markAsIncomplete"] = this._markAsIncomplete == undefined ? "Y" : this._markAsIncomplete  
            //////////////////
            //Add dynamic code here
            //////////////////
    
    
            return (request)
         }

                }