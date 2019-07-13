<template>
    <div class="detail">
        <div class="swiper-container">
            <div class="swiper-wrapper" >
                <div class="swiper-slide">
                    <img :src="list.url" class="detail-banner">
                    <span>1/5</span>
                </div>
                <div class="swiper-slide">
                    <img :src="list.poi" class="detail-banner">
                    <span>2/5</span>
                </div>
                <div class="swiper-slide">
                    <img :src="list.qwe" class="detail-banner">
                    <span>3/5</span>
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div> 
        </div>
        <div class="pri" >
            <span class="new-price">{{list.qian}}</span>
            <del class="old-price">￥{{list.nan}}</del>
            <i>{{list.qiang}}</i>
            <p>{{list.name}}</p>
        </div>
        <section></section>
        <div class="zhekou">
            <div>
                <p>满两件5折</p>
            </div>
            <p>24小时发货</p>
        </div>
        <footer>
            <div><span>首页</span><i class="iconfont">&#xe502;</i></div>
            <div><span>购物车</span><i class="iconfont">&#xe504;</i></div>
            <div><span>立即购买</span></div>
            <div><span>加入购物车</span></div>
        </footer>
        <div class="dibu-taxian"></div>
    </div>
</template>
<script>
import Swiper from "swiper"
import "swiper/dist/css/swiper.css"
export default {
    data() {
        return {
            num:this.$route.params.id,
            list:''
        }
    },
    created() {
        this.$axios.get("http://localhost:4000/nanxx").then(res => {
        this.list = res.data[0];
        console.log(res);
      });
    },
    watch:{
        list() {
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
.detail{
    background: white;
    
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
