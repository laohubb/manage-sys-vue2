<template>
  <div class="sidebar">
    <div class="logo-box">
      <img src="../assets/tencent.png">
      <div class="title">上海正也医药有限公司</div>
    </div>
    <div class="item">
      <svg class="icon left" aria-hidden="true">
        <use xlink:href="#icon-zulinhetongbaobiao"></use>
      </svg>
      <div class="text">功能功能</div>
      <svg class="icon arrow" aria-hidden="true">
        <use xlink:href="#icon-jiantouyou"></use>
      </svg>
    </div>
    <div class="item">
      <svg class="icon left" aria-hidden="true">
        <use xlink:href="#icon-zulinhetongbaobiao"></use>
      </svg>
      <div class="text">功能功能</div>
      <svg class="icon arrow" aria-hidden="true">
        <use xlink:href="#icon-jiantouyou"></use>
      </svg>
    </div>
    <div class="item">
      <svg class="icon left" aria-hidden="true">
        <use xlink:href="#icon-zulinhetongbaobiao"></use>
      </svg>
      <div class="text">功能功能</div>
      <svg class="icon arrow" aria-hidden="true">
        <use xlink:href="#icon-jiantouyou"></use>
      </svg>
    </div>
    <div class="item">
      <svg class="icon left" aria-hidden="true">
        <use xlink:href="#icon-zulinhetongbaobiao"></use>
      </svg>
      <div class="text">功能功能</div>
      <svg class="icon arrow" aria-hidden="true">
        <use xlink:href="#icon-jiantouyou"></use>
      </svg>
    </div>
    <div class="item">
      <svg class="icon left" aria-hidden="true">
        <use xlink:href="#icon-zulinhetongbaobiao"></use>
      </svg>
      <div class="text">功能功能</div>
      <svg class="icon arrow" aria-hidden="true">
        <use xlink:href="#icon-jiantouyou"></use>
      </svg>
    </div>


  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {}
}
</script>

<style scoped lang="scss">
.sidebar {
  background-color: #2c3138;
  height: 100%;
  width: 20%;
  display: flex;
  flex-direction: column;
}

.logo-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90px;
  color: white;
  font-size: 8px;
  text-align: left;
  .title{
    width: 80%;
  }
  img{
    width: 80%;
    margin-bottom: 5px;
  }
}

.item {
  width: 100%;
  height: 50px;
  display: flex;
  padding: 0 10px;
  justify-content: space-between;
  align-items: center;
  color: white;
  .text{
    font-size: 14px;
    //border: 1px solid white;
    width: 60%;
  }
  .icon{
    &.left{
      height: 18px;
    }
    &.arrow{
      height: 12px;
    }
    width: 20%;
    //border: 1px solid white;
  }
}

</style>
