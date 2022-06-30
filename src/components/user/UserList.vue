<template>
  <div class="user-list-view">User list</div>
  <!-- <pre>{{ users }}</pre> -->
  <!-- user name, surname, email, reportsCount -->
  <div class="user-list">
    <div class="userCard" v-for="user in users" :key="user.User_id">
      <!-- <font-awesome-icon :icon="iconsMap[user.Profession.Title]" /> -->
      <div class="basic-info">
        <div class="fullname">{{ user.Name }} {{ user.Surname }}</div>
        <div class="job">{{ user.Profession.Title }}</div>
      </div>
      <div class="contact-info">
        <div class="email">{{ user.Email }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import api from "../../mixins/api";
export default {
  name: "UserList",
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

<style lang="scss">
.user-list {
  // display: flex;
}
.userCard {
  @include card;
  margin: unset;
  max-width: unset;
  margin-bottom: 10px;

  display: flex;
  div {
    margin-left: 10px;
  }
}
</style>
