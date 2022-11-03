<template>
  <div>
    <Slide name="产品政策" index="❷"/>
    <div class="container">
      <div class="top">
        <el-button type="primary" size="small">添加产品</el-button>
        <div class="box">
          <span>购进总指标（万元）:</span>&nbsp; <span>¥152,54</span>
        </div>
        <div class="box">
          <span>指标按季度分解（万元）:</span>&nbsp; <span>【Q1】¥12.5，【Q2】¥12.5，【Q3】¥12.5，【Q4】¥12.5</span>
        </div>
        <div class="box">
          <span>纯销总指标（万元）:</span>&nbsp; <span>¥152,65</span>
        </div>
      </div>
      <div class="middle">
        <div class="left">
          <span>产品：</span>
          <el-button size="mini">选择产品</el-button>
          <span>美复胶丸 24粒/盒</span>
          <span>协议效期：</span>
          <el-button size="mini">2020-02-01 ~ 2020-05-01</el-button>
        </div>
        <el-button size="mini" class="delete"><span>删除</span></el-button>
      </div>
      <div class="bottom">
        <el-table :data="tableData" :header-cell-style="{background:'#f8f8f8',color:'#606266'}" style="width: 100%"
                  :border="true" size="mini">
          <el-table-column label="协议价（元）">
            <el-input placeholder="请输入" size="mini"></el-input>
          </el-table-column>
          <el-table-column label="票折（元）">
            <el-input placeholder="请输入" size="mini"></el-input>
          </el-table-column>
          <el-table-column label="购进指标量（大单位）">
            <el-input placeholder="请输入" size="mini"></el-input>
          </el-table-column>
          <el-table-column label="购进指标量（小单位）">
            <el-input placeholder="请输入" size="mini"></el-input>
          </el-table-column>
          <el-table-column label="购进金额（万元）">
            <el-input placeholder="请输入" size="mini"></el-input>
          </el-table-column>
          <el-table-column label="纯销指标量（小单位）">
            <el-input placeholder="请输入" size="mini"></el-input>
          </el-table-column>
          <el-table-column label="纯销指标金额（万元）">
            <el-input placeholder="请输入" size="mini"></el-input>
          </el-table-column>
        </el-table>
        <el-form ref="form" :model="form" label-width="80px">
          <el-table :data="tableData" :header-cell-style="{background:'#f8f8f8',color:'#606266'}" style="width: 100%"
                    :border="true" size="mini">
            <el-table-column label="分销奖励">
              <el-input placeholder="请输入" size="mini"></el-input>
            </el-table-column>
            <el-table-column label="费用科目">
              <el-select v-model="form.sigle" placeholder="请选择活动区域" size="mini">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-table-column>
            <el-table-column label="零售配送">
              <el-input placeholder="请输入" size="mini"></el-input>
            </el-table-column>
            <el-table-column label="费用科目">
              <el-select v-model="form.multi" placeholder="请选择活动区域" size="mini">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-table-column>
            <el-table-column label="医疗配送商">
              <el-input placeholder="请输入" size="mini"></el-input>
            </el-table-column>
            <el-table-column label="费用科目">
              <el-select v-model="form.multi2" placeholder="请选择活动区域" size="mini">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-table-column>
            <el-table-column label="纯销指标金额（万元）">
              <el-input  placeholder="2020-05-15" size="mini" class="white" v-model="form.date2"></el-input>
            </el-table-column>
            <el-table-column label="纯销指标金额（万元）">
              <el-input  placeholder="" size="mini" class="white" v-model="form.date1"></el-input>
            </el-table-column>
          </el-table>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Form2',
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      form: {
        name: '',
        sigle: '单选项1',
        multi: '多选项1',
        multi2: '多选项2',
        date1: '2020-05-15',
        date2: '2020-05-15',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/helper.scss";

.container {
  padding: 0 20px;
}

.top {
  display: flex;
  align-items: center;

  .box {
    padding: 0 20px;

    span:first-child {
      color: darken($color-gray, 20%);
      font-size: 14px;
    }

    span:last-child {
      color: darken($color-gray, 40%);
      font-size: 15px;
    }
  }
}


.middle {
  background-color: white;
  border-radius: 5px;
  padding: 10px 0;
  font-size: 14px;
  display: flex;
  justify-content: space-between;

  .left {
    display: flex;
    align-items: center;

    span {
      color: darken($color-gray, 20%);
    }

    span:first-child {
      margin-left: 20px;
    }

    button {
      margin: 0 10px
    }

    span:nth-child(3) {
      color: #5a9cf8;
      margin-right: 80px;
    }

  }

  .delete {
    color: #f09c39;
    margin-right: 20px;
  }
}

.bottom {
  margin-top: 1px;
  background-color: white;
  padding: 10px 15px;

  .el-table:first-child {
    margin-bottom: 10px;
  }

  ::v-deep  .el-input--mini .el-input__inner {
    background: #f8f8f8;
  }
  ::v-deep  .white .el-input__inner {
    background: white;
  }
  ::v-deep .el-select--mini  .el-input__inner {
    background: white;
  }
}
</style>
