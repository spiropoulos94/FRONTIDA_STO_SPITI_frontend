<template>
  <!-- <h1>Users</h1> -->
  <div class="user-view">
    <div class="user-controls">
      <router-link v-if="usersHome" to="/users/create">
        <button class="user-btn create">
          Add
          <font-awesome-icon icon="plus" size="sm" />
        </button>
      </router-link>
      <router-link v-if="!usersHome" to="/users/">
        <button class="user-btn return">
          <font-awesome-icon icon="arrow-left" />
          Back
        </button>
      </router-link>
    </div>
    <router-view name="users"></router-view>
  </div>
</template>
<script>
export default {
  name: "Users",

  computed: {
    usersHome() {
      return this.$route.path === "/users/" || this.$route.path === "/users";
    },
  },
};
</script>

<style lang="scss">
.user-view {
  .user-controls {
    @include page-controls;
  }
}
.user-btn {
  @include create-btn;
}
</style>
