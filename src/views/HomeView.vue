<template>
  <div class="wrapper">
    <div class="btns">
      <DButton type="warn" :icon-img="iconWarn" @click="btnClick">
        警告
      </DButton>
      <DButton @click="showDialog">
        默认
      </DButton>
      <DButton type="success" :icon-img="iconSuccess" @click="showMessageBox">
        成功
      </DButton>
      <DButton type="danger" :icon-img="iconDanger">
        危险
      </DButton>
    </div>
    <DInput v-model="inputValue2" icon="@/asset/icons/ban.png" :label="inputValue2" size="small" />
    <DInput v-model="inputValue1" :label="inputValue1" size="normal" />
    <DInput v-model="inputValue" type="password" :label="inputValue" size="large" />

    <DDialog v-model="isShowDialog" animation="scale" width="40%" title="Dialog" @close="handleClose">
      <div>我是dialog内容！！！</div>
      <template #footer>
        <div>
          <DButton @click="isShowDialog = false">
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
import messageBox from '@/dant/messageBox/index'

const iconWarn = require('@/assets/icons/warn.png')
const iconSuccess = require('@/assets/icons/success.png')
const iconDanger = require('@/assets/icons/danger.png')
const isShowDialog = ref<boolean>(false)
const inputValue = ref('inputValue')
const inputValue1 = ref('inputValue1')
const inputValue2 = ref('inputValue2')
const btnClick = (): void => {
  message({ type: 'warn', message: '警告 警告！！！', closable: true, animation: 'translate' })
}
const showDialog = (): void => {
  isShowDialog.value = true
}
const showMessageBox = () => {
  messageBox({ title: '我是标题！', content: "<div slot='content'>hello world</div>" })
}
const handleClose = (value:boolean) => {
  console.log(value)
}
</script>

<style scoped lang="scss">
.btns {
  display: flex;
  align-items: center;
  margin-top: 300px;
}
</style>
