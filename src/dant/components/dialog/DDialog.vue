<template>
  <div v-show="modelValue" :class="animations[animation]" class="d-dialog">
    <div class="content" :style="{'width': width}">
      <div class="dialog-title">
        <h2>
          {{ title }}
        </h2>
        <i @click="close">x</i>
      </div>

      <div class="dialog-content">
        <slot />
      </div>

      <div class="dialog-footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { animations } from '../../utils/animations'
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  // modelValue接收父组件v-model的值 modelValue是默认的
  // 若父组件是v-model:title这种新式 props中的title就被双向绑定
  modelValue: {
    type: Boolean,
    default: false
  },
  width: {
    type: String,
    default: ''
  },
  animation: {
    type: String,
    default: ''
  }
})
const emits = defineEmits(['update:modelValue', 'close'])
const close = () => {
  // 通过update:modelValue进行更新 也是默认
  // 若v-model:title 使用update:title
  emits('update:modelValue', false)
  emits('close', props.modelValue)
}
</script>

<style scoped lang="scss">
@import url('../../style/animation.css');

.d-dialog {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 10000;
  background-color: rgba(0, 0, 0, .5);
  top: 0;
  left: 0;

  .content {
    width: 40%;
    padding: 10px;
    background-color: #fff;
    transform: translateX(-50%);
    position: absolute;
    left: 50%;
    top: 20%;

    .dialog-title {
      display: flex;

      justify-content: space-between;
      align-items: center;
      height: 24px;
      margin-bottom: 24px;

      i {
        font-size: 25px;
        cursor: pointer;
      }

      i:hover {
        color: #ccc;
      }
    }

    .dialog-content {
      margin-bottom: 10px;
    }

    .dialog-footer {
      margin: 10px 0;
    }

  }
}
</style>
