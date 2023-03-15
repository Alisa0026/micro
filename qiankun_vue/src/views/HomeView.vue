<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Vue子项目" />

    <p v-for="item in peopleList" :key="item.userId">姓名：{{ item.userName }}，id：{{ item.userId }}</p>

    <button @click="addPeople">添加用户</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import action from "../action";


export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data() {
    return {
      peopleList: []
    }
  },
  mounted() {
    action.onGlobalStateChange((state) => {
      console.log('子应用获取state----', state);
      this.peopleList = state.userInfo
    }, true)
  },
  methods: {
    addPeople() {
      // 新增用户
      const templist = JSON.parse(JSON.stringify(this.peopleList))

      templist.push({
        userName: 'xxx',
        userId: new Date().getTime()
      })

      // 设置状态同时也通知主应用状态更新
      action.setGlobalState({
        userInfo: templist
      })
    }
  }
}
</script>
