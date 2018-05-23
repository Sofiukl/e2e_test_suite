import {Page} from "puppeteer";
import {BaseUIOperations, WizardAction} from "../../BaseUIOperations"
import { Context } from "../../../context/context";

export class ExecutionEntry extends BaseUIOperations {
   



    async doExecute() : Promise<any>{

        await this.navigate('Trade','Execution','Entry')
        //navigate
        await this.clearFields(this.command())
        await this.populateFields(this.command())
        await this.screenshot()
        await this.wizardNavigate(WizardAction.Submit)
        await this.screenshot()
        await this.wizardNavigate(WizardAction.Confirm)
        await this.screenshot()
     
        //TODO
        //return something what we havent decided
    }

   

    command() : any[] {

    return [    
                { type : 'select' , selector : 'select[name="execScreenData.tradeType"]' , value : 'EQUITY'   },
                { type : 'text' , selector : 'input[name="execScreenData.tradeDateStr"]' , value : this._applicationDate  },
                { type : 'text' , selector : 'input[name="execScreenData.executionTime"]' , value : this._time   },
                { type : 'select' , selector : 'select[name="execScreenData.buySellOrientation"]' , value : this._isBuy ? 'FB' : 'FS' },
                { type : 'text' , selector : 'input[name="execScreenData.inventoryAccountNo"]' , value : 'P400000-1/GMO'   },
                { type : 'text' , selector : 'input[name="execScreenData.brokerAccount"]' , value : 'K0000001'   },
                { type : 'select' , selector : 'select[name="execScreenData.principalType"]' , value : 'Agency'   },
                { type : 'text' , selector : 'input[name="execScreenData.securityInfo"]' , value : this._instrument   },
                { type : 'text' , selector : 'input[name="execScreenData.quantityStr"]' , value : this._quantity   },
                { type : 'text' , selector : 'input[name="execScreenData.inputPriceStr"]' , value : this._bookCost   },
                { type : 'select' , selector : 'select[name="execScreenData.grossNetType"]' , value : 'GROSS'   },
                { type : 'select' , selector : 'select[name="execScreenData.inputPriceFormat"]' , value : 'UNIT PRICE'   },
                { type : 'select' , selector : 'select[name="execScreenData.accountBalanceTypeStr"]' , value : '10'   },
                { type : 'text' , selector : 'input[name="execScreenData.tradeCurrency"]' , value : 'THB/ISO3A'   },
                { type : 'select' , selector : 'select[name="execScreenData.exCouponFlag"]' , value : 'N'   },
                { type : 'select' , selector : 'select[name="execScreenData.dirtyPriceFlag"]' , value : 'N'   },
                { type : 'select' , selector : 'select[name="execScreenData.negativeAccruedInterestFlag"]' , value : 'N'   },
                { type : 'select' , selector : 'select[name="execScreenData.wiCommFlag"]' , value : 'Y'   },
                { type : 'text' , selector : 'input[name="execScreenData.senderReferenceNo"]' , value : 'OD-000000001'   },
                { type : 'text' , selector : 'input[name="execScreenData.sourceReferenceNo"]' , value : 'TD-000000001'   },
                { type : 'text' , selector : 'input[name="execScreenData.cpAccountNo"]' , value : this._account },
                { type : 'select' , selector : 'select[name="tradeChannel"]' , value : 'INTERNET'   } ]
    
    }

    
    private _time : string 
    private _isBuy : boolean = true
    private _instrument : string
    private _quantity : string
    private _bookCost : string
    private _applicationDate : string
    private _account : string

    public time(t : string) : ExecutionEntry{
        this._time=t;
        return this;
    }
    public buy() : ExecutionEntry{
        this._isBuy=true;
        return this;
    }
    public sell() : ExecutionEntry{
        this._isBuy=false;
        return this;
    }
    public instrument(t : string) : ExecutionEntry{
        this._instrument=t;
        return this;
    }
    public quantity(t : string) : ExecutionEntry{
        this._quantity=t;
        return this;
    }
    public bookCost(t : string) : ExecutionEntry{
        this._bookCost=t;
        return this;
    }

    public applicationDate(t : string) : ExecutionEntry{
        this._applicationDate=t;
        return this;
    }

    public account(t : string) : ExecutionEntry{
        this._account=t;
        return this;
    }

}