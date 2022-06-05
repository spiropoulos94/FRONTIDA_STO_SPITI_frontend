<template>
  <div class="form-wrapper">
    <div class="logo">
      <img src="@/assets/logoWhite.png" />
    </div>
    <form>
      <!-- <div class="input-wrapper"> -->
      <label> Email </label>
      <input class="input" type="text" v-model="formData.email" />
      <span
        @click="clearInput('email')"
        v-if="formData.email"
        class="clear-input"
        >x</span
      >

      <!-- </div> -->
      <!-- <div class="input-wrapper"> -->
      <label> Password </label>
      <input class="input" type="password" v-model="formData.password" />
      <span
        @click="clearInput('password')"
        v-if="formData.password"
        class="clear-input"
        >x</span
      >

      <!-- </div> -->
      <button @click="submit" class="form-sbmt">Login</button>
    </form>
    <!-- <pre>{{ formData }}</pre> -->
  </div>
</template>

<script>
import api from "@/mixins/api.js";

export default {
  name: "LoginForm",
  mixins: [api],
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    submit(e) {
      e.preventDefault();
      console.log("click submit");
      //   this.$store.state.user_data = "fafs";
      //   this.$router.push("/");
      this.login();
    },
    clearInput(input) {
      this.formData[input] = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.clear-input {
  width: 20px;
  font-size: 0.75rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: red;
  background: $lightblue;
  color: white;
  position: relative;
  bottom: 39px;
  left: calc(100% - 20px - 10px);
  cursor: pointer;
  &:hover {
    color: $lightblue;
    background: white;
  }
}
.form-wrapper {
  background: white;
  border-radius: calc(2 * $borderRadius);
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 500px;

  width: 550px;
  margin-top: 25vh;

  .logo {
    max-width: 195px;
    margin: auto;
    img {
      width: 100%;
      height: 100%;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    padding: 10px;

    label {
      width: 100%;
      @include formInputLabel;
    }

    input {
      @include formInput;
      width: 100%;
      position: relative !important;
    }

    button {
      @include rippleEffect;
      @include formSubmitBtn;
      margin-top: 20px;
    }
  }
}
</style>
