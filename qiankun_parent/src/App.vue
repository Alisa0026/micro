<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/> -->

  <div id="layout-wrapeer">
    <div class="menu-content">
      <p v-for="item in menuList" :key="item.name" class="menu-item"
      @click="toRoute(item.props.routerBase)"
      >{{ item.name }}</p>
    </div>
    <div class="subapp-viewport"></div>
  </div>
</template>
<script>
import appsConfig from './micro_app';

export default {
  data() {
    return {
      menuList: []
    }
  },
  mounted() {
    this.menuList = appsConfig
  },
  methods:{
    toRoute(url){
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
  background: greenyellow;
  text-align: center;
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
