import './find.less'
import React, {useLayoutEffect} from 'react'
import {Outlet, useNavigate} from 'react-router-dom'
import {NavBar, Tabs} from 'react-vant'

const Find = () => {
    const tabs = ["关注", "分类", "专题"];
    const navigate = useNavigate();

    useLayoutEffect(() => {

    }, [])

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
            <NavBar title='发现' safeAreaInsetTop={true} leftArrow={null} style={{potistion: "absolute", top: "0"}}/>
            <Tabs defaultActive={0} onChange={(name, tabIndex) => tabClick(tabIndex)}
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
