"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ExecuteBatch_1 = require("../ExecuteBatch");
class FIFOPLCalculator extends ExecuteBatch_1.ExecuteBatch {
    batchName() {
        return "CAM/FIFOPLCalculator";
    }
    defaultArguments() {
        return this.addAccount();
    }
}
//# sourceMappingURL=FIFOPLCalculator.js.map