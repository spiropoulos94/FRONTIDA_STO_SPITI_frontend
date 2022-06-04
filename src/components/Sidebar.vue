<template>
  <div :class="`sidebar ${isMobile ? 'mobile' : ''}`">
    <h4>Menu</h4>
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
    isMobile() {
      return window.innerWidth < 900;
    },
  },
};
</script>

<style lang="scss">
.sidebar {
  top: 0px;
  bottom: 0;
  width: 350px;
  border: 1px solid red;
  height: 100%;
  &.mobile {
    position: absolute;
    background: lightblue;
    border: 1px solid red;
    width: 200px;
    padding: 30px;
  }
}
</style>
