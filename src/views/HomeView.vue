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
      <DButton disabled type="danger" :icon-img="iconDanger">
        危险
      </DButton>
    </div>
    <DInput v-model="inputValue" type="password" :label="inputValue" />
    <DSwiper v-model="swiperData" />
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
const inputValue = ref<string>('inputValue')
const swiperData = ref<{data:string}[]>([
  { data: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbkimg.cdn.bcebos.com%2Fpic%2Fdcc451da81cb39dbb6fd966d2d471e24ab18972b9af4&refer=http%3A%2F%2Fbkimg.cdn.bcebos.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1671791728&t=e4990069bccfdc0bb026ac1710715c29' },
  { data: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbkimg.cdn.bcebos.com%2Fpic%2F8326cffc1e178a82b901a69b0b52648da977391242f7&refer=http%3A%2F%2Fbkimg.cdn.bcebos.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1671791727&t=afd2f0a3ba7c4442c21032505ef0cd3f' },
  { data: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20161215%2F20bb60d6321b40d39153d486263da387_th.jpeg&refer=http%3A%2F%2Fimg.mp.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1671791727&t=77f874b97d7a0723e8bccc642cb8a5ea' },
  { data: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbkimg.cdn.bcebos.com%2Fpic%2F6a600c338744ebf81a4c640024a8c02a6059252d09c8&refer=http%3A%2F%2Fbkimg.cdn.bcebos.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1671791728&t=f8b8264f9b9bfbf300d2211ce2d81dcf' }
])
const btnClick = (): void => {
  message({ type: 'warn', message: '警告 警告！！！', closable: true, animation: 'translate' })
}
const showDialog = (): void => {
  isShowDialog.value = true
}
const showMessageBox = (): void => {
  messageBox({ title: '我是标题！', content: "<div slot='content'>hello world</div>" })
}
const handleClose = (value: boolean): void => {
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
