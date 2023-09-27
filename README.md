# React18+React+Vant+Mobx+axios(React版本开眼App OpenEye)

该项目是React版本开发的开眼App-web版本，主要目的是用来学习上手React项目实践，接口和UI基本参照以前开发的Flutter
OpenEye项目主体基于React18+React-Vant+Mobx+axios开发完成,非常适合新手了解和学习用React开发一款移动端App；该项目涉及
React移动端屏幕适配，axios网络拦截器的使用，React父子组件传参回调，Mobx6在React函数编程中的运用，React路由监听等等

## 其他一些学习练手的项目

**Flutter版本**OpenEye链接(getx+retrofit+dio+jsonserialize+自定义控件demo)：https://github.com/WinWang/open_eye  <br>

**Flutter版本**的音乐播放App链接(getx+retrofit+dio)：https://github.com/WinWang/music_listener <br>

**ReactNative版本**的开眼App链接(ReactNative-0.72)：https://github.com/WinWang/RNOpenEye <br>

**Vue2版本**WanAndroid链接(Vue2+vuex+vant+axios)：https://github.com/WinWang/Vue-WanAndroid  <br>

**Vue3版本**WanAndroid链接(vue3+typeScript+pinia+vant+vite)：https://github.com/WinWang/Vue3-wanAndroid  <br>

**Android组件化项目**ReadingGallery链接(jetpack+kotlin+koin+couroutine)：https://github.com/WinWang/ReadingGallery <br>

**Android组件化项目初始化工具**ApplicationInit链接(gradle-plugin+注解APT+ASM)：https://github.com/WinWang/ApplicationInit <br>

<br/>

## 应用截图  <br/>

<div style="display: flex; flex-direction: row"> 
<img src="https://s2.loli.net/2023/04/12/l7Ud1b4wSfDaqEy.jpg" width="30%">
<img src="https://s2.loli.net/2023/04/12/n2Cuasc8hQfgVbz.jpg" width="30%">
<img src="https://s2.loli.net/2023/04/12/q5kZ4K9n6HIEmrN.jpg" width="30%">
</div>

<br/>

<div style="display: flex; flex-direction: row"> 
<img src="https://s2.loli.net/2023/04/12/Yzb1L7vVgaS5pjA.jpg" width="30%">
<img src="https://s2.loli.net/2023/04/12/UYsFxzyrug3A47O.jpg" width="30%">
<img src="https://s2.loli.net/2023/04/12/qjX5aeSPgxyLrhG.jpg" width="30%">
</div>

<br/>

<div style="display: flex; flex-direction: row"> 
<img src="https://s2.loli.net/2023/04/12/GIC5jKTw7Ji1HRA.jpg" width="30%">
<img src="https://s2.loli.net/2023/04/12/n2UbskShVJWGlZY.jpg" width="30%">
<img src="https://s2.loli.net/2023/04/12/iaKM7Dcy3GQPSIf.jpg" width="30%">
</div>

<br/>

<div style="display: flex; flex-direction: row"> 
<img src="https://s2.loli.net/2023/04/12/DemHLr35sIuJ4Zo.jpg" width="30%">
</div>

<br/>

## github托管图片  <br/>
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
