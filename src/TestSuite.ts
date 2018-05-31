import fs from "fs";
import { TestCaseContext } from "./utils/TestCaseContext";


var files = fs.readdirSync("./src")


files.forEach(element => {
    
    
    if(element.indexOf("greet")>-1){

        //console.log(element);
        let testClassFileName = "./"+element.replace(".ts",".js");


        import(testClassFileName).then(testFile => {
            for(let exportedClass in testFile){                
                let instance = new testFile[exportedClass]()
                //This is used to read any property of thenclass object
                // for (var member in instance) {
                //     if (instance.hasOwnProperty(member)) {
                     
                //     }
                //   }
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
                        let k=0;
                      console.log("Calling : Setup " );
                      protoOfTest[setup]().then(()=>{
                        execute(instance , testCases , k)
                      })
                  }

                  
                  

                //   testCases.forEach(element => {
                //       console.log("Starting execution for " + element);
                      
                //       console.log(element);
                //      instance[element]()

                      
                      

                //       console.log("Successfully executed " + element);
                      
                //   })

                  if(destroy!=null){
                      console.log("Calling Destroy");
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
        })     
    }
}