import { createRouter, createWebHistory } from 'vue-router'
import TemperatureView from '../views/TemperatureView.vue'
import WeatherConditions from '../views/WeatherConditions.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Temperature',
      component: TemperatureView
    },
    {
      path: '/weather-conditions',
      name: 'Weather Conditions',
      component: WeatherConditions
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactView
    }
  ]
})

export default router
