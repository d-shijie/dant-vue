<template>
  <div class="d-slider" />
</template>

<script setup lang="ts">
defineProps({
  modelValue: {
    type: [String, Number],
    default: 0
  }
})
</script>

<style scoped lang="scss">
 .d-slider {
  width: 30px;
  height: 30px;
  background-color: red;
  &:active{
    background-color: blue;
  }
 }
</style>
