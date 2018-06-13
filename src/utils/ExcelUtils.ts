import  * as Excel  from "exceljs";
import fs from "fs"
import { ImageGenerate } from "./ImageGenerate";
import sizeOf from  'image-size';
import { log } from "util";
 

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
    _summarySheetData : any[]
    _currentWorksheet : Excel.Worksheet
    _currentWorksheetData : any[]

    _location = 2

    init(){
        if(!this._init){
            this._summarySheet = this._workbook.addWorksheet('Summary');
            this.addTableOfContentHeader(this._summarySheet)
            this._summarySheetData = []
            this._currentWorksheet = this._summarySheet
            this._currentWorksheetData = []
            this._init=true
        }
    }


    addTableOfContentHeader(sheet : Excel.Worksheet){
        sheet.addRow(["Table of Contents"]).getCell(1).font = {
            name: 'Calibri',
            family: 4,
            size: 12,
            underline: true,
            bold: true
        };
    }


    formatTestCaseId(cell : Excel.Cell){
         cell.font = {
            name: 'Calibri',
            family: 4,
            size: 11,
            color : { argb : "ff1a0dab" },
            bold: false
        };
    }

    formatTestCaseHeader(cell : Excel.Cell){
         cell.font = {
            name: 'Calibri',
            family: 4,
            size: 12,
            color : { argb : "ff1a0dab" },
            bold: true
        };
    }

    addTestCase(testCaseId : string){
        this.init()
        
        this.writeSheet()
        
        
        this._currentWorksheet = this._workbook.addWorksheet(testCaseId);
        this.addTableOfContentHeader(this._currentWorksheet)

        let row = this._summarySheet.addRow([])
        let cell = row.getCell(2)
        this.formatTestCaseHeader(cell)
        cell.value={ text: this._currentWorksheet.name, hyperlink: "#'"+this._currentWorksheet.name+"'"+'!A'+Math.floor(this._location) }

        this._currentWorksheetData = []
        this._location = 2
    }

    addImage(imageName : string){
        this.init()
        this._currentWorksheetData.push({ type : 'image' , imageName : imageName })
        // /*
        
         //*/
    }

    private writeImage(imageName : string){
        var imageId2 = this._workbook.addImage({
            buffer: fs.readFileSync(imageName),
            extension: 'png',
          });
        
        let dimensions = sizeOf(imageName)
        let rows = dimensions.height/25
        

        rows =  (rows==undefined || rows < 2) ? 2 : rows

        let width = (dimensions.width)/100
        width = width>0 ? width : 5

        let endLocation = this._location + rows-1
         this._currentWorksheet.addImage(imageId2, 'B'+Math.floor(this._location)+':'+(String.fromCharCode((66+width)))+endLocation);
         
         this._location = endLocation+2
    }

    private writeSheet(){

        //add book marks
        for (let index = 0; index < this._currentWorksheetData.length; index++) {
            const element = this._currentWorksheetData[index];
            if(element.type=="heading"){
                element.row = this._currentWorksheet.addRow([])
                this._location++
            }
            
        }
        this._location++
        this._location++
        
        for (let index = 0; index < this._currentWorksheetData.length; index++) {
            const element = this._currentWorksheetData[index];
            if(element.type == "heading"){
                this.writeHeading(element.text, element.row)
            }else if(element.type =="image"){
                this.writeImage(element.imageName)
            }
        }
        
        this._currentWorksheetData = []
        
    }


    addHeading(text : string){

        this._currentWorksheetData.push({ type : 'heading' , text : text })

    }

    private writeHeading(text : string, row : Excel.Row){
        this.init()
        this._currentWorksheet.mergeCells("A"+Math.floor(this._location)+":M"+Math.floor(this._location))

        
        let cell = row.getCell("B")
        cell.value= { text: text, hyperlink: "#'"+this._currentWorksheet.name+"'"+'!A'+Math.floor(this._location) };
        this.formatTestCaseId(cell)
        //add a row to the summary sheet
        
        let summaryCell = this._summarySheet.addRow([]).getCell(3)
        summaryCell.value =  { text: text, hyperlink: "#'"+this._currentWorksheet.name+"'"+'!A'+Math.floor(this._location) }
        this.formatTestCaseId(summaryCell)

        this._currentWorksheet.getCell("A"+Math.floor(this._location)).value=text
        
        this._currentWorksheet.getCell("A"+Math.floor(this._location)).style={
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
        this.addImage(imageName)
       
    }

    addCommand(text : string){
        this.init()
        let imageName = ImageGenerate.createImage(text,true)
        this.addImage(imageName)
       
    }


    
    async save(){        
        this.writeSheet()
        await this._workbook.xlsx.writeFile("test_"+Date.now()+".xlsx")
    }

}



