"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const PageContext_1 = require("./context/PageContext");
const LoginOperation_1 = require("./ui/common/LoginOperation");
const ExecutionEntry_1 = require("./ui/entry/trd/ExecutionEntry");
const Customer_1 = require("./rest/Customer");
const Context_1 = require("./context/Context");
class TC {
    constructor() {
        this.login = new LoginOperation_1.Login();
        this.execution = new ExecutionEntry_1.ExecutionEntry();
        this.cust = new Customer_1.Customer();
    }
    tcBasicEntryTrade() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.cust.create("12345699");
            yield PageContext_1.PageContext.getInstance().initPage();
            yield this.login.execute();
            yield this.execution.applicationDate("20-09-2018").time("11:11:11").buy().instrument("BBL").quantity("100").bookCost("10").account(Context_1.Context.getInstance().cashAccount()).execute();
            yield PageContext_1.PageContext.getInstance().close();
        });
    }
}
const xyz = new TC();
xyz.tcBasicEntryTrade().then(() => {
});
//# sourceMappingURL=greeter.js.map