<template>
  <div class="user-list-view">User list</div>
  <div class="user-list">
    <UserCard v-for="user in users" :key="user.User_id" :user="user" />
  </div>
</template>
<script>
import api from "../../mixins/api";
import UserCard from "./UserCard.vue";
export default {
  name: "UserList",
  components: { UserCard },
  data() {
    return {
      users: [],
      iconsMap: {
        Admin: "tools",
        Patient: "user-injured",
        Physiotherapist: "dumbbell",
      },
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

<style lang="scss"></style>
