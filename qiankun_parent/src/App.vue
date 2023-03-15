<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/> -->

  <div id="layout-wrapeer">
    <div class="menu-content">
      <p v-for="item in menuList" :key="item.name" :class="{
        'menu-item': true,
        'item-select': item.name === appValue
      }" @click="toRoute(item.props.routerBase, item.name)">{{ item.name
}}</p>
    </div>
    <p>当前人数：{{ peopleList.length }}</p>
    <div id="subapp-viewport"></div>
  </div>
</template>
<script>
import appsConfig from './micro_app';
import action from "./action";

export default {
  data() {
    return {
      menuList: [],
      appValue: '',
      peopleList: []
    }
  },
  mounted() {
    this.menuList = appsConfig

    action.onGlobalStateChange((state) => {
      console.log('主应用：全局状态发生改变');
      // this.mes = state
      this.peopleList = state.userInfo;
      console.log(state);
    }, true);
  },
  methods: {
    toRoute(url, key) {
      if (this.appValue === key) {
        return
      }
      this.appValue = key
      this.$router.push(url)
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu-content {
  display: flex;
  align-items: center;
}

.menu-item {
  width: 100px;
  height: 60px;
  line-height: 60px;
  /* background: greenyellow; */
  text-align: center;
  cursor: pointer;
  border: 1px solid;
}

.item-select {
  background-color: yellowgreen;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
