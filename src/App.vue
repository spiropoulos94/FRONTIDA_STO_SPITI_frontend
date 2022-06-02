<template>
  <div id="app">
    <Header />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  name: "App",
  components: { Header },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  // text-align: center;
}
:root {
  --white: #f9f9f9;
  --black: #36383f;
  --gray: #85888c;

  --borderRadius: 4px;

  --fontXL: 2.2rem;
  --fontL: 1.8rem;
  --fontStandard: 1.2rem;

  --toggleBtnWidth: 40px;
  --toggleBtnHeight: 40px;
} /* variables*/
</style>
