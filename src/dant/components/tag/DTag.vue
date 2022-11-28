<template>
  <div v-if="isTagVisible" ref="tagRef" :style="types[theme][type]" class="d-tag">
    <slot />
    <span
      v-if="closable" ref="dTagCloseRef" class="d-tag__close" @mouseleave="onMouseLeave" @mouseenter="onMouseEnter"
      @click.stop="handleClose">❌</span>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { types } from './index'
const props = defineProps({
  theme: {
    type: String,
    default: 'light' // light dark
  },
  type: {
    type: String,
    default: 'default'
  },
  closable: {
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    default: ''
  }
})
const emits = defineEmits(['handleClose'])
const isTagVisible = ref<boolean>(true)
const tagRef = ref()
const dTagCloseRef = ref()
const handleClose = () => {
  isTagVisible.value = false
  emits('handleClose')
}
const onMouseEnter = () => {
  switch (props.theme) {
    case 'light':
      dTagCloseRef.value.style.backgroundColor = types[props.theme][props.type].color ? types[props.theme][props.type].color : types[props.theme][props.type][props.color]
      break
    case 'dark':
      dTagCloseRef.value.style.backgroundColor = 'rgba(0,0,0,.1)'
      break
  }
}
const onMouseLeave = () => {
  dTagCloseRef.value.style.backgroundColor = 'transparent'
}
onMounted(() => {
  if (props.color) {
    tagRef.value.style.backgroundColor = props.color
    tagRef.value.style.border = `1px solid ${props.color}`
  }
})

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
