<template>
  <div class="userCard">
    <!-- <font-awesome-icon :icon="iconsMap[user.Profession.Title]" /> -->
    <div class="avatar">
      <div class="initials">
        {{ user.Name[0].toUpperCase() }} {{ user.Surname[0].toUpperCase() }}
      </div>
    </div>
    <div class="info">
      <div class="info-top">
        <div class="fullname">{{ user.Name }} {{ user.Surname }}</div>
      </div>
      <div v-if="user.Email" class="info-bottom">
        <div class="email">{{ user.Email }}</div>
      </div>
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
  padding: 10px 16px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  flex-wrap: wrap;

  .avatar {
    background: $darken_lightblue;
    border-radius: 50%;
    width: 45px;
    height: 45px;
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
    }
  }

  .info {
    flex-grow: 1;
    .info-top {
      display: flex;
      //   border: 1px solid red;
      width: 100%;
    }
    .info-bottom {
      margin-top: 10px;
    }
  }

  .fullname {
    font-style: normal;
    font-weight: 700;
    font-size: 1em;
    line-height: 22px;
    color: #000000;
  }

  .role {
    margin-left: auto;
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
@media (min-width: $tablet) {
  .userCard {
    .info {
      //   border: 1px solid red;
      display: flex;
      align-items: center;
      text-align: start;
      justify-content: start;

      .info-top {
        width: unset;
        .fullname {
          width: 300px;
        }
      }
      .info-bottom {
        margin: 0;
      }
    }

    .role {
      // margin-left: auto;
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
        font-size: 0.8rem;
      }
    }
  }
}
</style>
