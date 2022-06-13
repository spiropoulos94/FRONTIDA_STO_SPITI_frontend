<template>
  <div id="app">
    <Header v-if="auth" />
    <main :style="'display: flex'">
      <Sidebar v-if="auth" />
      <MainView />
    </main>
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
        this.$store.commit("toggleSidebar", true);
        this.$store.commit("setMobileSidebar", false);
      }
    });
  },
  computed: {
    auth() {
      return this.$store.getters.isAuthenticated;
    },
  },
};
</script>

<style lang="scss">
main {
  background-color: $bodyBg;
  background-color: $bodyBg;
  height: calc(100vh - $header-height);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: $bodyBg;
  background-color: lighten($lightblue, 25);
}

#app {
  // text-align: center;
  max-width: 2000px;
  max-width: 2440px;
  margin: auto;
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
