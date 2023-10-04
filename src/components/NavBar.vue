<template>
  <div>
    <nav class="flex items-center w-4/5 mx-auto justify-evenly">
      <img src="left-arrow.png" alt="previous icon" @click="goToPreviousRoute" />
      <router-link
        class="font-bold"
        v-for="(route, index) in routes"
        :to="route.path"
        :key="index"
        v-show="shouldShowRoute(index)"
      >
        {{ route.name }}
      </router-link>
      <img src="right-arrow.png" alt="next icon" @click="goToNextRoute" />
    </nav>
  </div>
</template>

<script>
export default {
  name: 'navBar',

  computed: {
    routes() {
      return this.$router.options.routes
    },
    currentRouteIndex() {
      const currentPath = this.$route.path
      return this.routes.findIndex((route) => route.path === currentPath)
    }
  },

  methods: {
    shouldShowRoute(index) {
      // Only show the route if it's the current route or the next/previous route
      return index === this.currentRouteIndex
    },

    goToPreviousRoute() {
      const previousIndex = this.currentRouteIndex - 1
      if (previousIndex >= 0) {
        this.$router.push(this.routes[previousIndex].path)
      }
    },

    goToNextRoute() {
      const nextIndex = this.currentRouteIndex + 1
      if (nextIndex < this.routes.length) {
        this.$router.push(this.routes[nextIndex].path)
      }
    }
  }
}
</script>

<style scoped>
img {
  cursor: pointer;
}
</style>
