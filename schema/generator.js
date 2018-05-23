const fs = require('fs')

var fileName = "BalanceQuery"

var schemaContents = fs.readFileSync(`./ui/query/cam/${fileName}.json`)
var schemaObject = JSON.parse(schemaContents)
classData=""
classData+=(`export class ${fileName}  extends BaseUIOperations {`)
classData+=(`\r\n`)
classData+=(`    async doExecute() : Promise<any>{`)
classData+=(`\r\n`)

for( var key in schemaObject){
    if(schemaObject[key].required){
        classData+=(`Assert.notNull(this._${key})`);
        classData+=(`\r\n`)
    }
    
}

classData+=(`\r\n`)
classData+=(` } `)

classData+=(`\r\n`)
for( var key in schemaObject){
    var label = schemaObject[key].label

    
    var defaulValue = schemaObject[key].defaulValue
    defaulValue = defaulValue == undefined ? "" : defaulValue
    var type = schemaObject[key].type
    classData+=(`
    /** private variable for ${key}() */
    private _${key} : string     `);
    
    
}


for( var key in schemaObject){
    classData+=(`
    /** This is the value of ${label} 
     * with a default Value "${defaulValue}" 
     * of type ${type} */
    public ${key}(v : string) : ${fileName} {
        this._${key}=v;
        return this;
    }
    `);
}




classData+=("}")

fs.writeFileSync(fileName+".ts",classData);
