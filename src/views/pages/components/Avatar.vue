<template>
  <div class="flex items-center space-x-3">
    <img class="w-12 h-12 rounded-full" :src="user.photo" :alt="$t('pages.components.avatar.alt')"/>
    <div class="overflow-hidden">
      <p class="text-base font-medium truncate">{{ user.name }}</p>
      <p class="text-sm text-gray-500 truncate">{{ user.email }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'avatar',
  props: ['user']
}
</script>
