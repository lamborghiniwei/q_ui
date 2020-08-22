<template>
  <div id="app">
    <qui-button type="primary">普通按钮</qui-button>
    <qui-button type="success">成功按钮</qui-button>
    <qui-button type="danger">危险按钮</qui-button>
    <qui-button type="info">信息按钮</qui-button>
    <qui-button type="info">图标按钮</qui-button>
    <!-- 无限滚动 -->
    <div class="infinite-box" 
      style="overflow:auto"
    >
        <ul
            v-infinite-scroll='load'
            infinite-scroll-disabled='disabled'
            infinite-scroll-delay='delay'
            infinite-scroll-distance='distance'
            infinite-scroll-immediate='immediate'
        >
          <li class="infinite-item" v-for="item in count" :key="item">{{item}}</li>
        </ul>
    </div>
    
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      count: 2,
      disabled: false,
      delay: 200,
      distance: 20,
      immediate: true
    }
  },
  // mounted () {
  //   setInterval(() => {
  //     this.disabled = true
  //   }, 5000)
  // },
  methods: {
    load () {
      this.count += 2
    }
  }
}
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
ul, li {
  list-style: none;
}
.infinite-box {
  width: 400px;
  height: 300px;
  margin: 100px 0 0 20px;
  border: 1px solid pink;
}
.infinite-item {
  height: 30px;
  margin-bottom: 5px;
  text-align: center;
  line-height: 30px;
  background: rgba(255, 44, 33, .1);
}
</style>
