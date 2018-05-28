const fs = require('fs') 
let buffer = fs.readFileSync("D:\\code\\igv\\nrithai\\BR-GV-THAGMO-PROD-02102017\\console\\igv-console\\CONSOLE-INF\\modules\\cam\\launchable-config.xml")


const LAUNCHABLE = "MarginPurchasePowerCalculator"

const parseString = require('xml2js').parseString;
const xml = buffer.toString()
parseString(xml, function (err, result) {

    let config = result['launchable-config']
    let module = config.$.name
    

    var launchableArr = config.launchables[0].launchable

    for (let index = 0; index < launchableArr.length; index++) {
        const launchable = launchableArr[index];

        if(launchable.$.name==LAUNCHABLE){

                    let shortOption = [];
                    let longOption = [];
            
                for (let j = 0; j < launchable.parameters[0].parameter.length; j++) {

                    

                    const element = launchable.parameters[0].parameter[j];

                    shortOption.push(element.$.shortOption);
                    let appendTags  = element.append
                    for (let k = 0; k < appendTags.length; k++) {
                        const element = appendTags[k];

                        if(element.$.attribute=="longOption"){
                            longOption.push(element._.replace(" ","").toLowerCase());
                            
                        }
                        
                    }
                }
                   
                    //Generate a file here

                    ///////////////////////////////////////////////////////////////////////////

                    let classData = `
                    import { ExecuteBatch } from "../ExecuteBatch";


                    export class ${LAUNCHABLE} extends ExecuteBatch {
                    
                       batchName() : string{
                            return "${module}/${LAUNCHABLE}"
                       }
                    
                       `

                    for(let i=0;i<shortOption.length;i++){
                        
                        classData +=`private _${longOption[i]} : string = undefined
                        `

                    }   
                    
                    classData+=
                    
                    `defaultArguments() : string[]{
                        let args : string[] = [] 

                        `
                        for(let i=0;i<shortOption.length;i++){
                            classData+=`
                            if(this._${longOption[i]} !=undefined){
                                args.push("-${shortOption[i]}")
                                args.push(this._${longOption[i]})  
                            }
                            `
                        }
                        
                        
                        classData +=`
                        return args
                    }`
                      
                    for(let i=0;i<shortOption.length;i++){

                    classData+=`
                    public ${longOption[i]}(v : string) : ${LAUNCHABLE} {
                        this._${longOption[i]}=v
                        return this
                    }
                    `  

                    }


                    classData+="}"
                       
                            console.log(classData);
                            



                    ////////////////////////////////////////////////////////////////////////////




                    //
                    
                }
                
            
        }      
        

    
});


