<template>
  <div class="userCard">
    <div class="avatar-wrapper">
      <div class="avatar">
        <div class="initials">
          {{ user.Name[0].toUpperCase() }} {{ user.Surname[0].toUpperCase() }}
        </div>
        <img
          v-if="hasRegistered"
          class="status-icon"
          src="@/assets/svg/confirm.svg"
        />
        <img v-else class="status-icon" src="@/assets/svg/cancel.svg" />
      </div>
    </div>
    <div class="content">
      <div class="fullname_and_role">
        <div class="fullname">{{ user.Name }} {{ user.Surname }}</div>
        <div class="role">
          <div class="role-tag">{{ user.Profession.Title }}</div>
        </div>
      </div>
      <div v-if="user.Email" class="email">
        <img class="svg" src="@/assets/svg/mail.svg" />
        {{ user.Email }}
      </div>
    </div>
    <button v-if="hasRegistered" class="card-btn show-profile">
      <img class="svg" src="@/assets/svg/pencil.svg" />
    </button>
    <router-link v-else :to="`/users/create/${user.User_id}`">
      <button class="card-btn complete-signup">
        <font-awesome-icon size="sm" icon="external-link" />
        <!-- <img class="svg" src="@/assets/send-message.png" /> -->
      </button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "UserCard",
  props: {
    user: Object,
  },
  data() {
    return {};
  },
  computed: {
    hasRegistered() {
      return this.user.Email;
    },
  },
};
</script>
<style lang="scss">
.userCard {
  @include card;
  margin: 0px;
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
  padding: 8px 10px;
  min-width: 250px;
  align-items: center;

  .avatar-wrapper {
    margin-right: 10px;
  }

  .avatar {
    background: $darken_lightblue;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    flex-shrink: 0;
    position: relative;

    .initials {
      margin: auto;
      font-size: 12px;
      font-weight: bold;
    }
    .status-icon {
      width: 12px;
      position: absolute;
      right: 0px;
      bottom: 0px;
    }
  }

  .content {
    // border: 1px solid blue;
    flex: 1;
    margin-left: 5px;
  }

  .fullname {
    font-style: normal;
    color: #000000;
    font-weight: 700;
    font-size: 12px;
    margin-bottom: 5px;
  }

  .role {
    .role-tag {
      background: #888c9b;
      border-radius: 4px;
      padding: 0px 4px;
      width: fit-content;
      font-style: normal;
      font-weight: 700;
      font-size: 7px;
      line-height: 14px;
      display: flex;
      align-items: center;
      font-feature-settings: "tnum" on, "lnum" on;
      color: #ffffff;
    }
  }
  .email {
    margin-top: 5px;
    font-style: normal;
    font-weight: 400;
    font-size: 9px;
    line-height: 14px;
    display: flex;
    align-items: center;
    text-decoration-line: underline;
    font-feature-settings: "tnum" on, "lnum" on;
    color: #888c9b;
    .svg {
      margin-right: 2px;
    }
  }
  .card-btn {
    @include simpleButton;
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    .svg {
      width: 15px;
      height: 15px;
    }

    &.complete-signup {
      background: none;
      border: 1px solid $lightblue;
      svg {
        color: $lightblue;
      }
      &:hover {
        background: $lightblue;
        svg {
          color: white;
        }
      }
    }
  }
}

@media (min-width: $mobile) {
  .userCard {
    .content {
      display: flex;
    }
    .fullname_and_role {
      width: 120px;
      .fullname {
        font-size: 15px;
      }
      .role {
        .role-tag {
          white-space: nowrap;
          font-size: 9px;
        }
      }
    }
    .email {
      margin-top: 0px;
      margin-left: 13px;
    }
  }
}

@media (min-width: $tablet) {
  .userCard {
    .fullname_and_role {
      width: unset;
      display: flex;
      margin-left: 15px;

      .fullname {
        margin-bottom: 0px;
        // background: green;
        width: 200px;
      }

      .role {
        margin-left: 10px;
        width: 130px;
      }
    }
    .email {
      font-size: 12px;
    }
  }
}
</style>
