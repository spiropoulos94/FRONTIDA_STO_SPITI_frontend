<template>
  <div :style="{ color }" class="spinner-wrapper">
    <font-awesome-icon
      icon="spinner"
      spin
      style="--fa-animation-duration: 0.8s"
      size="1x"
    />
  </div>
</template>

<script>
export default {
  name: "Spinner",
  props: {
    color: String,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.spinner-wrapper {
  //   background: red;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
</style>
