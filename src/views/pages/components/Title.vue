<template>
  <div>
    <h2 class="text-xl font-medium text-black truncate">
      {{title}}
    </h2>
    <p v-if="subtitle" class="text-sm text-gray-500 truncate">
      {{subtitle}}
    </p>
  </div>
</template>

<script>
export default {
  name: 'title-component',
  props: ['title', 'subtitle']
}
</script>
