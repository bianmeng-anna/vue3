import { createStore } from 'vuex'

const moduleA = {
  state: {
    username: 'mudulesA'
  },
  getters: {
    newName (state) {
      return state.username + '!'
    }
  },
  mutations: {
    updateName (state) {
      state.username = 'li111111'
    }
  }
}
const moduleB = {
  namespaced: true,
  state: {
    username: 'mudulesB'
  },
  getters: {
    newName (state) {
      return state.username + '888!'
    }
  }
}
export default createStore({
  modules: {
    moduleA,
    moduleB
  }
})

// vue2.0 创建状态  new Vue.Store({})
// vue3.0  创建状态  createStore({})
// export default createStore({
//   state: {
//     username: 'lloo'
//   },
//   getters: {
//     // 写计算属性的
//   },
//   mutations: {
//     // 修改方法
//     fn () {
//       this.state.username = 'nana'
//     }
//   },
//   actions: {
//     // 异步 拿数据的
//   },
//   modules: {
//     // 模块
//   }
// })
