<template>
    <div class="goodone" v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10">
        <div v-for="(item,index) in goods" :key="index" @click="godetail(item.goods_id)">
            <img :src="item.pic_url">
            <p>{{item.coupon_tips}}</p>
            <p>{{item.title}}</p>
        </div>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
import { InfiniteScroll } from 'mint-ui'
export default {
    data() {
        return {
            goods:[],
            page:1,
            loading:false
        }
    },
    created() {
        this.goods=[];
        this.loading=true;
        this.page=1;
        this.getData();
    },
   
    methods:{
        godetail(id) {
            this.$router.push("/detail/"+id)
        },
        loadMore() {
            console.log("loadMore")
            this.page++;
            this.getData();
        },
        getData() {
            if(this.page>3){
                Toast({
                    message:"已经加载完了",
                    position:'bottom',
                    duration:2000
                })
                return;
            }
            this.loading = true;
            this.$axios.get("/juanpi/api/getGoods",{
                params:{
                    page:this.page,
                    zy_ids:'p8_c4_l4',
                    app_name:'zhe',
                    catname:'tab_hpdp',
                    flag:'tab_hpzc',
                    hasMore:'true'
                }
            }).then((res)=>{
                console.log(res)
                this.goods = this.goods.concat(res.data.data.goods);
                this.loading = false;
            })
        }
    }
}
</script>

<style>
.goodone{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.goodone div{
    background: white;
    width: 49.5%;
    margin-bottom: 0.05rem;
}
.goodone img{
    width: 100%;
}
.goodone div p:nth-of-type(1){
    color: #ff464e;
    font-size: 14px;
}
.goodone div p{
    padding: 0 0.17rem;
}
</style>
