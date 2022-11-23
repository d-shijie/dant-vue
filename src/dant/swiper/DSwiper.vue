<template>
  <div class="d-swiper__wrapper" :style="{'width': width + 'px', 'height': height + 'px'}">
    <div
      v-for="(item, index) in modelValue" :key="index + new Date().getTime()"
      :style="{'width': width + 'px', 'height': height + 'px'}" class="d-swiper__item">
      <img :src="item.data" alt="">
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
defineProps({
  modelValue: {
    type: [] as PropType<{ data: string }[]>,
    default: () => []
  },
  width: {
    type: String,
    default: '550'
  },
  height: {
    type: String,
    default: '300'
  }
})

</script>

<style scoped lang="scss">
.d-swiper__wrapper {

  .d-swiper__item {
    position: absolute;
    z-index: 100;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.d-swiper__content{
  position: absolute;
  background-color: transparent;
}
</style>
