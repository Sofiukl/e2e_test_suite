"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ExecuteBatch_1 = require("../ExecuteBatch");
class TaxAndCommCalculator extends ExecuteBatch_1.ExecuteBatch {
    batchName() {
        return "TRD/TaxAndCommCalculator";
    }
    defaultArguments() {
        return this.addAccount().concat(this.addApplicationDate());
    }
}
//# sourceMappingURL=TaxAndCommCalculator.js.map