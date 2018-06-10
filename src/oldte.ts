import { ExcelUtils } from "./utils/ExcelUtils";

ExcelUtils.getInstance().init()

ExcelUtils.getInstance().addTestCase("TC")
ExcelUtils.getInstance().addHeading("Risk Parameter Query for Account : AC01")
ExcelUtils.getInstance().save().then(()=>{
    console.log("Done");
})




//parse a test file.. 

//read a method

//then do something which I have no clue about

