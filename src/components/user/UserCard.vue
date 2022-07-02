<template>
  <div class="userCard">
    <div class="avatar-wrapper">
      <div class="avatar">
        <div class="initials">
          {{ user.Name[0].toUpperCase() }} {{ user.Surname[0].toUpperCase() }}
        </div>
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
    <button class="edit-user-btn">
      <img class="svg" src="@/assets/svg/pencil.svg" />
    </button>
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
};
</script>
<style lang="scss">
.userCard {
  @include card;
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
  padding: 8px 10px;
  min-width: 250px;
  align-items: center;

  .avatar-wrapper {
    border: 1px solid red;
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
    .initials {
      margin: auto;
      font-size: 12px;
      font-weight: bold;
    }
  }

  .content {
    border: 1px solid blue;
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
      //   text-align: center;
      //   width: auto;
      //   font-size: 10px;
      //   color: white;
      padding: 0px 4px;
      padding: 2px;
      //   line-height: 22px;
      width: fit-content;
      font-style: normal;
      font-weight: 700;
      font-size: 7px;
      line-height: 14px;
      /* or 200% */

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
  .edit-user-btn {
    @include simpleButton;
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    .svg {
      width: 10px;
      height: 10px;
    }
  }
}
</style>
