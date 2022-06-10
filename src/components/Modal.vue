<template>
  <Teleport to="body">
    <div class="modal-overlay">
      <div class="modal">
        <div class="title">I am a modal</div>
        <div class="controls">
          <button @click="closeModal">Close dsgfasdg</button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script>
export default {
  name: "Modal",
  emits: ["close"],
  data() {
    return {
      isOpen: this.status,
    };
  },
  props: {
    status: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeModal() {
      console.log("close modal runs");
      // this.status = false;
      this.$emit("close");
    },
    toggleModal() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style lang="scss">
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
}
.modal {
  text-align: center;
  background-color: white;
  height: 500px;
  width: 500px;
  margin-top: 10%;
  padding: 60px 0;
  border-radius: 20px;
}
</style>
