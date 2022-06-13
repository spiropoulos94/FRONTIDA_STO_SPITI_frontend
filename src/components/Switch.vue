<template>
  <input @change="toggle" v-model="status" class="toggle" type="checkbox" />
  <!-- {{ status }} -->
</template>

<script>
export default {
  name: "Switch",
  emits: ["toggle"],
  //   props: {
  //     status: {
  //       type: Boolean,
  //       default: false,
  //     },
  //   },
  data() {
    return {
      status: false,
    };
  },
  methods: {
    toggle() {
      this.$emit("toggle", this.status);
    },
  },
};
</script>

<style lang="scss">
.toggle {
  /*  */

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 38px;
  height: 20px;
  display: inline-block;
  position: relative;
  border-radius: 50px;
  overflow: hidden;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: #707070;
  transition: background-color ease 0.3s;
}

.toggle:before {
  content: "on off";
  content: "";
  display: block;
  position: absolute;
  z-index: 2;

  width: 16px;
  height: 16px;
  background: #fff;
  left: 2px;
  top: 2px;
  border-radius: 50%;
  font: 10px/28px Helvetica;
  text-transform: uppercase;
  font-weight: bold;
  text-indent: -22px;
  word-spacing: 37px;
  color: #fff;
  text-shadow: -1px -1px rgba(0, 0, 0, 0.15);
  white-space: nowrap;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  transition: all cubic-bezier(0.3, 1.5, 0.7, 1) 0.3s;
}

.toggle:checked {
  background-color: #4cd964;
}

.toggle:checked:before {
  left: 20px;
}
</style>
