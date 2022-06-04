<template>
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
$sidebarWidth: 300px;
$sidebarMobileWidth: 200px;

.sidebar {
  top: 0px;
  bottom: 0;
  width: $sidebarWidth;
  border: 1px solid red;
  height: 100%;
  padding: 10px;
  .item {
    margin-bottom: 20px;
  }
  &.mobile {
    position: absolute;
    background: lightblue;
    border: 1px solid red;
    width: $sidebarMobileWidth;
    padding: 30px;
  }

  &.closed {
    // left: -600px;
    background: red;
  }
}
</style>
