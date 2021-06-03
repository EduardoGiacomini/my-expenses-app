<template>
  <button class="px-6 py-3 rounded shadow-sm bg-blue-500 text-white uppercase font-medium text-sm transition-all
                 hover:bg-blue-600 hover:shadow-md focus:bg-blue-600 focus:shadow-md">
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'button-primary'
}
</script>
