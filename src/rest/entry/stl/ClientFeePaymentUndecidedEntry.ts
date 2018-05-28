import {debug} from "winston"
import { AbstractClientFeePaymentUndecidedEntry } from "./AbstractClientFeePaymentUndecidedEntry";

export class ClientFeePaymentUndecidedEntry extends AbstractClientFeePaymentUndecidedEntry {


        async execute(){
            debug("Start execute for Client Withdraw request")
            let results = await this.post()
            debug("Successfully registered Client Withdraw request")

            return results;
        }


        getPath() : string{

            return '/stl/wireinstruction/1/entry'
        }
}