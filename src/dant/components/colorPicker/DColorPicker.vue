<template>
  <div class="d-color-picker">
    <input :style="style[size]" :value="modelValue" type="color" @change="handleChange">
  </div>
</template>

<script setup lang="ts">
import { style } from './index'
defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: 'normal' // nromal small large
  }
})
const emits = defineEmits(['update:modelValue', 'handleChange'])
const handleChange = (e: any) => {
  const color = e.target.value
  emits('update:modelValue', color)
  emits('handleChange', color)
}

</script>

<style scoped lang="scss">
.d-color-picker {
  margin: 5px;
  display: inline-block;
  input {
    cursor: pointer;
    border: 1px solid #ccc;
    background-color: #fff;
    border-radius: 5px;
    width: 30px;
    height: 30px;
  }
}
</style>
