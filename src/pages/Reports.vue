<template>
  <div class="report-view">
    <PageControls
      :isHome="reportsHome"
      createPath="/reports/create"
      listPath="/reports/"
    />
    <!-- <div class="report-controls">
      <router-link v-if="reportsHome" to="/reports/create">
        <button class="report-btn create">
          Add
          <font-awesome-icon icon="plus" size="sm" />
        </button>
      </router-link>
      <router-link v-if="!reportsHome" to="/reports/">
        <button class="report-btn return">
          <font-awesome-icon icon="arrow-left" />
          Back
        </button>
      </router-link>
    </div> -->
    <router-view name="reports"></router-view>
  </div>
</template>
<script>
import PageControls from "../components/PageControls.vue";
export default {
  name: "Reports",
  components: {
    PageControls,
  },
  computed: {
    reportsHome() {
      return (
        this.$route.path === "/reports/" || this.$route.path === "/reports"
      );
    },
  },
};
</script>

<style lang="scss">
.report-view {
  .report-controls {
    @include page-controls;
  }
}

.report-btn {
  @include create-btn;
}
</style>
