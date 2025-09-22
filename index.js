const http = require('http');
const PORT = 3000;
http.createServer((req, res) => {
  res.end('Version 2');
}).listen(PORT, () => console.log('Server running'));

