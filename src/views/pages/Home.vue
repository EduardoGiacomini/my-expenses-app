<template>
  <container>
    <div class="flex">
      <side-bar/>
      <main-component class="grid md:grid-cols-2 gap-8">
        <section class="space-y-4">
          <card type="food" :price="14.99" :created-at="new Date()"/>
          <card type="transport" :price="5" :created-at="new Date()"/>
          <card type="education" :price="105" :created-at="new Date()"/>
          <card type="clothes" :price="25" :created-at="new Date()"/>
          <card type="health" :price="4.99" :created-at="new Date()"/>
        </section>
        <section class="space-y-4">
          <progress-bar label="Comida e bebida" :total="10000" :value="4500"/>
          <progress-bar label="Educação" :total="10000" :value="2000"/>
          <progress-bar label="Roupas e sapatos" :total="10000" :value="1800"/>
          <progress-bar label="Transporte" :total="10000" :value="1000"/>
          <progress-bar label="Saúde" :total="10000" :value="700"/>
        </section>
      </main-component>
    </div>
  </container>
</template>

<script>
import Container from './components/Container'
import SideBar from './components/SideBar'
import Card from './components/Card'
import MainComponent from './components/Main'
import ProgressBar from './components/ProgressBar'

export default {
  name: 'home',
  components: { Container, MainComponent, SideBar, Card, ProgressBar }
}
</script>
