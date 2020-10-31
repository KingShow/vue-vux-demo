<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld v-bind:msg="msg"/>
    <div @click="getcount">开启 {{count}}</div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {mapMutations, mapState,mapActions } from 'vuex'
export default {
  name: 'app',
  data: () => {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  computed: mapState({
    count: state => state.carts.count,
  }),
  components: {
    HelloWorld
  },
  methods: {
    ...mapActions(['carts/increment']),
    getcount() {
      this.$store.commit('increment')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
