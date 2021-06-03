<template>
  <figure class="w-12 h-12 flex items-center justify-center rounded-full mr-3"
          :class="color"
          :alt="alt">
        <span class="material-icons-outlined text-gray-50 text-xl">
          {{ icon }}
        </span>
  </figure>
</template>

<script>
export default {
  name: 'icon-avatar',
  props: ['color', 'icon', 'alt']
}
</script>
