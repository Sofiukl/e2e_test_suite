import fs from "fs";
import winston from "winston";
import { TestCaseContext } from "./utils/TestCaseContext";
import { ExcelUtils } from "./utils/ExcelUtils";

winston.level="debug"

var files = fs.readdirSync("./src/test")

if (process.argv.length !=3){
    console.log("Usage:");    
    console.log("node TestSuite.ts TEST_NAME ");
    process.exit(-1)
    
}

let testName =process.argv[2]

files.forEach(element => {
    
    if(element.indexOf(testName)>-1){

        //console.log(element);
        let testClassFileName = "./test/"+element.replace(".ts",".js");
        console.log(testClassFileName);
        
        import(testClassFileName).then(testFile => {
            
            for(let exportedClass in testFile){                
                console.log("exportedClass" + exportedClass);
                let instance = new testFile[exportedClass]()
                
                  let protoOfTest = Object.getPrototypeOf(instance);
                  let methods = Object.getOwnPropertyNames(protoOfTest);

                  let setup :string= null
                  let destroy :string= null
                  let testCases : string[] = []
                  for (let i = 0; i<methods.length;i++) {

                    if(methods[i]=="setup"){
                        setup = methods[i]
                    }
                    if(methods[i]=="destroy"){
                        destroy = methods[i]
                    }
                    if(methods[i].startsWith("test")){
                        testCases.push(methods[i])
                    }
                    
                  }

                  if(destroy!=null){
                    testCases.push(destroy)
                  }

                  if(setup!=null){
                        let k=0;
                      console.log("Calling : Setup " );
                      
                      protoOfTest[setup]().then(()=>{
                        execute(instance , testCases , k)
                      })
                  }
            }       

        })
        
    }
    
});


function execute(instance : any, testCases :string[] , k : number){
    if(k<testCases.length){
        let element = testCases[k]
        TestCaseContext.next()
        console.log("Starting execution for " + element);
        instance[element]().then(() => {
            k++
            console.log("Completed execution for " + element);
            execute(instance,testCases,k)
        }).catch((err : any)=>{
            console.log("Skiping This and all subsequent Step ... ")
            console.error(err);
            
            ExcelUtils.getInstance().save()
        })
    }else{
        ExcelUtils.getInstance().save()
    }
}