import {BaseUIOperations, WizardAction} from "../../BaseUIOperations"
import { AbstractExecutionEntry } from "./AbstractExecutionEntry";
import { ExcelUtils } from "../../../utils/ExcelUtils";


export class ExecutionEntry extends AbstractExecutionEntry {
   
    async doExecute() : Promise<any>{

        await this.navigate('Trade','Execution','Entry')
        //navigate
        await this.clearFields(this.fetchFields())
        await this.populateFields(this.fetchFields())
        ExcelUtils.getInstance().addHeading("Execution Entry  ")
        await this.screenshot()
        await this.wizardNavigate(WizardAction.Submit)
        ExcelUtils.getInstance().addHeading("Execution Entry User Confirmation")
        await this.screenshot()
        await this.wizardNavigate(WizardAction.Confirm)
        ExcelUtils.getInstance().addHeading("Execution Entry System Confirmation")
        await this.screenshot()
     
        //TODO
        //return something what we havent decided
    }

   

}