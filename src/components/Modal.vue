<template>
  <Teleport to="body">
    <div class="modal-overlay">
      <div class="modal">
        <div class="modal-header">{{ text }}</div>
        <div class="body">
          <slot></slot>
        </div>
        <div class="footer">
          <div class="controls">
            <button class="controlsBtn cancel" @click="cancelFn">
              {{ cancelBtn }}
            </button>
            <button class="controlsBtn confirm" @click="confirmFn">
              {{ confirmBtn }}
            </button>
          </div>
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
    text: {
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
    width: 80vh;
    margin: auto;
    max-width: 700px;
    margin-top: 10%;
    padding: 60px 0;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;

    .controlsBtn {
      background: green;
      border-radius: 0px;
      height: 50px;
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
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 40px;
    background: red;
    font-size: 1.2rem;
    margin: auto;
  }

  .footer {
    background: red;
    .controls {
      @include controls;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
}
</style>
