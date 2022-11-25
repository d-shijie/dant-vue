<template>
  <div class="wrapper">
    <DSwiper v-model="swiperData" pointType="oval" anime="scale" />
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
    <DTag v-for="(item,index) in tags" :key="index" :theme="item.theme" :color="item.color" closable :type="item.type" @handle-close="tagClose">
      {{ item.label }}
    </DTag>
    <DColorPicker v-model="defaultBgc" size="small" @handle-change="changeBgc" />
    <div>
      <DSelect v-model="selectValue" label="选择器：" :data="selectData" @handle-change="selectChange" />
    </div>

    <DDialog v-model="isShowDialog" animation="scale" width="40%" title="Dialog" @close="dialogClose">
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
import message from '@/dant/components/message'
import messageBox from '@/dant/components/messageBox/index'
interface ISelectData{
  value:string|number
  label:string|number
}
const iconWarn = require('@/dant/assets/icons/warn.png')
const iconSuccess = require('@/dant/assets/icons/success.png')
const iconDanger = require('@/dant/assets/icons/danger.png')
const isShowDialog = ref<boolean>(false)
const inputValue = ref<string>('InputValue')
const swiperData = ref<{data:string}[]>([
  { data: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbkimg.cdn.bcebos.com%2Fpic%2Fdcc451da81cb39dbb6fd966d2d471e24ab18972b9af4&refer=http%3A%2F%2Fbkimg.cdn.bcebos.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1671791728&t=e4990069bccfdc0bb026ac1710715c29' },
  { data: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbkimg.cdn.bcebos.com%2Fpic%2F8326cffc1e178a82b901a69b0b52648da977391242f7&refer=http%3A%2F%2Fbkimg.cdn.bcebos.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1671791727&t=afd2f0a3ba7c4442c21032505ef0cd3f' },
  { data: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20161215%2F20bb60d6321b40d39153d486263da387_th.jpeg&refer=http%3A%2F%2Fimg.mp.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1671791727&t=77f874b97d7a0723e8bccc642cb8a5ea' },
  { data: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbkimg.cdn.bcebos.com%2Fpic%2F6a600c338744ebf81a4c640024a8c02a6059252d09c8&refer=http%3A%2F%2Fbkimg.cdn.bcebos.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1671791728&t=f8b8264f9b9bfbf300d2211ce2d81dcf' }
])
const tags = ref([
  {
    type: 'default',
    label: 'tag 1',
    color: 'yellow'
  },
  {
    type: 'success',
    label: 'tag 2',
    theme: 'dark'
  },
  {
    type: 'warn',
    label: 'tag 3'
  },
  {
    type: 'danger',
    label: 'tag 4'
  }
])
const defaultBgc = ref<string>('#ffffff')
const selectData = ref<ISelectData[]>([
  {
    label: 'option 1',
    value: 1
  },
  {
    label: 'option 2',
    value: 2
  },
  {
    label: 'option 3',
    value: 3
  }
])
const selectValue = ref()
const btnClick = (): void => {
  message({ type: 'warn', message: '警告 警告！！！', closable: true, animation: 'translate' })
}
const showDialog = (): void => {
  isShowDialog.value = true
}
const showMessageBox = (): void => {
  messageBox({ title: '我是标题！', content: "<div slot='content'>hello world</div>" })
}
const dialogClose = (value: boolean): void => {
  console.log(value)
}
const tagClose = () => {
  console.log('tag closed')
}
const changeBgc = (color:string) => {
  document.body.style.backgroundColor = color
}
const selectChange = (value:string|number) => {
  console.log(value)
}
</script>

<style scoped lang="scss">
.btns {
  display: flex;
  align-items: center;

}
</style>
