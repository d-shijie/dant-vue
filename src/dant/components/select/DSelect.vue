<template>
  <div class="d-select">
    <span class="d-select__wrapper" @click.prevent="handleSelectClick">
      {{ label }}
      <span id="d-select" :style="[{border: (extendPopover ? '1px solid #409eff' : '')}]">
        <span v-if="multiple">
          <DTag
            v-for="(item, index) in filterHasMultipleValue" :key="index + new Date().getTime()" closable
            @handle-close="closeTag(item as any)"> {{ item?.label }}</DTag>
        </span>
        {{ !multiple ? activeOption : '' }}
      </span>
      <span :style="[{border: (extendPopover ? '1px solid #409eff' : '')}]" class="d-select__icon">
        <img
          :class="[extendPopover ? 'd-select__icon__active' : 'd-select__icon__deActive']" :src="iconImg" alt=""
          @click.stop="clear">
      </span>
    </span>
    <div
      v-show="extendPopover"
      :class="[extendPopover ? 'd-select__options__wrapper__active' : 'd-select__options__wrapper__deactive']"
      class="d-select__options__wrapper">
      <div class="d-select__little" />
      <ul class="d-select__options">
        <li
          v-for="(item, index) in data" :key="index" class="d-select__option"
          :class="{'d-select__option__active': multiple ? filterHasSingleValue(item.value) : item.value === modelValue}"
          @click="handleOptionClick(item.value)">
          {{ item.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity'
import { onMounted, PropType, ref, watch } from 'vue'
// import DTag from '../tag/DTag.vue'
// import DPoper from '../poper/DPoper.vue'
interface DantSelect {
  value: string | number
  label: string | number
}
const props = defineProps({
  modelValue: {
    type: [String, Number, Array],
    default: ''
  },
  data: {
    type: Array as PropType<DantSelect[]>,
    default: () => []
  },
  label: {
    type: String,
    default: ''
  },
  // 多选
  multiple: {
    type: Boolean,
    default: false
  },
  // 可清空
  clearable: {
    type: Boolean,
    default: false
  }
})
const emits = defineEmits(['handleSelectClick', 'update:modelValue', 'handleChange', 'handleTagClose', 'handleClear'])
onMounted(() => {
  document.addEventListener('click', (e: any) => {
    if (e.target.id !== 'd-select') {
      extendPopover.value = false
    }
  })
})
// 控制popover的显示与隐藏
const extendPopover = ref<boolean>(false)
const multipleData = ref<unknown[]>([])
const iconImg = ref(require('../../assets/icons/line_down.svg'))
const handleSelectClick = () => {
  extendPopover.value = !extendPopover.value

  emits('handleSelectClick', extendPopover.value)
}
const handleOptionClick = (value: number | string) => {
  if (props.multiple) {
    extendPopover.value = !extendPopover.value
  }

  const updateValue = props.multiple ? multipleData.value : value
  // 不是多选时
  if (!props.multiple) {
    // 选择当前已选择的项不做处理
    if (value === props.modelValue) {
      return
    }
  } else {
    const index = multipleData.value.findIndex(item => {
      return item === value
    })
    index !== -1 ? multipleData.value.splice(index, 1) : multipleData.value.push(value)
  }
  emits('update:modelValue', updateValue)
  emits('handleChange', updateValue)
}
// 多选tag删除
const closeTag = (item: DantSelect) => {
  const index = multipleData.value.findIndex(value => {
    return value === item.value
  })
  if (index !== -1) {
    multipleData.value.splice(index, 1)
    emits('update:modelValue', multipleData.value)
    emits('handleTagClose', multipleData.value)
  }
}
// 清空
const clear = () => {
  if (props.clearable) {
    emits('update:modelValue', undefined)
    emits('handleClear')
    multipleData.value = []
  }
}
// 已选择的项的label
const activeOption = computed(() => {
  return props.data.find(item => {
    return item.value === props.modelValue
  })?.label
})
// 多选已选项
const filterHasMultipleValue = computed(() => {
  const result = multipleData.value.map(value => {
    return props.data.find(data => {
      return data.value === value
    })
  })
  return result
})
// 筛选数组中对应值的单个元素
const filterHasSingleValue = (target: string | number): boolean => {
  return !!multipleData.value.find(item => {
    return item === target
  })
}
watch(() => props.modelValue, (value) => {
  let validate = value
  validate = typeof validate === 'number' ? String(validate) : validate

  if (props.clearable && validate.length) {
    iconImg.value = require('../../assets/icons/close.svg')
  } else {
    iconImg.value = require('../../assets/icons/line_down.svg')
  }
},
{
  deep: true
})
</script>

<style scoped lang="scss">
.d-tag {
  color: #f4f4f5;
  height: 14px;
  line-height: 14px;
  margin-left: 0 !important;
}

.d-select {
  position: relative;
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
    // display: inline-block;
    align-items: center;
    display: flex;
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
      width: 60%;
      height: 100%;
    }
  }
}

.d-select__options__wrapper {
  position: absolute;
  width: 100%;
  top: 36px;
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
  animation: IRotate ease-in .25s;
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
  animation: IDeRotate ease-in .25s;
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

.d-select__options__wrapper__active {
  animation: IOptionShow ease-in 0.25s;
}

@keyframes IOptionShow {
  0% {
    opacity: 0;
    height: 0%;
  }

  25% {
    opacity: 0.25;
    height: 25%;
  }

  50% {
    opacity: 0.5;
    height: 50%;
  }

  75% {
    opacity: 0.75;
    height: 75%;
  }

  100% {
    opacity: 1;
    height: 100%;
  }
}
</style>
