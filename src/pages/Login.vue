<template>
  <div class="login-page">
    <!-- <div class="login-wrapper"> -->
    <LoginFormVue formType="login" />
    <!-- </div> -->
  </div>
</template>

<script>
import LoginFormVue from "../components/LoginForm.vue";

export default {
  name: "Login",
  components: { LoginFormVue },
};
</script>

<style lang="scss">
.login-page,
.signup-page {
  @include entryPage;

  //test
  padding: 10px;
}

.login-page {
  @include blue-gradient-bg;

  &:before {
    content: "";
    background-image: url("https://frontidastospiti.com/wp-content/uploads/2022/05/1_7UA2Rd0xs6AVxtASN-UaA-scaled.jpeg");
    background-image: url("@/assets/login.jpeg");
    // background-image: url("@/assets/signup.jpg");
    background-attachment: fixed;
    background-position: center;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.75;
  }
}
</style>
