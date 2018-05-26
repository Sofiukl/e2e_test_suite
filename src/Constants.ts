 export class Constants {

    private static _restUser : string   = "gmo-api:welcome@123:GMO"
    private static _restPassword : string = "welcome@123"
    // private static _appUser : string="gmo-ops"
    private static _appUser : string="nri-admin@z.com"
    private static _appPassword : string = "welcome@123"
    private static _batchBasePath :string = "D:\\code\\igv\\nrithai\\BR-GV-THAGMO-PROD-02102017\\console\\igv-console\\launch.bat"
    private static _uiBasePath :string = "http://localhost:8080/igv-tomcat/"
    private static _restBasePath :string = "http://localhost:8080/igv-rest/"

    

public static get restUser() : string {
    return this._restUser
}


public static get restPassword() : string {
    return this._restPassword
}


public static  get appUser() : string {
    return this._appUser
}


public static  get appPassword() : string {
    return this._appPassword
}

public static get batchBasePath() : string{
    return this._batchBasePath
}

public static get uiBasePath() : string{
    return this._uiBasePath
}


public static get restBasePath() : string{
    return this._restBasePath
}


}