import {IReport} from './IReport';
import {ReportType} from './IReportType';
import {ReportDataFetcher} from './ReportDataFetcher';
import {ReportDataQueryService} from './ReportDataQueryService';
import { ReportData } from './ReportData';

export class Report implements IReport {
    
    type: ReportType
    name: string
    result: ReportData
    private _filePath: string
    private _reportData: Object[]
    private _queryResult: any

    constructor(name: string, type: ReportType){
        this.name = name;
        this.type = type;
    }
    execute(command: string): Report {
        let filePath = '';
        //TODO implement execute API
        console.log('Execute the report and place it under data folder');
        this._filePath = filePath;
        return this;
    }
    
    async getReportData(): Promise<Report> {   
        this._reportData = await new ReportDataFetcher(this._filePath, this.name, ReportType.DELIMETER_SEPARATED)
        .getReportData();
        return this;
    }

    async setCondition(condition: Object) : Promise<Report> {
        this._queryResult = new ReportDataQueryService(this._reportData).query(condition);
        return this;
    }

    async findResult(selectors: string[]): Promise<Report> {
        let result: any = new ReportData();
        for(let p in this._queryResult){
            let index:Number = selectors.indexOf(p);
            if(index != -1){
                result[p] = this._queryResult[p];
            }
        }
        this.result = result;
        return this;
    }

    async queryAsync(selectors: string[], condition: Object): Promise<Object> {
        await this.getReportData();
        await this.setCondition(condition);
        await this.findResult(selectors);
        return this.result;
    }

    query(selectors: string[], condition: Object) : Promise<Object> {
        return this.queryAsync(selectors, condition).then(qr => qr);
    }
    
}