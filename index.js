var fs = require('fs');

function printChuck() {
    var readStream = fs.createReadStream('./node_modules/draw-chuck/chuck.txt');
    readStream.pipe(process.stdout);
}

module.exports = printChuck;