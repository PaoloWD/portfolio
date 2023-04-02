<template>
  <div class="bg-dark text-white p-5">
    <div class="row justify-content-between container">
      <div class="col-sm-12 col-lg-6">
        <div>
          <img src="../../public/logo small.png" alt="" />
        </div>
      </div>
      <div class="col-sm-12 col-lg-6">
        <h2 class="text-end pb-3">Social</h2>
        <div class="d-flex justify-content-end gap-5">
          <div>
            <a target="_blank" :href="store.instagramLink"
              ><i class="fa-brands fa-instagram"></i
            ></a>
          </div>
          <div>
            <a target="_blank" :href="store.linkedinLink"
              ><i class="fa-brands fa-linkedin"></i
            ></a>
          </div>
          <div>
            <a target="_blank" :href="store.gitHubLink"
              ><i class="fa-brands fa-github"></i
            ></a>
          </div>
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
    };
  },
};
</script>
<style scoped lang="scss">
a {
  :hover {
    color: white;
  }
  color: white;
}
</style>
