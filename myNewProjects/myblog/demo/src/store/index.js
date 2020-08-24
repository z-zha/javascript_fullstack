import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    current: ["1"],
    articles: [],
    tags: [
      { name: "CSS",  },
      { name: "JavaScript" },
      { name: "HTTP"},
      { name: "HTML"  },
      { name: "前端"  },
      { name: "随笔"  },
      { name: "axios" },
      { name: "git" },
      { name: "Vue.js"},
      {name: "其他"}
    ],
    // type: ['','success','info','warning','danger'],
    category: true
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
