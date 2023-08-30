### React 开发依赖

- 开发 React 必须依赖的库
  - react:包含 react 所必须的源码
  - react-dom:react 渲染在不同平台所需要的核心代码(0.14 后拆分)
  - babel:将 jsx 转换成 React 代码的工具

### 虚拟 DOM

- React.createElement 最终创建出来一个 ReactElement 对象，利用 ReactElement 对象组成 JavaScript 的对象树（虚拟 DOM）
- React.render 函数将虚拟 DOM 转换成真实 DOM
