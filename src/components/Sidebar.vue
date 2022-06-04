<template>
  <Transition name="slide">
    <div
      v-if="isOpen"
      v-click-outside="clickOutsideSidebar"
      :class="`sidebar ${isMobileSidebar ? 'mobile' : ''} ${
        isOpen ? '' : 'closed'
      } ${iconsOnly ? 'icons-only' : ''}`"
    >
      <router-link class="papia" to="/">
        <div class="item">
          <font-awesome-icon icon="home" />
          <span v-if="!iconsOnly" class="item-txt">Dashboard</span>
        </div>
      </router-link>
      <div class="item">
        <font-awesome-icon icon="folder" />
        <span v-if="!iconsOnly" class="item-txt">Reports</span>
      </div>
      <div class="item">
        <font-awesome-icon icon="cog" />
        <span v-if="!iconsOnly" class="item-txt">Account</span>
      </div>
      <div class="item">
        <font-awesome-icon icon="user-plus" />
        <span v-if="!iconsOnly" class="item-txt">Create User</span>
      </div>
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
  // border: 1px solid #f4f4f4;
  position: relative;
  transition: 0.2s;
  height: 100%;
  min-height: calc(100vh - $header-height);
  background: lightcyan;
  background: $lightblue;
  padding-top: 10px;

  .item {
    padding: 10px;
    margin-bottom: 20px;
    font-size: 16px;
    color: white;
    cursor: pointer;
    .item-txt {
      margin-left: 10px;
    }
    &:hover {
      background: #f4f4f4;
      background: white;
      color: $lightblue;
    }
  }
  &.mobile {
    position: absolute;
    top: 0;
    width: $sidebarMobileWidth;
  }

  &.icons-only {
    width: 60px;
    .item {
      text-align: center;
    }
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
}
</style>
