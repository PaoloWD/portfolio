<template>
  <div v-if="showLoader" id="loader">
    <div class="text-center mt-5">
      <div class="loader-content">
        <h1 id="loader-text" v-bind:class="{ explode: isWelcomeTextComplete }">
          {{ displayText }}
        </h1>
      </div>
    </div>
  </div>
  <div v-else></div>
</template>

<script>
export default {
  data() {
    return {
      showLoader: true,
      welcomeText: "Benvenuto",
      displayText: "",
      currentIndex: 0,
    };
  },
  computed: {
    isWelcomeTextComplete() {
      return this.currentIndex >= this.welcomeText.length;
    },
  },
  mounted() {
    setInterval(() => {
      if (this.currentIndex < this.welcomeText.length) {
        this.displayText += this.welcomeText[this.currentIndex];
        this.currentIndex++;
      }
    }, 200);
    setTimeout(() => {
      this.showLoader = false;
    }, 3000);
  },
};
</script>

<style lang="scss">
#loader {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: white;
  background-color: #1f1f1f;
}

.loader-content {
  font-family: "Minecraft Ten";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.explode {
  animation-name: explode;
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}

@keyframes explode {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
}
</style>
