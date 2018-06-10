import  * as Excel  from "exceljs";
import fs from "fs"
import { ImageGenerate } from "./ImageGenerate";

//var Excel = require('exceljs');

export class ExcelUtils {

    static __instance : ExcelUtils


    public static getInstance() : ExcelUtils {

        if(this.__instance==undefined){
            this.__instance= new ExcelUtils()
        }

        return this.__instance
    }


    _workbook : Excel.Workbook = new Excel.Workbook();
    _init = false
    _summarySheet : Excel.Worksheet
    _currentWorksheet : Excel.Worksheet

    _location = 2

    init(){
        if(!this._init){
            this._summarySheet = this._workbook.addWorksheet('Summary');
            this._currentWorksheet = this._summarySheet
            this._init=true
        }
    }


    addTestCase(testCaseId : string){
        this.init()
        
        this._currentWorksheet = this._workbook.addWorksheet(testCaseId);
        this._location = 2
    }

    addImage(imageName : string, rows? : number){
        this.init()

        // /*
        var imageId2 = this._workbook.addImage({
            buffer: fs.readFileSync(imageName),
            extension: 'png',
          });
        
        rows =  (rows==undefined || rows == 0) ? 20 : rows

        let endLocation = this._location + rows
        
         this._currentWorksheet.addImage(imageId2, 'B'+this._location+':O'+endLocation);
         
         this._location = endLocation+2
         //*/
    }


    addHeading(text : string){
        this.init()
        this._currentWorksheet.mergeCells("A"+this._location+":M"+this._location)

        this._currentWorksheet.getCell("A"+this._location).value=text
        
        this._currentWorksheet.getCell("A"+this._location).style={
            fill : {
                type: 'pattern',
                pattern:'solid',
                fgColor:{argb:'FFB8CCE4'}
            },
            font : {
                bold : true
            }

        }


        
        this._location+=2
    }

    addText(text : string){
        this.init()
        let imageName = ImageGenerate.createImage(text)
        this.addImage(imageName,text.split('\n').length*2)
       
    }

    addCommand(text : string){
        this.init()
        let imageName = ImageGenerate.createImage(text,true)
        this.addImage(imageName,text.split('\n').length*2)
       
    }


    
    async save(){        
        await this._workbook.xlsx.writeFile("test_"+Date.now()+".xlsx")
    }

}



