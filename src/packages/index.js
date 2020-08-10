const install = function (Vue) {
  if (Vue.qui_installed) return
  Vue.qui_installed = true
  const context = require.context('./', false, /\.vue$/)
  context.keys().forEach(key => {
      let component = context(key).default
      Vue.component(component.name, component)
  })
}

export default {
  install
}