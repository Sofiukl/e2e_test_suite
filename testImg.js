const Jimp = require('jimp')



var image = new Jimp(256, 256, function (err, image) {
    Jimp.loadFont(Jimp.FONT_SANS_16_WHITE).then((font)=>{
            image.print(font, 0, 0, `
            
            `,240);
            image.write("a.png")
    })   
});




