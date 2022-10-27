import './category.less'
import React, {useState, useLayoutEffect} from 'react'
import {Grid, GridItem, PullRefresh, Image} from 'react-vant'
import api from '../../../network/apiservice'

/**
 * 分类页面
 * @returns {*}
 * @constructor
 */
const Category = () => {
    const [dataList, setDataList] = useState([])

    useLayoutEffect(() => {
        getCategoryData()
    }, [])

    function getCategoryData() {
        api.getCategoryData().then(res => {
            setDataList(res)
        })
    }

    const refresh = async () => {
        await getCategoryData()
    }


    return (
        <div className="cate-vertical-layout">
            <PullRefresh onRefresh={refresh}>
                <Grid square columnNum={2}>
                    {
                        dataList.map((item, index) => (
                            <GridItem>
                                <div className="img-wrap">
                                    <Image src={item.headerImage} fit={"cover"}/>
                                    <span className="ad-title">{item.name}</span>
                                </div>
                            </GridItem>
                        ))
                    }
                </Grid>
            </PullRefresh>
        </div>
    )
};
export default Category