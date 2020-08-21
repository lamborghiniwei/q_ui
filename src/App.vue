<template>
  <div id="app">
    <qui-button type="primary">普通按钮</qui-button>
    <qui-button type="success">成功按钮</qui-button>
    <qui-button type="danger">危险按钮</qui-button>
    <qui-button type="info">信息按钮</qui-button>
    <qui-button type="info">图标按钮</qui-button>
    <!-- 无限滚动 -->
    <div class="infinite-box" 
      v-infinite-scroll='8888'
      infinite-scroll-disabled='disabled'
      infinite-scroll-delay='delay'
      infinite-scroll-distance='distance'
      infinite-scroll-immediate='immediate'
    >
        <ul>
          <li class="infinite-item" v-for="item in 10" :key="item">{{item}}</li>
        </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {

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
  overflow-y: scroll;
}
.infinite-item {
  height: 30px;
  margin-bottom: 5px;
  text-align: center;
  line-height: 30px;
  background: rgba(255, 44, 33, .1);
}
</style>
