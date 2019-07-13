<template>
    <div class="detail">
        <div class="detail-add" v-show="flag">
            <div class="detail-up">
            </div>
            <div class="detail-down">
                <div class="detail-downt">
                    <img :src="info.goods_pic_url">
                    <div class="add-div">
                    <span class="add-newprice">￥{{info.cprice}}</span>
                    <span>请选择颜色尺码</span></div>
                    <span class="close" @click="close">X</span>
                </div>
                <div class="detail-downd">
                    <p>颜色</p>
                    <p><span @click="changecolor('黑色115')" :class="{colorsty:color=='黑色115'}">黑色115</span>
                    <span @click="changecolor('白色110')" :class="{colorsty:color==='白色110'}">白色110</span></p>
                    <p>尺码</p>
                    <p><span @click="changesize('36')" :class="{sizesty:size==='36'}">36</span>
                    <span @click="changesize('37')" :class="{sizesty:size==='37'}">37</span>
                    <span @click="changesize('38')" :class="{sizesty:size==='38'}">38</span>
                    <span @click="changesize('39')" :class="{sizesty:size==='39'}">39</span></p>
                    <div class="detail-last">
                        <div class="buynum">购买数量</div>
                        <div class="control">
                            <button @click="prevnum('prev')" :class="{symbol:symbol==='prev'}">-</button>
                            <span>{{number}}</span>
                            <button @click="addnum('add')" :class="{symbol:symbol==='add'}">+</button>
                        </div>
                    </div>
                    <div class="sure" @click="ok({id:sku.sa_id,color:color,size:size,count:number,
                    title:info.goods_title,flag:true,price:info.cprice,url:info.goods_origin_url})">确定</div>
                </div>
            </div>
        </div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img :src="info.goods_origin_url" class="detail-banner">
                    <span>1/5</span>
                </div>
                <div class="swiper-slide">
                    <img :src="info.goods_origin_url" class="detail-banner">
                    <span>2/5</span>
                </div>
                <div class="swiper-slide">
                    <img :src="info.goods_origin_url" class="detail-banner">
                    <span>3/5</span>
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div> 
        </div>
        <div class="pri">
            <span class="new-price">{{info.cprice}}</span>
            <del class="old-price">￥{{info.oprice}}</del>
            <i>{{info.join_number}}</i>
            <p>{{info.goods_title}}</p>
        </div>
        <section></section>
        <div class="zhekou">
            <div>
                <p>满两件5折</p>
            </div>
            <p>24小时发货</p>
        </div>
        <footer>
            <div><span @click="go('/home/shop/goodplace')">首页</span><i class="iconfont">&#xe502;</i></div>
            <div><span @click="go('/car')">购物车</span><i class="iconfont">&#xe504;</i></div>
            <div><span>立即购买</span></div>
            <div><span @click="add()">加入购物车</span></div>
        </footer>
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
import Swiper from "swiper"
import "swiper/dist/css/swiper.css"
import {mapStations,mapMutations} from 'vuex'
export default {
    methods:{
        go(path){
            this.$router.push(path)
        },
        ...mapMutations(['addshop']),
        ok(obj) {
            this.flag = false;
            Toast({
                    message:"加入购物车成功",
                    position:'center',
                    duration:2000
                })
            this.addshop(obj);
        },
        addnum(type) {
            this.number ++;
            this.symbol = type;
        },
        prevnum(type) {
            if(this.number==1){
                return;
            }
            this.number --;
            this.symbol = type;
        },
        close(){
            this.flag = false;
        },
        add() {
            this.flag = true;
        },
        changesize(type) {
            this.size = type;
        },
        changecolor(type) {
            this.color = type;
        }
    },
    data() {
        return {
            num:this.$route.params.id,
            info:[],
            number:1,
            flag :false,
            size: '36',
            color: "黑色115",
            symbol:'add'
        }
    },
    created() {
        this.$axios.get("/juanpi/api/getMemberAboutInfo",{
            params:{
                goods_id:this.num,
                sa_id:22314863,
                is_pt_goods:0,
                req_coupons_id:this.num
            }
        }).then((res)=>{
            this.info = res.data.skudata.info;
            this.sku = res.data.skudata.sku[0];
            console.log(this.sku)
        })
    },
    watch:{
        info() {
            this.$nextTick(()=>{
                var mySwiper = new Swiper ('.swiper-container', {
                    loop: true, // 循环模式选项
                    pagination: {
                    el: '.swiper-pagination',
                    },
                    
                })  
            })//延迟回调函数的执行，直到dom就绪
        }
    }
    
}
</script>
<style lang="scss">
@import '../assets/extend.scss';
.detail section{
    height: 0.21rem;
    background: #f4f4f8;
}
.detail-downt{
    height:1.56rem;
}
.detail{
    background: white;
    .detail-add{
        height: 100%;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 5;
        .detail-up{
            height: 40%;;
            background: rgba(0,0,0,0.2);
        }
        .detail-down{
            height: 60%;
            background: white;
            .detail-downd{
                padding: 0 0.2rem;
                font-size: 14px;
                .sure{
                    clear: both;
                    position: fixed;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    font-size: 18px;
                    height: 1.024rem;
                    line-height: 1.024rem;
                    color: #fff;
                    text-align: center;
                    background: #ff464e;
                }
                .detail-last{
                    padding-top: 0.5rem;
                    font-size: 14px;
                    .buynum{
                        float: left;
                    }
                    .control{
                        float:right;
                        span{
                            padding: 0 0.38rem;
                        }
                        .symbol{
                            color: $active;
                        }
                        button{
                            font-weight: 600;
                            width: 0.64rem;
                            height: 0.64rem;
                            line-height: 0.64rem;
                            background: #f7f7f7;
                            color: #dbdbdb;
                            border: none;
                            text-align: center;
                        }
                    }
                }
                p{
                    padding: 0.05rem 0;
                    span{
                        border: 1px solid #000;
                        display: inline-block;
                        margin-right: 0.2rem;
                        margin-bottom: 0.2rem;
                        text-align: center;
                        line-height: 0.66rem;
                        height: 0.66rem;
                        width: 2.12rem;
                    }
                    
                    .colorsty{
                        color: white;
                        background: $active;
                        border: 1px solid $active;
                    }
                    .sizesty{
                        color: white;
                        background: $active;
                        border: 1px solid $active;
                    }
                }
            }
            .add-div{
                margin-left: 0.2rem;
                float: left;
                display: flex;
                flex-direction: column;
            }
            img{
                float: left;
                vertical-align: middle;
                width: 2rem;
                margin-top: -1rem;
                margin-left: 0.2rem;
            }
            .add-newprice{
                margin-top: 0.1rem;
                color: $active;
                font-size: 18px;

            }
            .close{
                float: right;
                font-size: 22px;
                margin-right: 0.5rem;
                color: #999;
            }
        }
    }
}
.detail .pri{
    padding: 0.26rem 0.3rem;
    margin-bottom: 0.21rem;
}
.detail div img{
    width: 7.5rem;
}
.detail .zhekou{
    padding:0 0.3rem;
}
.detail .zhekou div,.detail .zhekou p{
    height: 0.96rem;
    line-height: 0.96rem;
}
.detail .zhekou div p{
    border-bottom:1px solid #f4f4f8;
}
.detail .pri p{
    font-size: 18px;
    padding-top: 0.3rem;
}
.detail .pri i{
    float: right;
}
.detail .pri .new-price{
    font-size: 20px;
    color: $active;
}
.detail .pri .old-price{
    color: $span;
}
.detail footer{
    display: flex;
    align-items: center;
}
.detail footer div{
    display: flex;
    flex-direction: column;
    text-align: center;
}
.detail footer{
    position: fixed;
    bottom: 0;
    width: 100%;
    background: white;
    height: 0.96rem;
    box-sizing: border-box;
}
.detail footer div:nth-of-type(1){
    border-right: 1px solid #f4f4f8;
    flex:22%;
}
.detail footer div:nth-of-type(2){
    flex:22%;
    border-right: 1px solid #f4f4f8;
}
.detail footer div:nth-of-type(3){
    flex:26%;
}
.detail footer div:last-of-type{
    flex:30%;
    background: $active;
    height: 100%;
    line-height: 0.96rem;
    color: white;
}
.swiper-container .swiper-wrapper .swiper-slide .detail-banner{
    height: 100%;
}
.detail .swiper-slide{
    position: relative;
}
.detail .swiper-slide span{
    position: relative;
    top: -0.6rem;
    right: -6.5rem;
    color: white;
    background: rgba(0,0,0,0.8);
    width: 0.75rem;
    display: block;
    text-align: center;
}
</style>


