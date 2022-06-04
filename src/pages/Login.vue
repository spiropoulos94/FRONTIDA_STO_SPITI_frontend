<template>
  <div class="login-page">
    <!-- <img src="@/assets/login.jpeg" /> -->
    <div class="login-content">fasdgasdgsd</div>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style lang="scss" scoped>
.login-page {
  background: red;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  //   background-image: url("https://frontidastospiti.com/wp-content/uploads/2022/05/1_7UA2Rd0xs6AVxtASN-UaA-scaled.jpeg");
  background-image: url("@/assets/login.jpeg");
  //   background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;

  .login-content {
    display: flex;
    width: 100vh;
    height: 100vh;
  }
}
</style>
