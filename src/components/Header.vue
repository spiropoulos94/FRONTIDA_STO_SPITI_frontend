<template>
  <header class="header">
    <!--  -->
    <div class="menu">menu</div>
    <font-awesome-icon icon="bars" />
    <!-- <div class="logo"><img src="src/assets/LogoWhite.png" /></div> -->
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
  border-bottom: 1px solid red;
}
.logo {
  img {
    height: 100%;
    width: 100%;
  }
}
.menu {
  background: var(--gray);
  font-size: var(--fontStandard);
  margin-left: auto;
}
</style>
