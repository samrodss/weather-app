import { createStore } from 'vuex'
import weatherModule from './weather'

export default createStore({
  name: 'createStore',
  modules: {
    weather: weatherModule
  }
})
