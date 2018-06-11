import { WizardAction } from "../../BaseUIOperations";
import { AbstractAccruedCashInterestQuery } from "./AbstractAccruedCashInterestQuery";
import { ExcelUtils } from "../../../utils/ExcelUtils";
import { PageContext } from "../../../context/PageContext";
import winston from "winston";


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

        //check for popup
        //l0 r0


        try{

        const page = PageContext.getInstance().getPage()
        ExcelUtils.getInstance().addHeading("Accrued Cash Interest Popup Details")
        
        await page.click("div.l0.r0 span")
        await PageContext.getInstance().waitToNavigate()
        //scroll the height and then take screenshots

        ExcelUtils.getInstance().addHeading(`Accrual Interest Popup `)

        //$("div.ui-dialog-content.ui-widget-content")[0].scrollHeight
        const executionContext = await page.mainFrame().executionContext();


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
            } , popupResult[idx]);

            await this.screenshot()

        }

        //await this.screenshot()

        await page.click("a.ui-dialog-titlebar-close.ui-corner-all")

    }catch(error){
        winston.error("Found an error")
    }

    }

}