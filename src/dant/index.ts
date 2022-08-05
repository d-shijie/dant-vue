import { comps } from './comps'
// 全局挂载所有组件
export default (app:any) => {
  for (let i = 0; i < comps.length; i++) {
    app.component(comps[i].__name, comps[i])
  }
}
