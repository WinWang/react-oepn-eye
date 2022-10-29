/***
 * 项目主页面
 */
import React, {useEffect, useState} from "react"
import "./main.less"
import {Tabbar} from 'react-vant'
import {FriendsO, HomeO, Search, SettingO} from '@react-vant/icons'
import {Outlet, useNavigate, useLocation} from 'react-router-dom'

const Main = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const [tabIndex, setTabIndex] = useState(0)//选中tab监听

    useEffect(() => {
        console.log("首页路由相关><><><><>" + location.pathname)
        selectTabIndex(location.pathname)
    }, [location])

    const changeTabRoute = (index) => {
        switch (index) {
            case 0:
                navigate("/main/home");
                break;

            case 1:
                navigate("/main/find");
                break;

            case 2:
                navigate("/main/hot");
                break;

            case 3:
                navigate("/main/mine");
                break
        }
    }

    const selectTabIndex = (routeName) => {
        if (routeName.indexOf("/main/home") > -1) {
            setTabIndex(0)
        } else if (routeName.indexOf("/main/find") > -1) {
            setTabIndex(1)
        } else if (routeName.indexOf('/main/hot') > -1) {
            setTabIndex(2)
        } else if (routeName.indexOf('/main/mine') > -1) {
            setTabIndex(3)
        }
    }

    return (
        <div className="main-vertical-layout">
            <div className="main_content_layout">
                <Outlet/>
            </div>
            <div style={{height: "50px"}}></div>
            <div className="main_bottom">
                <Tabbar value={tabIndex} onChange={v => {
                    changeTabRoute(v)
                }}>
                    <Tabbar.Item icon={<HomeO/>}>首页</Tabbar.Item>
                    <Tabbar.Item icon={<Search/>}>发现</Tabbar.Item>
                    <Tabbar.Item icon={<FriendsO/>}>热门</Tabbar.Item>
                    <Tabbar.Item icon={<SettingO/>}>我的</Tabbar.Item>
                </Tabbar>
            </div>
        </div>
    )
};
export default Main