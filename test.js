// ==UserScript==
// @name         tutuの知乎
// @namespace    https://bbs.tampermonkey.net.cn/
// @version      0.1.0
// @description  try to take over the world!
// @author       tutu
// @include      *://*.zhihu.com/*
// ==/UserScript==

//打印信息
const logMessage = (message) => {
    if (message)
        console.log(`【!】移除${message}成功`)
}

//通用的清楚元素的方法通过类名
const clearElementByClass = (className, message, isClick) => {
    console.log(`开始监听移除${message}++++++++`)
    let timer = 0
    timer = setInterval(() => {
        const element = document.querySelector(className)
        if (element) {
            isClick ? element.querySelector('.Modal-closeButton').click() : element.remove()
            logMessage(message)
            timer && clearInterval(timer)
        }
    }, 180)
}

(function () {
    'use strict';
    // Your code here...
    console.clear()

    try {
        // 移除开屏登录model
        clearElementByClass('.Modal-enter-done', '开屏登录model', true)


        // 移除角落登录model
        clearElementByClass('.css-1izy64v', '角落登录组件')


        // 移除开屏登录model
        clearElementByClass('.ColumnPageHeader-Wrapper', '头部登录组件')
        clearElementByClass('.css-ysn1om', '登录tooplip组件')
    } catch {
        console.log('脚本出现错误')
    }
})();
