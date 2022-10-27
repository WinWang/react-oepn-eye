import './hot.less'
import {NavBar, Tabs} from 'react-vant'
import {Outlet} from 'react-router-dom'

const Hot = () => {
    const tabs = ["周排行", "月排行", "总排行"];

    return (
        <div className="hot-vertical-layout">
            <NavBar title='热门' fixed={true} safeAreaInsetTop={true} leftArrow={null}/>
            <div className="top-empty-layout"/>
            <Tabs defaultActive={0} onChange={(name, tabIndex) => {
            }}>
                {tabs.map(item => (
                    <Tabs.TabPane key={item} title={item}/>
                ))}
            </Tabs>

            <div className="parent">
                <div className="item-1">
                    <div className="child">1</div>
                </div>
                <div className="item-2">
                    <div className="child">2</div>
                </div>
                <div className="item-3">
                    <div className="child">3</div>
                </div>
            </div>


        </div>
    )
}
export default Hot
