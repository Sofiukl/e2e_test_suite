import {debug} from "winston"
import { AbstractClientWithdrawEntry } from "./AbstractClientWithdrawEntry";
import { CompletionEntry } from "../../../ui/entry/stl/CompletionEntry";

export class ClientWithdrawEntry extends AbstractClientWithdrawEntry {


        async execute(){
            debug("Start execute for Client Withdraw request")
            let results = await this.post()
            debug("Successfully registered Client Withdraw request")

            return results;
        }


        getPath() : string{

            return '/stl/clientpayment/1/entry'
        }


        public async withdraw(appDate : string , account : string , amount  : string){
            let withdrawResponse = await this.accountNo(account).withdrawableAmount(amount).paymentDate(appDate).transactionDate(appDate).execute()
            let settlementReferenceNumber = withdrawResponse[0].settlementReferenceNumber
            let completion = new CompletionEntry()
            //Mark for completion
            await completion.settlementReferenceNo(settlementReferenceNumber).execute();
        }
}