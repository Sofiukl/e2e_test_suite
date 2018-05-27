export class Assert{

    public static notNull( value : string){

        if(value == undefined){
            throw new Error("Cannot be null")
        }

    }


}