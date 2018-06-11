import { DailyCashAccrual } from "../batch/cam/DailyCashAccrual";
import { MarginPurchasePowerCalculator } from "../batch/cam/MarginPurchasePowerCalculator";
import { ApplicationDate } from "../db/ApplicationDate";
import { AccruedCashInterestQuery } from "../ui/query/cam/AccruedCashInterestQuery";
import { RiskParameterQuery } from "../ui/query/cam/RiskParameterQuery";
import { DateUtils } from "../utils/DateUtils";

export class TestUtils{
    
    /**
     * For an accrued EOD Operation we perform the below tasks:
     * 1. Run the Acrrual batch for each of the accounts (Both credit and cash)
     * 2. Run the Risk Parameter Batch (aka Margin Purchase Batch) for each of the accounts
     * 3. Take Screen shots of accrual screen
     * 4. Take Screen shots of Risk Parameter screen 
     * 
     * @param accounts Account MUST end with -7 or -8 to detrmine the type else they are ignored
     */
    public static async accruedEod(...accounts : string[]){
        await this.accrued(true,accounts) 
    }


    private static async accrued(eod : boolean , accounts : string[]){
        let creditAccounts = this.extractCreditBalanceAccounts(accounts)
        let cashAccounts = this.extractCashBalanceAccounts(accounts)

        let allAccounts : string[]= []
        allAccounts.push(...creditAccounts)
        allAccounts.push(...cashAccounts)

       
            

        let cashAccrual = new DailyCashAccrual()

      

        // Cash Balance accrual Batch
        for(var i=0; i<cashAccounts.length;i++){
            await cashAccrual.cash(cashAccounts[i]).execute()
        }

        // Credit Balance accrual Batch
          for(var i=0; i<creditAccounts.length;i++){
            await cashAccrual.credit(creditAccounts[i]).execute()
        }

        await DateUtils.sleep(2000)

        // Margin Purchase Batch
        let riskParameter = new MarginPurchasePowerCalculator()
    
        for(var i=0; i<allAccounts.length;i++){
            await riskParameter.evening(allAccounts[i]).execute()
        }
        
        
        let applicationDate = ApplicationDate.getCurrent()
        let accruedcash = new AccruedCashInterestQuery()
        let riskParameterQuery = new RiskParameterQuery()
        for(var i=0; i<allAccounts.length;i++){
            //take screen shots of accrual
            await accruedcash.accountNo(allAccounts[i]).fromDate(applicationDate).execute()
            //screen shots of risk paramter
            await riskParameterQuery.accountNo(allAccounts[i]).execute()
        }

    }


    /**
     * For an accrued EOD Operation we perform the below tasks:
     * 1. Run the Acrrual batch for each of the accounts (Both credit and cash)
     * 2. Run the Risk Parameter Batch (aka Margin Purchase Batch) for each of the accounts
     * 3. Take Screen shots of accrual screen
     * 4. Take Screen shots of Risk Parameter screen 
     * 
     * @param accounts Account MUST end with -7 or -8 to detrmine the type else they are ignored
     */
    public static async accruedHoliday(...accounts : string[]){
        await this.accrued(true,accounts)        
    }

    public static async risk(...accounts : string[]){

        let riskParameter = new MarginPurchasePowerCalculator()
        for(var i=0; i<accounts.length;i++){
            await riskParameter.evening(accounts[i]).execute()
        }

        let riskParameterQuery = new RiskParameterQuery()
        for(var i=0; i<accounts.length;i++){
            //screen shots of risk paramter
            await riskParameterQuery.accountNo(accounts[i]).execute()
        }

    }


    

    private static extractCreditBalanceAccounts(accounts: string[]): string[] {

        let creditAccounts  : string[]= []

        accounts.forEach(element => {
          if(element.endsWith("-8")){
              creditAccounts.push(element)
          }  
        })

        return creditAccounts
        
    }

    private static extractCashBalanceAccounts(accounts: string[]): string[] {

        let cashAccounts  : string[]= []

        accounts.forEach(element => {
          if(element.endsWith("-7")){
              cashAccounts.push(element)
          }  
        })

        return cashAccounts
        
    }

    


}

