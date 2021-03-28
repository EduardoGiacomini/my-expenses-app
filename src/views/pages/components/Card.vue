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
          {{ createdAt }}
        </p>
      </div>
    </div>
    <div>
      <p class="text-xl font-medium">
        - R$ {{ price }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Card extends Vue {
  @Prop({ required: true })
  price!: number

  @Prop({ required: true })
  createdAt!: string

  @Prop({ required: true })
  type!: string
}
</script>
