<template>
  <div>
    <Container_img></Container_img>
    <NavBar></NavBar>
    <router-view></router-view>
  </div>
</template>

<script>
import Container_img from "./components/Container_img.vue";
import NavBar from "./components/NavBar.vue";
import { store } from "./store/store";
export default {
  data() {
    return {
      store,
    };
  },
  components: { Container_img, NavBar },
};
</script>

<style scoped lang="scss"></style>
