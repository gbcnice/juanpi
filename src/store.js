import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart:[]
  },
  getters: {
    selectbtn(state) {
         return state.cart.every((item)=>item.flag);        
    },
    money(state) {
        var mon = 0;
        state.cart.forEach((item)=>{
            if(item.flag){
               mon+=item.count*item.price; 
            }
            
        })
        return parseInt(mon)
    }
},
  mutations: {
    allSelect(state,v){
      state.flag = !state.flag;
      state.cart.forEach((item)=>{
          item.flag = v;
      })
      
      localStorage.setItem("cart",JSON.stringify(state))
  },
  change(state,id) {
    state.cart.forEach((item)=>{
        if(item.id==id){
            item.flag = !item.flag
        }
    
    })
    localStorage.setItem("cart",JSON.stringify(state))
},
    addshop(state,obj) {
      
      if(state.cart.length==0){
        state.cart.push(obj);
    }
    else{
        var flag = state.cart.some((item)=>{
            if(item.id == obj.id){
                item.count++;
                return true;
            }else{
                return false;
            }
          })
          if(!flag){
              state.cart.push(obj);
          }
      }
    }
  },
  actions: {

  }
})
