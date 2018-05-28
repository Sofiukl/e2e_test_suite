
import { ExecuteBatch } from "../ExecuteBatch";


class ExecutionToTrade extends ExecuteBatch {

   batchName() : string{
        return "TRD/ExecutionToTrade"
   }

   
   defaultArguments() : string[]{
       return []//this.addAccount().concat(this.addApplicationDate())
   }

}