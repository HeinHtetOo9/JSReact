let fs = require('fs')

let readable = fs.createReadStream('hello.txt')
let writable = fs.createWriteStream('pipe.txt')

readable.pipe(writable) // returns writable