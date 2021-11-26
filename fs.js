const fs = require('fs');
const path = require('path');

// 同一个方法后面带Sync是同步方法，比如 fs.open fs.openSync

// f 是 fs.open() 的第二个参数，意味着打开文件用于读取
// 其他常用参数有：
// r+ 打开文件用于读写
// w+ 打开文件用于读写，将流定位到文件的开头。如果文件不存在就创建文件。
// a  打开文件用于写入，将流定位到文件的末尾。如果文件不存在则创建文件。
// a+ 打开文件用于读写， 将流定位到文件的末尾。如果文件不存在则创建文件。

fs.open('./node.md', 'r', (err, fd) => {
  console.log(`fd: ${fd}`);
  console.log(`err: ${err}`);
})

try {
  // 一旦获得文件描述符，就可以以任何方式执行所有需要它的操作，例如调用 fs.open() 以及许多与文件系统交互的其他操作。
  const fd = fs.openSync('./node.md', 'r');
  console.log(`fs.openSync: ${fd}`);
} catch(err) {
  console.log(`err: ${err}`);
}

// Node 文件属性，通过 fs.stat 可以获取文件的详细信息
fs.stat('./node.md', (err, stats) => {
  console.log(`fs.stat: ${JSON.stringify(stats)}`);

  stats.isFile(); // 判断是不是文件
  stats.isDirectory(); // 判断是不是目录
  stats.isSymbolicLink(); // 判断文件是否符号链接
  stats.size // 获取文件大小（以字节为单位）  1024000 = 1MB
})

try {
  const statSync = fs.statSync('./node.md');
  console.log(`statSync: ${JSON.stringify(statSync)}`);
} catch (error) {
 console.log(error);
}

// Node 文件路径
const notes = '/node-demo/node.md';
console.log('path:', path.dirname(notes), path.basename(notes), path.extname(notes))
path.dirname(notes); // /node-demo  获取文件的父文件夹
path.basename(notes); // node.md  获取文件名部分
path.extname(notes); // .txt 获取文件的扩展名

// 可以通过 basename 指定第二个参数获取不带扩展名的文件名：
path.basename(notes, path.extname(notes));

// 使用路径
const name = 'joe';
const joinPath = path.join('/', 'use', name, 'notes.txt');
console.log(`joinPath: ${joinPath}`);

// path.resolve() 获取相对路径的绝对路径
const resolvePath = path.resolve('node.md');
console.log(`resolvePath: ${resolvePath}`);

// path.normalize() 当包含诸如 .、.. 或双斜杠之类的相对说明符时，其会尝试计算实际的路径：
const normalizePath = path.normalize('/User/wyy/..//node.md');
console.log(`normalizePath: ${normalizePath}`);