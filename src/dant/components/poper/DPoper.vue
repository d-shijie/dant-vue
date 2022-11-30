<template>
  <div class="d-poper">
    <div ref="dantPopoverMain" :style="{'min-width': '150px', 'width': width}" class="d-poper__main">
      <div class="d-poper__title">
        {{ title }}
      </div>
      <div class="d-poper__content">
        <slot name="content" />
      </div>
    </div>

    <div ref="dantPopoverTrigger" class="d-poper__trigger" @click="referenceClick">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  width: {
    type: [String, Number],
    default: 150
  },
  title: {
    type: String,
    default: ''
  },
  place: {
    type: String,
    default: 'left'
  }// top bottom left right
})
const dantPopoverMain = ref()
const dantPopoverTrigger = ref()
const showPopover = ref<boolean>(false)
const referenceClick = () => {
  showPopover.value = !showPopover.value
  dantPopoverMain.value.style.opacity = showPopover.value ? '1' : '0'
  const width = dantPopoverMain.value.offsetWidth
  const height = dantPopoverMain.value.offsetHeight
  const x = dantPopoverTrigger.value.offsetWidth
  const y = dantPopoverTrigger.value.offsetHeight
  switch (props.place) {
    case 'top':
      dantPopoverMain.value.style.left = 0
      dantPopoverMain.value.style.bottom = y + 'px'
      dantPopoverMain.value.style.transform = `translateX(-${width / 4}px)`
      break
    case 'bottom':
      dantPopoverMain.value.style.left = 0
      dantPopoverMain.value.style.top = y + 'px'
      dantPopoverMain.value.style.transform = `translateX(-${width / 4}px)`
      break
    case 'left':
      dantPopoverMain.value.style.right = x + 'px'
      dantPopoverMain.value.style.top = 0
      dantPopoverMain.value.style.transform = `translateY(-${height / 4}px)`
      break
    case 'right':
      dantPopoverMain.value.style.left = x + 'px'
      dantPopoverMain.value.style.top = 0
      dantPopoverMain.value.style.transform = `translateY(-${height / 4}px)`
      break
  }
}
</script>

<style scoped lang="scss">
.d-poper {
  position: relative;
  display: inline-block;

  .d-poper__main {
    position: absolute;
    opacity: 0;
    top:-80px;
    background-color: #fff;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, .1), -2px -2px 8px rgba(0, 0, 0, .1);
    border: 1px solid #e3e7ed;
    border-radius: 5px;
    display: inline-block;

    transition: all 0.5s;

    .d-poper__title {
      padding: 10px;
      border-bottom: 1px solid #e3e7ed;
    }

    .d-poper__content {
      padding: 10px;
      word-wrap:break-word;
    }
  }

  .d-poper__trigger {
    display: inline-block;
  }
}
</style>
