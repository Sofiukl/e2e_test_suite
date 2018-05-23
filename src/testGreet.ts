import { ApplicationDate } from "./db/ApplicationDate";




class TC{
  
    app : ApplicationDate = new ApplicationDate()
    

  async tcBasicEntryTrade(){


        await this.app.getCurrent()
       
    }


}

var tc = new TC()
tc.tcBasicEntryTrade().then()

