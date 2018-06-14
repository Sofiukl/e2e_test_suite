import request from "request"
import winston from "winston"
import { Constants } from "../Constants";
import { ExcelUtils } from "../utils/ExcelUtils";



export abstract class AbstractRestService{

    protected post() : Promise<any>{

        return new Promise<any>( (resolve,reject) => {

            winston.debug("Request : " )
            
            


            //save to image
            ExcelUtils.getInstance().addHeading("Sending Request for  " +this.constructor.name)
            ExcelUtils.getInstance().addText(JSON.stringify(this.getRequest(),null,2))


            request.post(Constants.restBasePath +this.getPath() , {
                json: this.getRequest()
            } , function(err,response , body){
                
                    winston.debug("The response : ")
                    winston.debug("Error : ")
                    winston.debug( err)
                    winston.debug("Body : " )
                    winston.debug(body)

                    //save to screenshot
    
                if(err!=undefined || !body.success){

                    throw new Error("Unable to connect to Rest API ")
                }
    
                if(body.success){
                    ExcelUtils.getInstance().addHeading("Received Response for : "+this.constructor.name)
                    ExcelUtils.getInstance().addText(JSON.stringify(body.value,null,2))
                    winston.debug(body.value);
                    resolve(body.value)
                }
                
                reject()
                
            }).auth(Constants.restUser ,Constants.restPassword ,false)

            
        }

        
    )

    }

    protected abstract getRequest(): any;

    protected abstract getPath(): string;

     abstract execute() : any;
    
}