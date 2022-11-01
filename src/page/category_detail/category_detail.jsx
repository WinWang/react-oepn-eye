import './category_detail.less'
import React, {useLayoutEffect} from "react";
import {useLocation, useNavigate} from 'react-router-dom'
import {Observer, useLocalObservable} from "mobx-react-lite";
import apiservice from "../../network/apiservice";
import {Image, List, PullRefresh} from "react-vant";
import TopBar from "../../component/topbar";

/**
 * 分类详情页面---该页面废弃State的使用，统一该用Mobx的使用
 * @returns {JSX.Element}
 * @constructor
 */
const CategoryDetail = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const catData = useLocalObservable(() => ({
        pageIndex: 0,
        typeId: "",
        headImg: "",
        title: "",
        setHeadImg(headImage) {
            this.headImg = headImage
        },
        setTitle(newTitle) {
            this.title = newTitle
        },
        setPageIndex(newPageIndex) {
            if (newPageIndex === 1) {
                this.pageIndex++
            } else {
                this.pageIndex = 0
            }
        },
        setTypeId(newTypeID) {
            this.typeId = newTypeID
        },
        dataList: [],
        setDataList(refresh, newList) {
            if (refresh) {
                this.dataList = newList
            } else {
                this.dataList = [...this.dataList, ...newList]
            }
        }
    }))

    useLayoutEffect(() => {
        catData.setTypeId(location.state.id)
        catData.setTitle(location.state.title)
        catData.setHeadImg(location.state.headImage)
        getCatDetailData(true)
    }, [])

    const getCatDetailData = async (refresh) => {
        let resData = await apiservice.getCategoryDetail(catData.typeId, catData.pageIndex)
        catData.setDataList(refresh, resData.itemList)
    }

    const refresh = async () => {
        catData.setPageIndex(0)
        await getCatDetailData(true)
    }

    const onLoadMore = async () => {
        catData.setPageIndex(1)
        await getCatDetailData(false)
    }

    return (
        <Observer>{
            () => (
                <div className="app-vertical-layout">
                    <TopBar title={catData.title} fixed={true}/>
                    <div className="top-empty-layout"/>
                    <div className="content_layout">
                        <Image src={catData.headImg} height="270px" fit={"cover"}/>
                        <PullRefresh onRefresh={refresh}>
                            <List onLoad={onLoadMore}>
                                {catData.dataList.map((item, index) => (
                                    <div key={index} className="item-wrap-layout" onClick={() => {
                                        navigate("/videoDetail", {
                                            state: {
                                                "videoUrl": item.data.playUrl,
                                                "videoId": item.data.id
                                            }
                                        })
                                    }}>
                                        <div className="image-wrap">
                                            <Image src={item.data.cover.feed} fit={"cover"}/>
                                            <div className="left-tag"><span
                                                className="tag-text">{item.data.category}</span>
                                            </div>
                                        </div>
                                        {item.data.author ?
                                            <div className="horizontal-layout">
                                                <Image round height="50px" width="50px" src={item.data.author.icon}/>
                                                <div className="title-desc-wrap">
                                                    <span className="item-bottom-title">{item.data.author.name}</span>
                                                    <span
                                                        className="item-bottom-desc">{item.data.author.description}</span>
                                                </div>
                                            </div> : null}
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

export default CategoryDetail