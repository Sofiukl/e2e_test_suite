import request from "request"
import winston from "winston"
import { Constants } from "../Constants";

const ImageGenerate = require("../utils/ImageGenerate")

export abstract class AbstractRestService{

    protected post() : Promise<any>{

        return new Promise<any>( (resolve,reject) => {

            winston.debug("Request : " )
            console.log(this.getRequest());

            //save to image
            ImageGenerate.saveImg(JSON.stringify(this.getRequest()))


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