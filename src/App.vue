<template>
  <div>
    <Container_img></Container_img>
  </div>
</template>

<script>
import Container_img from "./components/Container_img.vue";
import { store } from "./store/store";
export default {
  data() {
    return {
      store,
    };
  },
  components: { Container_img },
};
</script>

<style scoped lang="scss"></style>
