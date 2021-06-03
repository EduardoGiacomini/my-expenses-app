<template>
  <li class="flex items-center w-full rounded text-sm font-medium px-3 py-2 transition-colors cursor-pointer"
      v-bind:class="__getNavBarItemColor"
      @click="goToSelectedRoute">
    <span class="material-icons-outlined text-lg mr-2">
      {{ icon }}
    </span>
    {{ name }}
  </li>
</template>

<script>
export default {
  name: 'nav-bar-item',
  data () {
    return {
      activeNavBarItem: 'bg-blue-100 text-blue-600 hover:bg-blue-200 hover:text-blue-700',
      inactiveNavBarItem: 'bg-transparent text-gray-600 hover:bg-gray-200 hover:text-gray-700'
    }
  },
  props: ['route', 'icon', 'name'],
  computed: {
    __getNavBarItemColor () {
      if (this.isCurrentRouteSelected()) {
        return this.activeNavBarItem
      } else {
        return this.inactiveNavBarItem
      }
    }
  },
  methods: {
    isCurrentRouteSelected () {
      const currentRoute = this.$route.name
      return this.route === currentRoute
    },
    goToSelectedRoute () {
      if (this.isCurrentRouteSelected()) return
      this.$router.push({ name: this.route })
    }
  }
}
</script>
