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
        <button class="button is-primary">Create</button>
      </div>
    </div>
  </form>
</template>
<script>
export default {
  name: "UserCreate",
};
</script>
