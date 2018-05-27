import {debug} from "winston"
import { AbstractClientWithdrawEntry } from "./AbstractClientWithdrawEntry";

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
}