const fs = require('fs');
const buf = fs.readFileSync('public/ayush.png');
console.log(buf.slice(0, 10).toString('hex'));
