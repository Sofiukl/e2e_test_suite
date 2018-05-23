import { Connection, getConnection } from "oracledb"


export class ApplicationDate{


    public async getCurrent(){
        let connection = await getConnection({
            user          : "gvth_dev_gmo_txn",
            password      : "gvth_dev_gmo_txn",
            connectString : "localhost/XE"
          })

        let result = await connection.execute("select application_date from ref_closing_status where enterprise_id = 'GMO' and component_id = 'CAM' and app_mode='OL'")

        console.log(result);

        await connection.close()
        
        



    }





}