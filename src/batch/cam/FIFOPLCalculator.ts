
import { ExecuteBatch } from "../ExecuteBatch";


class FIFOPLCalculator extends ExecuteBatch {

   batchName() : string{
        return "CAM/FIFOPLCalculator"
   }

   
   defaultArguments() : string[]{
       return this.addAccount()
   }

}