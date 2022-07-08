<template>
  <div class="role-tag" :style="{ backgroundColor: backgroundColor }">
    {{ content }}
  </div>
</template>
<script>
export default {
  name: "Tag",
  props: {
    content: {
      type: String,
      default() {
        return "tag";
      },
    },
  },
  computed: {
    backgroundColor() {
      switch (this.content.toLowerCase()) {
        case "doctor":
          // code block
          return "blue";
        case "admin":
          return "green";
          break;
        case "nurse":
          // code block
          return "pink";
        case "family helper":
          return "#81c2d8";
          break;
        case "social worker/ psychologist":
          return "lightgreen";
          break;
        case "physiotherapist":
          return "orange";
          break;
        case "patient":
          return "black";
          break;
        default:
          // code block
          return "gray";
      }
    },
  },
};
</script>
