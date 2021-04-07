<template>
  <container>
    <div class="flex">
      <side-bar/>
      <main-component class="space-y-4">
        <card type="food" :price="14.99" :created-at="new Date()"/>
        <card type="transport" :price="5" :created-at="new Date()"/>
        <card type="education" :price="105" :created-at="new Date()"/>
        <card type="clothes" :price="25" :created-at="new Date()"/>
        <card type="health" :price="4.99" :created-at="new Date()"/>
      </main-component>
    </div>
  </container>
</template>

<script>
import Container from './components/Container'
import SideBar from './components/SideBar'
import Card from './components/Card'
import MainComponent from './components/Main'

export default {
  name: 'home',
  components: { Container, MainComponent, SideBar, Card }
}
</script>
