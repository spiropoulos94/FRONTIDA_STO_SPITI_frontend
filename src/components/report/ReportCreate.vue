<template>
  <div v-if="loading" class="test"></div>
  <el-form v-if="!loading" :model="formData" :rules="rules" ref="formData">
    <p>Report</p>
    <el-divider content-position="right"> Professional Information </el-divider>
    <el-form-item label="Name" prop="Name">
      <el-input :disabled="loading" v-model="formData.Name"></el-input>
    </el-form-item>
    <el-form-item label="Surname" prop="Surname">
      <el-input :disabled="loading" v-model="formData.Surname"></el-input>
    </el-form-item>
    <el-form-item label="Profession" prop="Profession">
      <el-input :disabled="loading" v-model="formData.Profession"></el-input>
    </el-form-item>
    <el-divider content-position="right"> Patient Information </el-divider>
    <el-form-item label="Fullname" prop="PatientFullname">
      <el-input
        :disabled="loading"
        v-model="formData.PatientFullname"
      ></el-input>
    </el-form-item>
    <el-form-item label=" AMKA" prop="PatientAMKA">
      <el-input-number
        :controls="false"
        :disabled="loading"
        type="number"
        v-model="formData.PatientAMKA"
      ></el-input-number>
    </el-form-item>
    <el-form-item label=" Health Security" prop="PatientHealthSecurity">
      <el-switch
        active-text="Yes"
        inactive-text="No"
        v-model="formData.PatientHealthSecurity"
      />
    </el-form-item>

    <el-divider content-position="right"> Address </el-divider>
    <div class="address-inputs">
      <el-form-item class="street" label="Street" prop="Street">
        <el-input
          v-model="formData.PatientAddress.Street"
          placeholder="Street"
          type="text"
        />
      </el-form-item>
      <el-form-item class="number" label="Number" prop="Number">
        <el-input
          placeholder="Number"
          type="text"
          :disabled="loading"
          v-model="formData.PatientAddress.Number"
        ></el-input>
      </el-form-item>

      <el-form-item class="city" label="City" prop="City">
        <el-input
          v-model="formData.PatientAddress.City"
          placeholder="City"
          type="text"
        />
      </el-form-item>
      <el-form-item class="postal-code" label="Postal Code" prop="PostalCode">
        <el-input-number
          placeholder="Postal Code"
          :controls="false"
          :disabled="loading"
          type="number"
          v-model="formData.PatientAddress.PostalCode"
        ></el-input-number>
      </el-form-item>
    </div>
    <el-divider content-position="right"> Duration of Visit</el-divider>

    <el-form-item>
      <el-col :span="24">
        <el-form-item label="Start" prop="date1">
          <el-date-picker
            style="width: 100%"
            v-model="formData.VisitDuration.Start"
            type="datetime"
            placeholder="Pick a Date and Time"
            format="DD/MM/YYYY HH:mm:ss"
            value-format="x"
          />
        </el-form-item>
      </el-col>
      <el-col class="text-center" :span="2"> </el-col>
      <el-col :span="24">
        <el-form-item label="End" prop="date2">
          <el-date-picker
            :style="`width: 100%`"
            v-model="formData.VisitDuration.End"
            type="datetime"
            placeholder="Pick a Date and Time"
            format="DD/MM/YYYY HH:mm:ss"
            value-format="x"
          />
        </el-form-item>
      </el-col>
    </el-form-item>
    <el-divider content-position="right"> Report </el-divider>
    <el-form-item label="Abscence Status">
      <div class="abscence-text">
        Patient was
        <el-switch
          v-model="formData.AbscenceStatus"
          active-text="Abscent"
          inactive-text="Present"
          style="--el-switch-on-color: #ff4949; --el-switch-off-color: #13ce66"
        ></el-switch>
        during the visit.
      </div>
    </el-form-item>
    <el-form-item label="Delivered Services">
      <el-select
        v-model="formData.DeliveredServices"
        multiple
        placeholder="Select"
        style="width: 100%"
      >
        <el-option
          v-for="service in userData.Services"
          :key="service.Service_id"
          :label="service.Title"
          :value="service.Service_id"
        />
      </el-select>
    </el-form-item>
    <el-form-item label="Report">
      <el-input
        v-model="formData.ReportContent"
        :autosize="{ minRows: 4 }"
        type="textarea"
      ></el-input>
    </el-form-item>

    <!-- controls -->
    <div class="submit-btn-wrapper">
      <button
        @click="submitForm($event, 'formData')"
        class="form-button create"
      >
        <span v-if="!loading" class="text"> Save </span>
        <Spinner v-if="loading" />
      </button>
    </div>
  </el-form>
  <pre>{{ formData }}</pre>
</template>
<script>
import Spinner from "@/components/Spinner.vue";
export default {
  name: "ReportCreate",
  components: { Spinner },
  data() {
    return {
      loading: false,
      formData: {
        Name: "",
        Surname: "",
        Profession: "",
        PatientFullname: "",
        PatientAMKA: null,
        PatientHealthSecurity: null,
        PatientAddress: {
          Street: "",
          Number: null,
          City: "",
          PostalCode: null,
        },
        VisitDuration: {
          Start: null,
          End: null,
        },
        DeliveredServices: [],
        AbscenceStatus: false,
        ReportContent: "",
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
  .abscence-text {
    display: flex;
    flex-wrap: wrap;
    .el-switch {
      margin-right: 5px;
      margin-left: 5px;
    }
  }
}
@media (min-width: $desktop) {
  .report-view {
    .address-inputs {
      display: flex;

      .el-form-item {
        margin-right: 5px;
      }

      .street,
      .city {
        flex: 4;
      }
      .number {
        flex: 2;
      }
      .postal-code {
        flex: 3;
      }
    }
  }
}
</style>
