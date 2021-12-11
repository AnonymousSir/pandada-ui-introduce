import contentBox from './contentBox.vue'
import contentFooter from './contentFooter.vue'

const components = [
  contentBox,
  contentFooter
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}
