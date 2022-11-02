<template>
  <div class="layout">
    <Sidebar class="sidebar"/>
    <div class="container">
      <Banner/>
      <div class="content">
        <Crumbs/>
        <Slide name="协议主体"/>
        <div class="form">
          <div class="left"></div>
          <div class="right"></div>
          <div class="bottom"></div>
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
  }
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

.form{
}
</style>
