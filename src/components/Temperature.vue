<template>
  <div class="flex flex-col items-center w-4/5 gap-5 m-auto h-4/5">
    <p class="font-bold">{{ name }}, {{ country }}</p>
    <p class="font-bold">{{ dateBuilder() }}</p>
    <h1 class="font-bold text-9xl">{{ `${Math.round(temp)}°C` }}</h1>
  </div>
</template>

<script>
export default {
  name: 'temperatureComp',
  props: {
    name: String,
    country: String,
    temp: Number,
    weather: Object,
    description: String
  },

  methods: {
    dateBuilder() {
      let months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]

      let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

      const currentDate = new Date()
      const offsetDifference = this.weather.timezone
      const adjustedTimestamp = new Date(currentDate.getTime() + offsetDifference * 100)
      const date = new Date(adjustedTimestamp)

      const dayOfTheWeek = days[date.getDay()]
      const day = date.getDate()
      const month = months[date.getMonth()]
      const year = date.getFullYear()

      return `${dayOfTheWeek} ${day} ${month} ${year} `
    }
  }
}
</script>

<style scoped></style>
