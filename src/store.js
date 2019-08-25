import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
    sx: 200
  },
  getters: {
    sxTodos(state) {
      return state.todos.slice(0, state.sx)
    }
  },
  mutations: {
    getTodos(state) {
      axios.get("http://jsonplaceholder.typicode.com/todos").then(result => {
        state.todos = result.data
      })
    },
    addTodo(state, todo) {
      const id = state.todos.length + 1
      const obj = {
        userId: 3,
        title: todo,
        completed: false,
        id: id
      }
      state.todos.unshift(obj)
    },
    deleteTodo(state, index) {
      state.todos.splice(index,1)
    }
  },
  actions: {

  }
})
