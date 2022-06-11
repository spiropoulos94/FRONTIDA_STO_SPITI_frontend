<template>
  <div class="element">
    <div v-if="sidebarIconsOnly" class="tooltip-text">{{ text }}</div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "Tooltip",
  props: {
    text: {
      type: String,
      default: "i",
    },
    position: {
      type: String,
      default: "right",
    },
    distance: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    sidebarIconsOnly() {
      return this.$store.getters.iconsOnly;
    },
  },
};
</script>
<style lang="scss">
.tooltip-text {
  position: absolute;
  top: -20px;
  top: 0px;
  left: 70px;
  width: 100px;
  padding: 10px;
  background: #f4f4f4;
  background: white;
  color: $lightblue;
  font-size: 14px;
  text-align: center;
  border-radius: 5px;
  opacity: 0;
  transition: 0.2s;
  visibility: hidden;
  pointer-events: none;

  -webkit-box-shadow: -11px 18px 50px -13px #000000;
  box-shadow: -11px 18px 50px -13px #000000;

  //   visibility: visible;
  //   opacity: 1;
}
.element {
  position: relative;
  width: 100%;
  cursor: pointer;

  &:hover {
    .tooltip-text {
      visibility: visible;
      opacity: 1;
    }
  }
}
</style>
