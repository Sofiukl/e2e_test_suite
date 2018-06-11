import { PageContext } from "../../../context/PageContext";
import { WizardAction } from "../../BaseUIOperations";
import { AbstractRiskParameterQuery } from "./AbstractRiskParameterQuery";
import { ExcelUtils } from "../../../utils/ExcelUtils";




export class RiskParameterQuery extends AbstractRiskParameterQuery {
    /**
     * The Balance query execute.
     */
    async doExecute(): Promise<any> {

        await this.navigate("Position & Balances", "Beneficiary" , "Risk Parameter Query")
        await this.clearFields(this.fetchFields());
        await this.populateFields(this.fetchFields());
        ExcelUtils.getInstance().addHeading("Risk Parameter Query Screen ")
        await this.screenshot()
        
        await this.wizardNavigate(WizardAction.QuerySubmit)

        // //Determine the acual width
        // $("div.slick-viewport")[0].scrollWidth

        ExcelUtils.getInstance().addHeading(`Risk Parameter Query Results `)

        try {
            
        
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

        ExcelUtils.getInstance().addHeading(`Risk Parameter Popup `)

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

        //await this.screenshot()
        

        await page.click("a.ui-dialog-titlebar-close.ui-corner-all")
        
        
    } catch (error) {
            
    }
        

        
        
    }


}