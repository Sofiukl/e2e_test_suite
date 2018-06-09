import { ApplicationDate } from "./db/ApplicationDate";




class TC{
  
    app : ApplicationDate = new ApplicationDate()
    

  async tcBasicEntryTrade(){


        let x = await this.app.getCurrent()

        console.log( x);
        
       
    }


}

 var tc = new TC()
 tc.tcBasicEntryTrade().then()

