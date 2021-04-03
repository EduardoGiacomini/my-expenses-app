<template>
  <nav class="py-3">
    <ul class="flex items-start flex-col space-y-2">
      <slot/>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'nav-bar'
}
</script>
