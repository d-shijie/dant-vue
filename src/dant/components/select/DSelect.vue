<template>
  <div class="d-select" @click="handleClick">
    <label for="d-select">{{ label }}
      <select id="d-select">
        <option value="1">
          1
        </option>
        <option value="2">
          2
        </option>
        <option value="3">
          3
        </option>
        <option value="4">
          4
        </option>
      </select>
    </label>
    <span class="d-select__icon">
      <img :class="[extendPopover?'d-select__icon__active':'d-select__icon__deActive']" src="../../assets/icons/line_down.svg" alt="">
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  label: {
    type: String,
    default: ''
  }
})
const emits = defineEmits(['handleClick'])
const extendPopover = ref<boolean>(false)
const handleClick = () => {
  extendPopover.value = !extendPopover.value
  emits('handleClick', extendPopover.value)
}
</script>

<style scoped lang="scss">
.d-select {
  cursor: pointer;
  margin: 5px;
  display: flex;
  align-items: center;
  #d-select {
    cursor: pointer;
    min-width: 150px;
    padding: 0 10px;
    height: 34px;
    outline: none;
    border-radius: 5px 0 0 5px;
    border: 1px solid #ccc;
    border-right: none;
    appearance:none;
  }
  .d-select__icon {
    position: relative;
    display: block;
    height: 32px;
    padding: 0 5px;
    border: 1px solid #ccc;
    border-left: none;
    border-radius: 0 5px 5px 0;
    line-height: 34px;
    text-align: center;
    img{
      width: 80%;
      height: 100%;
    }
  }
}
.d-select__icon__active {
  animation: IRotate ease-in .35s;
  transform: rotate(-180deg);
}
@keyframes IRotate {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-45deg);
  }
 50% {
    transform: rotate(-90deg);
  }
  75% {
    transform: rotate(-135deg);
  }
  100% {
    transform: rotate(-180deg);
  }
}
.d-select__icon__deActive {
  animation: IDeRotate ease-in .35s;
  transform: rotate(0deg);
}
@keyframes IDeRotate {
  0% {
    transform: rotate(-180deg);
  }
  25% {
    transform: rotate(-135deg);
  }
 50% {
    transform: rotate(-90deg);
  }
  75% {
    transform: rotate(-45deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
