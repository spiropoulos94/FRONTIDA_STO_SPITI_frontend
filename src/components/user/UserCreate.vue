<template>
  <h3 class="subtitle">Create a new User</h3>
  <form>
    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <input class="input" type="text" />
      </div>
    </div>
    <div class="field">
      <label class="label">Email</label>
      <div class="control">
        <input class="input" type="email" />
      </div>
    </div>
    <div class="field">
      <label class="label">Password</label>
      <div class="control">
        <input class="input" type="password" />
      </div>
    </div>
    <div class="field">
      <div class="control">
        <button class="form-button create">Create</button>
      </div>
    </div>
  </form>
</template>
<script>
export default {
  name: "UserCreate",
};
</script>
<style lang="scss">
.user-view {
  form {
    @include card;
    .field {
      margin-bottom: 15px;
      .label {
        display: inline-block;
        color: $lightblue;
        margin-bottom: 10px;
      }

      .input {
        // border: 1px solid $lightblue;
        // border-radius: 4px;
        // padding: 10px;
        // width: 100%;
        &:focus {
          border-color: $lightblue;
        }
        @include formInput;
        width: 100%;
      }
    }
    .form-button {
      @include formSubmitBtn;
      width: 150px;
      display: block;
      margin-left: auto;
      border-radius: $borderRadius;
      height: 40px;
      padding: 0;
      font-size: 1rem;
    }
  }
}
</style>
