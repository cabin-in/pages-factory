import formTtemsRander from './renders/form-items-rander.jsx'

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
