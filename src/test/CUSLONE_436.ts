import { PageContext } from "../context/PageContext";
import { Login } from "../ui/common/LoginOperation";
import { ExecutionEntry } from "../ui/entry/trd/ExecutionEntry";




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
            .tradeDateStr("02-03-2018")
            .securityInfo("WHART")
            .quantityStr("1100")
            .inputPriceStr("2.18")
            .salesCode("9999")
            .buySellOrientation("B")
            .senderReferenceNo("OD-0000000001")
            .sourceReferenceNo("TD-0000000001")
        .execute()

    }




    



}