<template>
  <div v-if="showLoader" id="loader">
    <div class="loader-content">
      <h1 id="loader-text">{{ displayText }}</h1>
    </div>
  </div>
  <div v-else>
    <!-- il tuo contenuto -->
  </div>
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
  mounted() {
    setInterval(() => {
      if (this.currentIndex < this.welcomeText.length) {
        this.displayText += this.welcomeText[this.currentIndex];
        this.currentIndex++;
      }
    }, 200);
    setTimeout(() => {
      this.showLoader = false;
    }, 4000);
  },
};
</script>

<style>
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#loader-text {
  font-size: 36px;
  font-weight: bold;
  text-align: center;
}
</style>
