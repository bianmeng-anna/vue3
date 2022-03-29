<template>
<div class="">App</div>
<router-view />
<h1>{{$store.state.username}}</h1>
<button @click="fnn">点击</button>

</template>

<script>
import { useStore } from 'vuex'

export default {
  name: 'App',
  setup () {
    const store = useStore()
    console.log(store.state.username)
    const fnn = () => {
      store.commit('fn')
    }
    return { store, fnn }
  }
}
</script>
<style lang='less' scoped>

</style>
