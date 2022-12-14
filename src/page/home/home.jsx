import './home.less'
import React, {useEffect, useState, useLayoutEffect} from "react"
import {Image, List, NavBar, PullRefresh, Swiper} from 'react-vant'
import {useNavigate} from "react-router-dom";
import api from '../../network/apiservice'
import {nanoid} from 'nanoid';

const Home = () => {
    const navigate = useNavigate()
    const [dataList, setDataList] = useState([]);
    const [bannerList, setBannerList] = useState([]);
    const [finished, setFinished] = useState(false);
    const [date, setDate] = useState("");

    useEffect(() => {
        console.log("<><><><>初始化useEffect")
    }, []);

    useLayoutEffect(() => {
        console.log("<><><><>初始化useLayoutEffect")
    }, [])


    const getHomeData = async (isRefresh, dateParams) => {
        await api.getHomeList(dateParams)
            .then(res => {
                let list = res.issueList[0].itemList;
                let nextPageUrl = res.nextPageUrl;
                let split = nextPageUrl.split("?");
                let split2 = split[1];
                let split3 = split2.split("&");
                let split4 = split3[0].split("=");
                if (split4[1] === "" || split4[1] === undefined) {
                    setFinished(true)
                }
                setDate(split4[1]);
                if (isRefresh) {
                    setBannerList(() => [])
                }
                //过滤符合条件的数据
                let filterDataList = list.filter(item => {
                    item.sid = nanoid();
                    if (item.type === "banner2") {
                        setBannerList((v) => [...v, item]);
                        return false
                    } else return item.type !== "textHeader";
                });
                if (isRefresh) {
                    setDataList(filterDataList);
                    console.log(">>>>>>>>刷新")
                } else {
                    setDataList((v) => [...v, ...filterDataList]);
                    console.log(">>>>>>>>加载")
                }
            })
    }


    const onRefresh = async () => {
        console.log("<><><><>刷新")
        setDate("");
        await getHomeData(true, "")
    };

    const onLoadMore = async () => {
        console.log("<><><><>加载")
        await getHomeData(false, date)
    };

    const swiper = () => {
        return <Swiper>
            {bannerList.map((item, index) => {
                return <Swiper.Item key={index}>
                    <Image src={item.data.image}/>
                </Swiper.Item>
            })}
        </Swiper>
    };

    const clickItem = (item) => {
        navigate("/videoDetail", {
            state: {
                "videoUrl": item.data.playUrl,
                "videoId": item.data.id
            }
        })
    }

    return (
        <div className="home-vertical-layout">
            <NavBar title='首页' fixed={true} safeAreaInsetTop={true} leftArrow={null}/>
            <div className="top-empty-layout"/>
            <PullRefresh onRefresh={onRefresh}>
                {bannerList.length > 0 ? swiper() : null}
                <List finished={finished} onLoad={onLoadMore} offset={0}>
                    {dataList.map((item, _) => (
                        <div key={item.sid} className="item-wrap-layout" onClick={() => {
                            clickItem(item)
                        }}>
                            <div className="image-wrap">
                                <Image key={item.sid} src={item.data.cover.feed} fit={"cover"}/>
                                <div className="left-tag"><span className="tag-text">{item.data.category}</span></div>
                            </div>
                            {item.data.author ?
                                <div className="horizontal-layout">
                                    <Image round height="50px" width="50px" src={item.data.author.icon}/>
                                    <div className="title-desc-wrap">
                                        <span className="item-bottom-title">{item.data.author.name}</span>
                                        <span className="item-bottom-desc">{item.data.author.description}</span>
                                    </div>
                                </div> : null}
                        </div>
                    ))}
                </List>
            </PullRefresh>
        </div>
    )
};
export default Home


