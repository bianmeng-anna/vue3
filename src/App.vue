<template>
<div>123
  <p>{{ $store.state.moduleA.username }}</p>
  <p>{{ $store.getters.newName }}</p>
  <br>
  <!-- 带命名空间 -->
  <p>{{ $store.state.moduleB.username }}</p>
  <p>{{ $store.getters['moduleB/newName'] }}</p>

</div>

</template>

<script>

export default {
  name: 'App',
  setup () {
    // const a = $store.state.modulesA.username
    // console.log(a)
    // return { a }
  }
}
</script>
<style lang='less' scoped>

</style>
