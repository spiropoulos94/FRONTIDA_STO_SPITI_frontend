<template>
  <div class="form-wrapper">
    <div class="form-card">
      <div class="logo">
        <img src="@/assets/logoWhite.png" />
      </div>
      <form>
        <label>
          Email
          <input class="input" type="text" v-model="formData.email" />
          <span
            @click="clearInput('email')"
            v-if="formData.email"
            class="clear-input"
            >x</span
          >
        </label>

        <label>
          Password
          <input
            class="input"
            :type="showPassword ? 'text' : 'password'"
            v-model="formData.password"
          />
          <span
            @click="clearInput('password')"
            v-if="formData.password"
            class="clear-input"
            >x</span
          >
        </label>
        <div class="show-password">
          <span class="title">Show Password</span>
          <!-- <input
          v-model="showPassword"
          type="checkbox"
          class="show-password-checkbox"
        /> -->
          <Switch @toggle="toggleShowPassword" />
        </div>

        <button :disabled="loading" @click="submit" class="form-sbmt">
          <span v-if="!loading" class="text"> Login </span>
          <Spinner v-if="loading" />
        </button>
      </form>
      <!-- <pre>{{ formData }}</pre> -->
    </div>
  </div>
</template>

<script>
import api from "@/mixins/api.js";
import Spinner from "@/components/Spinner.vue";
import Switch from "@/components/Switch.vue";
import Switch1 from "./Switch.vue";

export default {
  name: "LoginForm",
  components: { Spinner, Switch, Switch1 },
  mixins: [api],
  data() {
    return {
      formData: {
        email: import.meta.env.VITE_DEVMAIL || "",
        password: import.meta.env.VITE_DEVPASS || "",
      },
      loading: false,
      showPassword: false,
    };
  },
  methods: {
    async submit(e) {
      e.preventDefault();
      this.loading = true;
      let res = await this.login(this.formData);
      console.log({ res });
      this.loading = false;
      if (res.ok) {
        this.$store.commit("login", res);
      }
    },
    clearInput(input) {
      this.formData[input] = "";
    },
    toggleShowPassword(status) {
      // console.log(status);
      this.showPassword = status;
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
  position: absolute;
  bottom: 20px;
  left: calc(100% - 20px - 10px);
  cursor: pointer;
  &:hover {
    color: $lightblue;
    background: white;
  }
}

.form-wrapper {
  display: flex;
  width: 100%;
  height: 100vh;
  position: relative;
  justify-content: center;
  align-items: center;
  align-items: start;
}
.form-card {
  background: white;
  border-radius: calc(2 * $borderRadius);
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 500px;

  width: 550px;
  margin-top: 25vh;
  margin-left: 10px;
  margin-right: 10px;

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
      position: relative;
    }

    .input {
      @include formInput;
      width: 100%;
      position: relative !important;
    }

    button {
      @include rippleEffect;
      @include formSubmitBtn;
      margin-top: 20px;
      height: 51px;
    }

    .show-password {
      display: flex;
      align-items: center;
      margin-left: auto;

      .title {
        font-size: 13px;
        margin-right: 10px;
      }
      .show-password-checkbox {
        width: 20px;
        height: 20px;
        margin: 0;
        margin-left: 10px;
      }
    }
  }
}
</style>
