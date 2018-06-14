 export class Constants {

    private static _restUser : string   = "gmo-api:welcome@123:GMO"
    private static _restPassword : string = "welcome@123"
    
    private static _appUser : string="gmo-ops"
    public static salesCode : string="98765"

    // public static salesCode : string="9999"
    // private static _appUser : string="nri-admin@z.com"

    //////////////////////////////////////////////////////////////////////////////
    private static _appPassword : string = "welcome@123"
    private static _batchBasePath :string = "D:\\code\\igv\\nrithai\\BR-GV-THAGMO-PROD-02102017\\console\\igv-console\\launch.bat"
    private static _uiBasePath :string = "http://localhost:8080/igv-tomcat/"
    private static _restBasePath :string = "http://localhost:8080/igv-rest/"

    // private static _dbuser = "gvth_dev_gmo_txn"
    // private static _dbpass = "gvth_dev_gmo_txn"
    // private static _url = "localhost:1521/XE"
     private static _dbuser = "gvth_release_gmo_txn_1206"
     private static _dbpass = "gvth_release_gmo_txn_1206"
     private static _url = "172.16.30.14:1521/d112cr1"




    private static _inputFileBasePath : string = "D:\\opt\\appsdata\\igv\\input\\GMO\\"

    

public static get restUser() : string {
    return this._restUser
}
public static get inputFileBasePath() : string {
    return this._inputFileBasePath
}

public static get dbuser() : string {
    return this._dbuser
}

public static get dbpass() : string {
    return this._dbpass
}

public static get url() : string {
    return this._url
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