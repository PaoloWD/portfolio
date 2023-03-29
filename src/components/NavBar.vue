<template>
  <div class="bg-dark text-white">
    <nav
      class="navbar navbar-expand-lg navbar-expand-md bg-body-tertiary shadow"
    >
      <div class="container-fluid justify-content-center gap-5">
        <li class="nav-item" v-for="(element, i) in store.links.headerLinks">
          <router-link
            class="nav-link"
            :class="element.active ? 'active' : ''"
            :to="element.url"
            ><i :class="element.icon" class="me-2 ms-2"></i>{{ element.name }}
          </router-link>
        </li>
      </div>
    </nav>
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
li {
  text-decoration: none;
  list-style: none;
}
</style>
