

export class DateUtils {

    public static convertToBatchFormat(inputDate :string) : string{
        let dateComponents = inputDate.split('-')

            return dateComponents[2]+dateComponents[1]+dateComponents[0]
    }


    public static sleep(timeout : number) {

        return new Promise( (resolve,reject) =>{
            setTimeout(() => {
                resolve()
            }, timeout);
        })

    }


}