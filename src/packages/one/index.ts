import type { App } from 'vue'
import One from './index.vue'

One.install = (app: App) => {
  app.component(One.name, One)
}

export { One }
export default One
