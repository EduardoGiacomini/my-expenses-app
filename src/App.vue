<template>
  <container>
    <div class="flex">
      <side-bar/>
      <main-content>
        <router-view/>
      </main-content>
    </div>
  </container>
</template>

<script>
import Container from './views/pages/components/generic/container/Container'
import SideBar from './views/pages/components/specific/sideBar/SideBar'
import MainContent from './views/pages/components/generic/container/MainContent'

export default {
  name: 'app',
  components: { Container, SideBar, MainContent }
}

</script>
