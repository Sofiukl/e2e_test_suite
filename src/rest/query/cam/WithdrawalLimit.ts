import {debug} from "winston"
import { AbstractWithdrawalLimit } from "./AbstractWithdrawalLimit"

export class WithdrawalLimit extends AbstractWithdrawalLimit {


        async execute(){
            debug("Start execute for Withdrawal Limit")
            let results = await this.post()
            debug("Successfully registered Withdrawal Limit request")

            return results;
        }


        getPath() : string{

            return '/cam/withdrawallimit/1/query'
        }
}