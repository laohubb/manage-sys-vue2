<template>
  <div class="layout">
    <Sidebar class="sidebar"/>
    <div class="container">
      <Banner/>
      <div class="content">
        <Crumbs/>
        <Slide name="协议主体"/>
        <div class="form">
          <el-form size="mini" :model="form" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <div class="top">
              <div class="left">
                <el-form-item label="协议客户" prop="name">
                  <el-button>选择客户</el-button>
                  <span>上海正也医药有限公司</span>
                </el-form-item>
                <el-form-item label="购进指标">
                  <el-select v-model="form.region" style="width: 24%;">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                  <el-input style="width: 60%" placeholder="输入金额/数量"></el-input>
                </el-form-item>
                <el-form-item label="销售区域">
                  <el-button>选择区域</el-button>
                  <el-tag closable size="medium">全国</el-tag>
                </el-form-item>

              </div>
              <div class="right">
                <el-form-item label="协议状态">
                  <el-select v-model="form.index" style="width: 100%;">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="纯销指标">
                  <el-select v-model="form.region" style="width: 24%;">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                  <el-input style="width: 60%" placeholder="输入金额/数量"></el-input>
                </el-form-item>
                <el-form-item label="签订时间">
                  <el-input v-model="form.time"></el-input>
                </el-form-item>

              </div>
            </div>

            <div class="bottom">
              <el-form-item label="购进渠道">
                <el-select v-model="form.way" style="width: 100px">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
                <el-button>请选择渠道</el-button>
              </el-form-item>
<div class="table">
  <el-table :data="tableData" stripe  size="mini" >
    <el-table-column   width="40" ></el-table-column>
    <el-table-column  prop="date" label="指定渠道编码" width="280" style=""></el-table-column>
    <el-table-column  prop="name" label="指定渠道名称" width="550"></el-table-column>
    <el-table-column  prop="address" label="地址" ></el-table-column>
  </el-table>

</div>

            </div>
          </el-form>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
import Sidebar from "@/components/Sidebar";
import Banner from "@/components/Banner";
import Crumbs from "@/components/Crumbs";
import Slide from "@/components/Slide";

export default {
  name: 'Layout',
  components: {
    Slide,
    Banner,
    Sidebar,
    Crumbs
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

.form {
  border: 1px solid black;
  display: flex;
  flex-direction: column;

  .top {
    border: 1px solid black;
    display: flex;

    .left {
      width: 50%;
    }

    .right {

    }
  }

  .bottom {
    border: 1px solid black;
    .table{
      padding: 0 4%;
    }
  }
}
</style>
