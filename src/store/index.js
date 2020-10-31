import Vue from 'vue';
import Vuex from 'vuex';
import dishes from './dishes';
import carts from './carts';

Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        // 这里是根vuex状态
    },
    mutations: {
        // 这里是根vuex状态
    },
    actions: {
    },
    modules: {
        namespaced: true,
        carts,
        dishes
    }
   
})

export default store;