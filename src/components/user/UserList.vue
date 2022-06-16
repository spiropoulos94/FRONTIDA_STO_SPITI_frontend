<template>
  <div class="user-list">User list</div>
</template>
<script>
import api from "../../mixins/api";
export default {
  name: "UserList",
  mixins: [api],
  mounted() {
    console.log("LIST USERS RUNS");
    this.listUsers();
  },
};
</script>

<style lang="scss"></style>
