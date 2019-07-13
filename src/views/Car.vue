<template>
    <div class="car">
        <header>
            <span></span>
            <span>购物车</span>
            <span>编辑</span>
        </header>
        <section>
            <div>
                <i class="iconfont">&#xe504;</i>
                <p>看到喜欢的就带回家吧</p>
                <span>今日推荐</span>
            </div>
        </section>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
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
</style>
