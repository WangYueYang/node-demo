const path = require('path');

// path 模块用来访问文件系统并与文件系统进行交互

const parse = path.parse('/users/test.txt');
/* 
  root 根路径
  dir  从路径开始的文件夹路径
  base 文件名加扩展名
  name 文件名
  ext  扩展名
*/
console.log(`parse: ${JSON.stringify(parse)}`);

path.relative(url1, url2); // 返回从第一个路径到第二个路径的相对路径
path.resolve(url1, url2); // 获取相对路径的绝对路径， 如果指定第二个参数，会使用第一个参数作为第二个参数的基准