<template>
 <div>
   <Slide name="协议主体" index="❶"/>
   <div class="form">
     <el-form size="mini" :model="form" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
       <div class="top">
         <div class="left">
           <el-form-item label="协议客户" prop="name">
             <el-button>选择客户</el-button>&nbsp;
             <span class="company">上海正也医药有限公司</span>
           </el-form-item>
           <el-form-item label="购进指标">
             <el-select v-model="form.region" style="width: 24%;">
               <el-option label="区域一" value="shanghai"></el-option>
               <el-option label="区域二" value="beijing"></el-option>
             </el-select>&nbsp;
             <el-input style="width: 60%"  placeholder="输入金额/数量"></el-input>
           </el-form-item>
           <el-form-item label="销售区域">
             <el-button>选择区域</el-button>&nbsp;
             <el-tag closable size="medium">全国</el-tag>
           </el-form-item>

         </div>
         <div class="right">
           <el-form-item label="协议状态">
             <el-select v-model="form.index" style="width: 40%;">
               <el-option label="区域一" value="shanghai"></el-option>
               <el-option label="区域二" value="beijing"></el-option>
             </el-select>
           </el-form-item>
           <el-form-item label="纯销指标">
             <el-select v-model="form.region" style="width: 24%;">
               <el-option label="区域一" value="shanghai"></el-option>
               <el-option label="区域二" value="beijing"></el-option>
             </el-select>&nbsp;
             <el-input style="width: 60%"  placeholder="输入金额/数量"></el-input>
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
           </el-select>&nbsp;
           <el-button>请选择渠道</el-button>
         </el-form-item>
         <div class="table">
           <el-table :header-cell-style="{background:'#f8f8f8',color:'#606266'}" :data="tableData"   size="mini" >
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
</template>

<script lang="ts">
import Slide from "./Slide";
export default {
  name: 'Form1',
  components: {
    Slide
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
.form {

  display: flex;
  flex-direction: column;

  .top {
    ::v-deep  .el-input--mini .el-input__inner {
      background: #f8f8f8;
    }
    ::v-deep .el-select--mini  .el-input__inner {
      background: white;
    }
    display: flex;

    .left {
      width: 50%;
      color: #888888;
    }

    .right {

    }
  }

  .bottom {

    .table{
      padding: 0 4%;
    }
  }

}
</style>
