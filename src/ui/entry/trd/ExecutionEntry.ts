import {BaseUIOperations, WizardAction} from "../../BaseUIOperations"
import { AbstractExecutionEntry } from "./AbstractExecutionEntry";

export class ExecutionEntry extends AbstractExecutionEntry {
   
    async doExecute() : Promise<any>{

        await this.navigate('Trade','Execution','Entry')
        //navigate
        await this.clearFields(this.fetchFields())
        await this.populateFields(this.fetchFields())
        await this.screenshot()
        await this.wizardNavigate(WizardAction.Submit)
        await this.screenshot()
        await this.wizardNavigate(WizardAction.Confirm)
        await this.screenshot()
     
        //TODO
        //return something what we havent decided
    }

   

}