<template>
  <div v-if="formType === 'login'" class="form-card">
    <div class="logo">
      <img src="@/assets/logoWhite.png" />
    </div>
    <el-form :model="loginFormData" :rules="rules" ref="loginFormData">
      <div class="form-inputs">
        <el-form-item label="Email" prop="Email">
          <el-input
            clearable
            :disabled="loading"
            v-model="loginFormData.Email"
          ></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="Password">
          <el-input
            clearable
            :disabled="loading"
            v-model="loginFormData.Password"
            :type="showPassword ? 'text' : 'password'"
          ></el-input>
        </el-form-item>
        <!-- <label>
          Email
          <input class="input" type="text" v-model="loginFormData.email" />
          <span
            @click="clearInput('email')"
            v-if="loginFormData.email"
            class="clear-input"
            >x</span
          >
        </label> -->

        <!-- <label>
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
        </label> -->
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
    </el-form>
    <!-- <pre>{{ loginFormData }}</pre> -->
  </div>
  <div v-if="formType === 'signup'" class="form-card">
    <div class="logo">
      <img src="@/assets/logoWhite.png" />
    </div>
    <el-form :model="signupFormData" :rules="rules" ref="signupFormData">
      <div class="form-inputs">
        <el-form-item label="Name" prop="Name">
          <el-input :disabled="true" v-model="signupFormData.Name"></el-input>
        </el-form-item>
        <el-form-item label="Surname" prop="Surname">
          <el-input
            :disabled="true"
            v-model="signupFormData.Surname"
          ></el-input>
        </el-form-item>
        <el-form-item label="Profession" prop="Profession">
          <el-input
            :disabled="true"
            v-model="signupFormData.Profession.Title"
          ></el-input>
        </el-form-item>
        <el-form-item label="AFM" prop="AFM">
          <el-input :disabled="true" v-model="signupFormData.AFM"></el-input>
        </el-form-item>
        <el-form-item label="AMKA" prop="AMKA">
          <el-input :disabled="true" v-model="signupFormData.AMKA"></el-input>
        </el-form-item>
        <el-form-item label="Email" prop="Email">
          <el-input clearable v-model="signupFormData.Email"></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="Password">
          <el-input
            :type="showPassword ? 'text' : 'password'"
            clearable
            v-model="signupFormData.Password"
          ></el-input>
        </el-form-item>
        <el-form-item label="Confirm Password" prop="PasswordConfirm">
          <el-input
            :type="showPassword ? 'text' : 'password'"
            clearable
            v-model="signupFormData.PasswordConfirm"
          ></el-input>
        </el-form-item>
      </div>
      <div class="show-password">
        <span class="title">Show Password</span>
        <Switch @toggle="toggleShowPassword" />
      </div>

      <button :disabled="loading" @click="signUp" class="form-sbmt">
        <span v-if="!loading" class="text"> Sign Up </span>
        <Spinner v-if="loading" />
      </button>
    </el-form>
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
    var PasswordConfirm = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the confirmation password "));
      } else if (value !== this.signupFormData.Password) {
        callback(new Error("Two passwords should match!"));
      } else {
        callback();
      }
    };
    return {
      rules: {
        Email: [
          {
            required: true,
            message: "Please input email address",
            trigger: "blur",
          },
          {
            type: "email",
            message: "Please input email address in correct format",
            trigger: ["blur", "change"],
          },
        ],
        // Name: [
        //   {
        //     required: true,
        //     message: "Please input Name",
        //     trigger: "blur",
        //   },
        // ],
        Password: [
          {
            required: true,
            message: "Please input password",
            trigger: "change",
          },
        ],
        PasswordConfirm: [
          {
            required: true,
            validator: PasswordConfirm,
            trigger: "change",
          },
        ],
        // Surname: [
        //   {
        //     required: true,
        //     message: "Please input Surname",
        //     trigger: "blur",
        //   },
        // ],
        // AFM: [
        //   {
        //     // type: "date",
        //     required: true,
        //     message: "Please pick a date",
        //     trigger: "blur",
        //   },
        // ],
        // AMKA: [
        //   {
        //     // type: "date",
        //     required: true,
        //     message: "Please pick a time",
        //     trigger: "blur",
        //   },
        // ],
        Role_id: [
          {
            // type: "array",
            required: true,
            message: "Please select Profession",
            trigger: "blur",
          },
        ],
      },
      loginFormData: {
        Email: import.meta.env.VITE_DEVMAIL || "",
        Password: import.meta.env.VITE_DEVPASS || "",
      },
      signupFormData: {
        Email: "",
        Name: "",
        Surname: "",
        Profession: {
          Role_id: "",
          Title: "",
        },
        AFM: null,
        AMKA: null,
        Password: import.meta.env.VITE_DEVPASS || "",
        PasswordConfirm: import.meta.env.VITE_DEVPASS || "",
      },
      loading: false,
      showPassword: false,
    };
  },
  computed: {
    prefilledInfo() {
      if (this.formType === "signup" && this.$route.params.hash) {
        try {
          return JSON.parse(atob(this.$route.params.hash));
        } catch (e) {
          console.log(e);
        }
      } else {
        return null;
      }
    },
  },
  mounted() {
    console.log("form mounted", this.prefilledInfo);
    if (this.prefilledInfo) {
      Object.keys(this.prefilledInfo).forEach((k) => {
        this.signupFormData[k] = this.prefilledInfo[k];
      });
    }
  },
  methods: {
    async signUp(e) {
      e.preventDefault();
      console.log(this.signupFormData);
      this.$refs["signupFormData"].validate(async (valid) => {
        if (valid) {
          this.loading = true;
          let res = await this.completeSignUp(this.signupFormData);
          console.log({ res });
          this.loading = false;
          if (res.ok) {
            this.$store.commit("login", res);
          } else if (res.error) {
            this.$notify.error({
              title: "Error",
              message: res.error,
            });
          }
        }
      });
    },
    async submit(e) {
      e.preventDefault();
      console.log("submit", this.$refs);
      this.$refs["loginFormData"].validate(async (valid) => {
        console.log({ valid });
        if (valid) {
          this.loading = true;
          let res = await this.login(this.loginFormData);
          console.log({ res });
          this.loading = false;
          if (res.ok) {
            this.$store.commit("login", res);
          } else if (res.error) {
            this.$notify.error({
              title: "Error",
              message: res.error,
            });
          }
        }
      });
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

<style lang="scss">
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

.form-inputs {
  .el-form-item {
    flex-direction: column;
    margin-bottom: 10px;
    label {
      justify-content: flex-start;
    }
  }
}

.form-card {
  @include card;
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
