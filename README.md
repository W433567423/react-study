### React 开发依赖

- 开发 React 必须依赖的库
    - react:包含 react 所必须的源码
    - react-dom:react 渲染在不同平台所需要的核心代码(0.14 后拆分)
    - babel:将 jsx 转换成 React 代码的工具

### 虚拟 DOM

- React.createElement 最终创建出来一个 ReactElement 对象，利用 ReactElement 对象组成 JavaScript 的对象树（虚拟 DOM）
- React.render 函数将虚拟 DOM 转换成真实 DOM

### 前端工程化>(脚手架)

要考虑以下几个要素

- 目录结构怎么划分
- 如何管理文件之间的相互依赖
- 如何管理第三方模块的依赖
- 项目发布前如何打包压缩
- 等等...

### React目录结构

![img.png](resources/img.png)

- PWA提供安装和离线等功能(Web APP)
