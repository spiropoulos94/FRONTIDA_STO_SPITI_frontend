<template>
  <div class="login-page">
    <div class="login-content">
      <LoginFormVue />
    </div>
  </div>
</template>

<script>
import LoginFormVue from "../components/LoginForm.vue";

export default {
  name: "Login",
  components: { LoginFormVue },
};
</script>

<style lang="scss" scoped>
.login-page {
  //   background: black;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  &:before {
    content: "";
    background-image: url("https://frontidastospiti.com/wp-content/uploads/2022/05/1_7UA2Rd0xs6AVxtASN-UaA-scaled.jpeg");
    background-image: url("@/assets/login.jpeg");
    background-attachment: fixed;
    background-position: center;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.75;
  }

  .login-content {
    display: flex;
    width: 100%;
    height: 100vh;
    position: relative;

    justify-content: center;
    align-items: center;
    align-items: start;
  }
}
</style>
