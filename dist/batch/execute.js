"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const constants_1 = __importDefault(require("../constants"));
/*
Execute Batch Constract exports a single interface that must be implemented by all
implementations of batch
*/
class ExecuteBatch {
    execute(args) {
        return __awaiter(this, void 0, void 0, function* () {
            var command = constants_1.default.batchBasePath + " " + this.batchName() + " ";
            if (this.defaultArguments() != undefined) {
                this.defaultArguments().forEach(element => {
                    command += " " + element + " ";
                });
            }
            if (args != undefined) {
                args.forEach(element => {
                    command += " " + element + " ";
                });
            }
            try {
                const { stdout, stderr } = yield child_process_1.exec(command);
                console.log("Executed " + this.batchName() + "Successfully");
            }
            catch (exception) {
                console.log(exception);
                return false;
            }
            return true;
        });
    }
    addApplicationDate() {
        return ["-d", Context.getInstance().applicationDate];
    }
    addAccount() {
        return ["-a ", Context.getInstance().account];
    }
}
exports.ExecuteBatch = ExecuteBatch;
//# sourceMappingURL=execute.js.map