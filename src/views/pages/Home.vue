<template>
  <container>
    <card type="Comidas e bebidas" created-at="15 de março de 2021, 18:00" price="5,00"/>
  </container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Container from '@/views/pages/components/Container.vue';
import Card from '@/views/pages/components/Card.vue';

@Component({
  components: { Container, Card },
})

export default class Home extends Vue {}
</script>
