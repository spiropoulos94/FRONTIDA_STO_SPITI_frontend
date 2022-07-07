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
    <div class="fullname">{{ user.Name }} {{ user.Surname }}</div>
    <div class="role">
      <div class="role-tag">
        {{ user.Profession.Title }}
      </div>
    </div>
    <div v-if="user.Email" class="email">
      <img class="svg" src="@/assets/svg/mail.svg" />
      {{ user.Email }}
    </div>
    <div class="btn-wrapper">
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
  padding: 5px;
  display: grid;

  grid-template-columns: 1fr 88px 3fr 1fr;
  margin-bottom: 10px;

  height: 60px;

  grid-template-areas:
    "avatar fullname email button"
    "avatar role email button";

  .avatar-wrapper {
    grid-area: avatar;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 6px;
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
  }
  .fullname {
    grid-area: fullname;

    display: flex;
    align-items: center;
    font-style: normal;
    color: #000000;
    font-weight: 700;
    font-size: 12px;
  }
  .role {
    grid-area: role;
    display: flex;
    align-items: center;
    .role-tag {
      background: #888c9b;
      border-radius: 4px;
      padding: 0px 4px;
      width: fit-content;
      font-style: normal;
      font-weight: 700;
      font-size: 6px;
      line-height: 14px;
      display: flex;
      align-items: center;
      font-feature-settings: "tnum" on, "lnum" on;
      color: #ffffff;
    }
  }
  .email {
    grid-area: email;
    font-style: normal;
    font-weight: 400;
    font-size: 7px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration-line: underline;
    font-feature-settings: "tnum" on, "lnum" on;
    color: #888c9b;
    .svg {
      margin-right: 2px;
    }
  }

  .btn-wrapper {
    grid-area: button;
    display: flex;
    align-items: center;
    justify-content: center;
    .card-btn {
      @include simpleButton;
      margin-left: 0;
      margin: auto;
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
}

@media (min-width: $mobile) {
  .userCard {
    grid-template-columns: 1fr 125px 3fr 1fr;
    // no more tiny font size for xtra small screens
    .role {
      .role-tag {
        font-size: 9px;
      }
    }
    .email {
      font-size: 10px;
    }
  }
}

@media (min-width: $tablet) {
  .userCard {
    background: lightcoral;
  }
}
</style>
