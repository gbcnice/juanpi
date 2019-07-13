<template>
  <div class="liebiao">
    <div class="liebiao-toubu">
      <span class="iconfont" @click="back">&#xe6f3;</span>
      <span>生活超市</span>
      <span class="iconfont">&#xe63b;</span>
    </div>
    <div class="toubu-tuixuan">
      </div>
    <div class="tuixuan-xuanran">
      <ul>
        <li v-for="itme in list">
          <img :src="itme.url" />
          <span>{{itme.name}}</span>
          <span>{{itme.qian}}</span>
          <p>{{itme.nan}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      title: ""
    };
  },
  created() {
    this.getData();
    this.back;
  },
  methods: {
    getData() {
      this.$axios.get("http://localhost:4000/nvzhuangtxv").then(res => {
        this.list = res.data;
        // console.log(res);
      });
    },
     back(){
        this.$router.go(-1);
    },
     jump(id){
             console.log(id);
            this.$router.push("/boydetail&"+"id="+id)
        }
  }
};
</script>
<style scoped>
.tuixuan-xuanran ul li {
  width: 3.715rem;
  height: 4.595rem;
  float: left;
  background: #fff;
}
.tuixuan-xuanran ul li span:nth-child(2){
    font-size: .3rem;
    color: red;
    margin-left:.1rem; 
    }
    .tuixuan-xuanran ul li span:nth-child(3){
    font-size: .22rem;
    text-decoration:line-through; 
    color: #ddd;
    margin-left: .08rem;
    }
    .tuixuan-xuanran ul li p:nth-child(4){
    font-size: .24rem;
    color: #333;
    margin-left: .08rem;
    margin-left:.1rem; 

    }
.tuixuan-xuanran ul li:nth-child(2),
.tuixuan-xuanran ul li:nth-child(4),
.tuixuan-xuanran ul li:nth-child(6),
.tuixuan-xuanran ul li:nth-child(8),
.tuixuan-xuanran ul li:nth-child(10){
  margin-left: .06rem;

}
.tuixuan-xuanran img {
  width: 3.715rem;
  height: 3.715rem;
 display: block;
}
.tuixuan-xuanran img:nth-child(2){
  margin-left: 1rem;
}

.toubu-tuixuan ul {
  width: 100%;
}
.toubu-tuixuan ul li {
  float: left;
  width: 20%;
  text-align: center;
  line-height: 0.81rem;
  font-size: 0.28rem;
}
.liebiao .liebiao-toubu {
  width: 100%;
  height: 0.88rem;
  display: flex;
  justify-content: space-between;
  line-height: 0.88rem;
  background: #fff;
}
.liebiao .liebiao-toubu span {
  flex: 1;
  text-align: center;
  margin: 0;
  padding: 0;
  font-size: 0.4rem;
}
.liebiao .liebiao-toubu span:nth-child(1) {
  text-align: left;
  padding-left: 0.2rem;
}
.liebiao .liebiao-toubu span:nth-child(3) {
  text-align: right;
  padding-right: 0.2rem;
}
</style>

