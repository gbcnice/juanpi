<template>
    <div class="shop-head"  v-gd="vis" dis="700">
        
    <div class="zong" >
      <img src="//jp.juancdn.com/jpwebapp/images/go_load_new.png">
    </div>
        <header :class="{'active-nav':active}">
            <a>
                <i class="iconfont">&#xe667;</i>
                <span>卷皮</span>
                <i>搜索</i>
            </a>
            <button class="iconfont">&#xe684;</button>
        </header>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in banner" :key="index">
                    <img :src="item">
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div> 
        </div>
        <section>  
            <router-link to="/last" class="shop-section">
                <i class="iconfont">&#xe74b;</i>
                <span>最后疯抢</span>
                </router-link>    
            <router-link to="/time" class="shop-section">
                <i class="iconfont">&#xe503;</i>
                <span>限时疯抢</span>
            </router-link>
            <router-link to="/logo" class="shop-section">
                <i class="iconfont">&#xe501;</i>
                <span>品牌特卖</span>
            </router-link>
            <router-link to="/supermarket" class="shop-section">
                <i class="iconfont">&#xe648;</i>
                <span>生活超市</span>
            </router-link>
        </section>
        <figure>
            <div v-for="(figitem,figindex) in figList" :key="figindex">
            <router-link to=""><img :src="figitem"></router-link>
            </div>
            <div class="figtwo">
                <router-link to=""><img :src="figtwo"></router-link>
                 <router-link to=""><img :src="figthree"></router-link>
            </div>
        </figure>
        <nav>
            <ul class="shop-nav-ul ding" v-if="vis.flag">
                <li @click="changeactive('place')"><router-link to="/home/shop/goodplace" :class="{'link-exact-active':active==='place'}">精选专场</router-link></li>
                <li @click="changeactive('one')"><router-link to="/home/shop/goodone" :class="{'link-exact-active':active==='one'}">精选单品</router-link></li>
            </ul>
            <ul class="shop-nav-ul" >
                <li @click="changeactive('place')"><router-link to="/home/shop/goodplace" :class="{'link-exact-active':active==='place'}">精选专场</router-link></li>
                <li @click="changeactive('one')"><router-link to="/home/shop/goodone" :class="{'link-exact-active':active==='one'}">精选单品</router-link></li>
            </ul>
            <div>
                <router-view></router-view>
            </div>
        </nav>
    </div>
</template>

<script>
import Swiper from "swiper"
import "swiper/dist/css/swiper.css"
export default {
    data() {
        return {
            banner:[],
            figList:[],
            figtwo:"",
            figthree:"",
            active:'place',
            vis:{
                flag:false
            }
        }
    },
    methods:{
        changeactive(type) {
            this.active = type;
            document.body.scrollTop  = 200;
        }
    },
    watch: {
        $route:{
            handler(newV){  // newV就是最新的this.$route
            if(newV.name == 'goodone'){
                this.active = 'one';
            }
            else{
                this.active = 'place';
            }
       
			},
			deep:true,
			immediate:true
		},
        banner() {
            this.$nextTick(()=>{
                var mySwiper = new Swiper ('.swiper-container', {
                    loop: true, // 循环模式选项
                    autoplay:{
                        delay:3000,
                        disableOnInteraction:false
                    },
                    //如果需要分页器
                    pagination: {
                    el: '.swiper-pagination',
                    },
                
                })  
            })//延迟回调函数的执行，直到dom就绪
        }
    },
    created() {
        this.$axios.get("http://localhost:3000/bannerList"
        ).then((res)=>{
            this.banner = res.data;
        })
        this.$axios.get("http://localhost:3000/figList"
        ).then((res)=>{
            this.figList = res.data[0].dataone;
            this.figtwo = res.data[0].datatwo;
            this.figthree = res.data[0].datathree;
        })
    },
}
</script>

<style lang="scss">
@import '../assets/extend.scss';
.shop-head{
  position: fixed;
  top: 0;
  left: 0;
  bottom: 1rem;
  right: 0;
  overflow: auto;
}
.swiper-container .swiper-wrapper img{
    height: 2.9rem;
    display: block;
}
.shop-head section{
    height: 1.67rem;
    @include w(1.87rem);
    @include h(1.67rem);
    background: white;
    display: flex;
    align-items: center;
    .shop-section{
        flex:1;
        text-align: center;
        display: flex;
        flex-direction: column;
        i{
            font-size: 30px;
        }  
    }
}
.shop-head header{
    height: 0.88rem;
    background: white;
    padding-left:0.3rem;
    display: flex;
    align-items: center;
    a{
        border-radius: 10px;
        @include h(0.59rem);
        line-height: 0.59rem;
        background: #f2f2f2;
        flex: 1;
        span{
            color: $active;
        }
        i{
            padding: 0 0.1rem;
        }
    }
    button{
        width: 0.9rem;
        @include h(0.9rem);
        background: none;
        border: none;
        font-size: 20px;
        color: rgb(153,153,153);
    }
}
.shop-section:nth-of-type(1) i{
    color: #FFB320;
}
.shop-section:nth-of-type(2) i{
    color: #FF6775;
}
.shop-section:nth-of-type(3) i{
    color: #FF8F66;
}
.shop-section:nth-of-type(4) i{
    color: #46D3FB;
}
figure img{
    float: left;
}
figure img:nth-of-type(1){
    width: 50%;
}
figure .figtwo{
    clear: both;
}
figure .figtwo img{
    width: 100%;
}
figure .figtwo a:nth-of-type(1){
    display: block;
    height: 1.48rem;
}
figure .figtwo a:nth-of-type(2){
    height: 0.95rem;
    display: block;
}
figure .figtwo a:nth-of-type(2) img{
    margin: 0.21rem 0;    
}
.shop-nav-ul{
    background: white;
    width: 100%;
    display: flex;
}
.shop-nav-ul li{
    font-size: 14px;
    padding:0 0.21rem; 
    height: 0.88rem;
    line-height: 0.88rem;
    float: left;
}
.link-exact-active{
    color: $active;
    border-bottom: 2px solid $active;
    height: 0.86rem;
    display: block;
}
.ding{
    position: fixed;
    top: 0;
}
</style>