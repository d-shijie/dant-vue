<template>
  <div class="d-input">
    <div class="label">
      {{ label }}:
    </div>
    <div class="content">
      <span v-if="icon" :class="{}">
        <img src="../../assets/icons/default.png" alt="">
      </span>
      <input ref="inputDom" :style="[style.size[size],{'minWidth': modelValue.length*7.5+'px'},{'paddingLeft': icon===''? '10px':'30px'}]" :type="type" :placeholder="placeholder" @blur="inputBlur" @focus="inputFocus" @keyup="inputChange">
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { style } from './index'
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: '请输入'
  },
  size: {
    type: String,
    default: 'normal'
  },
  type: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: ''
  }
})
const emits = defineEmits(['update:modelValue'])
const inputDom = ref()
onMounted(() => {
  inputDom.value.value = props.modelValue
})
const inputChange = () => {
  emits('update:modelValue', inputDom.value.value)
}
const inputFocus = () => {
  inputDom.value.style.border = '1.5px solid rgb(27, 113, 241)'
}
const inputBlur = () => {
  inputDom.value.style.border = '1.5px solid rgb(152, 152, 152)'
}
</script>

<style scoped lang="scss">
.d-input {
  display: flex;
  margin: 10px 0;
  align-items: center;
   .label{
    font-size: 16px;
    font-weight: 650;
   }
  .content {
    display: flex;
    align-items: center;
    position: relative;
    img {
      width: 20px;
      height: 20px;
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
    }
     input {
      border-radius: 5px;
       padding: 5px;
       margin-left: 5px;
      outline: none;
      border: 1.5px solid rgb(152, 152, 152);

  }
  }
}
</style>
