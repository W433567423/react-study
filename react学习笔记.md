### React 开发依赖

- 开发 React 必须依赖的库
  - react:包含 react 所必须的源码
  - react-dom:react 渲染在不同平台所需要的核心代码(0.14 后拆分)
  - babel:将 jsx 转换成 React 代码的工具

### 虚拟DOM

- React.createElement最终创建出来一个ReactElement对象，利用ReactElement对象组成JavaScript的对象树（虚拟DOM）
- React.render函数将虚拟DOM转换成真实DOM

