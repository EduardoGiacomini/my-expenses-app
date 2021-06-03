<template>
  <div>
    <h3 class="text-xl font-medium text-black truncate">
      {{title}}
    </h3>
    <p v-if="subtitle" class="text-sm text-gray-500 truncate">
      {{subtitle}}
    </p>
  </div>
</template>

<script>
export default {
  name: 'subheading',
  props: ['title', 'subtitle']
}
</script>
