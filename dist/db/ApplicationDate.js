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
const oracledb_1 = require("oracledb");
class ApplicationDate {
    getCurrent() {
        return __awaiter(this, void 0, void 0, function* () {
            let connection = yield oracledb_1.getConnection({
                user: "gvth_dev_gmo_txn",
                password: "gvth_dev_gmo_txn",
                connectString: "localhost/XE"
            });
            let result = yield connection.execute("select application_date from ref_closing_status where enterprise_id = 'GMO' and component_id = 'CAM' and app_mode='OL'");
            console.log(result);
            yield connection.close();
        });
    }
}
exports.ApplicationDate = ApplicationDate;
//# sourceMappingURL=ApplicationDate.js.map