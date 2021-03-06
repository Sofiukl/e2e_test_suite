import {Page, BoundingBox, ScreenshotOptions} from "puppeteer";
import {PageContext} from "../context/PageContext"
import winston from "winston"
import { TestCaseContext } from "../utils/TestCaseContext";
import { ExcelUtils } from "../utils/ExcelUtils";
import { QueryRetriever } from "./query/util/QueryRetriever";


export abstract class BaseUIOperations {

    _page : Page


    constructor(){
        
    }

   private async init(){
         this._page = await PageContext.getInstance().getPage();
    }

    
    protected async screenshot(selector? : string )    {
        
        winston.silly("Taking a screenshot")

        

        let imageName = (TestCaseContext.getTCId()+"-" + Date.now())+".png"

        let screenshotOptions : ScreenshotOptions = {path : imageName }
        selector = selector ==undefined ? "#formContainer" : selector
        if(selector!=undefined){
            try {
                let elementHandle = await this._page.$(selector)
                screenshotOptions['clip'] = await elementHandle.boundingBox()    
            } catch (error) {}
        }
        

        await this._page.screenshot(screenshotOptions)

        ExcelUtils.getInstance().addImage(imageName)

    }


    abstract doExecute() : Promise<any> ;

     async execute() : Promise<any> {
         await this.init()
         await this.doExecute()

     }





    protected  async navigate(...path : string[]){

        winston.silly("Starting to navigate through : " + path)

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

        

        // var nav = this._page.waitForNavigation({ waitUntil: 'networkidle0' }); 
         for(var i=0;i<elements.length;i++){
             await elements[i].click()
             await PageContext.getInstance().sleep(50)
         }
        // await nav
        
        await PageContext.getInstance().waitToNavigate()

    }



    

    // private sleep(time : number) :Promise<any>{
    //     return new Promise(resolve => setTimeout(resolve, time));
    // }
    


    protected async clearFields(customCommands : any[] ){
        const executionContext = await this._page.mainFrame().executionContext();
        const result = await executionContext.evaluate((customCommands) => {
          for( var i=0;i<customCommands.length;i++){
              $(customCommands[i].selector).val('')
          }
        },customCommands);
    }

    protected async populateFields(customCommands : any[]){

        if(customCommands!=undefined){
            for( var i=0;i<customCommands.length;i++){
                if(customCommands[i].type == 'select'){
                  await this._page.select(customCommands[i].selector,customCommands[i].value)
                }else if(customCommands[i].type == 'text'){
                  await this.typeInText(customCommands[i].selector,customCommands[i].value)
                }

             await PageContext.getInstance().sleep(100)

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

        winston.silly("Request Navigate :  ->  : " + operation)

          if (operation == WizardAction.Submit) {
            winston.silly("Start the click for <div.wizSubmit input>")
              await this._page.click('div.wizSubmit input')
          } else if (operation == WizardAction.Confirm) {
            winston.silly("Start the click for <div.wizConfirm input>")
              await this._page.click('div.wizConfirm input')
          } else if (operation == WizardAction.Next) {
            winston.silly("Start the click for <div.wizNext input>")
              await this._page.click('div.wizNext input')
          }else if(operation == WizardAction.QuerySubmit){
            winston.silly("Start the click for <div.qrySubmitBtn input>")
              await this._page.click('div.qrySubmitBtn input')
          }else if(operation == WizardAction.QueryCompleteSubmit){
            winston.silly("Start the click for <div.compSubmitBtn input>")
            await this._page.click('div.compSubmitBtn input')
        }else if(operation == WizardAction.QueryCompleteConfirm){
            winston.silly("Start the click for <div.compCnfBtn input>")
            await this._page.click('div.compCnfBtn input')
        }else if(operation == WizardAction.Authorize){
            winston.silly("Start the click for <div.submitBtn input.authorizeBtn>")
            await this._page.click('div.submitBtn input.authorizeBtn')
        }else if(operation == WizardAction.AuthorizeConfirm){
            winston.silly("Start the click for <div.authorizeConfirmBtn input>")
            await this._page.click('div.authorizeConfirmBtn input')
        }else if(operation == WizardAction.StockTransferAuth){ 
            winston.silly("Start the click for <div.authorizeConfirmBtn input>")
            await this._page.click('div.submitBtn.authorizeBtn')
        }

         await PageContext.getInstance().waitToNavigate()
         winston.silly("Navigation Complete")

      }


 
      
      private _column : string;
      private _matchingCriteria : any[] = []
  
  
      /**
       * query
       */
      public query() : BaseUIOperations{
          return this
      }
  
      /**
       * where()
       */
      public where(v : string) : BaseUIOperations {
  
          this._column = v
          return this;
      }
  
      /**
       * equalTo
       */
      public equalTo(v : string) : BaseUIOperations {
          this._matchingCriteria.push({column : this._column , value : v})
          //this._matchingCriteria =  undefined
          return this
      }
  
      /**
       * 
       * @param columnsToReturn - The columns which should be returned by this query
       */
      public async fetch( ...columnsToReturn : string[]) : Promise<any[]> {
  
  
          let query = new QueryRetriever()
          
          query.setMatchingCriteria(this._matchingCriteria)
          query.setReturnColumn(columnsToReturn)
          var results=await query.fetch()
          this._matchingCriteria=[]
          return results;
  
  
  
      }

      
      

      
}




export enum WizardAction {
    Submit,
    Confirm,
    Next,
    QuerySubmit,
    QueryCompleteSubmit,
    QueryCompleteConfirm,
    Authorize,
    AuthorizeConfirm,
    StockTransferAuth,

    //Previous,
}