import { createVNode, render } from 'vue'
import DMessageBox from './DMessageBox.vue'
interface DMessageBoxConfig {
  title?:String
  content?:String
}
const div = document.createElement('div')
document.body.appendChild(div)
export default ({ title, content }:DMessageBoxConfig) => {
  const vNode = createVNode(DMessageBox, { title, content })
  render(vNode, div)
}
