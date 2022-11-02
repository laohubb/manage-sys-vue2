<template>
  <div class="layout">
    <Sidebar class="sidebar"/>
    <div class="container">
      <Banner/>
      <div class="content">
        <Crumbs/>
        <Form1/>

      </div>

    </div>
  </div>

</template>

<script>
import Sidebar from "@/components/Sidebar";
import Banner from "@/components/Banner";
import Crumbs from "@/components/Crumbs";

import Form1 from "@/components/Form1";

export default {
  name: 'Layout',
  components: {
    Banner,
    Sidebar,
    Crumbs,
    Form1
  },
  data() {
    return {
      form: {name: '', region: '金额', index: '正常', time: '2020-02-01 18:25', way: '指定渠道'},
      rules: {
        name: [
          {required: true, message: '请输入活动名称', trigger: 'blur'},
          {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
        ]
      },
      tableData: [{
        date: 'BJ000190',
        name: '宁波九州通药业有限公司',
        address: '浙江省'
      }, {
        date: 'BJ000190',
        name: '国药控股精华有限公司',
        address: '浙江省'
      }, {
        date: 'BJ000190',
        name: '老百姓药业有限公司',
        address: '上海市普陀区金沙江路 1519 弄'
      }]
    }
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/helper.scss";

.layout {
  height: 100%;
  display: flex;
}

.sidebar {
  width: 15%;
}

.container {
  width: 85%;
  display: flex;
  flex-direction: column;

  .content {
    height: 100%;
    width: 100%;
    background-color: #f5f5f5;
  }
}


</style>
