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
  mounted() {
    console.log("complete signup mounted!!!");
  },
};
</script>

<style lang="scss">
.signup-page {
  @include blue-gradient-bg;
}
</style>
