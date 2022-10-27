import React, {useState, useLayoutEffect} from 'react'
import {PullRefresh, List, Image, NavBar} from 'react-vant'

// 模拟异步请求
async function getData(throwError) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (throwError) {
                reject(new Error('error'));
            }
            resolve(Array.from({length: 10}, (_, i) => i));
        }, 2000);
    });
}


const Mine = () => {

    const [list, setList] = useState([]);

    useLayoutEffect(() => {

    }, []);


    const refresh = () => {

    };

    const onLoadMore = async () => {
        const data = await getData();
        console.log("><><><><><加载")
        setList((v) => [...v, ...data]);
    };


    return (
        <div className="mine-vertical-layout">
            <NavBar title='发现' safeAreaInsetTop={true} leftArrow={null} style={{potistion: "absolute", top: "0"}}/>
            <PullRefresh onRefresh={refresh}>
                <List onLoad={onLoadMore}>
                    {list.map((_, i) => (
                        <Image key={i} src={"https://img.yzcdn.cn/vant/cat.jpeg"}/>
                    ))}
                </List>
            </PullRefresh>
        </div>
    )
}
export default Mine
