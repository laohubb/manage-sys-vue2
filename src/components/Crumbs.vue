<template>
  <div class="top">
    <div class="crumbs">首页/管理协议/管理协议/管理协议</div>
    <div class="route">新增二级商协议</div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Crumbs'
};
</script>

<style lang="scss" scoped>
@import "~@/assets/helper.scss";

.top{
  height: 60px;
  width: 100%;
  background-color: white;
  padding-left: 20px;
  padding-top: 12px;
  .crumbs{

    color:$color-gray;
    font-size: 12px;
  }
  .route{
    margin-top: 5px;

  }
}
</style>
