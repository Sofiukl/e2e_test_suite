"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Context {
    constructor() {
    }
    static getInstance() {
        if (!Context.instance) {
            Context.instance = new Context();
            // ... any one time initialization goes here ...
        }
        return Context.instance;
    }
    applicationDate(val) {
        if (val != undefined) {
            this._applicationDate = val;
        }
        return this._applicationDate;
    }
    creditAccount(val) {
        if (val != undefined) {
            this._creditAccount = val;
        }
        return this._creditAccount;
    }
    cashAccount(val) {
        if (val != undefined) {
            this._cashAccount = val;
        }
        return this._cashAccount;
    }
    customerCode(val) {
        if (val != undefined) {
            this._customerCode = val;
        }
        return this._customerCode;
    }
}
exports.Context = Context;
//# sourceMappingURL=context.js.map