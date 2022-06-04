<template>
  <!-- <Transition name="slide-fade"> -->
  <div
    :class="`sidebar ${isMobileSidebar ? 'mobile' : ''} ${
      isOpen ? '' : 'closed'
    }`"
  >
    <div class="item"><font-awesome-icon icon="folder" /> one</div>
    <div class="item"><font-awesome-icon icon="folder" /> one</div>
    <div class="item"><font-awesome-icon icon="folder" /> one</div>
    {{ isMobile }}
  </div>
  <!-- </Transition> -->
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      items: [],
      isHidden: false,
    };
  },
  computed: {
    isMobileSidebar() {
      return this.$store.getters.isMobileSidebar;
    },
    isOpen() {
      return this.$store.getters.sidebarStatus;
    },
  },
};
</script>

<style lang="scss">
.sidebar {
  top: 0px;
  left: 0px;
  width: $sidebarWidth;
  border: 1px solid red;
  padding: 10px;
  position: relative;
  transition: 0.2s;
  height: 100%;
  min-height: calc(100vh - $header-height);

  .item {
    margin-bottom: 20px;
  }
  &.mobile {
    position: absolute;
    top: 0;
    background: lightblue;
    border: 1px solid red;
    width: $sidebarMobileWidth;
    padding: 30px;
  }

  &.closed {
    left: -$sidebarWidth;
    transition: 0.2s;
  }
}
</style>
