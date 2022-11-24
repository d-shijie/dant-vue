<template>
  <div class="d-swiper__wrapper" :style="{'width': width + 'px', 'height': height + 'px'}">
    <div
      v-for="(item, index) in modelValue" :key="index + new Date().getTime()"
      :style="{'width': width + 'px', 'height': height + 'px'}"
      :class="[currentIndex === index?animations[anime]:'']"
      class="d-swiper__item">
      <img :src="item.data" alt="">
    </div>
    <div class="d-swiper__points">
      <span
        v-for="(item, index) in modelValue" :key="index + new Date().getTime()"
        :class="{'d-swiper__point__active': currentIndex === index}" :style="[style[pointType]]"
        @click="handlePoint(index)" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, PropType, ref } from 'vue'
import { style } from './index'
import { animations } from '@/utils/animations'
const props = defineProps({
  modelValue: {
    type: Array as PropType<{ data: string }[]>,
    default: () => []
  },
  width: {
    type: String,
    default: '550'
  },
  height: {
    type: String,
    default: '300'
  },
  interval: {
    type: Number,
    default: 3000
  },
  pointType: {
    type: String,
    default: 'circle'
  },
  anime: {
    type: String,
    default: 'translate'
  }
})
const timer = ref<any>(null)
const currentIndex = ref<number>(0)
const handlePoint = (index: number) => {
  clearInterval(timer.value)
  currentIndex.value = index
  handleChange()
}
const handleChange = () => {
  timer.value = setInterval(() => {
    if (currentIndex.value < props.modelValue.length - 1) {
      currentIndex.value++
    } else {
      currentIndex.value = 0
    }
  }, props.interval)
}
onMounted(() => {
  handleChange()
})

</script>

<style scoped lang="scss">
@import url('./index.css');
.d-swiper__wrapper {
  overflow: hidden;
  position: relative;

  .d-swiper__item {
    position: absolute;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .d-swiper__points {
    position: absolute;
    z-index: 1000;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
    span {
      display: inline-block;
      cursor: pointer;
      margin: 5px;
      background-color: #fff;
    }
  }
}

.d-swiper__content {
  position: absolute;
  overflow: hidden;
  background-color: transparent;
}

.d-swiper__point__active {
  background-color: #000 !important
}
</style>
