<template>
  <div :class="`views-wrapper ${auth ? 'main-viw-max-height' : 'no-padding'}`">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "MainView",
  computed: {
    auth() {
      return this.$store.getters.isAuthenticated;
    },
  },
};
</script>

<style lang="scss">
.main-viw-max-height {
  max-height: calc(100vh - $header-height);
  overflow: auto;
}

.views-wrapper {
  //   background: red;
  width: 100%;
  padding: 30px 50px;
}

.no-padding {
  padding: 0 !important;
}

@media (max-width: $desktop) {
  .views-wrapper {
    padding: 30px 30px;
  }
}
@media (max-width: $mobile) {
  .views-wrapper {
    padding: 30px 15px;
  }
}
</style>
