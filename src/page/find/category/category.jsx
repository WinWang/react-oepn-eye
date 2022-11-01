import './category.less'
import React, {useEffect, useLayoutEffect} from 'react'
import {Grid, GridItem, Image, PullRefresh} from 'react-vant'
import api from '../../../network/apiservice'
import {Observer, useLocalObservable} from "mobx-react-lite";
import {useNavigate, useLocation} from "react-router-dom";
import TopBar from "../../../component/topbar";

/**
 * 分类页面
 * @returns {*}
 * @constructor
 */

const Category = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const data = useLocalObservable(() => ({
        datas: [],
        showTitleBar: false,
        setShowTitleBar(show) {
            this.showTitleBar = show
        },
        setDatas(datalist) {
            this.datas = datalist
        }
    }))

    useEffect(() => {
        data.setShowTitleBar(location.state)
    }, [location.state])

    useLayoutEffect(() => {
        getCategoryData()
    }, [])

    const getCategoryData = () => {
        api.getCategoryData().then(res => {
            // setDataList(res)
            data.setDatas(res)
            // console.log(data.dataList.length + ">>>>>>>这是他的长度")
        })
    }

    const refresh = async () => {
        await getCategoryData()
    }

    return (
        <Observer>
            {
                (() => (
                    <div className="cate-vertical-layout">
                        {data.showTitleBar ? <div className="inner-wrap">
                            <TopBar title={"分类"} fixed={true}/>
                            <div className="top-empty-layout"/>
                        </div> : null}
                        <PullRefresh onRefresh={refresh}>
                            <Grid square columnNum={2} center={true}>
                                {
                                    data.datas.map((item, index) => (
                                        <GridItem key={index} onClick={() => {
                                            navigate("/categoryDetail", {
                                                state: {
                                                    id: item.id,
                                                    headImage: item.headerImage,
                                                    title: item.name
                                                }
                                            })
                                        }}>
                                            <div className="cate-img-wrap">
                                                <Image src={item.bgPicture} fit={"cover"}/>
                                                <span className="cate-home-title">{item.name}</span>
                                            </div>
                                        </GridItem>
                                    ))
                                }
                            </Grid>
                        </PullRefresh>
                    </div>
                ))
            }
        </Observer>
    )
};
export default Category