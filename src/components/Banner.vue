<template>
<div class="banner">
  <div class="item">
    <div class="icon-box">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-shouye"></use>
      </svg>
    </div>
    <div>首页</div>
  </div>
  <div class="item">
    <div class="icon-box">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-yunduanshuaxin"></use>
      </svg>
    </div>
    <div>主数据</div>
  </div>
  <div class="item">
    <div class="icon-box">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-danweizuzhi"></use>
      </svg>
    </div>
    <div>辖区管理</div>
  </div>
  <div class="sys-logo">
    <div class="icon-box">
      <svg class="icon logo" aria-hidden="true">
        <use xlink:href="#icon-wendangguanlixitong-CRMxitongtubiao"></use>
      </svg>
    </div>
    <div  class="box">
      <div>迅销通</div>
      <div>行为管理系统</div>
    </div>

  </div>

</div>
</template>

<script lang="ts">
export default {
  name: 'Banner'
};
</script>

<style lang="scss" scoped>
@import "~@/assets/helper.scss";

.banner{
  background-color:#2c3138;
  height: 60px;
  width: 100%;
  display: flex;
  padding-left: 20px;
}
.item{
  height: 100%;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  color:$color-gray;
    .icon{
      width: 32px;
      height: 32px;
      margin-right: 10px;
      color: white;
      fill: $color-gray;
    }
}
.sys-logo{
  @extend .item;
  width: 180px;
  .icon{
    width: 42px;
    height: 42px;

  }
  .box{
    color: white;
    div:first-child{
      font-size: 16px;
    }
    div:last-child{
     font-size: 10px;
    }
  }
}
</style>
