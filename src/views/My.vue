<template>
    <div class="grzx-dagezi">
        <div class=grzx>
            <span class="iconfont">&#xe6f3;</span>
            <span >个人中心</span>
            <span></span>
        </div>
        <div class="denglu">
            <span>注册</span>
            <span>|</span>
            <span @click="jump">登录</span>
        </div>
        <div class="dingdan">
            <span>我的订单</span>
            <span>全部订单</span>
        </div>
        <div class="fukuan">
            <ul>
               <li>
                   <span class="iconfont">&#xe60a;</span><br>
                   <span>代付款</span>
                   </li>
               <li>
                   <span class="iconfont">&#xeb1d;</span><br>
                   <span>待成团</span>
                   </li>
               <li>
                   <span class="iconfont">&#xe86b;</span><br>
                   <span>待收货</span>
                   </li>
               <li>
               <span class="iconfont">&#xe6c2;</span><br>
                   <span>退款/售后</span>               
               </li>
            </ul>
        </div>
        <div class="wdyhj">
            <span>我的优惠卷</span>
            <span></span>
        </div>
         <div class="wdyhj">
            <span>我的收藏</span>
            <span></span>
        </div>
         <div class="wdyhj">
            <span>我的拼团</span>
            <span></span>
        </div>
        <div class="wdyhj">
            <span>我的面单卷</span>
            <span>0张</span>
        </div>
        <div class="wdyhj">
            <span>借钱</span>
            <span>新用户免费领1000元</span>
        </div>
        <div class="tianjia-biankuang"></div>
         <div class="wdyhj">
            <span>客服中心</span>
            <span></span>
        </div>
         <div class="wdyhj">
            <span>关于卷皮</span>
            <span></span>
        </div>
        <div class="tianjia-biankuang"></div>
        <div class="fanhui">
            <span>返回首页</span>
            <span>客户端</span>
            <span>电脑端</span>
        </div>
        <div class="qianjinding"></div>
    </div>
</template>

<script>
export default {
 methods:{
        jump(id){
             console.log(id);
            this.$router.push("/denglu")
        }
}
}
</script>

<style scoped>
    .fanhui{
        display: flex;
        text-align: center;
        background: #ffffff;
    }
     .fanhui span{
        flex: 1;
    }
    .grzx{
        width: 100%;
        height: .88rem;
        background: rgb(250, 119, 119);
        display: flex;
        justify-content: space-between;
        font-size: .4rem;
        line-height: .88rem;
        color: aliceblue;
    }
    .grzx .iconfont{
        padding-left: .3rem;
        font-size: .44rem;
    }
    .grzx span:nth-child(3){
        padding-right: .3rem;
    }
    .denglu{
        width: 100%;
        height: 2rem;
        background: rgb(250, 119, 119);
        text-align: center;
        font-size: .44rem;
        color: aliceblue;
        line-height: 2rem;
    }
    .denglu a{
        color: aliceblue;
    }
    .denglu span{
    margin-left: .4rem;
    margin-right: .4rem;
    }
    .dingdan{
        width: 100%;
        height: .96rem;
        display: flex;
        justify-content: space-between;
        line-height: .96rem;
        font-size: .3rem;
        border-bottom:.005rem solid #ebebeb; 
        background: #ffffff;
    }
     .dingdan span:nth-child(1){
         padding-left: .3rem;
         color: #333333;
     }
     .dingdan span:nth-child(2){
         padding-right: .3rem;
         color: #999999;
     }
     .fukuan{
         width: 100%;
         height: 1.58rem;
        text-align: center;
        background: #ffffff;
        color: #666;
        border-bottom: #ebebeb solid .2rem;
     }
     .fukuan ul li{
         width: 25%;
         float: left;
         padding-top: .3rem;
     }
     .fukuan ul li .iconfont{
         font-size: .56rem;
     }
     .wdyhj{
         width: 100%;
         height: .96rem;
         display: flex;
         justify-content:space-between;
         line-height: .96rem;
         font-size: .3rem;
         color: #333333;
         background: #ffffff;
         border-bottom:.005rem solid #ebebeb; 
     }
     .wdyhj span:nth-child(1){
        padding-left: .3rem;
     }
      .wdyhj span:nth-child(2){
        padding-right: .3rem;
        color: #999999;
     }
     .tianjia-biankuang{
        border-bottom: #ebebeb solid .2rem;
     }
     .qianjinding{
         height: 1rem;
     }
</style>