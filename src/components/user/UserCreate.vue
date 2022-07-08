<template>
  <!-- <h3 class="subtitle">Create a new User</h3> -->

  <el-form
    v-if="mode === 'create'"
    :model="formData"
    :rules="rules"
    ref="formData"
  >
    <el-form-item label="Name" prop="Name">
      <el-input :disabled="loading" v-model="formData.Name"></el-input>
    </el-form-item>
    <el-form-item label="Surname" prop="Surname">
      <el-input :disabled="loading" v-model="formData.Surname"></el-input>
    </el-form-item>
    <el-form-item label="AFM" prop="AFM">
      <el-input-number
        :controls="false"
        :disabled="loading"
        type="number"
        v-model="formData.AFM"
      ></el-input-number>
    </el-form-item>
    <el-form-item label="AMKA" prop="AMKA">
      <el-input-number
        :controls="false"
        :disabled="loading"
        type="number"
        v-model="formData.AMKA"
      ></el-input-number>
    </el-form-item>
    <el-form-item label="Profession" prop="Role_id">
      <el-select
        :disabled="loading"
        v-model="formData.Role_id"
        placeholder="Profession"
      >
        <el-option
          v-for="role in availableRoles"
          :key="role.Role_id"
          :value="role.Role_id"
          :label="role.Title"
        >
        </el-option>
      </el-select>
    </el-form-item>

    <div class="submit-btn-wrapper">
      <button
        @click="submitForm($event, 'formData')"
        class="form-button create"
      >
        <span v-if="!loading" class="text"> Create </span>
        <Spinner v-if="loading" />
      </button>
    </div>
  </el-form>
  <div v-if="mode === 'response'" class="response">
    <h3>User {{ userFullName }} created!</h3>
    <p>
      Sent <span class="userFull">{{ userFullName }} </span> this link to
      complete sign up
    </p>
    <el-input
      ref="userlink"
      v-model="userLink"
      :rows="2"
      type="textarea"
      placeholder="Please input"
    />
    <button @click="copyLink" class="response-button">
      <font-awesome-icon v-if="linkCopied" icon="check-circle" />
      <font-awesome-icon v-if="!linkCopied" icon="copy" />

      Copy
    </button>
    <!-- <pre>{{ formData }}</pre>
    <pre>{{ userHash }}</pre> -->
  </div>
</template>
<script>
import Spinner from "@/components/Spinner.vue";
import api from "@/mixins/api";
export default {
  name: "UserCreate",
  components: { Spinner },
  mixins: [api],
  data() {
    return {
      userHash: null,
      loading: false,
      linkCopied: false,
      mode: "create",
      // mode: "response",
      formData: {
        Name: "",
        Surname: "",
        AFM: null,
        AMKA: null,
        Role_id: null,
      },
      rules: {
        Name: [
          {
            required: true,
            message: "Please input Name",
            trigger: "blur",
          },
        ],
        Surname: [
          {
            required: true,
            message: "Please input Surname",
            trigger: "blur",
          },
        ],
        AFM: [
          {
            // type: "date",
            required: true,
            message: "Please pick a date",
            trigger: "blur",
          },
        ],
        AMKA: [
          {
            // type: "date",
            required: true,
            message: "Please pick a time",
            trigger: "blur",
          },
        ],
        Role_id: [
          {
            // type: "array",
            required: true,
            message: "Please select Profession",
            trigger: "blur",
          },
        ],
      },
    };
  },
  computed: {
    availableRoles() {
      return this.$store.getters.getRoles;
    },
    url() {
      return this.$store.getters.getHomepath;
    },
    userLink() {
      return `${window.location.origin}/signup/${this.userHash}`;
    },
    userFullName() {
      if (this.formData.Name || this.formData.Surname) {
        return `${this.formData.Name} ${this.formData.Surname}`;
      } else {
        return " user ";
      }
    },
  },
  methods: {
    copyLink() {
      this.$refs.userlink.select();
      document.execCommand("copy");
      this.linkCopied = true;
      setTimeout(() => {
        this.linkCopied = false;
      }, 3000);
    },
    async checkUserStatus(userID) {
      let res = await this.getUser(userID);
      if (res.ok) {
        this.formData.Name = res.user.Name;
        this.formData.Surname = res.user.Surname;
        return res.user.Active;
      }
    },
    async getUserSignUpLink(userID) {
      let userStatus = await this.checkUserStatus(userID);

      if (userStatus === true) {
        this.$router.push("/users");
        return;
      } else {
        let res = await this.getUserHash(userID);
        if (res.ok) {
          return res.hash;
        }
      }
    },
    async submitForm(e, formName) {
      this.loading = true;
      e.preventDefault();
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          // this.loading = true;
          let res = await this.adminCreateuser(this.formData);
          console.log(res);
          if (res.ok) {
            this.$message({
              message: "User succesfully created.",
              type: "success",
            });
            this.userHash = res["encodedFields(base64)"];
            this.mode = "response";
          } else {
            this.$message({
              message: res.error,
              duration: 5000,
              type: "error",
            });
          }
        } else {
          return false;
        }
      });
      this.loading = false;
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
  async mounted() {
    if (this.$route.params["id"]) {
      let userID = this.$route.params["id"];
      this.mode = "response";
      this.userHash = await this.getUserSignUpLink(userID);
      console.log({ hash: this.userHash });
    }
  },
};
</script>
<style lang="scss">
.user-view {
  .el-form {
    @include custom-element-form;
  }

  .response {
    @include card;

    h3 {
      margin-bottom: 15px;
    }

    p {
      display: block;
      margin-bottom: 20px;
      font-size: 0.7rem;
      text-align: end;
      .userFull {
        font-weight: bold;
      }
    }

    .response-button {
      @include simpleButton;
      @include rippleEffect;
      display: block;
      margin: 0;
      margin-top: 10px;
      margin-left: auto;
    }
  }
}
</style>
