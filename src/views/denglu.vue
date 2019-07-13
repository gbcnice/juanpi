<template>
    <div class="denglu-ym">
        <div class="toubu">
         <span class="iconfont" v-on:click="back">&#xe722;</span>
        <span>个人中心</span>
        <span>注册</span>   
        </div>
        <div class="denglu">
            <span>卷起账号登录</span>
        </div>
        <div class="inptkuang">
            <input type="text" placeholder="手机号/邮箱/用户名">
            <input type="text" placeholder="密码" ><br>
            <button>登 录</button>
        <div class="wjma">
            <div class="mdl">
                <img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/label_on.png?63443b91-1&sv=449ce9ee">
                <span>两周内免登录</span>
            </div>
            <span>忘记密码 ?</span>
        </div>
        </div>
        <div class="dsf-dg">
        <div class="dsf">
           <div class="kuaisu">
               <span>第三方账号快速登录</span>
           </div>
           <div class="tubiao">
               <img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/tencent.png?29cf7667-1&sv=449ce9ee">
               <img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/taobao.png?b6b2268f-1&sv=449ce9ee">
               <img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/sina.png?e6100489-1&sv=449ce9ee">
           </div>
           <div class="jiance">
               <ul>
                   <li>
                       <span class="iconfont">&#xe6d8;</span>
                       <span>全场包邮</span>
                   </li>
                   <li>
                       <span class="iconfont">&#xe667;</span>
                       <span>100%人工质检</span>
                   </li>
                   <li>
                       <span class="iconfont">&#xf0036;</span>
                       <span>7天放心退</span>
                   </li>
               </ul>
           </div>
        </div>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
    back(){
        this.$router.go(-1);//返回上一层
    },
},
}
</script>

<style>
     .dsf-dg .dsf .jiance ul li{
         margin-top: .3rem;
         text-align: center;
         width: 33.33%;
        float: left;
        color: #c2c2c2;
        font-size: .22rem;
    }
    .dsf-dg .dsf .jiance{
        border-top: 1px solid #dbdbdb;
        height: .7rem;
    }
    .dsf-dg .dsf .tubiao{
        margin-bottom: .4rem;
        text-align: center;
        margin-top: .6rem;
    }
    .dsf-dg .dsf .tubiao img{
        background: #fff;
        width: .96rem;
        height: .96rem;
        margin-left:.45rem; 
        margin-right:.45rem; 
    }

    .dsf-dg .dsf .kuaisu{
        text-align: center;
        height: .31rem;
    }
    .dsf-dg{
        margin-top: 1.04rem;
        width: 100%;
        height: 3.11rem;
    }
    .dsf{
        background: #fff;
        width: 90%;
        height: 3.11rem;
        margin: 0 auto;
        }
    .toubu{
        width: 100%;
        height: .88rem;
        display: flex;
        justify-content: space-between;
        line-height: .88rem;
        font-size: .3rem;
        color: #fff;
        background: rgb(250, 119, 119);
    }
    
    .toubu .iconfont{
        font-size: .4rem;
    }
    .toubu span:nth-child(1){
        padding-left:.3rem;
    }
    .toubu span:nth-child(3){
        padding-right:.3rem;
    }
    .denglu{
        width: 100%;
        height: .88rem;
        text-align: center;
        background: #fff;
        font-size: .3rem;
        line-height: .88rem;
        color: rgb(250, 119, 119);
    }
    .inptkuang{
        width: 100%;
        height: 4.14rem;
        text-align: center;
        background: #fff;
    }
    .inptkuang input{
        width: 90%;
        height: .96rem;
        outline-style: none ;
        border: 0px;
        font-size: .3rem;
        border-bottom: 0.1px #dbdbdb solid;
    }
    .inptkuang button{
        width: 90%;
        height: .96rem;
        background-color: white;
        color: black;
        border: 2px solid rgb(250, 119, 119);
        font-size: .36rem;
        margin-top: .5rem;
    }
    .inptkuang .wjma{
        display: flex;
        justify-content: space-between;
        line-height: .66rem
    }
    .inptkuang .wjma .mdl img{
        background: red;
        width: .26rem;
        height: .26rem;
        margin-left: .3rem;
    }
      .inptkuang .wjma span:nth-child(2){
        margin-right: .3rem;
        
    }
    .denglu-ym{
        background: #fff;
    }
    html{
        background: #fff;
    }
</style>
