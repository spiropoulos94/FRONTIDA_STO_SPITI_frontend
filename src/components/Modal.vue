<template>
  <Teleport to="body">
    <div class="modal-overlay">
      <div class="modal">
        <div class="modal-header">{{ modalTitle }}</div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div class="modal-footer">
          <button class="controlsBtn cancel" @click="cancelFn">
            {{ cancelBtn }}
          </button>
          <button class="controlsBtn confirm" @click="confirmFn">
            {{ confirmBtn }}
          </button>
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
    confirmFn: {
      type: Function,
      default: () => {},
    },
    cancelFn: {
      type: Function,
      default: () => {},
    },
    confirmBtn: {
      type: String,
      default: "Confirm",
    },
    cancelBtn: {
      type: String,
      default: "Cancel",
    },
    modalTitle: {
      type: String,
      default: "",
    },
  },
  methods: {
    closeModal() {
      console.log("close modal runs");
      // this.status = false;
      // this.$emit("close");
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
  background-color: #819197da;
  .modal {
    text-align: center;
    background-color: white;
    width: 80vw;
    margin: auto;
    max-width: 700px;
    margin-top: 10%;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;

    .controlsBtn {
      width: 100%;
      border: none;

      &.confirm {
        background: $lightblue;
        color: white;
      }
      &.cancel {
        background: $bodyBg;
        color: $lightblue;
      }
      @include simpleButton;
    }
  }

  .modal-header {
    height: 60px;
    background: $darken_lightblue;
    background: $lighten_lightblue;
    font-size: 1.3rem;
    color: white;
    padding: 10px 15px;
    display: flex;
    align-items: center;
  }

  .modal-body {
    padding: 20px 15px;
    font-size: 1.1rem;
    color: $darken_lightblue;
    text-align: start;
  }

  .modal-footer {
    display: block;
    padding: 0px 10px 0px;
    border-top: 1px solid $lightblue;
    display: flex;
    justify-content: end;
    align-items: center;
    height: 60px;
  }
}
</style>
