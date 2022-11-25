<template>
  <div v-if="modelValue" :style="{'width': width}" class="d-poper">
    <slot name="title" />
    <slot name="content" />
  </div>
</template>

<script setup lang="ts">
defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  width: {
    type: [String, Number],
    default: 150
  }
})
</script>

<style scoped lang="scss">
.d-poper {
  position: absolute;
  z-index: 10000;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 24px;
  border-radius: 5px;
}
</style>
