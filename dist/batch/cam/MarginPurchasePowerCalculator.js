"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ExecuteBatch_1 = require("../ExecuteBatch");
class FIFOPLCalculator extends ExecuteBatch_1.ExecuteBatch {
    constructor() {
        super(...arguments);
        this._isLMVRequired = false;
    }
    setLmv(lmv) {
        this._isLMVRequired = lmv == undefined ? false : lmv;
        return this;
    }
    batchName() {
        return "CAM/MarginPurchasePowerCalculator";
    }
    defaultArguments() {
        return this.addAccount().concat(this.addApplicationDate()).concat("-l", this._isLMVRequired ? "Y" : "N");
    }
}
//# sourceMappingURL=MarginPurchasePowerCalculator.js.map