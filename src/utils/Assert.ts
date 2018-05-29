import winston from "winston"

export  class Assert{

        static equals( expect : any , actual : any  , message? : string){

            if(expect == actual){
                if(message){
                    winston.info(message)
                }
                winston.info(`Successfully matched Expected [${expect}] found [${actual}] `)    
            }else{
                if(message){
                    winston.error(message)
                }
                
                winston.error(`Failed Assert : Expected [${expect}] found [${actual}] `)
            }


        }


        static notNull(actual : any , message? : string){
            if(!actual){
                if(message){
                    winston.info(message)
                }
                winston.info(`[${actual}] is not null `)    
            }else{
                if(message){
                    winston.error(message)
                }
                winston.error(`Failed Assert :${actual} is null `)
            }
        }

        
        static notNullArr(actual : any[] , message? : string){
            if(!actual){
                if(message){
                    winston.info(message)
                }
                winston.info(`[${actual}] is not null `)    
            }else{
                if(message){
                    winston.error(message)
                }
                winston.error(`Failed Assert :${actual} is null `)
            }
        }

        





}