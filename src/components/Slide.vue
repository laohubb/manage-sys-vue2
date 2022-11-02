<template>
  <div class="slide">
    <div class="dotted">
      <div></div>
      <div></div>
    </div>
    <div class="text"><span>❶</span>&nbsp;{{ name }}</div>
    <div class="dotted">
      <div></div>
      <div></div>
    </div>

  </div>

</template>

<script lang="ts">
export default {
  name: 'Slide',
  props: ['name']
};
</script>

<style lang="scss" scoped>
.slide {
  height: 40px;
  display: flex;
  align-items: center;
  .text {
    width: 30%;
    display: flex;
    justify-content: center;
    span{
      color:#5d8af6
    }
  }

  .dotted {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    div:first-child {
      width: 90%;
      height: 50%;
      border-bottom: 1px solid transparent;
      background: linear-gradient(#f5f5f5, #f5f5f5) padding-box,
      repeating-linear-gradient(-45deg, #ccc 0, #ccc 0.3em, white 0, white 0.45em);
    }

    width: 100%;

  }

}
</style>
