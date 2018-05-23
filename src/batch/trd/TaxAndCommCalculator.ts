
import { ExecuteBatch } from "../ExecuteBatch";


class TaxAndCommCalculator extends ExecuteBatch {

   batchName() : string{
        return "TRD/TaxAndCommCalculator"
   }

   
   defaultArguments() : string[]{
       return this.addAccount().concat(this.addApplicationDate())
   }

}