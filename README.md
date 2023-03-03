#React18+React+Vant+Mobx+axios

该项目是React版本开发的开眼App-web版本，主要目的是用来学习上手React项目实践，接口和UI基本参照以前开发的Flutter
OpenEye项目主体基于React18+React-Vant+Mobx+axios开发完成,非常适合新手了解和学习用React开发一款移动端App；该项目涉及
React移动端屏幕适配，axios网络拦截器的使用，React父子组件传参回调，Mobx6在React函数编程中的运用，React路由监听等等

**Flutter版本**链接：https://github.com/WinWang/open_eye

**Vue2版本**WanAndroid项目链接(Vue2+vuex+vant+axios)：https://github.com/WinWang/Vue-WanAndroid

**Vue3版本**WanAndroid项目链接(vue3+typeScript+pinia+vant+vite)：https://github.com/WinWang/Vue3-wanAndroid


<div style="display: flex; flex-direction: row">
<img src="https://github.com/WinWang/react-oepn-eye/blob/master/screenShot/1.jpg" width="33%">
<img src="https://github.com/WinWang/react-oepn-eye/blob/master/screenShot/2.jpg" width="33%">
</div>

<br/>

<div style="display: flex; flex-direction: row">
<img src="https://github.com/WinWang/react-oepn-eye/blob/master/screenShot/3.jpg" width="33%">
<img src="https://github.com/WinWang/react-oepn-eye/blob/master/screenShot/4.jpg" width="33%">
</div>

<br/>

<div style="display: flex; flex-direction: row">
<img src="https://github.com/WinWang/react-oepn-eye/blob/master/screenShot/5.jpg" width="33%">
<img src="https://github.com/WinWang/react-oepn-eye/blob/master/screenShot/6.jpg" width="33%">
</div>

<br/>

<div style="display: flex; flex-direction: row">
<img src="https://github.com/WinWang/react-oepn-eye/blob/master/screenShot/7.jpg" width="33%">
<img src="https://github.com/WinWang/react-oepn-eye/blob/master/screenShot/8.jpg" width="33%">
</div>

<br/>

<div style="display: flex; flex-direction: row">
<img src="https://github.com/WinWang/react-oepn-eye/blob/master/screenShot/9.jpg" width="33%">
<img src="https://github.com/WinWang/react-oepn-eye/blob/master/screenShot/10.jpg" width="33%">
</div>





###查看浏览器触发滚动元素
function findscroller(element){
element.onscroll=function () {
console.log(element)
}
Array.from(element.children).forEach(findscroller)
}
findscroller(document.body)
