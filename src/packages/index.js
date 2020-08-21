import infiniteScroll from './infinite_scroll/infinite_scroll'
const install = function (Vue) {
  if (Vue.qui_installed) return
  Vue.qui_installed = true
  const context = require.context('./', false, /\.vue$/)
  context.keys().forEach(key => {
      let component = context(key).default
      Vue.component(component.name, component)
  })
  //  注册全局指令
  Vue.directive(infiniteScroll.name, infiniteScroll)

}

export default {
  install
}