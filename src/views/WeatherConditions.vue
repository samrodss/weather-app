<template>
  <div
    id="weather-conditions"
    class="flex flex-col items-center justify-center w-4/5 gap-5 mx-auto mt-10 bg-white h-4/5"
  >
    <h3>
      Sky: <span>{{ weather.weather[0].description }}</span>
    </h3>
    <h3>
      Wind speed: <span>{{ Math.round(weather.wind.speed).toFixed(1) * 3.6 }} km/h</span>
    </h3>
    <h3>
      Humidity: <span>{{ weather.main.humidity }} %</span>
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
#weather-conditions {
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.24);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  border-radius: 10px 10px 0 0;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
</style>
