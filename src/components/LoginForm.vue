<template>
  <div class="form-wrapper">
    <div class="logo">
      <img src="@/assets/logoWhite.png" />
    </div>
    <form>
      <label> Email </label>
      <input class="input" type="text" v-model="email" />
      <label> Password </label>
      <input class="input" type="password" v-model="password" />
      <button @click="submit" class="form-sbmt">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  date() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    submit(e) {
      e.preventDefault();
      console.log("click submit");
    },
  },
};
</script>
<style lang="scss" scoped>
.form-wrapper {
  background: white;
  border-radius: calc(2 * $borderRadius);
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 500px;

  width: 550px;

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
    }

    button {
      @include rippleEffect;
      @include formSubmitBtn;
      margin-top: 20px;
    }
  }
}
</style>
