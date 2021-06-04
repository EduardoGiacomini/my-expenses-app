<template>
  <div class="relative">
    <div class="flex items-center justify-between mb-1">
      <p class="text-lg font-medium">
        {{ $t(`domain.transaction.${type}.label`) }}
      </p>
      <p class="text-gray-500 text-right">
        {{ getValueInPercentage }}% - {{ value | currency }}
      </p>
    </div>
    <div class="overflow-hidden h-3 flex rounded-full bg-blue-200">
      <div class="shadow-none flex whitespace-nowrap justify-center bg-blue-500"
           :style="{width: `${getValueInPercentage}%`}">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dashboard-transactions-progress-bar',
  props: ['type', 'total', 'value'],
  computed: {
    getValueInPercentage () {
      return ((this.value * 100) / this.total)
    }
  }
}
</script>
