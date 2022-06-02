<template>
  <header class="header">
    <!--  -->
    <div class="toggle-menu-btn">
      <font-awesome-icon icon="bars" />
    </div>
    <div class="logo"><img src="src/assets/LogoWhite.png" /></div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.header {
  width: 100%;
  display: flex;
  flex-direction: row;
  background: white;
  border-bottom: 1px solid $lightblue;
  align-items: center;
  padding: 0px 20px;
}

.toggle-menu-btn {
  @include toggleBtn;
  background: $lightblue;
  color: white;
}

.logo {
  margin-left: auto;
  display: flex;
  img {
    height: 100%;
    width: 100%;
  }
}
</style>
