const fs = require('fs')
const walk = require('fs-walker');
const schemaList = walk.files.sync("schema");


for (let x = 0; x < schemaList.length; x++) {
    if (schemaList[x].name.endsWith(".json")) {
        var fileName = schemaList[x].name.substring(0, schemaList[x].name.length - 5)
        var schemaContents = fs.readFileSync(schemaList[x].directory + "\\" + schemaList[x].name)
        var schemaObject = JSON.parse(schemaContents)
        let classData = ""
        classData = `

import { BaseUIOperations } from "../../BaseUIOperations";
import { Assert } from "../../common/Assert";

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


            var defaulValue = schemaObject[key].defaulValue
            defaulValue = defaulValue == undefined ? "" : defaulValue
            var type = schemaObject[key].type
            classData += (`
    /** private variable for ${key}() */
    private _${key} : string     `);


        }


        for (var key in schemaObject) {
            var label = schemaObject[key].label
            classData += (`
    /** This is the value of ${label} 
     * with a default Value "${defaulValue}" 
     * of type ${type} */
    public ${key}(v : string) : Abstract${fileName} {
        this._${key}=v;
        return this;
    }
    `);
        }
        classData += `
    protected fetchFields() : any[] {
        let fields :any[] = []
    `

        for (let key in schemaObject) {
            let type = schemaObject[key].type
            let selector = type == 'text' ? 'input' : 'select'
            classData += `if(this._${key}!=undefined){
            fields.push({ 'type' : '${type}' , 'selector' : '${selector}[name="${key}"]' , value : this._${key}});
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