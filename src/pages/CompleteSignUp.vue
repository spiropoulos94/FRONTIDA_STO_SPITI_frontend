<template>
  <div class="signup-page">
    <login-form-vue formType="signup" />
  </div>
</template>

<script>
import LoginFormVue from "../components/LoginForm.vue";
export default {
  name: "CompleteSignUp",
  components: { LoginFormVue },
};
</script>

<style lang="scss">
.signup-page {
  // background: red;
  @include blue-gradient-bg;
  // position: absolute;
  // left: 0;
  // right: 0;
  // top: 0;
  // bottom: 0;

  // @include entryPage;
}
</style>
