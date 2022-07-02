<template>
  <div class="userCard">
    <!-- <font-awesome-icon :icon="iconsMap[user.Profession.Title]" /> -->
    <div class="name-and-avatar">
      <div class="avatar">
        <div class="initials">
          {{ user.Name[0].toUpperCase() }} {{ user.Surname[0].toUpperCase() }}
        </div>
      </div>

      <div class="fullname">{{ user.Name }} {{ user.Surname }}</div>
    </div>
    <div v-if="user.Email" class="email">
      <img class="svg" src="@/assets/svg/mail.svg" />
      {{ user.Email }}
    </div>
    <div class="role">
      <div class="role-tag">{{ user.Profession.Title }}</div>
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

  .name-and-avatar {
    width: 100%;
    display: flex;
    align-items: center;

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
      margin-right: 10px;
      flex-shrink: 0;
      .initials {
        letter-spacing: -2px;
        margin: auto;
        font-weight: bold;
        font-size: 14px;
      }
    }

    .fullname {
      font-style: normal;
      font-weight: 700;
      font-size: 1em;
      line-height: 22px;
      color: #000000;
      text-align: end;
      //
      width: 100%;
      text-align: end;
    }
  }

  .role {
    margin-top: 10px;
    width: 100%;

    .role-tag {
      background: #888c9b;
      border-radius: 4px;
      text-align: center;
      width: auto;
      font-size: 10px;
      color: white;
      padding: 0px 4px;
      line-height: 22px;
      width: fit-content;
      margin-left: auto;
    }
  }
  .email {
    font-style: normal;
    font-weight: 400;
    font-size: 0.7rem;
    line-height: 14px;
    display: flex;
    align-items: center;
    text-decoration-line: underline;
    font-feature-settings: "tnum" on, "lnum" on;
    color: #888c9b;
    margin-top: 10px;
    .svg {
      margin-right: 2px;
    }
  }
}
</style>
