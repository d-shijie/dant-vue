import { animations } from './../../utils/animations'
import { createVNode, render } from 'vue'
import Message from './message.vue'
interface DMessageConfig {
  message?:string
  type?:string
  icon?:string
  closable?:Boolean
  animation?:string
}

const div = document.createElement('div')
document.body.appendChild(div)
let timer:any = null
export default ({ message, type, icon, closable, animation }:DMessageConfig) => {
  // 调用创建虚拟节点方法
  // 第一个参数为要创建的虚拟节点即编写好的vue组件
  // 第二个参数为props的参数
  const vnode = createVNode(Message, { message, type, icon, closable, animation })
  render(vnode, div)

  timer && clearTimeout(timer)
  timer = setTimeout(() => {
    render(null, div)
  }, 2000)
}
export function close() {
  timer && clearTimeout(timer)
  render(null, div)
}
