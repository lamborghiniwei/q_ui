<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
const typeArr = ["warning", "success", "danger", "info", "primary"]
export default {
  name: 'qui-button',
  props: {
    type: {
      type: String,
      validator: function  (value)  {
        if (typeArr.indexOf(value) === -1) {
           throw new Error(`type必须为${typeArr.join(',')}`)
        }
        return true
      }
    }
  }
}
</script>

<style lang='less' scoped>
@import url('../styles/common.less');
.button {
  height: 40px;
  line-height: 1;
  padding: 12px 20px;
  font-size: @font-size;
  color: @fff;
  text-align: center;
  background: @success;
  border-radius: @border-radius;
}
</style>