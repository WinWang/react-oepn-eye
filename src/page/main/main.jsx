/***
 * 项目主页面
 */
import React from "react"
import "./main.less"
import {Divider, Tabbar} from 'react-vant'
import {FriendsO, HomeO, Search, SettingO} from '@react-vant/icons'
import {Outlet, useNavigate} from 'react-router-dom'


const Main = () => {
    const navigate = useNavigate();
    // 定义state变量
    // const [selectIndex, setSelectIndex] = React.useState(0)

    function changeTabRoute(index) {
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


    return (
        <div className="main-vertical-layout">
            <div className="main_content_layout">
                <div>
                    <Outlet/>
                </div>
            </div>
            <div>
                <Tabbar onChange={v => {
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