<template>
  <div :style="{'min-width': '150px','width': width}" class="d-poper">
    <div v-if="showPopover" class="d-poper__main">
      <div class="d-poper__title">
        {{ title }}
      </div>
      <div class="d-poper__content">
        <slot name="content" />
      </div>
    </div>

    <div class="d-poper__trigger" @click="referenceClick">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps({
  width: {
    type: [String, Number],
    default: 150
  },
  title: {
    type: String,
    default: ''
  }
})
const showPopover = ref<boolean>(false)
const referenceClick = () => {
  showPopover.value = !showPopover.value
}
</script>

<style scoped lang="scss">
.d-poper {
  position: relative;
  .d-poper__main {
    position: absolute;
   top: -80px;
    background-color: #fff;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, .1), -2px -2px 8px rgba(0, 0, 0, .1);
    border: 1px solid #e3e7ed;
    border-radius: 5px;
    display: inline-block;

    .d-poper__title {
      padding: 10px;
      border-bottom: 1px solid #e3e7ed;
    }

    .d-poper__content {
      padding: 10px;
    }
  }

  .d-poper__trigger {
    display: inline-block;
  }
}
</style>
