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
const PageContext_1 = require("../context/PageContext");
//import $ from "jquery"
class BaseUIOperations {
    constructor() {
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            this._page = yield PageContext_1.PageContext.getInstance().getPage();
        });
    }
    waitTillNetwork() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._page.waitForNavigation({ waitUntil: 'networkidle0' });
        });
    }
    screenshot(name) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._page.screenshot({ path: ((name == undefined) ? Date.now() + "" : name) + ".png" });
        });
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.init();
            yield this.doExecute();
        });
    }
    navigate(...path) {
        return __awaiter(this, void 0, void 0, function* () {
            var anchors = yield this._page.$$("#igvMenuContainer a");
            var elements = [];
            var count = 0;
            for (var i = 0; i < anchors.length; i++) {
                var text = yield (yield anchors[i].getProperty('text')).jsonValue();
                if (text == path[count]) {
                    count++;
                    elements.push(anchors[i]);
                    if (count >= path.length) {
                        break;
                    }
                }
            }
            var nav = this._page.waitForNavigation({ waitUntil: 'networkidle2' });
            for (var i = 0; i < elements.length; i++) {
                yield elements[i].click();
            }
            yield nav;
            yield this.waitPageLoad();
        });
    }
    waitPageLoad() {
        return __awaiter(this, void 0, void 0, function* () {
            let delta = Date.now() - PageContext_1.PageContext.getInstance().getLastRequest();
            do {
                yield this.sleep(1000);
                delta = Date.now() - PageContext_1.PageContext.getInstance().getLastRequest();
            } while (delta < 2000);
        });
    }
    sleep(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }
    clearFields(customCommands) {
        return __awaiter(this, void 0, void 0, function* () {
            const executionContext = yield this._page.mainFrame().executionContext();
            const result = yield executionContext.evaluate((customCommands) => {
                for (var i = 0; i < customCommands.length; i++) {
                    $(customCommands[i].selector).val('');
                }
            }, customCommands);
        });
    }
    populateFields(customCommands) {
        return __awaiter(this, void 0, void 0, function* () {
            for (var i = 0; i < customCommands.length; i++) {
                if (customCommands[i].type == 'select') {
                    yield this._page.select(customCommands[i].selector, customCommands[i].value);
                }
                else if (customCommands[i].type == 'text') {
                    yield this.typeInText(customCommands[i].selector, customCommands[i].value);
                }
            }
        });
    }
    typeInText(selector, value) {
        return new Promise(resolve => {
            this._page.$(selector).then(e => {
                if (e == null) {
                    resolve();
                    return;
                }
                e.boundingBox().then(lm => {
                    if (lm != null) {
                        e.type(value).then(() => { resolve(); });
                    }
                    else {
                        resolve();
                    }
                });
            });
        });
    }
    wizardNavigate(operation) {
        return __awaiter(this, void 0, void 0, function* () {
            if (operation == WizardAction.Submit) {
                yield this._page.click('div.wizSubmit input');
            }
            else if (operation == WizardAction.Confirm) {
                yield this._page.click('div.wizConfirm input');
            }
            else if (operation == WizardAction.Next) {
                yield this._page.click('div.wizNext input');
            }
            yield this.waitPageLoad();
        });
    }
}
exports.BaseUIOperations = BaseUIOperations;
var WizardAction;
(function (WizardAction) {
    WizardAction[WizardAction["Submit"] = 0] = "Submit";
    WizardAction[WizardAction["Confirm"] = 1] = "Confirm";
    WizardAction[WizardAction["Next"] = 2] = "Next";
    //Previous,
})(WizardAction = exports.WizardAction || (exports.WizardAction = {}));
//# sourceMappingURL=BaseUIOperations.js.map