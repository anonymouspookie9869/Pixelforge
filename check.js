const http = require('http');

http.get('http://localhost:3000/ayush.png', (res) => {
  console.log(`Status: ${res.statusCode}`);
  console.log(`Content-Type: ${res.headers['content-type']}`);
  console.log(`Content-Length: ${res.headers['content-length']}`);

  let body = [];
  res.on('data', (chunk) => body.push(chunk));
  res.on('end', () => {
    let buffer = Buffer.concat(body);
    console.log(`Downloaded Bytes: ${buffer.length}`);
    console.log(`First bytes: ${buffer.slice(0, 10).toString('hex')}`);
  });
});
