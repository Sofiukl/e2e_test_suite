
import { AbstractRestService } from "../../AbstractRestService";

export abstract class AbstractWithdrawalLimit extends AbstractRestService {

    /* Private variable to hold value of accountNumber */
    private _accountNumber: string = ""

    /* Private variable to hold value of currencyCode */
    private _currencyCode: string = "THB"

    /* Private variable to hold value of baseDate */
    private _baseDate: string = ""

    /* Accessor for accountNumber - Generally has default value of C0000003-7 */
    public accountNumber(v: string): AbstractWithdrawalLimit {
        this._accountNumber = v
        return this
    }

    /* Accessor for currencyCode - Generally has default value of THB */
    public currencyCode(v: string): AbstractWithdrawalLimit {
        this._currencyCode = v
        return this
    }

    /* Accessor for baseDate - Generally has default value of 08-11-2017 */
    public baseDate(v: string): AbstractWithdrawalLimit {
        this._baseDate = v
        return this
    }

    /* Clear method */
    public clear(): AbstractWithdrawalLimit {

        this._accountNumber = ""

        this._currencyCode = "THB"

        this._baseDate = ""

        return this
    }


    getRequest(): any {
        let requestDataMap: any = {}

        var request = {
            'requestCriteriaMap': requestDataMap
        }
        requestDataMap["accountNumber"] = this._accountNumber == undefined ? "C" : this._accountNumber
        requestDataMap["currencyCode"] = this._currencyCode == undefined ? "THB" : this._currencyCode
        requestDataMap["baseDate"] = this._baseDate == undefined ? "" : this._baseDate
        //////////////////
        //Add dynamic code here
        //////////////////


        return (request)
    }


}