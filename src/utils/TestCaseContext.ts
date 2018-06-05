import { ExcelUtils } from "./ExcelUtils";

export class TestCaseContext{

 static testCase : number = 0   

    public static  next(){
        this.testCase++
        ExcelUtils.getInstance().addTestCase(this.getTCId())
    }

    public static getTestCaseNumber(): number {
        return this.testCase
    }


    public static  getTCId(): string {
        return "TC-"+this.testCase
    }
}