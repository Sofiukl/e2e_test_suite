import { WizardAction } from "../../BaseUIOperations";
import { PageContext } from "../../../context/PageContext";
import { Page } from "puppeteer";
import winston from "winston";
import { AbstractMarketPriceEntry } from "./AbstractMarketPriceEntry";
import { ExcelUtils } from "../../../utils/ExcelUtils";


export class MarketPriceEntry extends AbstractMarketPriceEntry{

    async doExecute() : Promise<any>{
        
        await this.navigate( 'Reference' ,  'Market Price' ,  'Entry' , )
        //navigate
        await this.clearFields(this.fetchFields())
        await this.populateFields(this.fetchFields())
        
        await this.clearFields(this.fetchFields())
        await this.populateFields(this.fetchFields())
        ExcelUtils.getInstance().addHeading("Entry For MarketPriceEntry ")
        await this.screenshot()
        await this.wizardNavigate(WizardAction.Submit)
		ExcelUtils.getInstance().addHeading("User Confirmation For MarketPriceEntry ")
        await this.screenshot()
        try {
            await this.wizardNavigate(WizardAction.Confirm)
            ExcelUtils.getInstance().addHeading("System Confirmation For MarketPriceEntry ")
            await this.screenshot()    
        } catch (error) {
            
        }
        
        

    }


    public async close(appDate : string , security : string  , price : string){
        await this.baseDate(appDate).dataSource(MarketPriceEntry.DataSource.SET).priceType(MarketPriceEntry.PriceType.CLOSING_PRICE)
        .inputPriceStr(price).securityCode(security).execute()
    }

}