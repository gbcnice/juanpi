<template>
    <div class="fenlei-luyou">
        <div class="fenlei-sousuo">
            <button>
                <span class="iconfont">&#xe667;&nbsp;搜索商品</span>
            </button>
        </div>
    <div class="fenlei-zhuye">
        <ul>
      <li><router-link to="/home/fenlei/nvzhuang">女装</router-link></li>
      <li><router-link to="/home/fenlei/nanzhuang">男装</router-link></li>
      <li><router-link to="/home/fenlei/muying">母婴</router-link></li>
      <li><router-link to="/home/fenlei/xiezi">鞋子</router-link></li>
      <li><router-link to="/home/fenlei/xiangbao">箱包</router-link></li>
      <li><router-link to="/home/fenlei/jvjiabaihuo">居家百货</router-link></li>
      <li><router-link to="/home/fenlei/jiadianshuma">家电数码</router-link></li>
      <li><router-link to="/home/fenlei/neiyi">内衣配饰</router-link></li>
      <li><router-link to="/home/fenlei/meizhuang">美妆</router-link></li>
      <li><router-link to="/home/fenlei/yundong">运动户外</router-link></li>
      <li><router-link to="/home/fenlei/meishi">美食</router-link></li>
      <li><router-link to="/home/fenlei/chepin">车品文娱</router-link></li>
      <li><router-link to="/home/fenlei/tongxun">通讯旅游</router-link></li>
      <li></li>
      <li></li>
        </ul>
      <router-view />
    </div>
    <div class="fenlei-luyouxiamian"></div>
    <!-- <div class="dibu-qianjinding"></div> -->
    </div>
    
</template>
<style scoped>
    .fenlei-luyou .fenlei-zhuye ul{
        width: 1.85rem;
        position: absolute;
         background: rgb(236, 236, 236);
    }
    .fenlei-zhuye li{
        width: 1.85rem;
        height: 0.91rem;
        text-align: center;
        line-height: 0.91rem;
       
    }
    body{
        background: #fff;
    }
    .router-link-exact-active  {
        color: #fff;
    }
    .fenlei-sousuo{
        width: 100%;
        height: .7172rem;
        text-align: center;
        line-height: .7rem;
    }
    button{
        border: 1px solid #ccc; 
        border-radius: 5px;
        border: 0px;
        width: 6.1838rem;
        height: .48rem;
        margin-top:.1rem; 
        background: #fff;
        
    }
    .fenlei-sousuo button span{
        
        padding-right:60%; 
        color: #999;
    }
    /* .dibu-qianjinding{
        height: 1rem;
        bottom: 0;
    } */
</style>

