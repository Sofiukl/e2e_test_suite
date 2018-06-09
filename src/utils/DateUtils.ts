

export class DateUtils {

    public static convertToBatchFormat(inputDate :string) : string{
        let dateComponents = inputDate.split('-')

            return dateComponents[2]+dateComponents[1]+dateComponents[0]
    }


}