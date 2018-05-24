import { PageContext } from "../../../context/PageContext";
import  cheerio  from "cheerio";



export class QueryRetriever {

    _matchingCriteria: any[]
    _returnColumn: string[]

    public async fetch(): Promise<any[]> {
        let page = PageContext.getInstance().getPage();
        let resultGridHTML = await page.$eval("div.formContent", (elem) => elem.outerHTML)
        let $ = cheerio.load(resultGridHTML)

        ///////////////////////////////////////////
        // Build the column heading map 
        ///////////////////////////////////////////
        let columnHeadings = $(".igv-grid span.slick-column-name")
        let columnMap: any = {}

        for (let i = 0; i < columnHeadings.length; i++) {
            let element = columnHeadings[i]
            let columnHeading = element.data ? element.data.trim() : element.firstChild.data.trim()
            columnMap[columnHeading] = i;
        }

        let arrayOfRowsMatchingSelection: string[][] = []
        for (let i = 0; i < this._matchingCriteria.length; i++) {
            let divRowOfHTML = $("div.r" + columnMap[this._matchingCriteria[i].column] + " span:contains(" + this._matchingCriteria[i].value + ")").parents(".slick-row")//.map((i,divRowOfHTML) => $
            let rowsMatchingSelection: string[] = []
            for (let j = 0; j < divRowOfHTML.length; j++) {
                let rowElement = divRowOfHTML[j]
                rowsMatchingSelection.push(rowElement.attribs['row'])
            }
            arrayOfRowsMatchingSelection.push(rowsMatchingSelection)

        }

        let uniqueRowsMatchingAllCriteria: string[] = arrayOfRowsMatchingSelection[0]
        for (let i = 1; i < arrayOfRowsMatchingSelection.length; i++) {
            uniqueRowsMatchingAllCriteria = uniqueRowsMatchingAllCriteria.filter(x => arrayOfRowsMatchingSelection[i].indexOf(x) > -1)
        }

        let elementToBeReturned: any[] = []
        for (let i = 0; i < uniqueRowsMatchingAllCriteria.length; i++) {
            let rowNo = uniqueRowsMatchingAllCriteria[i]
            let element: any = {}
            for (let j = 0; j < this._returnColumn.length; j++) {
                let _returnColumnName: string = this._returnColumn[j]
                let column = columnMap[_returnColumnName]
                let returnElements = $(`div[row=${rowNo}] div.r${column}`)
                element[_returnColumnName] = returnElements.text();
            }
            elementToBeReturned.push(element)
        }
        return elementToBeReturned;
    }

     
    

    public setMatchingCriteria(matchingCriteria : any[]){
        this._matchingCriteria=matchingCriteria
    }

    public setReturnColumn(returnColumn : string[]){
        this._returnColumn=returnColumn
    }


    


}