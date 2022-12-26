<template>
  <div class="d-slider" @click="handleClick">
    <div ref="contentRef" class="content" />
    <span ref="dantSliderTagRef" class="d-slider__tag" @mousedown="handleMouseDown" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
defineProps({
  modelValue: {
    type: [String, Number],
    default: 0
  }
})
const dantSliderTagRef = ref()
const contentRef = ref()
const handleMouseDown = () => {
  console.log(dantSliderTagRef.value.style.left)
}
// const handleMouseMove = (e:any) => {
//   dantSliderTagRef.value.style.left = e.offsetX + 'px'
// }
const handleClick = (e:any) => {
  dantSliderTagRef.value.style.left = e.offsetX + 'px'
  contentRef.value.style.width = dantSliderTagRef.value.style.left
  contentRef.value.style.background = 'blue'
}

</script>

<style scoped lang="scss">
.d-slider {
  width: 500px;
  height: 5px;
  border-radius: 5px;
  background-color: #e4e7ed;
  position: relative;
  cursor:pointer;
  .d-slider__tag {
    display: inline-block;
    width: 15px;
    position: absolute;
    height: 15px;
    border-radius: 50%;
    left: 0;
    top: 2.5px;
    transform: translateY(-50%);
    border: 2px solid blue;
    background-color: #fff;

    &:active {
      background-color: blue;

    }

    &:hover {
      cursor: pointer;
    }
  }
}
.content {
  border-radius: 50%;
  width: #e4e7ed;
  height: 5px;
}
</style>
