##### 搭建环境

- 1.mkdir ts-project && cd ts-project && npm init -y && npm i typescript -D && npx tsc --init
    - 在当前目录下创建一个 ts-project 目录，然后进入 ts-project 目录执行 npm init -y 初始话目录产生 package.json 文件，之后运行 npm i typescript -D 在开发环境安装
      typescript 包，之后执行 npx tsc --init 生成 tsconfig.json 文件
- 2.mkdir src && touch src/index.ts
    - 新建 src 目录作为项目的源码目录（开发目录），并在 src 目录下创建 index.ts 文件作为项目的入口文件
- 3.安装 @types/node ，ts-node-dev
- 4.npx eslint --init
- 5.npm i prettier -D
- 6.npx commitizen init cz-conventional-changelog --save --save-exact
    - 在项目中安装 cz-conventional-changelog 适配器依赖
      将适配器依赖保存到 package.json 的 devDependencies 对象中
      在 package.json 中新增 config.commitizen 字段，主要用于配置 cz 工具的适配器路径
- 7.npm i @commitlint/cli @commitlint/config-conventional -D
    - 安装校验工具，负责校验提交信息是否符合规范
- 8.npm i husky@4 lint-staged -D
    - 第 4 版 husky 的使用方式
- 8.npm i husky -D
    - V5

#### tsc 命令

    tsc --out modules.js main.ts app.ts

- 1.将多个文件编译成一个文件并输出到指定目录
    - eg:  npx tsc --out ./build/page.js --declaration src/03_advance/05_page.ts src/03_advance/05_components.ts  


