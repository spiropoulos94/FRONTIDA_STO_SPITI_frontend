<template>
  <div :class="`sidebar ${isMobile ? 'mobile' : ''}`">
    <div class="item">one</div>
    <div class="item">two</div>
    <div class="item">three</div>
    <div class="item">four</div>
    {{ isMobile }}
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      items: [],
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
  &.mobile {
    position: absolute;
    background: lightblue;
    border: 1px solid red;
    width: 200px;
    padding: 30px;
  }
}

.sidebar-hidden {
}
</style>
