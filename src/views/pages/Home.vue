<template>
  <container>
    <card type="Comidas e bebidas" :createdAt="new Date()" :price="5"/>
  </container>
</template>

<script>
import Container from '@/views/pages/components/Container.vue'
import Card from '@/views/pages/components/Card.vue'

export default {
  name: 'home',
  components: { Container, Card },
  data () {
    return {
      expense: {
        type: 'Comidas e bebidas',
        createdAt: new Date(),
        price: 5
      }
    }
  }
}
</script>
