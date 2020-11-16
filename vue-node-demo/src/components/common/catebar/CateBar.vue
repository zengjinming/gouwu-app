<template>
  <div id="cate-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "CateBar"
  }
</script>

<style>
  #cate-bar {
    border-top: 1px solid #b0b0b0;
    border-bottom: 1px solid #b0b0b0;
    border-right: 1px solid #b0b0b0;
    width: 95px;
    flex-shrink: 0;
    overflow: auto;
  }
</style>
