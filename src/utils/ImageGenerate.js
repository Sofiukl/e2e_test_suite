const Jimp = require('jimp')


module.exports = {

    saveImg : function(text){
        return new Promise((reolve)=>{
            var image = new Jimp(1200, 800, function (err, image) {
                Jimp.loadFont(Jimp.FONT_SANS_16_WHITE).then((font)=>{
                        image.print(font, 0, 0, text,1000);
                        image.write(Date.now()+".png")
                        reolve()
                })   
            });
        })
        
    }


}

