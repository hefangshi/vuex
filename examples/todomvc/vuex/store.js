import Vue from 'vue'
import Vuex from '../../../src'
import plugins from './plugins'

Vue.use(Vuex)

export const STORAGE_KEY = 'todos-vuejs'

// for testing
if (navigator.userAgent.indexOf('PhantomJS') > -1) {
  localStorage.clear()
}

const state = {
  todos: JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
}

const mutations = {
  ADD_TODO (state, text) {
    state.todos.push({
      text: text,
      done: false
    })
  },

  DELETE_TODO (state, todo) {
    state.todos.splice(state.todos.indexOf(todo), 1)
  },

  TOGGLE_TODO (state, todo) {
    todo.done = !todo.done
  },

  EDIT_TODO (state, todo, text) {
    todo.text = text
  },

  TOGGLE_ALL (state, done) {
    state.todos.forEach((todo) => {
      todo.done = done
    })
  },

  CLEAR_COMPLETED (state) {
    state.todos = state.todos.filter(todo => !todo.done)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  plugins
})
