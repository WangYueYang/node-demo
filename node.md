### 关于 npm install
--save 安装并添加目录到 package.json 文件的 dependencies 与生产环境中的应用程序相关
--save-dev 安装并添加到目录 package.json 文件的devDependencies  通常是开发的工具
npm install -g  不会将包安装到本地文件夹下，而是全局的位置，使用 npm root -g 可以了解到确切的位置
在 macOS 或 Linux 上，此位置可能是 /usr/local/lib/node_modules


### 更新软件包
npm update 
npm update <package-name> 更新单个软件包

### 查看npm包安装的版本
npm list
npm list  -g 是用户全局安装的包
npm list --depth=0 只获取package.json 中列出的包
npm list <package-name> 获取指定包的版本
npm list <package-name> version 查看该包在npm仓库里的最新可用版本

### 更新npm包
npm outdate 查看软件包的新版本
npm install -g npm-check-updates    ncu -u    若要将所有软件包更新到新的主版本，这会升级 package.json 文件的 dependencies 和 devDependencies 中的所有版本，以便 npm 可以安装新的主版本。

### 卸载npm包
npm install <package-name> -S || --save || -D || -save-dev || -g || --global 删除package.json中的引用或者是全局的包