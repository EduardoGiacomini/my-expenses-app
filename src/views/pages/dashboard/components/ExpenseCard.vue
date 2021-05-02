<template>
  <div class="bg-white flex items-center justify-between shadow-sm rounded p-4 hover:shadow transition-shadow cursor-pointer">
    <figure class="w-12 h-12 flex items-center justify-center rounded-full mr-3"
         :class="$t(`pages.components.card.color.${this.type}`)"
         :alt="$t(`pages.components.card.alt.${this.type}`)">
        <span class="material-icons-outlined text-gray-50 text-xl">
          {{ $t(`pages.components.card.icon.${this.type}`) }}
        </span>
    </figure>
    <div class="flex-grow overflow-x-hidden">
      <p class="text-lg font-medium text-black truncate">
        {{ $t(`pages.components.card.type.${this.type}`) }}
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
export default {
  name: 'expense-card',
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
