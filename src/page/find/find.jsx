import './find.less'
import {useLayoutEffect, useEffect} from 'react'
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
        }
    }


    return (
        <div className="vertical-layout">
            <NavBar title='发现' fixed={true} safeAreaInsetTop={true} leftArrow={null}/>
            <div className="top-empty-layout"/>
            <Tabs defaultActive={0} onChange={(name, tabIndex) => tabClick(tabIndex)}>
                {tabs.map(item => (
                    <Tabs.TabPane key={item} title={item}/>
                ))}
            </Tabs>
            <Outlet/>
        </div>
    )
}
export default Find
