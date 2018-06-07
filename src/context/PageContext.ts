
import { Browser,  Page , launch} from "puppeteer"

import {silly, debug , info , error } from "winston"


export class PageContext {

    private static instance: PageContext;


    
    private _browser : Browser
    private _page : Page;

    private _initialized : boolean;

    private _lastRequest : number;

    private _openConnections : number = 0;
  

    private constructor() {
        
        
    }
    static getInstance() {
        if (!PageContext.instance) {
            PageContext.instance = new PageContext();
            // ... any one time initialization goes here ...
        }
        return PageContext.instance;
    }


    public getPage() : Page{
        return this._page;
    }

    public async initPage(hiddenChrome? : boolean){
        if(!this._initialized){
            this._initialized=true
             this._browser = await launch({ headless : hiddenChrome , args : [ '--start-maximized']})
            const page = await this._browser.newPage()
            
            page.setViewport({
                height:800,width:1820
                //height:700,width:1250
            })
            this._page=page
            
            this._page.on('request', ()=>{ 
                this._openConnections++ 
                this._lastRequest = Date.now()
            }
            )
            this._page.on("requestfinished", ()=>{ 
                this._openConnections--
            })
            this._page.on('requestfailed', ()=>{
                this._openConnections--
            })
        }
    }


    public sleep(time : number) :Promise<any>{
        return new Promise(resolve => setTimeout(resolve, time));
    }



    public async waitToNavigate(waitForMinConnections? : number) {

        silly("Start waitToNavigate... with minimum : " + waitForMinConnections)

        waitForMinConnections = waitForMinConnections == undefined ? 0 : waitForMinConnections

        let delta = 0
        do{
          await this.sleep(1000)
          delta = Date.now() - this._lastRequest

          if(delta>60*1000){
              error("Exiting the connection wait  due to timeout...");
              break;
          }
          silly("Open Connections.. " + this._openConnections + " < "+ waitForMinConnections + " & " + delta )
          //atleast wait for 1 seconds before exiting because of 0 connections
        }while ( (delta < 1000) ||  this._openConnections > waitForMinConnections );

        silly("Done waitToNavigate... ")
    }

    

    public async  close(){
        await this._page.close()
        await this._browser.close()
    }


    
    //add any method yous want here
}