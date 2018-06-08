
import fs from "fs"
import child from "child_process"

export class ImageGenerate {


    
    
    public static createImage(text : string , blackOnWhite? : boolean ) : string {

        const  LIBRARY_DIRECTORY = "./library/"
        
        
        let fileName = Date.now()+".txt"
        
        //save text as temporary file
        fs.writeFileSync( LIBRARY_DIRECTORY+fileName,text)

        let commandArgs = ["-file",fileName] 

        if(blackOnWhite){
            commandArgs.push("-whiteonblack")
        }

        //call createimage.exe file filename
        let output = child.execFileSync("createimage.exe", commandArgs , {cwd : LIBRARY_DIRECTORY} )

        //delete file

        fs.unlinkSync(LIBRARY_DIRECTORY+fileName)

        //move image to parent folder
        
        let outputFile = fileName+".png"
        fs.renameSync(LIBRARY_DIRECTORY+fileName+".png" , outputFile)

        return outputFile

    }




}

