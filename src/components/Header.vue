<template>
  <header class="header">
    <!--  -->
    <div class="logo"><img src="src/assets/LogoWhite.png" /></div>
    <div @click="toggleSidebar()" class="toggle-menu-btn">
      <font-awesome-icon
        :icon="isMobileSidebar && !isClosedSidebar ? 'xmark' : 'bars'"
      />
      <!-- <font-awesome-icon icon="xmark" /> -->
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  methods: {
    toggleSidebar(status) {
      if (this.isMobileSidebar) {
        this.$store.commit("toggleSidebar", status);
      } else {
        this.$store.commit("toggleIconsOnly", status);
      }
    },
  },
  computed: {
    isMobileSidebar() {
      return this.$store.getters.isMobileSidebar;
    },
    isClosedSidebar() {
      return this.$store.getters.sidebarStatus !== true;
    },
  },
};
</script>

<style lang="scss">
$header-height: 70px;

.header {
  width: 100%;
  display: flex;
  flex-direction: row;
  background: white;
  border-bottom: 1px solid $lightblue;
  align-items: center;
  padding: 0px 20px;
  height: $header-height;
  justify-content: space-between;
}

.toggle-menu-btn {
  @include toggleBtn;
  background: $lightblue;
  color: white;
  //invert below
  background: white;
  color: $lightblue;
  &:hover {
    border: 1px solid $lightblue;
  }
}

.logo {
  // margin-left: auto;
  display: flex;
  img {
    height: 100%;
    width: 100%;
  }
}
</style>
