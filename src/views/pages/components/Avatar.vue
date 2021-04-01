<template>
  <div class="flex items-center space-x-3">
    <img class="w-12 h-12 rounded-full" :src="user.photo" :alt="$t('pages.components.avatar.alt')"/>
    <div>
      <p class="text-base font-medium">{{ user.name }}</p>
      <p class="text-sm text-gray-500">{{ user.email }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'avatar',
  props: ['user']
}
</script>
