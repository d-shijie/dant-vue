<template>
  <div v-if="isTagVisible" :style="[types[type]]" class="d-tag">
    <slot />
    <span v-if="closable" class="d-tag__close" @click="handleClose">❌</span>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { types } from './index'
defineProps({
  type: {
    type: String,
    default: 'default'
  },
  closable: {
    type: Boolean,
    default: false
  },
  theme: {
    type: String,
    default: 'normal' // normal light dark
  }
})
const emits = defineEmits(['handleClose'])
const isTagVisible = ref<boolean>(true)
const handleClose = () => {
  isTagVisible.value = false
  emits('handleClose')
}
</script>

<style scoped lang="scss">
.d-tag {
  display: inline-block;
  padding: 5px 8px;
  font-size: 12px;
  margin: 5px;
  color: #fff;
  font-weight: 500;
  border-radius: 5px;
  border: 1px solid #ccc;

  .d-tag__close {

    margin-left: 3px;
    cursor: pointer;
    padding: 3px 2px;
    &:hover {
      background-color: red;

      border-radius: 50%;
      font-size: 10px;
    }
  }

  // &::after {
  //   content: "❌";
  //   margin-left: 5px;
  //   width: 3px;
  //   height: 3px;
  // }
}
</style>
