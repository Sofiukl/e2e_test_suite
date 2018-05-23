
import { Browser,  Page , launch} from "puppeteer"


export class PageContext {

    private static instance: PageContext;

    private _browser : Browser
    private _page : Page;

    private _initialized : boolean;

    private _lastRequest : number;
  

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

    public async initPage(){
        if(!this._initialized){
            this._initialized=true
             this._browser = await launch({ headless : false , args : [ '--start-maximized']})
            const page = await this._browser.newPage()
            
            page.setViewport({
                height:800,width:1820
            })
            this._page=page
            this._page.on("requestfinished", ()=>{ this._lastRequest = Date.now()})
        }

    }

    public getLastRequest() : number{ 
        return this._lastRequest;
    }

    public async  close(){
        await this._page.close()
        await this._browser.close()
    }


    
    //add any method yous want here
}