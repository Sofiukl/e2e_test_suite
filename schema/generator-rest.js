const fs = require('fs')






function generateRestAPI(path, fileName){

        

        var schemaContents = fs.readFileSync(path +"\\"+ fileName)

        if(fileName.endsWith(".json")){
            fileName=fileName.substring(0,fileName.length-5)
        }


        var requestObject = JSON.parse(schemaContents)
        var elements = requestObject.requestDataMap

    let className = `Abstract${fileName}`
        var classData = `
        import { AbstractRestService } from "../../AbstractRestService";
        
        export abstract class ${className} extends AbstractRestService {`

        for(var key in elements){

            let type = "string"
            let value = `"${elements[key]}"`
            if(Array.isArray(elements[key])){
                type="any[]"
                value="[]"
            }

        
            classData+=`
            /* Private variable to hold value of ${key} */
            private _${key} : ${type} = ${value}
            `

        }

        
        for(var key in elements){

         
            classData+=`
            /* Accessor for ${key} - Generally has default value of ${elements[key]} */`

            if(Array.isArray(elements[key])){

                let arrayElemnt = elements[key][0]
                let args = ""
                let obj = ""
                let methodName = key
                for( k in arrayElemnt){
                    args+=k+" : string ,"
                    obj+=k+" : "+ k+","
                }
                args = args.substring(0,args.length-1)
                obj = obj.substring(0,obj.length-1)

                methodName = methodName.substring(0,1).toUpperCase()+methodName.substr(1)

                classData+=
                `
                public add${methodName}(${args}) : ${className} {
                    this._${key}.push({${obj}})
                    return this
                }
                `
            }else{
                classData+=
                `
                public ${key}(v : string) : ${className} {
                    this._${key}=v
                    return this
                }
                `
            }
            

        }


        classData+=`
        /* Clear method */
        public clear() : ${className} {
`

for(var key in elements){

    
    let value = `"${elements[key]}"`
    if(Array.isArray(elements[key])){
    
        value="[]"
    }


    classData+=`
    this. _${key} = ${value}
    `

}

         classData+=`      
            return this
        }
        `


        classData+=`
        
         getRequest() : any {
            let requestDataMap : any = {}

            var request  ={
                'requestDataMap' : requestDataMap
            } `
    
        for(key in elements) {

            let val = `"${elements[key]}"`

            if(Array.isArray(elements[key])) {
                val="[]"
            }

           classData +=`
            requestDataMap["${key}"] = this._${key} == undefined ? ${val} : this._${key}  `


        }
classData+=`
            //////////////////
            //Add dynamic code here
            //////////////////
    
    
            return (request)
         }

                `


        classData +="}"


        let outPath = "src/"+path.substring(path.indexOf("schema/") + "schema/".length)
        fs.writeFileSync(`${outPath}/Abstract${fileName}.ts`,classData)
        


}
generateRestAPI("schema/rest/entry/stl","ClientFeePaymentUndecidedEntry.json")
