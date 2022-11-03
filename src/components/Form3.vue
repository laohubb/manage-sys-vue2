<template>
  <div>
    <Slide name="补充协议" index="❸"/>
  <div class="box">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="补充协议1" name="first">
        <div class="content-box">
          <div class="header"><span>协议内容:</span></div>
          <div class="content"></div>
        </div>

      </el-tab-pane>
      <el-tab-pane label="补充协议2" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="补充协议3" name="third">角色管理</el-tab-pane>

    </el-tabs>

  </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Form3',
  data() {
    return {
      activeName: 'first'
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style lang="scss" scoped>
.box{
  padding: 0 18px;
  padding-bottom: 10px;
}
.content-box{
  width: 100%;
  height: 200px;
  background-color: white;
  border: 1px solid #e5e7ec;
  display: flex;
  flex-direction: column;
  align-items: center;

  .header{
    font-size: 14px;
    width: 98%;
    margin: 16px 0;
  }
  .content{
    border: solid 1px #e5e7ec;
    width: 98%;
    height: 60%;
    background-color: #fafafa;
  }
}

::v-deep .el-tabs__item {
  background-color: white;
}
::v-deep .el-tabs__header {
  padding: 0;
  position: relative;
  margin: 0px 0 1px;
}
::v-deep .el-tabs--card>.el-tabs__header {
  border-bottom: 0px solid #E4E7ED;
}
</style>
