const http = require('http');
const { hostname } = require('os');

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  // content-tyype 用于定义网络文件的类型和网页编码，常用的 text/html application/json
  res.setHeader('Content-Type', 'application/json');
  res.end('hello node.js');
})

server.listen(port, () => {
  console.log(`服务器运行在 http://${hostname}:${port}/`)
})
