"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ExecuteBatch_1 = require("../ExecuteBatch");
class ExecutionToTrade extends ExecuteBatch_1.ExecuteBatch {
    batchName() {
        return "TRD/ExecutionToTrade";
    }
    defaultArguments() {
        return this.addAccount().concat(this.addApplicationDate());
    }
}
//# sourceMappingURL=ExecutionToTrade.js.map