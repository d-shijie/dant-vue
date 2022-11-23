<template>
  <div class="d-message-box">
    <div class="message-box">
      <div v-show="props.title" class="title">
        {{ props.title }}
      </div>
      <div class="content">
        <div class="content_default" />
      </div>
      <div class="btns">
        <DButton @click="close">
          取消
        </DButton>
        <DButton type="success" @click="close">
          确认
        </DButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DButton from '../button/DButton.vue'
import { close } from './index'
import { defineProps, onMounted, h } from 'vue'
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  content: {
    type: String,
    default: ''
  }
})
onMounted(() => {
  const div = document.querySelector('.content_default') as HTMLElement
  div.innerHTML = props.content
})
</script>

<style scoped lang="scss">
.d-message-box {
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, .3);

  .message-box {
    position: absolute;
    z-index: 9999;
    left: 50%;
    top: 40%;
    width: 15vw;
    padding: 30px;
    margin-left: -7.5vw;
    background-color: #fff;
    border: 1px solid #ccc;

    .btns {
      position: absolute;
      right: 10px;
      bottom: 10px;
    }

    .title {
      position: absolute;
      left: 10px;
      top: 10px;
    }

    .content {
      padding: 10px 0;
    }
  }
}
</style>
