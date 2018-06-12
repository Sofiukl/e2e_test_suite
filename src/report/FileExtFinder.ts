import { ReportType } from "./IReportType";

export let fn = (reportType: any) => {
    let ext = '';
	
    switch (reportType) {
        case ReportType.DELIMETER_SEPARATED:
            ext = '.txt'
            break;
        
        case ReportType.EXCEL:
            ext = '.xlsx'
            break;
        
        case ReportType.FIXED_LENGTH:
            ext = '.txt'
            break;

        case ReportType.PDF:
            ext = '.pdf'
            break;

        default:
            ext = '.txt'
            break;
    }

    return ext;
}