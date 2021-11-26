const fs = require('fs');

// 检查文件是否存在
// access  访问，入口，进入的意思
// fs.access(path, mode 默认值: fs.constants.F_OK, callback)
fs.access('writeFile.md', fs.constants.F_OK, err => {
  console.log(`${err ? 'does not exist' : 'exists'}`);
});

// 创建新的文件夹
// 类似于linux 的 mkdir
// fs.mkdir(path, options, callback)
fs.mkdir('./fsMkdir', err => {});

// 读取目录的内容
// read dir
// fs.readdir(path, options, callback)
/* 
  fs.readdir
  @param {string | Buffer | URL}
  @param {string | object}
    encoding {string}
    withFileTypes {boolean}
  @callback {Func}
    err {Error}
    files {string[] | Buffer[] | fs.Dirent[]}
*/
const readPath = '/Users/wyy/Documents/wyy/study/github/node-demo';
fs.readdir(readPath, (err, files) => {
  console.log(`files: ${files}`);
})

// 重命名文件
// reset name 
/* 
   fs.renname
*/
fs.rename('./fsMkdir', './fsRename', err => {})

// 删除文件夹
// remove dir 最好安装 fs-extra 模块
/* 
   fs.rmdir
*/
// fs.rmdir()