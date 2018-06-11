import { IReportDataFetcher } from "./IReportDataFetcher";
import { ReportType } from "./IReportType";
import {readFile} from 'fs';
import * as Path from 'path';
import { Report } from "./Report";
import * as fileExtFinder from "./FileExtFinder";

export class ReportDataFetcher implements IReportDataFetcher {
    filePath: string
    reportName: string
    reportType: ReportType

    constructor(filePath: string, reportName: string, reportType: ReportType){
        this.filePath = filePath;
        this.reportName = reportName;
        this.reportType = reportType;
    }

    private readPropertiesPromise() : Promise<any> {
        
        let classPath = __dirname.replace('dist', 'src');
        let extension = 'txt';
        let propFilePath = Path.join(classPath, 'data', `${this.reportName}.PROP.${extension}`);
        
        return new Promise((resolve, reject) => {
            return readFile(propFilePath, 'utf-8', (err, content) => {
                if(err){
                   reject(err);
                }else {
                    resolve(content);
                }
            }) 
        });
    }

    private readReportDataPromise(props: String[]) : Promise<any> {
        let classPath = __dirname.replace('dist', 'src');
        let ext = fileExtFinder.fn(this.reportType);
       
        let dataFilePath = Path.join(classPath, 'data', `${this.reportName}${ext}`);

        return new Promise((resolve, reject) => {
            return readFile(dataFilePath, 'utf-8', (err, content) => {
                if(err){
                   reject(err);
                }else {
                    resolve({props : props, content : content});
                }
            }) 
        });
    }

    public getReportData(): any {
        //TODO created reader instance based on report type
        //and call with file Name
        return this.readPropertiesPromise().then((content) => {
            let props: String[] = [];
            content.split("\r\n").forEach((line:String) => {
                props= `${line}`.split("|");
            })
            return props;
        }).then((props) =>{
            return this.readReportDataPromise(props);
        }).then( (result) => {
            let data:Object[] = [];
            result.content.split("\r\n").forEach((line: String) => {
                let values = `${line}`.split("|");
                let obj: Object = new Object();
                values.forEach((v, index) =>{
                    Object.defineProperty(obj, result.props[index], {value : v,
                                writable : true,
                                enumerable : true,
                                configurable : true});                    
                });
                data.push(obj);
            })
            return data;
        }).then((data) => {
            return data;
        }).catch((err)=>{
            console.log('Error occurred: ' + err);
            throw err;
        })
    }
}