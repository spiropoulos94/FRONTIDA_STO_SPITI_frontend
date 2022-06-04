<template>
  <div class="views-wrapper">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "MainView",
};
</script>

<style lang="scss">
.views-wrapper {
  //   background: red;
  width: 100%;
  padding: 15px 30px;
}
</style>
