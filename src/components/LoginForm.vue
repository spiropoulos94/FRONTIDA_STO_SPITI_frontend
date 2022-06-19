<template>
  <div v-if="formType === 'login'" class="form-card">
    <div class="logo">
      <img src="@/assets/logoWhite.png" />
    </div>
    <form>
      <div class="form-inputs">
        <label>
          Email
          <input class="input" type="text" v-model="loginFormData.email" />
          <span
            @click="clearInput('email')"
            v-if="loginFormData.email"
            class="clear-input"
            >x</span
          >
        </label>

        <label>
          Password
          <input
            class="input"
            :type="showPassword ? 'text' : 'password'"
            v-model="loginFormData.password"
          />
          <span
            @click="clearInput('password')"
            v-if="loginFormData.password"
            class="clear-input"
            >x</span
          >
        </label>
      </div>
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
    <!-- <pre>{{ loginFormData }}</pre> -->
  </div>
  <div v-if="formType === 'signup'" class="form-card">
    <div class="logo">
      <img src="@/assets/logoWhite.png" />
    </div>
    <form>
      <div class="form-inputs">
        <label>
          Name
          <input
            disabled
            class="input"
            type="text"
            v-model="signupFormData.name"
          />
          <!-- <span
            @click="clearInput('name')"
            v-if="signupFormData.name"
            class="clear-input"
            >x</span
          > -->
        </label>
        <label>
          Surname
          <input
            disabled
            class="input"
            type="text"
            v-model="signupFormData.surname"
          />
          <!-- <span
            @click="clearInput('surname')"
            v-if="signupFormData.surname"
            class="clear-input"
            >x</span
          > -->
        </label>
        <label>
          Profession
          <input
            disabled
            class="input"
            type="text"
            v-model="signupFormData.profession.Title"
          />
          <!-- <span
            @click="clearInput('profession.title')"
            v-if="signupFormData.profession.Title"
            class="clear-input"
            >x</span
          > -->
        </label>
        <label>
          AFM
          <input
            disabled
            class="input"
            type="number"
            v-model="signupFormData.AFM"
          />
          <!-- <span
            @click="clearInput('AFM')"
            v-if="signupFormData.AFM"
            class="clear-input"
            >x</span
          > -->
        </label>
        <label>
          AMKA
          <input
            disabled
            class="input"
            type="number"
            v-model="signupFormData.AMKA"
          />
          <!-- <span
            @click="clearInput('AMKA')"
            v-if="signupFormData.AMKA"
            class="clear-input"
            >x</span
          > -->
        </label>
        <label>
          Email
          <input class="input" type="text" v-model="signupFormData.email" />
          <span
            @click="clearInput('email')"
            v-if="signupFormData.email"
            class="clear-input"
            >x</span
          >
        </label>

        <label>
          Password
          <input
            class="input"
            :type="showPassword ? 'text' : 'password'"
            v-model="signupFormData.password"
          />
          <span
            @click="clearInput('password')"
            v-if="signupFormData.password"
            class="clear-input"
            >x</span
          >
        </label>
        <!-- to password confirm epirreazei to width -->
        <label>
          Password Confirm
          <input
            class="input"
            :type="showPassword ? 'text' : 'password'"
            v-model="signupFormData.passwordConfirm"
          />
          <span
            @click="clearInput('passwordConfirm')"
            v-if="signupFormData.passwordConfirm"
            class="clear-input"
            >x</span
          >
        </label>
      </div>
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
    <!-- <pre>{{ signupFormData }}</pre> -->
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
  props: {
    formType: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      loginFormData: {
        email: import.meta.env.VITE_DEVMAIL || "",
        password: import.meta.env.VITE_DEVPASS || "",
      },
      signupFormData: {
        email: "",
        name: "",
        surname: "",
        profession: {
          Role_id: "",
          Title: "",
        },
        AFM: null,
        AMKA: null,
        password: import.meta.env.VITE_DEVPASS || "",
        passwordConfirm: import.meta.env.VITE_DEVPASS || "",
      },
      loading: false,
      showPassword: false,
    };
  },
  computed: {
    prefilledInfo() {
      if (this.formType === "signup" && this.$route.params.hash) {
        return JSON.parse(atob(this.$route.params.hash));
      } else {
        return null;
      }
    },
  },
  mounted() {
    console.log("form mounted", this.prefilledInfo);
    if (this.prefilledInfo) {
      this.signupFormData.name = this.prefilledInfo.Name;
      this.signupFormData.surname = this.prefilledInfo.Surname;
      this.signupFormData.profession = this.prefilledInfo.Profession;
      this.signupFormData.AFM = this.prefilledInfo.AFM;
      this.signupFormData.AMKA = this.prefilledInfo.AMKA;
    }
  },
  methods: {
    async submit(e) {
      e.preventDefault();
      this.loading = true;
      let res = await this.login(this.loginFormData);
      console.log({ res });
      this.loading = false;
      if (res.ok) {
        this.$store.commit("login", res);
      }
    },
    clearInput(input) {
      console.log("clearrInput", input);
      if (this.formType === "login") {
        this.loginFormData[input] = "";
      } else if (this.formType === "signup") {
        this.signupFormData[input] = "";
      }
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
  bottom: 0px;
  left: calc(100% - 20px - 10px);
  cursor: pointer;
  &:hover {
    color: $lightblue;
    background: white;
  }
}

// .form-wrapper {
//   display: flex;
//   width: 100%;
//   height: 100vh;
//   position: relative;
//   justify-content: center;
//   align-items: center;
//   align-items: start;
// }
.form-card {
  position: relative;
  background: white;
  border-radius: calc(2 * $borderRadius);
  display: flex;
  flex-direction: column;
  padding: 20px;

  width: 100%;
  max-width: 500px;

  // min-width: 100%;
  // margin-top: 25vh;
  // margin-left: 10px;
  // margin-right: 10px;

  .logo {
    max-width: 195px;
    margin: 0 auto;
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
      margin-top: 10px;

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
