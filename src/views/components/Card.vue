<template>
  <div class="bg-white flex items-center justify-between shadow-sm rounded p-4">
    <div class="flex items-center">
      <div class="w-14 h-14 flex items-center justify-center rounded-full bg-red-500 mr-4">
        <span class="material-icons-outlined text-gray-50">
          lunch_dining
        </span>
      </div>
      <div>
        <p class="text-xl text-black">
          {{ type }}
        </p>
        <p class="text-md text-gray-400">
          {{ createdAt | dateTime }}
        </p>
      </div>
    </div>
    <div>
      <p class="text-xl font-medium">
        {{ price | currency }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
};
</script>
