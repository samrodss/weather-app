<template>
  <div
    id="temperature"
    class="flex flex-col items-center justify-center w-4/5 gap-5 mx-auto mt-10 bg-white h-4/5"
  >
    <h3>
      Min Temperature: <span> {{ Math.round(weather.main.temp_min) }}°C</span>
    </h3>
    <h3>
      Max Temperature: <span>{{ Math.round(weather.main.temp_max) }}°C</span>
    </h3>
    <h3>
      Feels like: <span>{{ Math.round(weather.main.feels_like) }}°C</span>
    </h3>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'TemperatureView',
  computed: {
    ...mapState('weather', ['weather'])
  }
}
</script>

<style scoped>
#temperature {
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.24);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  border-radius: 10px 10px 0 0;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
</style>
