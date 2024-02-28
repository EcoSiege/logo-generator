const fs = require('fs');



module.exports = function generateLogo(response){
    const shape = response.shape
    console.log(shape)    
    const shapePath = `./lib/${shape}.svg`;
    const shapeContent = fs.readFileSync(shapePath, 'utf8')
    const newColor = response.color;
    const newText = response.logoText;
    const finalLogo = shapeContent.replace(/fill=".*?"/g, `fill="${newColor}"`).replace(/SVG/g, newText);
    fs.writeFile('logo.svg', finalLogo)
}