<template>
  <header class="header">
    <!--  -->

    <div :style="{ order: isMobileSidebar ? 1 : 2 }" class="logo">
      <img src="@/assets/LogoWhite.png" />
    </div>
    <div :style="{ order: isMobileSidebar ? 2 : 1 }" class="header-controls">
      <div @click="toggleSidebar($event)" class="toggle-menu-btn">
        <font-awesome-icon
          :icon="isMobileSidebar && !isClosedSidebar ? 'xmark' : 'bars'"
        />
        <!-- <font-awesome-icon icon="xmark" /> -->
      </div>
      <!-- @click="toggleSidebar()" -->
      <!-- <div class="toggle-menu-btn">
        <font-awesome-icon icon="sign-out" />
      </div> -->
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
    toggleSidebar(e, status) {
      e.stopPropagation();

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
  height: $header-height;
  justify-content: space-between;

  .header-controls {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    padding: 0px 10px 0px 0px;
    // background: red;
    // order: 1;
  }
  .logo {
    // order: 2;
  }
}

.toggle-menu-btn {
  @include toggleBtn;
  background: $lightblue;
  color: white;
  //invert below
  background: white;
  color: $lightblue;
  margin: 10px;
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
