import './home.less'
import React, {useEffect, useState, useLayoutEffect, useRef} from "react"
import {Image, List, NavBar, PullRefresh, Swiper} from 'react-vant'
import api from '../../network/apiservice'
import {nanoid} from 'nanoid';

const Home = () => {
    const [dataList, setDataList] = useState([]);
    const [bannerList, setBannerList] = useState([]);
    const [finished, setFinished] = useState(false);
    const [date, setDate] = useState("");

    useEffect(() => {
        console.log("<><><><>初始化useEffect")
    }, []);

    useLayoutEffect(() => {
        console.log("<><><><>初始化useLayoutEffect")
        getHomeData(true, "")
    }, [])


    const getHomeData = async (isRefresh, dateParams) => {
        console.log("日期》》》" + date + ">>>>>>" + dateParams)
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
                list.map(item => {
                    item.sid = nanoid()
                });
                if (isRefresh) {
                    let tempList = list.filter(item => {
                        if (item.type === "banner2") {
                            bannerList.push(item);
                            return false
                        } else return item.type !== "textHeader";
                    });
                    setBannerList(bannerList)
                    console.log("长度<><><><><><><><><><>" + bannerList.length)
                    setDataList(tempList);
                    console.log(">>>>>>>>刷新" + dataList.length)
                } else {
                    let tempList = dataList.concat(list)
                    setDataList(tempList)
                    setBannerList(bannerList)
                    console.log(">>>>>>>>加载")
                }
            })
    }


    const onRefresh = async () => {
        await setDate("");
        getHomeData(true, "")
    };

    const onLoadMore = () => {
        if (dataList.length > 0) {
            console.log("<><><><>加载")
            getHomeData(false, date)
        }
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

    return (
        <div className="vertical-layout">
            <NavBar title='首页' fixed={true} safeAreaInsetTop={true} leftArrow={null}/>
            <div className="top-empty-layout"/>
            <PullRefresh onRefresh={onRefresh}>
                {bannerList.length > 0 ? swiper() : null}
                <List finished={finished} onLoad={onLoadMore} offset={0}>
                    {dataList.map((item, index) => (
                        <div key={item.sid}>
                            <div className="item-wrap-layout">
                                <div className="image-wrap">
                                    <Image key={item.sid} src={item.data.cover.feed} fit={"cover"}/>
                                    <div className="left-tag"><span className="tag-text">{item.data.category}</span>
                                    </div>
                                </div>
                                <div className="horizontal-layout">
                                    <Image round height="50px" width="50px" src={item.data.author.icon}/>
                                    <div className="title-desc-wrap">
                                        <span className="item-bottom-title">{item.data.author.name}</span>
                                        <span className="item-bottom-desc">{item.data.author.description}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </List>
            </PullRefresh>
        </div>
    )
};

export default Home


