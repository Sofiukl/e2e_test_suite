const fs = require('fs')
const walk = require('fs-walker');
const schemaList = walk.files.sync("schema/");


for (let x = 0; x < schemaList.length; x++) {
    if (schemaList[x].name.endsWith(".json") ) {
        var fileName = schemaList[x].name.substring(0, schemaList[x].name.length - 5)

if(fileName!="ExecutionEntry"){
    continue;
}

        var schemaContents = fs.readFileSync(schemaList[x].directory + "\\" + schemaList[x].name)
        var schemaObject = JSON.parse(schemaContents)
        let classData = ""
        classData = `

import { BaseUIOperations } from "../../BaseUIOperations";
import { Assert } from "../../../utils/Assert";

export abstract class Abstract${fileName}  extends BaseUIOperations {

    async doValidate() : Promise<any>{
`

        for (var key in schemaObject) {
            if (schemaObject[key].required) {
                classData += (`Assert.notNull(this._${key})
                `);
            }
        }
        classData += (` } `)

        classData += (`\r\n`)
        for (var key in schemaObject) {


            let defaultValue = schemaObject[key].defaultValue
            defaultValue = defaultValue == undefined ? "" : defaultValue
            let type = schemaObject[key].type

            let varKey = key.replace(".","")


            classData += (`
    /** private variable for ${key}() */
    private _${varKey} : string  = "${defaultValue}"   `);


        }


        for (let key in schemaObject) {
            let defaultValue = schemaObject[key].defaultValue
            defaultValue = defaultValue == undefined ? "" : defaultValue
            let type = schemaObject[key].type

            let label = schemaObject[key].label
            let varKey = key.replace(".","")

            classData += (`
    /** This is the value of ${label} 
     * with a default Value "${defaultValue}" 
     * of type ${type} */
    public ${varKey}(v : string) : Abstract${fileName} {
        this._${varKey}=v;
        return this;
    }
    `);
        }
        classData += `
    protected fetchFields() : any[] {
        let fields :any[] = []
    `

        for (let key in schemaObject) {
            let varKey = key.replace(".","")

            let type = schemaObject[key].type
            let selector = type == 'text' ? 'input' : 'select'
            classData += `if(this._${varKey}!=undefined){
            fields.push({ 'type' : '${type}' , 'selector' : '${selector}[name="${key}"]' , value : this._${varKey}});
        }`
        }


        classData += `
    return fields;

    }
`



        classData += ("}")

        fs.writeFileSync("src" + schemaList[x].directory.substring(6) + "\\" + "Abstract" + fileName + ".ts", classData);

    }
}