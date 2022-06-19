<template>
  <div :class="`views-wrapper ${auth ? '' : 'no-padding'}`">
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
.views-wrapper {
  //   background: red;
  width: 100%;
  padding: 30px 50px;
}

.no-padding {
  padding: 0 !important;
}

@media (max-width: 991px) {
  .views-wrapper {
    padding: 30px 30px;
  }
}
@media (max-width: 500px) {
  .views-wrapper {
    padding: 30px 15px;
  }
}
</style>
