<template>
  <div
    class="jumbotron custom-bg-dark row justify-content-between align-items-center"
  >
    <div
      class="col-sm-6 logo-small py-3 text-center"
      v-if="screenSize === 'sm'"
    >
      <img src="../../public/logo small.png" alt="" />
    </div>
    <div class="col-lg-6 p-5 logo-large" v-else>
      <img src="../../public/LOGO ORIZZONTALE PL SMALL.png" alt="" />
    </div>
    <div class="col-sm-6" v-if="screenSize === 'sm'"></div>
    <div class="p-5 col-lg-6" v-else>
      <div class="d-flex justify-content-end gap-5">
        <div>
          <i class="fa-brands fa-instagram"></i>
        </div>
        <div>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/paolo-lo-re-07999b244/"
            ><i class="fa-brands fa-linkedin"></i
          ></a>
        </div>
        <div>
          <a target="_blank" href="https://github.com/PaoloWD"
            ><i class="fa-brands fa-github"></i
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../store/store";

export default {
  data() {
    return {
      store,
      screenSize: "",
    };
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      if (window.innerWidth < 992) {
        this.screenSize = "sm";
      } else {
        this.screenSize = "lg";
      }
    },
  },
};
</script>

<style scoped lang="scss">
.logo {
  text-align: center;
}
.jumbotron {
  background-size: auto;
  background-repeat: no-repeat;
  background-position: center;
}
.logo-small {
  img {
    height: 50px;
  }
}
.logo-large {
  img {
    height: 90px;
  }
}
a {
  color: white;
}
</style>
