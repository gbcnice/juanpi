<template>
  <div class="home" v-gd>
    <div class="home-view">
      <router-view></router-view>
    </div>
    <div class="home-router">
      <router-link to="/home/shop"><i class="iconfont" :style="{color:iconfont===1?active:''}" @click="change(1)">&#xe502;</i><span :style="{color:iconfont===1?active:''}" >商城</span></router-link>
      <router-link to="/home/fenlei"><i class="iconfont" :style="{color:iconfont===2?active:''}" @click="change(2)">&#xe604;</i><span :style="{color:iconfont===2?active:''}" >分类</span></router-link>
      <router-link to="/home/car"><i class="iconfont" :style="{color:iconfont===3?active:''}" @click="change(3)">&#xe504;</i><span :style="{color:iconfont===3?active:''}" >购物车</span></router-link>
      <router-link to="/home/my"><i class="iconfont" :style="{color:iconfont===4?active:''}" @click="change(4)">&#xe512;</i><span :style="{color:iconfont===4?active:''}" >我的</span></router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      iconfont:1,
      active:'#ff464e',
      vis:{
        flag:false
      }
    }
  },
  name: 'home',
  methods:{
    change(type){
      this.iconfont = type;
    }
    
  },
  watch:{
		$route:{
      handler(newV){  // newV就是最新的this.$route
      console.log(newV)
        if(newV.name == "my"){
          this.iconfont = 4;
        }
        else if(newV.name == "goodone"||newV.name == "goodplace"){
          this.iconfont = 1;
        }
        else if(newV.name == "car"){
          this.iconfont = 3;
        }
        
        else {
          this.iconfont = 2;
        }
			},
			deep:true,
			immediate:true
		}
	},
  components: {
    
  }
}
</script>
<style lang='scss'>
@import '../assets/extend.scss';


.home-router{
  display: flex;
  position: fixed;
  bottom: 0;
  height: 1rem;
  width: 100%;
  background: white;
  a{
    flex: 1;
    text-align: center;
    display: flex;
    flex-direction: column;
      color: rgb(153, 153, 153);;
    
    i{
      font-size: 20px;
      height: 0.5rem;
      margin-top: 0.16rem;
    }
    span{
      color: $span;
    }
  }
  
}
.zong img{
  width:100%;
}
</style>

