#### 依赖下载错误

1. Electron 的下载：

   electron 开了代理也可能下载错误。因此按照官网的方法，添加全局变量

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


