<template>
  <div class="page-controls">
    <router-link v-if="isHome" to="/reports/create">
      <button class="btn create">
        Add
        <font-awesome-icon icon="plus" size="sm" />
      </button>
    </router-link>
    <router-link v-if="!isHome" to="/reports/">
      <button class="btn return">
        <font-awesome-icon icon="arrow-left" />
        Back
      </button>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "PageControls",
  props: {
    isHome: { type: Boolean, required: true },
    createPath: { type: String, required: true },
    listPath: { type: String, required: true },
  },
};
</script>
<style lang="scss">
.page-controls {
  @include page-controls;
}

.btn {
  @include create-btn;
}
</style>
