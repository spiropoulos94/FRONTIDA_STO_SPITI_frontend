<template>
  <div class="signup-wrapper">
    <login-form-vue />
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
.signup-wrapper {
  background: red;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
