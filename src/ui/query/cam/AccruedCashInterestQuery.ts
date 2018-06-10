import { WizardAction } from "../../BaseUIOperations";
import { AbstractAccruedCashInterestQuery } from "./AbstractAccruedCashInterestQuery";
import { ExcelUtils } from "../../../utils/ExcelUtils";


export class AccruedCashInterestQuery extends AbstractAccruedCashInterestQuery{

    async doExecute() : Promise<any>{
        
        await this.navigate( 'Position & Balances' ,  'Beneficiary' ,  'Cash Accrued Interest' ,  'Query' , )
        //navigate
        ExcelUtils.getInstance().addHeading("Accrued Cash Interest Query Screen ")
        await this.clearFields(this.fetchFields())
        await this.populateFields(this.fetchFields())
        await this.screenshot()
        await this.wizardNavigate(WizardAction.QuerySubmit)
        ExcelUtils.getInstance().addHeading("Accrued Cash Interest Query Results")
        await this.screenshot()

    }

}