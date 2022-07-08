<template>
  from to
  <el-form :model="formData" :rules="rules" ref="formData">
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
</template>
<script>
export default {
  name: "ReportCreate",
  data() {
    return {
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
    userData() {
      return this.$store.getters.getUserData;
    },
  },
  methods: {
    submitForm() {
      console.log("submit form");
    },
  },
};
</script>
<style lang="scss">
.report-view {
  .el-form {
    @include custom-element-form;
  }
}
</style>
