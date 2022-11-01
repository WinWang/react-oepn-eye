import './find.less'
import React, {useEffect} from 'react'
import {Outlet, useNavigate, useLocation} from 'react-router-dom'
import {NavBar, Tabs} from 'react-vant'
import {useState} from "react";

const Find = () => {
    const tabs = ["关注", "分类", "专题"];
    const [tabIndex, setTabIndex] = useState(0)
    const navigate = useNavigate();
    const location = useLocation()
    useEffect(() => {
        reselectTab(location.pathname)
    }, [location.pathname])

    /**
     * 重新选中tab的操作-路由跳转回来，本来想保存路由状态，但是React18官方的Offscreen目前还未放开stable版本，只能等待官方更新
     */
    const reselectTab = (routeName) => {
        if (routeName.indexOf("/main/find/focus") > -1) {
            setTabIndex(0)
        } else if (routeName.indexOf("/main/find/category") > -1) {
            setTabIndex(1)
        } else if (routeName.indexOf('/main/find/topic') > -1) {
            setTabIndex(2)
        }
    }

    function tabClick(name) {
        switch (name) {
            case 0:
                console.log("/main/find/focus" + name);
                navigate("/main/find/focus");
                break;

            case 1:
                console.log("/main/find/category" + name);
                navigate("/main/find/category");
                break;

            case 2:
                console.log("/main/find/topic" + name);
                navigate("/main/find/topic");
                break;
            default:
                console.log("/main/find/focus" + name);
                navigate("/main/find/focus");
                break;
        }
    }

    return (
        <div className="find-vertical-layout">
            <NavBar title='发现' safeAreaInsetTop={true} leftArrow={null}
                    fixed={true} placeholder={true}
                    border={null}/>
            <Tabs active={tabIndex} defaultActive={0} onChange={(name, tabIndex) => tabClick(tabIndex)}
                  style={{position: "absolute", left: "0px", top: "45px"}}>
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
export default Find
