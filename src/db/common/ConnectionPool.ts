import childprocess from "child_process"
import { Constants } from "../../Constants";
import fs from "fs"


export class ConnectionPool {

    private static _instance : ConnectionPool

    private constructor(){

    }

    public static getInstance() : ConnectionPool {

        if(this._instance==null){
            this._instance= new ConnectionPool()
        }
        return this._instance


    }

    public update(sql : string) {

        let resp = childprocess.execFileSync("./oracleclient.exe" , [
            "-dbuser",
            Constants.dbuser,
            "-dbpass",
            Constants.dbpass,
            "-url",
            Constants.url,
            "-sql",
            sql
        ] , {cwd:"./library"})

        console.log(resp);
        

    }


    public query(sql : string) : any{
        let outFileName = "out"+Date.now()+".json"

        let resp = childprocess.execFileSync("./oracleclient.exe" , [
            "-dbuser",
            Constants.dbuser,
            "-dbpass",
            Constants.dbpass,
            "-url",
            Constants.url,
            "-sql",
            sql,
            "-query",
            "-result",
            outFileName
        ] , {cwd:"./library"})


        return JSON.parse(resp.toString())

    }




}