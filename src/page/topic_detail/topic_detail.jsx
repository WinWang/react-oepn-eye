import "./topic_detail.less"
import React, {useEffect, useLayoutEffect} from "react";
import {useLocation, useNavigate} from 'react-router-dom'
import {Observer, useLocalObservable} from "mobx-react-lite";
import {Image, List, NavBar, PullRefresh} from "react-vant";
import apiservice from "../../network/apiservice";
import ReactPlayer from "react-player";
import TopBar from "../../component/topbar";

const TopicDetail = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const data = useLocalObservable(() => ({
        id: "",
        title: "",
        dataList: [],
        headImage: "",
        desc: "",

        setId(newId) {
            this.id = newId
        },
        setTitle(newTitle) {
            this.title = newTitle
        },
        setDataList(newList) {
            this.dataList = newList
        },
        setHeadImage(image) {
            this.headImage = image
        },
        setDesc(descp) {
            this.desc = descp
        }
    }))

    useLayoutEffect(() => {
        data.setId(location.state)
        getTopicDetail()
    }, [location.state])

    useEffect(() => {

    }, [])

    const getTopicDetail = async () => {
        let resData = await apiservice.getTopicDetailData(data.id)
        data.setHeadImage(resData.headerImage)
        data.setTitle(resData.brief)
        data.setDesc(resData.text)
        data.setDataList(resData.itemList)
    }

    const refresh = async () => {
        await getTopicDetail()
    }

    return (
        <Observer>{
            () => (
                <div className="app-vertical-layout">
                    <TopBar title={data.title} fixed={true}/>
                    <div className="top-empty-layout"/>
                    <div className="topic-content-wrap">
                        <PullRefresh onRefresh={refresh}>
                            <div className="top-wrap">
                                <Image src={data.headImage} width="100%" height="200px" fit={"cover"}/>
                                <div className="top-title">{data.title}</div>
                                <div className="top-desc">{data.desc}</div>
                            </div>
                            <List finished={true}>
                                {data.dataList.map((item, index) => (
                                    <div className="topic-item-wrap">
                                        <ReactPlayer url={item.data.content.data.playUrl}
                                                     width='100%'
                                                     height='auto'
                                                     playing={false}
                                                     controls={true}
                                        />
                                        <div className="item-topic-title">{item.data.content.data.title}</div>
                                        <div className="item-topic-desc">{item.data.content.data.description}</div>
                                    </div>
                                ))}
                            </List>
                        </PullRefresh>
                    </div>
                </div>
            )
        }</Observer>
    )
}

export default TopicDetail