import {debug} from "winston"

import { AbstractClientFeePaymentConfirmDecided } from "./AbstractClientFeePaymentConfirmDecided";

export class ClientFeePaymentConfirmDecided
 extends AbstractClientFeePaymentConfirmDecided
 {


        async execute(){
            debug("Start execute for Client Withdraw request")
            let results = await this.post()
            debug("Successfully registered Client Withdraw request")

            return results;
        }


        getPath() : string{

            return '/stl/wireinstruction/1/decidesettlement'
        }
}