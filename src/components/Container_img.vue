<template>
  <div class="jumbotron"></div>
  <div>
    <div class="container"></div>
  </div>
</template>

<script>
import { store } from "../store/store";
export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<style scoped lang="scss">
.jumbotron {
  background-image: url("https://us.123rf.com/450wm/phochi1981/phochi19812006/phochi1981200600003/149776758-linee-dorate-a-strisce-astratte-su-sfondo-nero-con-spazio-per-il-testo-stile-di-lusso-%C3%A8-possibile.jpg?ver=6");
  height: 30vh;
  background-size: cover;
}
</style>
