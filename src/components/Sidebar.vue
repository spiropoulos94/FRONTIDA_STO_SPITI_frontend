<template>
  <Transition name="slide">
    <div
      v-show="isOpen"
      v-click-outside="clickOutsideSidebar"
      :class="`sidebar ${isMobileSidebar ? 'mobile' : ''} ${
        isOpen ? '' : 'closed'
      } ${iconsOnly ? 'icons-only' : ''}`"
    >
      <router-link @click="closeSidebar" to="/">
        <button class="item">
          <font-awesome-icon icon="home" />
          <span v-if="!iconsOnly" class="item-txt">Dashboard</span>
        </button>
      </router-link>
      <router-link @click="closeSidebar" to="/reports">
        <button class="item">
          <font-awesome-icon icon="folder" />
          <span v-if="!iconsOnly" class="item-txt">Reports</span>
        </button>
      </router-link>
      <router-link @click="closeSidebar" to="/account">
        <button class="item">
          <font-awesome-icon icon="cog" />
          <span v-if="!iconsOnly" class="item-txt">Account</span>
        </button>
      </router-link>
      <router-link @click="closeSidebar" to="/users">
        <button class="item">
          <font-awesome-icon icon="user" />
          <span v-if="!iconsOnly" class="item-txt">Users</span>
        </button>
      </router-link>
      <router-link @click="closeSidebar" to="/patients">
        <button class="item">
          <font-awesome-icon icon="user-injured" />
          <span v-if="!iconsOnly" class="item-txt">Patients</span>
        </button>
      </router-link>
      <div @click="signOut">
        <button class="item">
          <!-- <font-awesome-icon icon="sign-out" /> -->
          <font-awesome-icon icon="power-off" />
          <span v-if="!iconsOnly" class="item-txt">Exit</span>
        </button>
      </div>
      <Modal
        v-if="modalStatus"
        :confirmFn="completeSignoutAndCloseModal"
        :cancelFn="closeModal"
        :confirmBtn="modalContent.confirm"
        :cancelBtn="modalContent.cancel"
        :modalTitle="modalContent.title"
      >
        Are you sure you want to exit ?
      </Modal>
    </div>
  </Transition>
</template>

<script>
import Modal from "@/components/Modal.vue";
export default {
  name: "Sidebar",
  components: {
    Modal,
  },
  data() {
    return {
      items: [],
      isSidebarHidden: false,
      modalStatus: false,
      modalContent: {
        title: "Modal title",
        // message: "You are about to log off.",
        confirm: "Exit",
        cancel: "Cancel",
      },
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
    closeSidebar() {
      console.log("close sidebar runs");
      if (this.$store.getters.isMobileSidebar) {
        this.$store.commit("toggleSidebar", false);
      }
    },
    closeModal() {
      this.modalStatus = false;
    },
    signOut() {
      // this.$store.commit("signOut");
      console.log("sign out runs");
      this.modalStatus = true;
    },
    completeSignoutAndCloseModal() {
      this.$store.commit("signOut");
      this.modalStatus = false;
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
    display: block;
    padding: 10px;
    background: none;
    width: 100%;
    text-align: start;
    margin-bottom: 20px;
    font-size: 16px;
    color: white;
    border: none;

    cursor: pointer;
    .item-txt {
      margin-left: 10px;
    }
    &:hover {
      background: #f4f4f4;
      background: white;
      color: $lightblue;
    }

    &:active {
      color: $lightblue;
      background: white;
      background: $darken_lightblue;
      color: white;
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

  .router-link-active {
    button {
      background: $darken_lightblue;
    }
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
