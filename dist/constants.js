"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Constants {
    static get restUser() {
        return this._restUser;
    }
    static get restPassword() {
        return this._restPassword;
    }
    static get appUser() {
        return this._appUser;
    }
    static get appPassword() {
        return this._appPassword;
    }
    static get batchBasePath() {
        return this._batchBasePath;
    }
    static get uiBasePath() {
        return this._uiBasePath;
    }
    static get restBasePath() {
        return this._restBasePath;
    }
}
Constants._restUser = "gmo-api:welcome@123:GMO";
Constants._restPassword = "welcome@123";
// private static _appUser : string="gmo-ops"
Constants._appUser = "nri-admin@z.com";
Constants._appPassword = "welcome@123";
Constants._batchBasePath = "D:\\code\\igv\\nrithai\\BR-GV-THAGMO-PROD-02102017\\console\\igv-console\\launch.bat";
Constants._uiBasePath = "http://localhost:8080/igv-tomcat/";
Constants._restBasePath = "http://localhost:8080/igv-rest/";
exports.Constants = Constants;
//# sourceMappingURL=Constants.js.map