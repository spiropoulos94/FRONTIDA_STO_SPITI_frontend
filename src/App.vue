<template>
  <div id="app">
    <Header />
    <div :style="'display: flex'">
      <Sidebar />
      <MainView />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Sidebar from "./components/Sidebar.vue";
import MainView from "./components/MainView.vue";
export default {
  name: "App",
  components: { Header, Sidebar, MainView },
  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },
  created() {
    this.$store.commit("toggleSidebar", this.windowWidth > 991);

    window.addEventListener("resize", () => {
      if (window.innerWidth < 991) {
        this.$store.commit("toggleSidebar", false);
        this.$store.commit("setMobileSidebar", true);
        this.$store.commit("toggleIconsOnly", false);
      } else {
        this.$store.commit("setMobileSidebar", false);
        this.$store.commit("toggleSidebar", true);
      }
    });
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
