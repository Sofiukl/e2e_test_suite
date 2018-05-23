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
const BaseUIOperations_1 = require("../BaseUIOperations");
class ExecutionEntry extends BaseUIOperations_1.BaseUIOperations {
    constructor() {
        super(...arguments);
        this._time = "00:00:00";
        this._isBuy = true;
    }
    time(t) {
        this._time = t;
        return this;
    }
    buy() {
        this._isBuy = true;
        return this;
    }
    sell() {
        this._isBuy = false;
        return this;
    }
    instrument(t) {
        this._instrument = t;
        return this;
    }
    quantity(t) {
        this._quantity = t;
        return this;
    }
    bookCost(t) {
        this._bookCost = t;
        return this;
    }
    applicationDate(t) {
        this._applicationDate = t;
        return this;
    }
    account(t) {
        this._account = t;
        return this;
    }
    doExecute() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.navigate('Trade', 'Execution', 'Entry');
            //navigate
            yield this.waitPageLoad();
            yield this.clearFields(this.command());
            yield this.populateFields(this.command());
            yield this.screenshot();
            yield this.wizardNavigate(BaseUIOperations_1.WizardAction.Submit);
            yield this.screenshot();
            yield this.wizardNavigate(BaseUIOperations_1.WizardAction.Confirm);
            yield this.screenshot();
            //TODO
            //return something what we havent decided
        });
    }
    command() {
        return [{ type: 'select', selector: 'select[name="execScreenData.tradeType"]', value: 'EQUITY' },
            { type: 'text', selector: 'input[name="execScreenData.tradeDateStr"]', value: this._applicationDate },
            { type: 'text', selector: 'input[name="execScreenData.executionTime"]', value: this._time },
            { type: 'select', selector: 'select[name="execScreenData.buySellOrientation"]', value: this._isBuy ? 'FB' : 'FS' },
            { type: 'text', selector: 'input[name="execScreenData.inventoryAccountNo"]', value: 'P400000-1/GMO' },
            { type: 'text', selector: 'input[name="execScreenData.brokerAccount"]', value: 'K0000001' },
            { type: 'select', selector: 'select[name="execScreenData.principalType"]', value: 'Agency' },
            { type: 'text', selector: 'input[name="execScreenData.securityInfo"]', value: this._instrument },
            { type: 'text', selector: 'input[name="execScreenData.quantityStr"]', value: this._quantity },
            { type: 'text', selector: 'input[name="execScreenData.inputPriceStr"]', value: this._bookCost },
            { type: 'select', selector: 'select[name="execScreenData.grossNetType"]', value: 'GROSS' },
            { type: 'select', selector: 'select[name="execScreenData.inputPriceFormat"]', value: 'UNIT PRICE' },
            { type: 'select', selector: 'select[name="execScreenData.accountBalanceTypeStr"]', value: '10' },
            { type: 'text', selector: 'input[name="execScreenData.tradeCurrency"]', value: 'THB/ISO3A' },
            { type: 'select', selector: 'select[name="execScreenData.exCouponFlag"]', value: 'N' },
            { type: 'select', selector: 'select[name="execScreenData.dirtyPriceFlag"]', value: 'N' },
            { type: 'select', selector: 'select[name="execScreenData.negativeAccruedInterestFlag"]', value: 'N' },
            { type: 'select', selector: 'select[name="execScreenData.wiCommFlag"]', value: 'Y' },
            { type: 'text', selector: 'input[name="execScreenData.senderReferenceNo"]', value: 'OD-000000001' },
            { type: 'text', selector: 'input[name="execScreenData.sourceReferenceNo"]', value: 'TD-000000001' },
            { type: 'text', selector: 'input[name="execScreenData.cpAccountNo"]', value: this._account },
            { type: 'select', selector: 'select[name="tradeChannel"]', value: 'INTERNET' }];
    }
}
exports.ExecutionEntry = ExecutionEntry;
//# sourceMappingURL=ExecutionEntry.js.map