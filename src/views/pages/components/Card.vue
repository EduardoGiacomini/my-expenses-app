<template>
  <div class="bg-white flex items-center justify-between shadow-sm rounded p-4">
    <div class="w-12 h-12 flex items-center justify-center rounded-full mr-3"
         v-bind:class="formattedColor">
        <span class="material-icons-outlined text-gray-50 text-xl">
          {{ formattedIcon }}
        </span>
    </div>
    <div class="flex-grow overflow-x-hidden">
      <p class="text-lg font-medium text-black truncate">
        {{ formattedType }}
      </p>
      <p class="text-sm text-gray-500 truncate">
        {{ createdAt | datetime }}
      </p>
    </div>
    <div>
      <p class="text-xl font-medium text-black">
        {{ price | currency }}
      </p>
    </div>
  </div>
</template>

<script>
import i18n from '@/commons/plugins/i18n'

export default {
  computed: {
    formattedColor () {
      const key = 'pages.components.card.color.' + this.type
      return i18n.t(key)
    },
    formattedIcon () {
      const key = 'pages.components.card.icon.' + this.type
      return i18n.t(key)
    },
    formattedType () {
      const key = 'pages.components.card.type.' + this.type
      return i18n.t(key)
    }
  },
  props: {
    type: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  }
}
</script>
