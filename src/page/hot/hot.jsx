import './hot.less'
import {NavBar, Tabs} from 'react-vant'
import {Outlet, useNavigate,useNavigation} from 'react-router-dom'
import React from "react";

const Hot = () => {
    const tabs = ["周排行", "月排行", "总排行"];
    const navigation = useNavigate()


    const onTabClick = (index) => {
        switch (index) {
            case 0:
                navigation("/main/hot/rank", {
                    state: "weekly",
                    replace: true
                });
                break

            case 1:
                navigation("/main/hot/rank", {
                    state: "monthly",
                    replace: true
                });
                break

            case 2:
                navigation("/main/hot/rank", {
                    state: "historical",
                    replace: true
                });
                break;
        }

    }


    return (
        <div className="hot-vertical-layout">
            <NavBar title='热门' fixed={true} safeAreaInsetTop={true} leftArrow={null}/>
            <div className="top-empty-layout"/>
            <Tabs defaultActive={0} onChange={(name, tabIndex) => onTabClick(tabIndex)}>
                {tabs.map(item => (
                    <Tabs.TabPane key={item} title={item}/>
                ))}
            </Tabs>
            <div className="outlet-wrap">
                <div>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}
export default Hot
