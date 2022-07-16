<template>
  <el-form :model="formData" :rules="rules" ref="reportFormData">
    <p>Report</p>
    <el-divider content-position="right"> Professional Information </el-divider>
    <el-form-item label="Name" prop="Name">
      <el-input disabled :value="userData.Name"></el-input>
    </el-form-item>
    <el-form-item label="Surname" prop="Surname">
      <el-input disabled :value="userData.Surname"></el-input>
    </el-form-item>
    <el-form-item label="Profession" prop="Profession">
      <el-input disabled :value="userData.Profession.Title"></el-input>
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
        :min="0"
        :max="999999999"
        :controls="false"
        :disabled="loading"
        type="number"
        v-model="formData.PatientAMKA"
      ></el-input-number>
    </el-form-item>
    <el-form-item label=" Health Security" prop="PatientHealthSecurity">
      <el-switch
        :disabled="loading"
        active-text="Yes"
        inactive-text="No"
        v-model="formData.PatientHealthSecurity"
      />
    </el-form-item>

    <el-divider content-position="right"> Address </el-divider>
    <div class="address-inputs">
      <el-form-item class="street" label="Street" prop="PatientAddress.Street">
        <el-input
          :disabled="loading"
          v-model="formData.PatientAddress.Street"
          placeholder="Street"
          type="text"
        />
      </el-form-item>
      <el-form-item class="number" label="Number" prop="PatientAddress.Number">
        <el-input
          placeholder="Number"
          type="text"
          :disabled="loading"
          v-model="formData.PatientAddress.Number"
        ></el-input>
      </el-form-item>

      <el-form-item class="city" label="City" prop="PatientAddress.City">
        <el-input
          :disabled="loading"
          v-model="formData.PatientAddress.City"
          placeholder="City"
          type="text"
        />
      </el-form-item>
      <el-form-item
        class="postal-code"
        label="Postal Code"
        prop="PatientAddress.PostalCode"
      >
        <el-input-number
          :min="0"
          :max="999999999"
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
        <el-form-item label="Start" prop="Arrival_Time_ts">
          <el-date-picker
            :disabled="loading"
            style="width: 100%"
            v-model="formData.Arrival_Time_ts"
            type="datetime"
            placeholder="Pick a Date and Time"
            format="DD/MM/YYYY HH:mm:ss"
            value-format="x"
          />
        </el-form-item>
      </el-col>
      <el-col class="text-center" :span="2"> </el-col>
      <el-col :span="24">
        <el-form-item label="End" prop="Departure_Time_ts">
          <el-date-picker
            :disabled="loading"
            :style="`width: 100%`"
            v-model="formData.Departure_Time_ts"
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
          :disabled="loading"
          v-model="formData.AbscenceStatus"
          active-text="Abscent"
          inactive-text="Present"
          style="--el-switch-on-color: #ff4949; --el-switch-off-color: #13ce66"
        ></el-switch>
        during the visit.
      </div>
    </el-form-item>
    <el-form-item label="Delivered Services" prop="DeliveredServices">
      <el-select
        :disabled="loading"
        v-model="formData.Services_ids"
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
    <el-form-item label="Report" prop="ReportContent">
      <el-input
        :disabled="loading"
        v-model="formData.ReportContent"
        :autosize="{ minRows: 4 }"
        type="textarea"
      ></el-input>
    </el-form-item>

    <!-- controls -->
    <div class="submit-btn-wrapper">
      <button
        @click="submitForm($event, 'reportFormData')"
        class="form-button create"
      >
        <span v-if="!loading" class="text"> Save </span>
        <Spinner v-if="loading" />
      </button>
    </div>
  </el-form>
  <pre>{{ formData }}</pre>
  <pre>{{ userData }}</pre>
</template>
<script>
import Spinner from "@/components/Spinner.vue";
import api from "../../mixins/api";
export default {
  name: "ReportCreate",
  components: { Spinner },
  mixins: [api],
  data() {
    return {
      loading: false,
      formData: {
        // Name: "",
        // Surname: "",
        // Profession: "",
        PatientFullname: "",
        PatientAMKA: null,
        PatientHealthSecurity: null,
        Arrival_Time_ts: null,
        Departure_Time_ts: null,
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
        Services_ids: [],
        AbscenceStatus: false,
        ReportContent: "",
      },
      rules: {
        PatientFullname: [
          {
            required: true,
            message: "Please input patient full name",
            trigger: "blur",
          },
        ],
        PatientAMKA: [
          {
            required: true,
            message: "Please input patient AMKA",
            trigger: "blur",
          },
        ],
        PatientAddress: {
          Street: [
            {
              required: true,
              message: "Please input adress street",
              trigger: "blur",
            },
          ],
          Number: [
            {
              required: true,
              message: "Please input adress street number",
              trigger: "blur",
            },
          ],
          City: [
            {
              required: true,
              message: "Please input adress city",
              trigger: "blur",
            },
          ],
          // PostalCode: [
          //   {
          //     required: true,
          //     message: "Please input adress postal code",
          //     trigger: "blur",
          //   },
          // ],
        },
        Arrival_Time_ts: [
          {
            required: true,
            message: "Please select when the visit started",
            trigger: "blur",
          },
        ],
        Departure_Time_ts: [
          {
            required: true,
            message: "Please select when the visit ended",
            trigger: "blur",
          },
        ],
        DeliveredServices: [
          {
            required: true,
            message: "Please select services provided during visit",
            trigger: "blur",
          },
        ],
        DeliveredServices: [
          {
            required: true,
            message: "Please select services provided during visit",
            trigger: "blur",
          },
        ],
        ReportContent: [
          {
            required: true,
            message: "Report cannot be blank",
            trigger: "blur",
          },
          {
            message: "Report should be at least 50 characters long",
            trigger: "blur",
            min: 50, // min length
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
    async submitForm(e, formName) {
      e.preventDefault();
      // "validation"

      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          this.loading = true;

          let res = await this.createReport({
            ...this.formData,
            ...this.userData,
          });
        }
      });
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
