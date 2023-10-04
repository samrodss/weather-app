<template>
  <div class="container flex flex-col w-screen h-screen max-w-screen-xl m-auto">
    <form @submit.prevent="fetchWeather">
      <div class="flex items-center justify-center w-4/5 gap-1 mx-auto">
        <input
          type="text"
          v-model="query"
          placeholder="Search location"
          class="w-1/2 p-2 mt-2 font-bold rounded-sm"
        />
        <button
          type="submit"
          class="w-1/2 p-2 mt-2 font-bold text-white bg-black rounded-sm cursor-pointer hover:bg-amber-300 hover:text-black"
        >
          Search weather
        </button>
      </div>
    </form>
    <div class="w-4/5 mx-auto mt-5 h-1/2 bg">
      <!-- Use v-if to check if 'weather' is defined before accessing its properties -->
      <Temperature
        v-if="weather && weather.name && weather.sys.country"
        :name="weather.name"
        :country="weather.sys.country"
        :temp="weather.main.temp"
        :description="weather.weather[0].description"
        :weather="weather"
      />
      <template v-if="weather && weather.name && weather.sys.country">
        <NavBar />
        <router-view></router-view>
      </template>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Temperature from './components/Temperature.vue'
import { mapState, mapActions } from 'vuex' // Import Vuex helpers

export default {
  name: 'App',

  data() {
    return {
      query: ''
    }
  },
  computed: {
    ...mapState('weather', ['weather']) // Map the 'weather' state from Vuex
  },
  methods: {
    ...mapActions('weather', ['fetchWeatherData']), // Map the 'fetchWeatherData' action from Vuex

    async fetchWeather() {
      if (this.query.trim() !== '') {
        await this.fetchWeatherData(this.query) // Dispatch the action to fetch weather data
        this.query = ''
      }
    }
  },
  components: {
    Temperature,
    NavBar
  }
}
</script>

<style>
* {
  font-family: 'Manrope', sans-serif;
}

h3 {
  font-weight: 400;
}

span {
  font-weight: bold;
}

i {
  font-size: 2rem;
}

html {
  background-color: #fc6310;
  background-image: linear-gradient(
    180deg,
    #fc6310 0%,
    #ffb841 24%,
    #f6ffb8 49%,
    #c2f3ff 75%,
    #ffffff 100%
  );
}
</style>
