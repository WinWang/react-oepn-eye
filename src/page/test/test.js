import React from "react"
import "./test.less"
import {Swiper, Image} from 'react-vant'

class Test extends React.Component {

    constructor() {
        super();
        this.state = {
            images: [
                'https://img.yzcdn.cn/vant/apple-1.jpg',
                'https://img.yzcdn.cn/vant/apple-2.jpg',
                'https://img.yzcdn.cn/vant/apple-3.jpg',
                'https://img.yzcdn.cn/vant/apple-4.jpg',
                'https://img.yzcdn.cn/vant/apple-5.jpg',
                'https://img.yzcdn.cn/vant/apple-6.jpg',
                'https://img.yzcdn.cn/vant/apple-7.jpg',
                'https://img.yzcdn.cn/vant/apple-8.jpg',
            ]
        };
    }

    componentDidMount() {
        console.log("安装组件》》》")
        this.getHomeData()
    }

    componentWillUnmount() {

    }

    getHomeData() {
        this.$api.getHomeList("")
            .then(res => {
                this.$toast.success(">>>>>" + res)

            })
    }

    render() {
        return (
            <div className="demo-swiper">
                <Swiper>
                    {this.state.images.map((image) => (
                        <Swiper.Item key={image}>
                            <Image lazyload src={image}/>
                        </Swiper.Item>
                    ))}
                </Swiper>
            </div>
        )
    }
}

export default Test