export class ReportDataQueryService {

    data : Object[]
    condition : any

    constructor(data: Object[]){
        this.data = data;
    }

    query(condition: any) : Object {
        this.condition = condition;
        let result: Object = new Object();
        let isResFound: Boolean = false;

        for(let i=0; i<this.data.length; i++){
            let obj: any = this.data[i];

            for(let c in condition){
                let _condVal = condition[c];
                for(let p in obj){
                    let _val = obj[p];
                    if(c == p){
                        if(_condVal == _val){
                            isResFound = true;
                            result = obj;
                        }else {
                            isResFound = false;
                        }
                    }
                }
            } 
        }
        return result;

    }


}