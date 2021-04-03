<template>
  <container>
    <avatar :user="user"/>
    <nav-bar>
      <nav-bar-item route="home" icon="space_dashboard" name="Painel administrativo"/>
      <nav-bar-item route="expenses" icon="account_balance_wallet" name="Minhas despesas"/>
      <nav-bar-item route="profile" icon="person" name="Meu perfil"/>
    </nav-bar>
  </container>
</template>

<script>
import Container from './components/Container.vue'
import Avatar from './components/Avatar'
import NavBar from './components/NavBar'
import NavBarItem from './components/NavBarItem'

export default {
  name: 'home',
  components: { Container, Avatar, NavBar, NavBarItem },
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
