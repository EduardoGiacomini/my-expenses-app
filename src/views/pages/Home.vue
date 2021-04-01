<template>
  <container>
    <avatar :user="user"/>
  </container>
</template>

<script>
import Container from '@/views/pages/components/Container.vue'
import Avatar from './components/Avatar'

export default {
  name: 'home',
  components: { Container, Avatar },
  data () {
    return {
      user: {
        name: 'Carlos Giacomini',
        email: 'carlos@gmail.com',
        photo: 'https://i.pravatar.cc/64'
      }
    }
  }
}
</script>
