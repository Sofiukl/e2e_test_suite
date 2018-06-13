import fs from "fs";
import winston from "winston";
import { TestCaseContext } from "./utils/TestCaseContext";
import { ExcelUtils } from "./utils/ExcelUtils";
import inquirer from "inquirer";



winston.level="info"

var files = fs.readdirSync("./src/test")

if (process.argv.length ==3){
    // console.log("Usage:");    
    // console.log("node TestSuite.ts TEST_NAME ");
    // process.exit(-1)

    let testName =process.argv[2]
    executeTestCase(testName)
    
}else{
    let testCaseOptions : any[] = []
files.forEach(element => {
    if(element!="TestUtils.ts")
    testCaseOptions.push({name : element})
})

inquirer.prompt({type : 'list' , 
message: 'Choose a Test Case To Execute',
choices : testCaseOptions,
name : 'tc'

}).then((result : any) =>{

    console.log("Running ... " + JSON.stringify(result));
    executeTestCase(result.tc)
    
})


}


/*
files.forEach(element => {
    
    
});
*/


function executeTestCase(testCase : string){

    

        //console.log(element);
        let testClassFileName = "./test/"+testCase.replace(".ts",".js");
        
        
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

                  if(setup!=null){
                    testCases.splice(0,0,setup)
                  }
                  

                  if(destroy!=null){
                    testCases.push(destroy)
                  }

                  //triggerExection(instance,testCases)

                //ask for option


                let choices : any[] = []
                
                testCases.forEach(tc => {
                    choices.push({name : tc , checked : true})  
                });





                inquirer.prompt({
                    type:'checkbox',
                    message : 'Which cases to run',
                    choices : choices,
                    name : 'tc'

                }).then((result : any) => {
                    
                    

                    triggerExection(instance,result.tc)

                    
                })


            }       

        })
}


function triggerExection(instance : any, testCases : string[]){
    
        let k=0;
        execute(instance , testCases , k)
  
}


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