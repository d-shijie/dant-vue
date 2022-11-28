<template>
  <div class="d-message" :class="animations[animation]" :style="style[type]">
    <div class="content">
      <img v-if="type !== 'default' && !icon" :src="style[type].icon">
      <img v-else-if="icon" :src="icon">
      <a>{{ message }}</a>
      <i v-show="closable" @click="close">x</i>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { close } from './index'
import { animations } from '../../utils/animations'
defineProps({
  type: {
    type: String,
    default: 'default'
  },
  message: {
    type: String,
    default: 'default'
  },
  icon: {
    type: String,
    default: ''
  },
  closable: {
    type: Boolean,
    default: false
  },
  animation: {
    type: String,
    default: ''
  }
})
const style: any = {
  default: {
    icon: require('../../assets/icons/default.png')
  },
  succuss: {
    icon: require('../../assets/icons/success.png'),
    backgroundColor: 'yellow',
    color: '#ccc'
  },
  warn: {
    icon: require('../../assets/icons/warn.png'),
    backgroundColor: 'orange',
    color: '#fff'
  },
  danger: {
    icon: require('../../assets/icons/danger.png'),
    backgroundColor: 'red',
    color: '#fff'
  }
}
</script>

<style scoped lang="scss">
@import url('../../style/animation.css');

.d-message {
  position: absolute;
  z-index: 9999;
  left: 50%;
  top: 50px;
  width: 200px;
  margin-left: -100px;
  padding: 7px 25px;
  display: flex;
  justify-content: center;
  border-radius: 15px;
  color: rgb(111, 111, 111);
  // border: 1px solid #ccc;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, .3);
  background-color: rgb(207, 205, 205);

  .content {
    display: flex;
    align-items: center;

    img {
      height: 20px;
      width: 20px;
      border-radius: 50%;
      margin-right: 5px;
    }

    i {
      position: absolute;
      right: 10px;

      cursor: pointer;
    }

    i:hover {
      color: #000;
    }
  }

}
</style>
