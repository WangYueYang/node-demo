const http = require('http');
const { hostname } = require('os');

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  // content-tyype 用于定义网络文件的类型和网页编码，常用的 text/html application/json
  res.setHeader('Content-Type', 'application/json');
  res.end('hello node.js');
})

// server.listen(port, () => {
//   console.log(`服务器运行在 http://${hostname}:${port}/`)
// })

// 属性
http.METHODS // 列出了虽有支持的HTTP方法
http.STATUS_CODES // 列出了所有的HTTP状态码和其描述
http.globalAgent // 指向 Agent 对象的全局实例，也就是 http.Agent 类的实例。 Agent 负责管理 HTTP 客户端连接的持久性和重用


// 方法
// http.createServer([options][, requestListener]) // 返回了 http.Server 类的实例
/* 
  http.request
  @params url {string | url}
  @params options 可选
    headers {Object} 请求头对象
    host {string} 要请求的服务器域名或IP地址。默认是'localhost'
    hostname {string} host别名，为了支持 url.parse()。 如果同时制定了host和hostname 用 hostname
    method {string} 指定HTTP请求方法的字符串 默认为 'GET'
    path {string} 请求的路径
    port {number} 远程服务器的端口。 默认值： 如果有设置则为 defaultPort 否则是 80
    protocol {string} 要使用的协议 默认是 'http'
    timeout {number} 指定套接字超时的数值，以毫秒为单位
  @params callback {function}
  http.request() 返回 http.ClientRequest 类的实例。ClientRequest 实例是可写流。 如果需要使用 POST 请求上传文件，则写入 ClientRequest 对象。
*/
// http.request(url[, options][, callback])
// 使用 http.request() 必须始终diaoyong req.end() 来表示请求的结束-即使没有数据写入正文

// 类似于 http.request()，但会自动地设置 HTTP 方法为 GET，并自动地调用 req.end()。
http.get()



// HTTP模块的5个类
http.Agent // Node.js 会创建 http.Agent 类的全局实例，以管理 HTTP 客户端连接的持久性和复用，这是 Node.js HTTP 网络的关键组成部分。
http.ClientRequest // 当 http.request() 或 http.get() 被调用时，会创建 http.ClientRequest 对象。
http.Server // 当使用 http.createServer() 创建新的服务器时，通常会实例化并返回此类。
http.ServerResponse // 由 http.Server 创建，并作为第二个参数传给它触发的 request 事件。
http.IncomingMessage