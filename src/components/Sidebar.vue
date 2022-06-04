<template>
  <Transition name="slide">
    <div
      v-if="isOpen"
      v-click-outside="clickOutsideSidebar"
      :class="`sidebar ${isMobileSidebar ? 'mobile' : ''} ${
        isOpen ? '' : 'closed'
      }`"
    >
      <div class="item">
        <font-awesome-icon icon="folder" />
        <span v-if="!iconsOnly" class="item-name">one</span>
      </div>
      <div class="item">
        <font-awesome-icon icon="folder" />
        <span v-if="!iconsOnly" class="item-name">one</span>
      </div>
      <div class="item">
        <font-awesome-icon icon="folder" />
        <span v-if="!iconsOnly" class="item-name">one</span>
      </div>
      {{ iconsOnly }}
    </div>
  </Transition>
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
  methods: {
    clickOutsideSidebar() {
      if (
        this.$store.getters.isMobileSidebar &&
        this.$store.getters.sidebarStatus
      ) {
        this.$store.commit("toggleSidebar", false);
      }
    },
  },
  computed: {
    iconsOnly() {
      return !this.isMobileSidebar && !this.isOpen;
    },
    isMobileSidebar() {
      return this.$store.getters.isMobileSidebar;
    },
    isOpen() {
      return this.$store.getters.sidebarStatus;
    },
    iconsOnly() {
      return this.$store.getters.iconsOnly;
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
  background: lightcyan;

  .item {
    margin-bottom: 20px;
  }
  &.mobile {
    position: absolute;
    top: 0;
    width: $sidebarMobileWidth;
  }

  &.closed {
    left: -$sidebarWidth;
    transition: 0.2s;
  }
}

/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-enter-active {
  transition: all 0.25s ease-out;
}

.slide-leave-active {
  // transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  transition: all 0.25s ease-out;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-$sidebarWidth);
  // opacity: 0;
}
</style>
