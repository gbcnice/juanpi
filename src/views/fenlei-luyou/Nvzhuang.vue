<template>
    <div class="fenlei">
        
        <div class="shujv">

        <ul>
           <li v-for="item in list">
                <img :src="item.url" class="nvzhuang-img"  @click="jump(item.id)">
                <span>{{item.name}}</span>
            </li>
           
        </ul>
    </div>
    <router-view />
    </div>
</template>

<script>
export default {
    data(){
        return{
            list:[],
            title:""
        } 
    },
     created(){
           this.getData();
           },
    methods:{
        getData(){
            this.$axios.get("http://localhost:4000/nvzhuang").then((res)=>{
                this.list = res.data
               
            })
        },
        jump(id){
            
            this.$router.push("/girldetail&"+"id="+id)
        }
        }
}
</script>

<style scoped>
    .fenlei{
        margin-left: 1.85rem;
    }
    .shujv .nvzhuang-img{
        width: 1.17rem;
    }
    .shujv ul{
    
    }
    .shujv ul li{
        float: left;
        width: 1.883437rem;
        height:1.875rem;
        text-align: center;
        background: #fff;
        border: none;
    }
    .shujv ul li img{
        margin: 0 auto;    
        
    }
    li{
        list-style: none;
    }
    ul,li,img,body{
        margin: 0;
        padding: 0;
    }
    img{
        display: block;
    }
</style>

