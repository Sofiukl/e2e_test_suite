import { AbstractBalanceQuery } from "./AbstractBalanceQuery";
import { WizardAction } from "../../BaseUIOperations";
import { PageContext } from "../../../context/PageContext";
import { Page } from "puppeteer"
import { QueryRetriever } from "../util/QueryRetriever";

import  { expect } from "chai"
import { AbstractRiskParameterQuery } from "./AbstractRiskParameterQuery";




export class RiskParameterQuery extends AbstractRiskParameterQuery {
    /**
     * The Balance query execute.
     */
    async doExecute(): Promise<any> {

        await this.navigate("Position & Balances", "Beneficiary" , "Risk Parameter Query")
        await this.populateFields(this.fetchFields());
        await this.screenshot()
        
        await this.wizardNavigate(WizardAction.QuerySubmit)

        //Determine the acual width
        //$("div.slick-viewport")[0].scrollWidth

        await this.screenshot()
        

        
        
    }

    private _column : string;
    private _matchingCriteria : any[] = []


    /**
     * query
     */
    public query() : RiskParameterQuery{
        return this
    }

    /**
     * where()
     */
    public where(v : string) : RiskParameterQuery {

        this._column = v
        return this;
    }

    /**
     * equalTo
     */
    public equalTo(v : string) : RiskParameterQuery {
        this._matchingCriteria.push({column : this._column , value : v})
        //this._matchingCriteria =  undefined
        return this
    }

    /**
     * 
     * @param columnsToReturn - The columns which should be returned by this query
     */
    public async fetch( ...columnsToReturn : string[]) : Promise<any[]> {


        let query = new QueryRetriever()
        
        query.setMatchingCriteria(this._matchingCriteria)
        query.setReturnColumn(columnsToReturn)
        var results=await query.fetch()
        this._matchingCriteria=[]
        return results;



    }

}