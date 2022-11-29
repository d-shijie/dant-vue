<template>
  <div :style="[{backgroundColor: (control ? 'blue' : '#dfdfdf')}]" class="d-switch" @click="change">
    <div :class="[control ? 'd-switch__right' : 'd-switch__left']" class="d-switch__control" />
    <div class="d-switch__text" :style="[{float: (control?'left':'right')}]">
      {{ control ? activeText : deActiveText }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps({
  modelValue: {
    type: Boolean,
    default: true
  },
  activeText: {
    type: String,
    default: ''
  },
  deActiveText: {
    type: String,
    default: ''
  }
})

const emits = defineEmits(['update:modelValue', 'handleChange'])
const control = ref<boolean>(true)
const change = () => {
  control.value = !control.value
  emits('update:modelValue', control.value)
  emits('handleChange', control.value)
}
</script>

<style scoped lang="scss">
.d-switch {
  display: inline-flex;
  align-items: center;
  margin: 5px;
  width: 70px;
  border-radius: 15px;
  height: 30px;

  background-color: #dfdfdf;
  cursor: pointer;

  .d-switch__control {
    width: 24px;
    height: 24px;
    margin-left: 3px;
    border-radius: 50%;
    background-color: rgb(255, 255, 255);
  }

  .d-switch__text {
    display: flex;
    margin-left: 1px;
    font-size: 15px;
    color: #fff;
  }
}

.d-switch__right {
  animation: ITranslateRight ease-in 0.25s;
  transform: translateX(40px);
}

@keyframes ITranslateRight {
  0% {
    transform: translateX(0);
  }

  25% {
    transform: translateX(10px);
  }

  50% {
    transform: translateX(20px);
  }

  75% {
    transform: translateX(30px);
  }

  100% {
    transform: translateX(40px);
  }
}

.d-switch__left {
  animation: ITranslateLeft ease-in 0.25s;
  transform: translateX(0px);
}

@keyframes ITranslateLeft {
  0% {
    transform: translateX(40px);
  }

  25% {
    transform: translateX(30px);
  }

  50% {
    transform: translateX(20px);
  }

  75% {
    transform: translateX(10px);
  }

  100% {
    transform: translateX(0px);
  }
}
</style>
