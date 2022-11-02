<template>
  <div class="layout">
    <Sidebar class="sidebar"/>
    <div class="container">
      <Banner/>
      <div class="content"></div>
    </div>

  </div>

</template>

<script>
import Sidebar from "@/components/Sidebar";
import Banner from "@/components/Banner";
export default {
  name: 'Layout',
  components:{
    Banner,
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
  width: 15%;
}
.container{
  width: 85%;
  display: flex;
  flex-direction: column;

  .content{
    border: 1px solid red;
    height: 100%;
    width: 100%;
  }
}

</style>
