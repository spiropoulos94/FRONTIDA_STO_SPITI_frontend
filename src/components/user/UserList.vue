<template>
  <div class="user-list">User list</div>
  <!-- <pre>{{ users }}</pre> -->
  <!-- user name, surname, email, reportsCount -->
  <div class="userCard" v-for="user in users" :key="user.User_id">
    <div class="name">{{ user.Name }}</div>
    <div class="surname">{{ user.Surname }}</div>
    <div class="email">{{ user.Email }}</div>
  </div>
</template>
<script>
import api from "../../mixins/api";
export default {
  name: "UserList",
  data() {
    return {
      users: [],
    };
  },
  mixins: [api],
  methods: {
    async fetchUsers() {
      let data = await this.listUsers();
      if (data.ok) {
        this.users = data.users;
      } else {
        this.$message({
          message: data.error || "Error",
          duration: 5000,
          type: "error",
        });
      }
    },
  },
  mounted() {
    this.fetchUsers();
  },
};
</script>

<style lang="scss">
.userCard {
  @include card;
  margin-bottom: 10px;
}
</style>
