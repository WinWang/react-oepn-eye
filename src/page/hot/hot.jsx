import './hot.less'
import {NavBar, Tabs} from 'react-vant'
import {Outlet, useNavigate, useLocation} from 'react-router-dom'
import React, {useEffect, useState} from "react";

const Hot = () => {
    const tabs = ["周排行", "月排行", "总排行"];
    const [tabLayoutIndex, setTabLayoutIndex] = useState(0)
    const navigation = useNavigate()
    const location = useLocation()

    useEffect(() => {
        selectTab(location.state)
    }, [location])

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

    const selectTab = (routeState) => {
        if (routeState == null || routeState === "" || routeState === undefined) {
            return
        }
        if (routeState.indexOf("weekly") > -1) {
            setTabLayoutIndex(0)
        } else if (routeState.indexOf("monthly") > -1) {
            setTabLayoutIndex(1)
        } else if (routeState.indexOf('historical') > -1) {
            setTabLayoutIndex(2)
        }
    }


    return (
        <div className="hot-vertical-layout">
            <NavBar title='热门' fixed={true} safeAreaInsetTop={true} leftArrow={null}/>
            <div className="top-empty-layout"/>
            <Tabs active={tabLayoutIndex} onChange={(name, tabIndex) => onTabClick(tabIndex)}>
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
