import { WizardAction } from "../BaseUIOperations";
import { PageContext } from "../../context/PageContext";
import { Page } from "puppeteer";
import winston from "winston";
import { AbstractMultipurposeReportQuery } from "./AbstractMultipurposeReportQuery";
import { ExcelUtils } from "../../utils/ExcelUtils";

export class MultipurposeReportQuery extends AbstractMultipurposeReportQuery{

    async doExecute() : Promise<any>{
        
        await this.navigate( 'Sys Control' ,  'Reports' ,  'Multi Purpose Query' , )
        //navigate
        ExcelUtils.getInstance().addHeading("Query For Multi Purpose Query")
        await this.clearFields(this.fetchFields())
        await this.populateFields(this.fetchFields())
        await this.screenshot()
        await this.wizardNavigate(WizardAction.QuerySubmit)
        ExcelUtils.getInstance().addHeading("Query For Multi Query Submit")
        await this.screenshot()
        ExcelUtils.getInstance().addHeading("Query For Multi Report Results")
        await this.wizardNavigate(WizardAction.QuerySubmit)
        await this.screenshot()



    }

}