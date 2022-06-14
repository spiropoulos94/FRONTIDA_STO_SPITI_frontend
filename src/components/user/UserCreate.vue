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
    <h3>User created!</h3>
    <p>
      Link :
      <span>{{ url }}/{{ response["encodedFields(base64)"] }} </span>
    </p>
  </div>
  <pre>{{ formData }}</pre>
  <pre>{{ response }}</pre>
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
      loading: false,
      mode: "create",
      mode: "response",
      response: {},
      response: {
        "encodedFields(base64)":
          "eyJBRk0iOjQyMSwiQU1LQSI6MTI0LCJOYW1lIjoiZ2FzZGdhc2QiLCJQcm9mZXNzaW9uIjo2LCJTdXJuYW1lIjoiZ2FzZGdzZGEifQ==",
        message: "User added",
        ok: true,
        "rows affected": 1,
      },
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
  },
  methods: {
    async submitForm(e, formName) {
      e.preventDefault();
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          // this.loading = true;
          let res = await this.adminCreateuser(this.formData);
          console.log(res);
          if (res.ok) {
            this.mode = "response";
            this.response = res;
          }
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
<style lang="scss">
.user-view {
  .el-form {
    @include card;

    // background-color: $lightblue;

    .el-form-item {
      // @include card;
      flex-direction: column;
      label {
        // width: 120px;
        margin-right: auto;
        display: inline-block;
        color: $lightblue;
        margin-bottom: 10px;
        margin-top: 10px;
        font-size: 1.1rem;
      }

      .el-input {
        input {
          width: 100%;
          height: 40px;
        }
      }

      .el-input-number {
        width: 100%;
        input {
          text-align: start;
        }
      }

      .el-select {
        width: 100%;
      }

      .el-form-item__error {
        margin-top: 5px;
      }
    }

    .submit-btn-wrapper {
      margin-top: 50px;
    }
    .form-button {
      @include formSubmitBtn;
      width: 150px;
      display: block;
      margin-left: auto;
      border-radius: $borderRadius;
      height: 40px;
      padding: 0;
      font-size: 1rem;
    }
  }

  .response {
    @include card;
  }
}
</style>
