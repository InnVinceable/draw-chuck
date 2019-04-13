var fs = require('fs');

function printChuck() {
    var readStream = fs.createReadStream('./chuck.txt');
    readStream.pipe(process.stdout);
}

module.exports = printChuck;