<template>
  <div class="user-list-view">User list</div>
  <!-- <pre>{{ users }}</pre> -->
  <!-- user name, surname, email, reportsCount -->
  <div class="user-list">
    <div class="userCard" v-for="user in users" :key="user.User_id">
      <!-- <font-awesome-icon :icon="iconsMap[user.Profession.Title]" /> -->
      <div class="upper">
        <div class="fullname">{{ user.Name }} {{ user.Surname }}</div>
        <div class="role">
          <div class="role-tag">{{ user.Profession.Title }}</div>
        </div>
      </div>
      <div class="down">
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
  flex-direction: column;

  .upper {
    display: flex;
    flex-direction: row;
    .fullname {
      font-style: normal;
      font-weight: 700;
      font-size: 1em;
      line-height: 22px;
      color: #000000;
      width: 300px;
    }

    .role {
      width: 300px;
      .role-tag {
        background: #888c9b;
        border-radius: 4px;
        text-align: center;
        width: auto;
        font-size: 12px;
        color: white;
        padding: 0px 4px;
        line-height: 22px;
        width: fit-content;
        margin-left: auto;
      }
    }
  }

  .down {
    margin-top: 15px;
  }

  .email {
    font-style: normal;
    font-weight: 400;
    font-size: 0.85rem;
    line-height: 14px;
    /* identical to box height, or 156% */

    display: flex;
    align-items: center;
    text-decoration-line: underline;
    font-feature-settings: "tnum" on, "lnum" on;

    color: #888c9b;
  }
}

@media (min-width: 768px) {
  .userCard {
    flex-direction: row;
    .upper {
      .role {
        .role-tag {
          margin-left: unset;
        }
      }
    }
  }
}
</style>
