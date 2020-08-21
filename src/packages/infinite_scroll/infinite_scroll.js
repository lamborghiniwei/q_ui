/* 
* @Author: lzw  
* @Date: 2020-08-21 18:48:45  
 * @Last Modified by: lzw
 * @Last Modified time: 2020-08-21 20:42:03
*/

//  默认的配置项
const attributes = {
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
function mergeOption (el, vnode) {
  const options = Object.entries(attributes).reduce((map, [key, valueObj]) => {
    //  console.log(map, key, valueObj)
    // console.log(el.attributes[`infinite-scroll-${key}`])
    // map[key] = el.attributes[`infinite-scroll${key}`] || valueObj.default
    map[key] = vnode.context[key] || valueObj.default
    return map
  }, {})
  return options
}

function getContainer (el) {
  console.log(getComputedStyle(el)['overflow-y'])
}

export default {
  name: 'infinite-scroll',
  inserted: function (el, binding, vnode) {
    //  合并用户传入进来的值和默认值
    const options = mergeOption(el, vnode)
    //  console.log(options)

    //  找出添加overflow的元素,添加滚动监听
    const container = getContainer(el)
      
  }
}