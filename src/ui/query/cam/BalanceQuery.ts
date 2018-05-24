import { AbstractBalanceQuery } from "./AbstractBalanceQuery";
import { WizardAction } from "../../BaseUIOperations";
import { PageContext } from "../../../context/PageContext";
import { Page } from "puppeteer"
import { QueryRetriever } from "../util/QueryRetriever";

import  { expect } from "chai"




export class BalanceQuery extends AbstractBalanceQuery {
    /**
     * The Balance query execute.
     */
    async doExecute(): Promise<any> {

        await this.navigate("Position & Balances", "Beneficiary" , "Balance Query")
        //await this.clearFields();
        //await this.populateFields();
        await this.screenshot()
        await this.wizardNavigate(WizardAction.QuerySubmit)
        await this.screenshot()

        let query = new QueryRetriever()
        var matchingCriteria = [
                                { column : 'Account No' , value : 'C0000001-7'} 
                                , { column : 'Security Code Default' , value : 'AAV-R'}
                            ]

        var returnColumn = ['Balance' , 'Account Balance Type']        

        query.setMatchingCriteria(matchingCriteria)
        query.setReturnColumn(returnColumn)
        var results=await query.fetch()
        
    }

}