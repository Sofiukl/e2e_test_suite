import { PageContext } from "../context/PageContext";
import { Login } from "../ui/common/LoginOperation";
import { ExecutionEntry } from "../ui/entry/trd/ExecutionEntry";
import { ExecutionToTrade } from "../batch/trd/ExecutionToTrade";
import { TaxAndCommCalculator } from "../batch/trd/TaxAndCommCalculator";
import { ExecutionQuery } from "../ui/query/trd/ExecutionQuery";




//Execution of TRD002 changes and test cases
export class CUSLONE_436 {
    
    async setup() {
        //login
         await PageContext.getInstance().initPage(false)
        let login = new Login()
        await login.execute()
    }


    async testAddExecution(){

        let execution = new ExecutionEntry()
        await execution
            .cpAccountNo("C0000001-8")
            .tradeDateStr("02-07-2018")
            .securityInfo("WHART")
            .quantityStr("1100")
            .inputPriceStr("2.18")
            .salesCode("9999")
            .buySellOrientation("FB")
            .senderReferenceNo("OD-0000000001")
            .sourceReferenceNo("TD-0000000001")
        .execute()


        let execTradeBatch = new ExecutionToTrade()
        await execTradeBatch.account("C0000001-8").tradedate("20180702").execute()

        let taxAndCommCalculator = new TaxAndCommCalculator()
        await taxAndCommCalculator.account("C0000001-8").date("20180702").execute()

        let executionQuery : ExecutionQuery = new ExecutionQuery()
        await executionQuery.cpAccountNo("C0000001-8").tradeDateFrom("02-07-2018").tradeDateTo("02-07-2018").execute()

    }

    async destroy(){
        await PageContext.getInstance().close()
    }




    



}