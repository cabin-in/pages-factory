/*
 * @Description: 未描述
 * @Author: danielmlc
 * @Date: 2019-09-16 19:27:33
 * @LastEditTime: 2019-09-16 19:27:33
 */
import formTtemsRander from './renders/formItemsRander.vue'

const components = [
  formTtemsRander
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  formTtemsRander
}
