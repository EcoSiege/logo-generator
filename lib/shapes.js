const fs = require('fs');

function generateLogo(response){
    const shape = response.shape.svg
    const shapePath = `./lib/${shape}`;
    const shapeContent = fs.readFileSync(shapePath, 'utf8')
    const newColor = response.color;
    const newText = response.logoText;
    const finalLogo = shapeContent.replace(color, newColor).replace(text, newText);
    fs.writeFile('logo.svg', finalLogo)
}

module.exports = generateLogo();