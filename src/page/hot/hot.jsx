import './hot.less'
import {Tabs} from 'react-vant'
import {Outlet, useLocation, useNavigate} from 'react-router-dom'
import React, {useLayoutEffect, useState} from "react";
import TopBar from "../../component/topbar";

const Hot = () => {
    const tabs = ["周排行", "月排行", "总排行"];
    const [tabLayoutIndex, setTabLayoutIndex] = useState(0)
    const [showTitleBar, setShowTitleBar] = useState(false)
    const navigation = useNavigate()
    const location = useLocation()

    useLayoutEffect(() => {
        let routePath = location.pathname
        //因为二级子路由嵌套，跳转子路由会触发主路由，所以需要针对不同路由过滤，否则state字段里面的参数会异常
        if (routePath === "/main/hot/rank" || routePath === "/hot/rank") {
            selectTab(location.state.rankType)
            setShowTitleBar(location.state.showTitleBar)
        }
    }, [location])

    const onTabClick = (index) => {
        switch (index) {
            case 0:
                navigation("/main/hot/rank", {
                    state: {
                        "rankType": "weekly",
                        "showTitleBar": location.state.showTitleBar
                    },
                    replace: true
                });
                break

            case 1:
                navigation("/main/hot/rank", {
                    state: {
                        "rankType": "monthly",
                        "showTitleBar": location.state.showTitleBar
                    },
                    replace: true
                });
                break

            case 2:
                navigation("/main/hot/rank", {
                    state: {
                        rankType: "historical",
                        showTitleBar: location.state.showTitleBar
                    },
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
            <TopBar title='热门' fixed={true} placeholder={true} leftArrow={showTitleBar}/>
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
