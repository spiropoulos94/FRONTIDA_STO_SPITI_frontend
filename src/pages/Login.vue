<template>
  <div class="login-page">
    <!-- <img src="@/assets/login.jpeg" /> -->
    <div class="login-content"><h1 class="form">this is a form</h1></div>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style lang="scss" scoped>
.login-page {
  background: black;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  &:before {
    content: "";
    background-image: url("https://frontidastospiti.com/wp-content/uploads/2022/05/1_7UA2Rd0xs6AVxtASN-UaA-scaled.jpeg");
    background-image: url("@/assets/login.jpeg");
    background-repeat: no-repeat;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.75;
  }

  .login-content {
    display: flex;
    width: 100vh;
    height: 100vh;
    position: relative;
  }
}
</style>
