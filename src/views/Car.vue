<template>
    <div class="car">
        <header>
            <span @click="go"><</span>
            <span>购物车</span>
            <span>编辑</span>
        </header>
        <section v-if="flag">
            <div>
                <i class="iconfont">&#xe504;</i>
                <p>看到喜欢的就带回家吧</p>
                <span>今日推荐</span>
                {{car}}
            </div>
        </section>
        <figure v-else>
            <figcaption v-for="(item,index) in cart" :key="index">
                <div>
                    <input type="checkbox"  @click="change(item.id)" :checked="item.flag">
                </div>
                <div>
                    <img :src="item.url" id="car-img">
                </div>
                <div>
                    <p>{{item.title}}</p>
                    <p><span>{{item.color}}</span><span>{{item.size}}</span></p>
                    <p>￥{{item.price}}</p>
                </div>
                <div>
                    X{{item.count}}
                </div>
            </figcaption>
            <footer>
            <input type="checkbox" v-model="select">
            <span>全选</span>
            <span>合计</span>
            <span>{{money}}</span>
        </footer>
        </figure>
        
    </div>
</template>

<script>
import {mapState,mapGetters,mapMutations} from 'vuex'
export default {
    data() {
        return {
            flag:true
        }
    },
    created() {
    },
    methods:{
        go() {
            this.$router.go(-1)
        },
        ...mapMutations(["change"]),
        ...mapMutations(["allSelect"])
    },
    computed: {
        ...mapState(['cart']),
        ...mapGetters(["money"]),
        ...mapGetters(["selectbtn"]),
        select:{
            get() {
                 return this.selectbtn
            },
            set(v) {
                this.allSelect(v);
            }
        },
        car() {
            if(this.cart.length==0){
                this.flag = true;
            }
            else{
                this.flag = false;
                console.log(this.cart)
                return this.cart
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/extend.scss';
.car header{
    height: 0.88rem;
    background: white;
    display: flex;
    line-height: 0.88rem;
}
.car header span{
    flex: 1;
    text-align: center;
}
.car header span:nth-of-type(2){
    font-size: 18px;
}
.car header span:nth-of-type(3){
    text-align: right;
    font-size: 14px;
    margin-right: 28px;
}
section div{
    margin: 0 auto;
    width: 3.8rem;
    text-align: center;
    height: 2.8rem;
    margin-top: 0.5rem;
}
section div i{
    font-size: 120px!important;
}
section div p{
    padding-bottom: 0.2rem;
    width: 100%;
    font-size: 16px;
}
section div span{
    margin: 0 auto;
    font-size: 16px;
    display: block;
    width: 2.78rem;
    height: 0.82rem;
    border: 1px solid $active;
    color: $active;
    line-height: 0.82rem;
    text-align: center;
}
#car-img{
    height: 1.8rem;
    width: 1.8rem;
}
figcaption{
    justify-content: space-around;
    display: flex;
    background: white;
    div{
        margin: 0.2rem 0;
        p{
            padding-top: 0.2rem;
        }
    }
}
.car footer{
    display: flex;
    position: fixed;
    bottom: 0;
    height: 0.97rem;
    background: white;
    width: 100%;
    justify-content: space-around;
    line-height: 0.97rem;
    input{
        margin-top: 0.35rem;
    }
}
</style>
