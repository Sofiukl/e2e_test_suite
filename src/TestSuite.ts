import fs from "fs";

var files = fs.readdirSync("./src")

files.forEach(element => {
    
    if(element.indexOf("reet")>0){

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
                  console.log(Object.getOwnPropertyNames(protoOfTest));


            }       

        })
        


    }
    
});
