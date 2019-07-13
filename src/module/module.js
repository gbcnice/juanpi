import Vue from 'vue'
Vue.directive("gd",(el,binding)=>{
    var dis = Number(el.getAttribute("dis"));
    el.addEventListener("scroll",()=>{
        if(el.scrollTop>dis){
            binding.value.flag = true;
        }
        else{
            binding.value.flag = false;
        }
    }) 
})
