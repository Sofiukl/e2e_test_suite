import { WizardAction } from "../../BaseUIOperations";
import { PageContext } from "../../../context/PageContext";
import { Page } from "puppeteer";
import winston from "winston";
import { AbstractCamBalanceQuery } from "./AbstractCamBalanceQuery";
import { ExcelUtils } from "../../../utils/ExcelUtils";

export class CamBalanceQuery extends AbstractCamBalanceQuery{

    async doExecute() : Promise<any>{
        
        await this.navigate( 'Position & Balances' ,  'Beneficiary' ,  'Balance Query' , )
        //navigate
        
        
        await this.clearFields(this.fetchFields())
        await this.populateFields(this.fetchFields())
        ExcelUtils.getInstance().addHeading("Cam Balance Query Screen ")
        await this.screenshot()
        await this.wizardNavigate(WizardAction.QuerySubmit)
        ExcelUtils.getInstance().addHeading("Cam Balance Results " )
        await this.screenshot()

    }


    public td( account : string) : CamBalanceQuery{
        this
         .accountNo(account)
        .balanceBasis(CamBalanceQuery.BalanceBasis.TRADE_DATE_BALANCE)
        return this
    }

    public vd( account : string) : CamBalanceQuery{
        this
         .accountNo(account)
        .balanceBasis(CamBalanceQuery.BalanceBasis.VALUE_DATE_BALANCE)
        return this
    }

}