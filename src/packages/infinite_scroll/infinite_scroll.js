/* 
* @Author: lzw  
* @Date: 2020-08-21 18:48:45  
 * @Last Modified by: lzw
 * @Last Modified time: 2020-08-25 23:10:48
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
const scope = 'infinite-scroll'
//  合并用户配置项
//  合并属性时候针对false情况还需要进一步处理优化
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
  let parent = el
  while (parent) {
    if (document.documentElement === parent) {
      return window
    }
    const result = getComputedStyle(parent)['overflow-y']
    if (['auto', 'scroll'].includes(result)) {
      return parent
    }
    parent = parent.parentNode
  }
}
//  自定义节流函数
function throttle (fn, delay) {
  let flag = false
  return function () {
    if (flag) return
    flag = true
    setTimeout(function () {
      fn()
      flag = false
    }, delay)
  }
}

function handleScroll (callBack) {
  //  this >> el
  const {container, observe} = this[scope]
  const {disabled, distance} = mergeOption(this, this[scope].vnode)
  //  没有更多了就停止
  if (disabled) return
  const bottomValue = container.clientHeight + container.scrollTop
  if (bottomValue >= this.clientHeight - distance) {
    callBack()
  } else {
    if (observe) {
      console.log('解除observe')
      observe.disconnect()
    }
  }
}

export default {
  name: 'infinite-scroll',
  inserted: function (el, binding, vnode) {
    //  合并用户传入进来的值和默认值
    const options = mergeOption(el, vnode)
    //  console.log(options)
    const {delay, immediate} = options

    //  用户传递过来的回调函数
    const callBack = binding.value

    //  找出添加overflow的元素,添加滚动监听
    const container = getContainer(el)

    if (container === window) return
    
    //  绑定时间
    container.addEventListener('scroll', throttle(handleScroll.bind(el, callBack), delay))

    //  保存到el中
    el[scope] = {
      container,
      el,
      vnode
    }
    //  处理开始元素过少撑不满的情况
    //  new MutationObserver MutationObserver接口提供了监视对DOM树所做更改的能力。
    if (immediate) {
        const observe = el[scope].observe = new MutationObserver(handleScroll.bind(el, callBack))
        observe.observe(container, {
          childList: true,
          subtree: true
        });
        handleScroll.bind(el, callBack)()
    }    
  },
  unbind: function (el) {
    const {container} = el[scope]
    if (container) {
      container.removeEventListener('scroll', handleScroll)
    }
  }
}