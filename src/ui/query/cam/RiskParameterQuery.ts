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

        // //Determine the acual width
        // $("div.slick-viewport")[0].scrollWidth

        const page = PageContext.getInstance().getPage()
        
        const executionContext = await page.mainFrame().executionContext();
        const result = await executionContext.evaluate(() => {
            //$("div.slick-viewport").scrollLeft()
            // $("div.slick-viewport").width()
            // $("div.slick-viewport")[0].scrollWidth

            let resultPosition = []

            for(let x=0;x<$("div.slick-viewport")[0].scrollWidth;x+=$("div.slick-viewport").width()){
                resultPosition.push(x)
            }
            return resultPosition
        });


        

        for(let idx = 0 ;idx < result.length; idx++){
            await executionContext.evaluate( (scrollLocation) => {

                $("div.slick-viewport").scrollLeft(scrollLocation) 
            } , result[idx]);

            await this.screenshot()

        }

        //take snapshot of popup

        await page.click("span.detail-view-hyperlink.popupIconBtn")
        await PageContext.getInstance().waitToNavigate()
        //scroll the height and then take screenshots

        //$("div.ui-dialog-content.ui-widget-content")[0].scrollHeight

        const popupResult = await executionContext.evaluate(() => {
            //$("div.slick-viewport").scrollLeft()
            
            

            let resultPosition = []

            for(let x=0;x<$("div.ui-dialog-content.ui-widget-content")[0].scrollHeight;x+=$("div.ui-dialog-content.ui-widget-content").height()){
                resultPosition.push(x)
            }
            return resultPosition
        });


        //resultPosition

        for(let idx = 0 ;idx < popupResult.length; idx++){
            await executionContext.evaluate( (scrollLocation) => {

                $("div.ui-dialog-content.ui-widget-content").scrollTop(scrollLocation) 
            } , result[idx]);

            await this.screenshot()

        }

        await this.screenshot()
        

        await page.click("a.ui-dialog-titlebar-close.ui-corner-all")
        
        
        
        

        
        
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