<template>
  <container>
    <div class="flex">
      <side-bar/>
      <main-component>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="space-y-4">
            <section class="space-y-4">
              <title-component title="Despesas" subtitle="Março de 2020 - Abril de 2021 (Últimos 12 meses)"/>
              <bar-chart style="height: 30vh"/>
            </section>
            <section class="space-y-4">
              <title-component title="Últimos lançamentos"/>
              <card type="food" :price="14.99" :created-at="new Date()"/>
              <card type="transport" :price="5" :created-at="new Date()"/>
              <card type="education" :price="105" :created-at="new Date()"/>
            </section>
          </div>
          <div>
            <section class="space-y-4">
              <title-component title="Para onde vai o meu dinheiro?"/>
              <div class="space-y-3">
                <progress-bar label="Comida e bebida" :total="10000" :value="4500"/>
                <progress-bar label="Educação" :total="10000" :value="2000"/>
                <progress-bar label="Roupas e sapatos" :total="10000" :value="1800"/>
                <progress-bar label="Transporte" :total="10000" :value="1000"/>
                <progress-bar label="Saúde" :total="10000" :value="700"/>
              </div>
            </section>
          </div>
        </div>
      </main-component>
    </div>
  </container>
</template>

<script>
import Container from './components/Container'
import SideBar from './components/SideBar'
import MainComponent from './components/Main'
import TitleComponent from './components/Title'
import BarChart from './components/BarChart'
import Card from './components/Card'
import ProgressBar from './components/ProgressBar'

export default {
  name: 'home',
  components: { Container, SideBar, MainComponent, TitleComponent, BarChart, Card, ProgressBar }
}
</script>
