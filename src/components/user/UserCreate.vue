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
      <el-input
        :disabled="loading"
        type="number"
        v-model="formData.AFM"
      ></el-input>
    </el-form-item>
    <el-form-item label="AMKA" prop="AMKA">
      <el-input
        :disabled="loading"
        type="number"
        v-model="formData.AMKA"
      ></el-input>
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
    <h3>Response</h3>
  </div>
  <pre>{{ formData }}</pre>
</template>
<script>
import Spinner from "@/components/Spinner.vue";
export default {
  name: "UserCreate",
  components: { Spinner },
  data() {
    return {
      loading: false,
      mode: "create",
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
  },
  methods: {
    submitForm(e, formName) {
      e.preventDefault();
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
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
}
</style>
