<template>
  <div class="d-select">
    <span class="d-select__wrapper" @click="handleSelectClick">
      {{ label }}
      <span id="d-select" :style="[{border: (extendPopover ? '1px solid #409eff' : '')}]">
        {{ activeOption }}
      </span>
      <span :style="[{border: (extendPopover ? '1px solid #409eff' : '')}]" class="d-select__icon">
        <img
          :class="[extendPopover ? 'd-select__icon__active' : 'd-select__icon__deActive']"
          src="../../assets/icons/line_down.svg" alt="">
      </span>
    </span>
    <div v-show="extendPopover" class="d-select__little" />
    <ul v-show="extendPopover" class="d-select__options">
      <li
        v-for="(item, index) in data" :key="index" class="d-select__option"
        :class="{'d-select__option__active': item.value === modelValue}" @click="handleOptionClick(item.value)">
        {{ item.label }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity'
import { PropType, ref } from 'vue'
// import DPoper from '../poper/DPoper.vue'
interface DantSelect {
  value: string | number
  label: string | number
}
const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  data: {
    type: Array as PropType<DantSelect[]>,
    default: () => []
  },
  label: {
    type: String,
    default: ''
  }
})
const emits = defineEmits(['handleSelectClick', 'update:modelValue', 'handleChange'])
const extendPopover = ref<boolean>(false)
const handleSelectClick = () => {
  extendPopover.value = !extendPopover.value
  emits('handleSelectClick', extendPopover.value)
}
const handleOptionClick = (value: number | string) => {
  extendPopover.value = !extendPopover.value
  // 选择当前已选择的项不做处理
  if (value === props.modelValue) {
    return
  }
  emits('update:modelValue', value)
  emits('handleChange', value)
}
// 已选择的项的label
const activeOption = computed(() => {
  return props.data.find(item => {
    return item.value === props.modelValue
  })?.label
})
</script>

<style scoped lang="scss">
.d-select {
  display: inline-flex;
  flex-direction: column;
}

.d-select__wrapper {
  cursor: pointer;
  padding: 5px 0;
  display: inline-flex;
  align-items: center;

  #d-select {
    cursor: pointer;
    min-width: 150px;
    padding: 0 10px;
    line-height: 30px;
    text-align: left;
    display: inline-block;
    height: 30px;
    outline: none !important;
    border-radius: 5px 0 0 5px;
    border: 1px solid #ccc;
    border-right: none !important;
    appearance: none;

  }

  .d-select__icon {
    position: relative;
    display: block;
    height: 30px;
    padding: 0 5px;
    border: 1px solid #ccc;
    border-left: none !important;
    border-radius: 0 5px 5px 0;
    line-height: 30px;
    text-align: center;

    img {
      width: 80%;
      height: 100%;
    }
  }
}

.d-select__little {
  width: 8px;
  height: 8px;
  position: relative;
  top: 5px;
  left: 50%;
  transform: rotate(45deg);
  z-index: 10;
  background-color: #fff;
  border: 1px solid #ccc;
  border-bottom: none;
  border-right: none;
}

.d-select__options {
  position: relative;
  overflow: auto;
  z-index: 1;
  padding: 5px 0;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-top: 0;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, .1), -2px 2px 10px rgba(0, 0, 0, .1);
  max-height: 274px;

  .d-select__option {
    list-style: none;
    cursor: pointer;
    padding: 10px 18px;
    text-align: left;
    background-color: #fff;

    &:hover {
      background-color: #f4f4f5;
      color: #409eff;
      font-weight: 600;
    }
  }
}

.d-select__option__active {
  color: #409eff !important;
  font-weight: 600 !important;
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
