/* 
* @Author: lzw  
* @Date: 2020-08-21 18:48:45  
 * @Last Modified by: lzw
 * @Last Modified time: 2020-08-21 18:56:06
*/

//  默认的配置项
const attibute = {
  disabled: {
    default: false // 是否禁用
  },
  delay:{
    default: 200 // 节流时延，单位为ms
  },
  distance: {
    default: 10 // 触发加载的距离阈值，单位为px
  },
  immediate: {
    default: true // 是否立即执行加载方法，以防初始状态下内容无法撑满容器。
  }
}

//  合并用户配置项
function mergeOption () {
  
}

export default {
  name: 'infinite-scroll',
  inserted: function (el, binding, vnode) {
      
  }
}