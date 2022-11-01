import './mine.less'
import React, {useEffect, useLayoutEffect} from "react";
import {Observer, useLocalObservable} from "mobx-react-lite";
import {Image, Dialog} from "react-vant";
import {useNavigate} from "react-router-dom";

const Mine = () => {
    const navigate = useNavigate()
    const data = useLocalObservable(() => ({}))

    useLayoutEffect(() => {

    }, [])

    useEffect(() => {

    }, [])

    const showAboutDialog = () => {
        Dialog.alert({
            title: '关于React-OpenEye',
            closeable: true,
            theme: 'round-button',
            message: 'https://github.com/WinWang/react-oepn-eye该项目是React版本开发的开眼App-web版本，' +
                '项目主体基于React18+React-Vant+Mobx+axios开发完成,非常适合新手了解和学习用React开发一款移动端App；该项目涉及' +
                'React移动端屏幕适配，axios网络拦截器的使用，React父子组件传参回调，Mobx6在React函数编程中的运用，React路由监听等等',
        })
    }

    return (
        <Observer>{
            () => (
                <div className="mine-vertical-layout">
                    <div className="mine-top-wrap">
                        <Image src={require('../../asset/back_mine.png')} height="300px"/>
                        <div className="mine-avatar">
                            <Image round src={require('../../asset/default_avatar.jpeg')}/>
                        </div>
                    </div>
                    <div className="mine-item-wrap" onClick={() => {
                        navigate("/focus", {
                            state: true
                        })
                    }}>
                        <Image src={require('../../asset/icon_focus.png')} height="25px" width="25px"/>
                        <span className="mine-item-text">关注</span>
                    </div>
                    <div className="app-divider-style"/>
                    <div className="mine-item-wrap" onClick={() => {
                        navigate("/category", {
                            state: true
                        })
                    }}>
                        <Image src={require('../../asset/icon_type.png')} height="25px" width="25px"/>
                        <span className="mine-item-text">分类</span>
                    </div>
                    <div className="app-divider-style"/>
                    <div className="mine-item-wrap" onClick={() => {
                        navigate("/topic", {
                            state: true
                        })
                    }}>
                        <Image src={require('../../asset/icon_topic.png')} height="25px" width="25px"/>
                        <span className="mine-item-text">专题</span>
                    </div>
                    <div className="app-divider-style"/>
                    <div className="mine-item-wrap" onClick={() => {
                        navigate("/hot")
                    }}>
                        <Image src={require('../../asset/icon_rank.png')} height="25px" width="25px"/>
                        <span className="mine-item-text">排行</span>
                    </div>
                    <div className="app-divider-style"/>
                    <div className="mine-item-wrap" onClick={() => {
                        showAboutDialog()
                    }}>
                        <Image src={require('../../asset/icon_about.png')} height="25px" width="25px"/>
                        <span className="mine-item-text">关于</span>
                    </div>
                    <div className="app-divider-style"/>

                </div>
            )
        }</Observer>
    )
}

export default Mine