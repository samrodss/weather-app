const state = {
  weather: {}
}

const mutations = {
  setWeather(state, data) {
    state.weather = data
  }
}

const actions = {
  async fetchWeatherData({ commit }, query) {
    try {
      const apiKey = '88a44d38d4e2f4fcb4d38e9e21e6aa80'
      const urlBase = 'https://api.openweathermap.org/data/2.5/'
      const response = await fetch(`${urlBase}weather?q=${query}&units=metric&APPID=${apiKey}`)
      if (response.ok) {
        const data = await response.json()
        commit('setWeather', data)
      }
    } catch (error) {
      console.error(error)
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
