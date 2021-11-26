const fs = require('fs');

// Node 读取文件
// fs.readFile(url, 编码, callback)
// fs.readFile() 和 fs.readFileSync() 都会在返回数据之前将文件的全部内容读取到内存中。
// 这意味着大文件会对内存的消耗和程序执行的速度产生重大的影响。
// 在这种情况下，更好的选择是使用流来读取文件的内容。

fs.readFile('./node.md', 'utf-8', (err, data) => {
  console.log(`readFile: ${data}`);
})

// Node写入文件
// 默认情况下， fs.writeFile 如果文件存在的话会替换文件的内容， 不存在的话会创建一个文件
const content = 'fs.writeFile';
// 会直接将要写入的文件里的内容直接变成 content 
fs.writeFile('./writeFile.md', content, err => {
  console.log('err: ',err)
})

// r+ 打开文件用户读写, 会替换文件内容
// w+ 打开文件用于读写，将流定位到文件的开头， 如果文件不存在则创建文件。
// a  打开文件用于写入，将流定位到文件的末尾， 如果文件不存在则创建文件。
// a+ 打开文件用于读写，将流定位到文件的末尾， 文件不存在会创建文件。
fs.writeFile('./writeFile.md', content, {flag: 'r+'}, err => {})

// Node 追加文件
// 将内容追加到文件末尾
const newContent = '追加的新的内容';
fs.appendFile('./writeFile.md', newContent, err => {})