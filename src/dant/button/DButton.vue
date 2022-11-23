<template>
  <button
    :disabled="disabled"
    :class="[disabled?'disabled':'']"
    class="d-button"

    :style="[style[type]]"
    @mouseleave="mouseOut($event)"
    @mouseenter="mouseIn($event)">
    <span v-if="iconImg" class="pre">
      <img :src="iconImg" alt="">
    </span>
    <span>  <slot /></span>
  </button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { mouseEnter, mouseLeave, style } from './index'
const props = defineProps({
  type: {
    type: String,
    default: 'default'
  },
  iconImg: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const mouseIn = (e:any) => {
  mouseEnter(e, props.type)
}
const mouseOut = (e:any) => {
  mouseLeave(e, props.type)
}
</script>

<style scoped lang="scss">
.d-button {
  border: 1px solid rgb(193, 193, 193);
  border-radius: 10px;
  margin: 0 5px ;
  padding: 7px 10px;
  color: #000;
  cursor: pointer;
  letter-spacing: 2px;
  display:  inline-flex;
  align-items: center;

  .pre {
    width:18px;
    height:18px;
    overflow: hidden;
     margin-right: 5px;
    img {
      height: 100%;
      border-radius: 50%;
      width: 100%;

    }
  }

}
.disabled {
  cursor: url('../../../public/favicon.ico'),default !important;
  background-color: rgba(0,0,0,.1) !important;
  color: rgb(181, 181, 181) !important;
}
</style>
