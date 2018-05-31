import { WizardAction } from "../../BaseUIOperations";
import { PageContext } from "../../../context/PageContext";
import { Page } from "puppeteer";
import winston from "winston";
import { AbstractCamMovementQuery } from "./AbstractCamMovementQuery";

export class CamMovementQuery extends AbstractCamMovementQuery{

    async doExecute() : Promise<any>{
        
        await this.navigate(  'Position & Balances'  ,  'Beneficiary' , 'Movement Query', )
        //navigate
        // await this.clearFields(this.fetchFields())
        await this.populateFields(this.fetchFields())
        await this.screenshot()
        await this.wizardNavigate(WizardAction.QuerySubmit)
        await this.screenshot()

    }

}