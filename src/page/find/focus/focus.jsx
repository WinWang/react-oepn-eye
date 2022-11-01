import './focus.less'
import api from '../../../network/apiservice'
import React, {useEffect, useState} from 'react'
import {Divider, Image, List, PullRefresh} from 'react-vant'
import {useNavigate, useLocation} from "react-router-dom";
import TopBar from "../../../component/topbar";

const Focus = () => {
    const [dataList, setDataList] = useState([]);
    const [start, setStart] = useState(0);
    const [showTitleBar, setShowTitleBar] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        setShowTitleBar(location.state)
    }, [location.state]);

    const getFocusData = async (refresh, startNum) => {
        await api.getFocusData(startNum).then(res => {
            if (refresh) {
                setDataList(() => [...res.itemList])
            } else {
                setDataList((v) => [...v, ...res.itemList])
            }
        })
    };

    const onLoadMore = async () => {
        setStart((v) => v + 1);
        await getFocusData(false, start + 1);
    };

    const refresh = async () => {
        setStart(0);
        await getFocusData(true, 0);
    };

    const onItemClick = (item) => {
        navigate("/videoDetail", {
                state: {
                    "videoUrl": item.data.playUrl,
                    "videoId": item.data.id
                }
            }
        )
    }


    return (
        <div className="focus-vertical-layout">
            {showTitleBar ? <div className="focus-top-inner-wrap">
                <TopBar title={"关注"} fixed={true}/>
                <div className="top-empty-layout"/>
            </div> : null}
            <PullRefresh onRefresh={refresh}>
                <List onLoad={onLoadMore}>
                    {dataList.map((item, index) => (
                        <div key={index} className="focus-item-vertical-layout">
                            <div className="focus-horizontal-layout">
                                <Image round height="50px" width="50px" src={item.data.header.icon}/>
                                <div className="title-desc-wrap">
                                    <span className="item-bottom-title">{item.data.header.title}</span>
                                    <span className="item-bottom-desc">{item.data.header.description}</span>
                                </div>
                            </div>
                            <div className="focus-horizontal-layout">
                                {item.data.itemList.map((itemx, indexInner) => (
                                    <div key={indexInner} className="bottom-wrap-layout" onClick={() => {
                                        onItemClick(itemx)
                                    }}>
                                        <div className="img-wrap">
                                            <Image src={itemx.data.cover.feed}/>
                                            <div className="left-tag"><span
                                                className="tag-text">{itemx.data.category}</span></div>
                                        </div>
                                        <span className="bottom-title">{itemx.data.title}</span>
                                        <span className="bottom-desc">{itemx.data.description}</span>
                                    </div>
                                ))}
                            </div>
                            <Divider/>
                        </div>
                    ))
                    }
                </List>
            </PullRefresh>
        </div>
    )
};
export default Focus