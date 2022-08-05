<template>
  <div class="wrapper">
    <div class="btns">
      <DButton type="warn" :icon-img="iconWarn" @click="btnClick">
        警告
      </DButton>
      <DButton @click="showDialog">
        默认
      </DButton>
      <DButton type="success" :icon-img="iconSuccess">
        成功
      </DButton>
      <DButton type="danger" :icon-img="iconDanger">
        危险
      </DButton>
    </div>
    <DDialog v-model="isShowDialog" animation="rotate" width="30%" title="Dialog">
      <div>我是dialog内容！！！</div>
      <template #footer>
        <div>
          <DButton @click="isShowDialog=false">
            取消
          </DButton>
          <DButton type="success">
            确认
          </DButton>
        </div>
      </template>
    </DDialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import message from '@/dant/message/index'

const iconWarn = require('@/assets/icons/warn.png')
const iconSuccess = require('@/assets/icons/success.png')
const iconDanger = require('@/assets/icons/danger.png')
const isShowDialog = ref<boolean>(false)
const btnClick = ():void => {
  message({ type: 'warn', message: '警告 警告！！！', closable: true, animation: 'translate' })
}
const showDialog = ():void => {
  isShowDialog.value = true
}
</script>

<style scoped lang="scss">
.btns {
  display: flex;
  align-items: center;
  margin-top: 300px;
}
</style>
