<template>
  <MainLoader></MainLoader>
  <div class="custom-bg-dark">
    <Container_img></Container_img>
    <NavBar></NavBar>
    <div class="container">
      <Home></Home>
    </div>

    <Footer></Footer>
    <router-view></router-view>
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
import Container_img from "./components/Container_img.vue";
import MainLoader from "./components/MainLoader.vue";
import NavBar from "./components/NavBar.vue";
import Home from "./pages/Home.vue";
import { store } from "./store/store";
export default {
  data() {
    return {
      store,
    };
  },
  components: { Container_img, NavBar, MainLoader, Home, Footer },
};
</script>

<style scoped lang="scss"></style>
