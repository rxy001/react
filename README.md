### Usage
`cd react-app && npm i && npm run dev` 

`F5` 启动服务，即可在 vscode 中打断点调试源码. 

#### 依赖安装失败

1. Electron 的下载：

   electron 开了代理也可能安装失败。因此按照官网的方法，添加全局变量

    ```shell
    export ELECTRON_MIRROR="https://npmmirror.com/mirrors/electron/"

    # 一定要加v，electron官网未加找不到下载源
    export ELECTRON_CUSTOM_DIR="v{{ version }}"
    ```

2. optipng-bin、gifsicle

    ```shell
    gifsicle pre-build test failed
      
    optipng pre-build test failed
    ```

   使用代理

3. Protocol "https:" not supported. Expected "http:"

   关了代理


#### 关于调试源码的环境搭建

1. `yarn build` 构建生成带有 sourcemap 的源码. (从网上扒了一个份 rollup/build.js 的脚本，可生成 sourcemap)
   另外可参考 https://github.com/facebook/react/pull/26442 、https://github.com/facebook/react/pull/26446.

2. `npm create vite react-app --template`, 生成 react app, 将 `package.json` 中的 react、react-dom 下载地址改为本地。

