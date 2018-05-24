import { AbstractBalanceQuery } from "./AbstractBalanceQuery";
import { WizardAction } from "../../BaseUIOperations";

export class BalanceQuery extends AbstractBalanceQuery {
    /**
     * The Balance query execute.
     */
    async doExecute(): Promise<any> {
        // Assert.notNull(this._baseDate)
        // Assert.notNull(this._balanceBasis)

        await this.navigate("Position & Balances", "Beneficiary" , "Balance Query")
        //await this.clearFields();
        //await this.populateFields();
        await this.screenshot()
        await this.wizardNavigate(WizardAction.QuerySubmit)
        await this.screenshot()

    }


}