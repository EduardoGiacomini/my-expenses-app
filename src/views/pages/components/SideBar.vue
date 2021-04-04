<template>
  <aside class="w-60 min-h-screen max-h-screen py-3 flex flex-col space-y-4 bg-gray-100 border-solid border-r-2 border-gray-200">
    <avatar class="px-3" :user="user"/>

    <horizontal-line/>

    <nav-bar class="flex-grow px-3">
      <nav-bar-item
        route="home"
        icon="space_dashboard"
        :name="$t('routes.dashboard.name')"/>
      <nav-bar-item
        route="expenses"
        icon="account_balance_wallet"
        :name="$t('routes.expenses.name')"/>
      <nav-bar-item
        route="profile"
        icon="person"
        :name="$t('routes.profile.name')"/>
    </nav-bar>

    <horizontal-line/>

    <div class="w-full px-3">
      <logout/>
    </div>
  </aside>
</template>

<script>
import Avatar from './Avatar'
import NavBar from './NavBar'
import NavBarItem from './NavBarItem'
import HorizontalLine from './HorizontalLine'
import Logout from './Logout'

export default {
  name: 'side-bar',
  components: { Avatar, NavBar, NavBarItem, HorizontalLine, Logout },
  data () {
    return {
      user: {
        name: 'Carlos Giacomini',
        email: 'carlos@gmail.com',
        photo: 'https://user-images.githubusercontent.com/31314944/113483167-11c05f00-9470-11eb-8380-cad354e102d1.jpg'
      }
    }
  }
}
</script>
