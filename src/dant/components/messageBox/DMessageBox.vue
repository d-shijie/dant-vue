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
import { onMounted } from 'vue'
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
  z-index: 9999;
  background-color: rgba(0, 0, 0, .3);

  .message-box {
    position: absolute;
    z-index: 9999;
    left: 50%;
    top: 20%;
    border-radius: 5px;
    width: 20vw;
    padding: 14px;
    margin-left: -10vw;
    background-color: #fff;
    border: 1px solid #ccc;

    .btns {
      text-align: right;
    }

    .title {
    font-size: 18px;
    font-weight: 700;
    }

    .content {
      margin: 14px 0;
      white-space:wrap;
      .content_default {
        word-wrap:break-word
      }
    }
  }
}
</style>
