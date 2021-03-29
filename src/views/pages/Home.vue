<template>
  <container>
    <card type="Comidas e bebidas" :createdAt="new Date()" :price="5"/>
  </container>
</template>

<script>
import Container from '@/views/components/Container.vue';
import Card from '@/views/components/Card.vue';

export default {
  name: 'home',
  components: { Container, Card },
  data() {
    return {
      expense: {
        type: 'Comidas e bebidas',
        createdAt: new Date(),
        price: 5,
      },
    };
  },
};
</script>
