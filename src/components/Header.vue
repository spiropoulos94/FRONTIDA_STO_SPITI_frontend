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
  border-bottom: 1px solid red;
  align-items: center;
  padding: 0px 20px;
}

.toggle-menu-btn {
  width: 40px;
  height: 40px;
  background: red;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: var(--borderRadius);
}

.logo {
  margin-left: auto;
  display: flex;
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
