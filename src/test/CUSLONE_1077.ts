import { UpdateInterestRate } from "../batch/cam/UpdateInterestRate";
import { Login } from "../ui/common/LoginOperation";
import { PageContext } from "../context/PageContext";
import { CashOffsetRateQuery } from "../ui/query/ref/CashOffsetRateQuery";
import { ApplicationDate } from "../db/ApplicationDate";

import { CamBalanceQuery } from "../ui/query/cam/CamBalanceQuery";
import { DailyCashAccrual } from "../batch/cam/DailyCashAccrual";
import { DateUtils } from "../utils/DateUtils";
import { AccruedCashInterestQuery } from "../ui/query/cam/AccruedCashInterestQuery";
import { UpdateProcessClosingStatus } from "../batch/ref/UpdateProcessClosingStatus";
import { PostCashInterest } from "../batch/cam/PostCashInterest";
import { ExcelUtils } from "../utils/ExcelUtils";
import { TestUtils } from "./TestUtils";

//UpdateInterestRate



export class CUSLONE_1077{

/**
 Data Setup 
  
delete from CAM_CASH_OFFSET_RATE where account_pk in (select account_pk from ref_account where account_no in ('C0000003-8' ,'C0000001-8','C9999999-8'));
delete from ref_process_closing_status where closing_for_month = 3 and closing_for_year = 2018;
delete from ref_process_closing_status where closing_for_month = 4 and closing_for_year = 2018;
//make sure cash balance is negative for 3 accounts on 29-mar-2018
//'C0000003-8' ,'C0000001-8','C9999999-8'

 */

async setup(){
    await PageContext.getInstance().initPage(true)
    let login = new Login()
    await login.execute()
}

//test month end operation
async testDataOn29th(){

    ExcelUtils.getInstance().addHeading("Runnig Test Case for ")

    let appDate = "29-03-2018" 
    ApplicationDate.updateApplicationDate(appDate)

    //balance query for 29th

    await new CamBalanceQuery().td("C0000003-8").execute()
    await new CamBalanceQuery().td("C9999999-8").execute()



    //Upload a file
    // 29-Mar-2018

    let updateInterestRate  = new UpdateInterestRate();
    await updateInterestRate
    
        .addRecord("C0000003-8","20180329",null,"D","6.059")
        .addRecord("C0000001-8","20180329",null,"D","5.059")
        .addRecord("C9999999-8","20180329",null,"D","6.059")
        .execute()


    let cashOffsetRateQuery  =new   CashOffsetRateQuery()
    await cashOffsetRateQuery.fromDateStr(appDate).execute()

    
    await TestUtils.accruedEod("C0000003-8","C9999999-8")
    //run accrual batch


    
}




public async test30th(){

    
    let appDate = "30-03-2018"
    ApplicationDate.updateApplicationDate(appDate)

    //balance query for 30th

    await new CamBalanceQuery().td("C0000003-8").execute()
    await new CamBalanceQuery().td("C9999999-8").execute()


    //Upload a file
    // 30-Mar-2018

    let updateInterestRate  = new UpdateInterestRate();
    await updateInterestRate
    
        .addRecord("C0000003-8","20180330",null,"D","6.059")
        .addRecord("C0000001-8","20180330",null,"D","5.059")
        .addRecord("C9999999-8","20180330",null,"D","6.059")
        .execute()


    let cashOffsetRateQuery  = new CashOffsetRateQuery()
    await cashOffsetRateQuery.fromDateStr(appDate).execute()

    await TestUtils.accruedEod("C0000003-8","C9999999-8")

}


public async test31st(){

    
    let appDate = "31-03-2018"
    ApplicationDate.updateApplicationDate(appDate)

    //31-Mar-2018
    //temp close mont

    let updateProcessClosingStatus = new UpdateProcessClosingStatus()
    await updateProcessClosingStatus.noOfMonthlyBusinessDays("1").execute()



    
    let cashAccrual = new DailyCashAccrual()
    
    await cashAccrual.credit("C0000003-8").execute()
    await cashAccrual.credit("C9999999-8").execute()

    
    let accruedcash = new AccruedCashInterestQuery()
    await accruedcash.accountNo("C0000003-8").fromDate(appDate).execute()
    await accruedcash.accountNo("C9999999-8").fromDate(appDate).execute()


    //post interest

    let postCashInterest = new PostCashInterest()
    await postCashInterest.date("20180331").execute()

    await DateUtils.sleep(2000)

    //run daily risk paramter

    await TestUtils.risk("C0000003-8","C9999999-8")



}

public async test1st(){

    let appDate = "01-04-2018"
    ApplicationDate.updateApplicationDate(appDate)

    await TestUtils.accruedHoliday("C0000003-8","C9999999-8")
    

}

public async test2nd(){
    //morning risk parameter

    let appDate = "02-04-2018"
    ApplicationDate.updateApplicationDate(appDate)


     await TestUtils.risk("C0000003-8","C9999999-8")

    //perform actual closing
    let updateProcessClosingStatus = new UpdateProcessClosingStatus()
    await updateProcessClosingStatus.noOfMonthlyBusinessDays("1").execute()

    //////////////////////////////////
    await new CamBalanceQuery().td("C0000003-8").execute()
    await new CamBalanceQuery().td("C9999999-8").execute()

    
    //Upload a file
    // 30-Mar-2018

    let updateInterestRate  = new UpdateInterestRate();
    await updateInterestRate
    
    .addRecord("C0000003-8","20180402",null,"D","6.059")
    //.addRecord("C0000001-8","20180402",null,"D","5.059") //missed to provide record for 0001-8
    .addRecord("C9999999-8","20180402",null,"D","6.059")
    .execute()


    let cashOffsetRateQuery  = new CashOffsetRateQuery()
    await cashOffsetRateQuery.fromDateStr(appDate).execute()

    //Run  EOD Time Batches and Screen Shots for Accrued Use Case
    await TestUtils.accruedEod("C0000003-8","C9999999-8")


}



public async test3rd(){
    //morning risk parameter

    let appDate = "03-04-2018"
    ApplicationDate.updateApplicationDate(appDate)


     await TestUtils.risk("C0000003-8","C9999999-8")

        
    //Upload a file
    // 30-Mar-2018

    let updateInterestRate  = new UpdateInterestRate();
    await updateInterestRate
    
    .addRecord("C0000003-8","20180403",null,"D","6.059")
    //.addRecord("C0000001-8","20180402",null,"D","5.059") //missed to provide record for 0001-8
    .addRecord("C9999999-8","20180403",null,"D","6.059")
    .execute()


    let cashOffsetRateQuery  = new CashOffsetRateQuery()
    await cashOffsetRateQuery.fromDateStr(appDate).execute()

    //Run  EOD Time Batches and Screen Shots for Accrued Use Case
    await TestUtils.accruedEod("C0000003-8","C9999999-8")


}

public async test4th(){
    //morning risk parameter

    let appDate = "04-04-2018"
    ApplicationDate.updateApplicationDate(appDate)

        
    //Upload a file
    // 30-Mar-2018

    let updateInterestRate  = new UpdateInterestRate();
    await updateInterestRate
    
    .addRecord("C0000003-8","20180404",null,"D","6.059")
    //.addRecord("C0000001-8","20180402",null,"D","5.059") //missed to provide record for 0001-8
    .addRecord("C9999999-8","20180404",null,"D","6.059")
    .execute()


    let cashOffsetRateQuery  = new CashOffsetRateQuery()
    await cashOffsetRateQuery.fromDateStr(appDate).execute()

    //Run  EOD Time Batches and Screen Shots for Accrued Use Case
    await TestUtils.accruedEod("C0000003-8","C9999999-8")


}

public async test5th(){
    //morning risk parameter

    let appDate = "05-04-2018"
    ApplicationDate.updateApplicationDate(appDate)

        
    //Upload a file
    // 30-Mar-2018

    let updateInterestRate  = new UpdateInterestRate();
    await updateInterestRate
    
    .addRecord("C0000003-8","20180404",null,"D","6.059")
    .addRecord("C0000001-8","20180402",null,"D","5.059") //provided a record after 4 days
    .addRecord("C9999999-8","20180404",null,"D","6.059")
    .execute()


    let cashOffsetRateQuery  = new CashOffsetRateQuery()
    await cashOffsetRateQuery.fromDateStr(appDate).execute()

    //Run  EOD Time Batches and Screen Shots for Accrued Use Case
    await TestUtils.accruedEod()
    


}



async destroy(){
     await PageContext.getInstance().close()
}


}