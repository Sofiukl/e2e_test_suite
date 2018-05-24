import { BaseUIOperations } from "../BaseUIOperations";
import { Page  } from "puppeteer";
import {Constants} from "../../Constants"
import { PageContext } from "../../context/PageContext";

export class Login extends BaseUIOperations {

    async doExecute() : Promise<any> {
        await this._page.goto(Constants.uiBasePath + 'login#')
        await PageContext.getInstance().waitToNavigate()
        await this._page.type('input[name="j_username"]', Constants.appUser)
        await this._page.type('#j_password', Constants.appPassword)
        await this._page.click('.loginButton input'); 
        await PageContext.getInstance().waitToNavigate()
        await this.screenshot()
    }
}