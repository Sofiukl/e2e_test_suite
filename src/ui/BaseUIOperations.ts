import {Page} from "puppeteer";
import {PageContext} from "../context/PageContext"
//import $ from "jquery"


export abstract class BaseUIOperations {

    _page : Page


    constructor(){
        
    }

   private async init(){
         this._page = await PageContext.getInstance().getPage();
    }


    protected async waitTillNetwork() : Promise<any>{
        await this._page.waitForNavigation({ waitUntil: 'networkidle0' }); 
    }
    
    
    protected async screenshot(name? : string)    {
        

        await this._page.screenshot({path : ((name == undefined) ? Date.now()+"" : name )+".png"})
    }


    abstract doExecute() : Promise<any> ;

     async execute() : Promise<any> {
         await this.init()
         await this.doExecute()

     }





    protected  async navigate(...path : string[]){

        var anchors = await this._page.$$("#igvMenuContainer a")
        var elements = []
        var count = 0;
        for( var i = 0 ; i <anchors.length ; i++){
            var text = await (await anchors[i].getProperty('text')).jsonValue()
            if(text == path[count]){
                count++
                elements.push(anchors[i])
                if(count >= path.length){
                    break
                }
            }
        }

        var nav = this._page.waitForNavigation({ waitUntil: 'networkidle2' }); 
        for(var i=0;i<elements.length;i++){
            await elements[i].click()
            await this.sleep(50)
        }
        await nav

        await this.waitPageLoad()
    }



    protected async waitPageLoad() : Promise<any> {
        let delta = Date.now() - PageContext.getInstance().getLastRequest()
        do{
          await this.sleep(1000)
          delta = Date.now() - PageContext.getInstance().getLastRequest()
        }while (delta < 2000) ;  

    }

    private sleep(time : number) :Promise<any>{
        return new Promise(resolve => setTimeout(resolve, time));
    }
    


    protected async clearFields(customCommands : any[] ){
        const executionContext = await this._page.mainFrame().executionContext();
        const result = await executionContext.evaluate((customCommands) => {
          for( var i=0;i<customCommands.length;i++){
              $(customCommands[i].selector).val('')
          }
        },customCommands);
    }

    protected async populateFields(customCommands : any[]){

        
        for( var i=0;i<customCommands.length;i++){
            if(customCommands[i].type == 'select'){
              await this._page.select(customCommands[i].selector,customCommands[i].value)
            }else if(customCommands[i].type == 'text'){
              await this.typeInText(customCommands[i].selector,customCommands[i].value)
            }
        }
     
    }
    

    
    
    private typeInText(selector : string ,value : string) : Promise<any> {
          return new Promise(resolve => {
       
          this._page.$(selector).then( e => {
            if(e==null){
              resolve()
              return;
            }
            e.boundingBox().then(lm => {
              if(lm!=null){
                e.type(value).then(()=>{resolve()})
              }else{
                resolve()
              }
            })
          })
        })
      }


      async wizardNavigate(operation : WizardAction) : Promise<any> {

          if (operation == WizardAction.Submit) {
              await this._page.click('div.wizSubmit input')
          } else if (operation == WizardAction.Confirm) {
              await this._page.click('div.wizConfirm input')
          } else if (operation == WizardAction.Next) {
              await this._page.click('div.wizNext input')
          }else if(operation == WizardAction.QuerySubmit){
              await this._page.click('div.qrySubmitBtn input')
          }
          await this.waitPageLoad()
      }

      
}




export enum WizardAction {
    Submit,
    Confirm,
    Next,
    QuerySubmit,
    //Previous,
}