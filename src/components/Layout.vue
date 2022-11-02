<template>
  <div class="layout">
<!--    <sidebar></sidebar>-->
    <div class="sidebar"></div>
    <div class="container">
      <div class="banner"></div>
      <div class="content">hello</div>
    </div>

  </div>

</template>

<script>
import Sidebar from "@/components/Sidebar";
export default {
  name: 'Layout',
  components:{
    Sidebar
  }
};
</script>

<style lang="scss" scoped>
.layout{
  height: 100%;
  display: flex;
}
.sidebar{
  background-color:#2c3138;
  height: 100%;
  width: 20%;
}
.container{
  width: 80%;
  display: flex;
  flex-direction: column;
  .banner{
    background-color:#2c3138;
    height: 60px;
    width: 100%;
  }
  .content{
    border: 1px solid red;
    height: 100%;
    width: 100%;
  }
}

</style>
