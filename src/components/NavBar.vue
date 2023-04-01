<template>
  <div class="bg-dark text-white">
    <nav class="navbar navbar-expand-lg navbar-light bg-dark text-white">
      <div class="container justify-content-end">
        <button
          class="btn navbar-toggler border-3 px-2"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          <i class="fa-solid fa-bars text-white"></i>
        </button>
        <div
          class="offcanvas offcanvas-start-lg bg-dark"
          tabindex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div class="offcanvas-header d-flex d-lg-none">
            <h5 class="offcanvas-title text-white" id="offcanvasExampleLabel">
              Navbar
            </h5>
            <a
              href="javascript:void(0) "
              class="text-reset p-0"
              data-bs-dismiss="offcanvas"
              aria-label="close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#FFFFFF"
                class="bi bi-x-circle"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                />
                <path
                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </a>
          </div>
          <div class="offcanvas-body justify-content-center p-lg-0">
            <ul class="navbar-nav">
              <li
                class="nav-item"
                data-bs-dismiss="offcanvas"
                v-for="(element, i) in store.links.headerLinks"
              >
                <router-link
                  class="nav-link"
                  :class="element.active ? 'active' : ''"
                  :to="element.url"
                >
                  <i :class="element.icon" class="me-2 ms-2"></i
                  >{{ element.name }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
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
@media (min-width: 992px) {
  .offcanvas {
    visibility: visible;
    position: relative;
    background: none;
    border: none;
    justify-content: end;
    color: #1f1f1f;
  }
}
@media (max-width: 992px) {
  .offcanvas {
    width: 250px !important;
  }
  .offcanvas-start-lg {
    top: 0;
    left: 0;
    border-right: 1px solid rgba(0, 0, 0, 0.2);
    transform: translateX(-100%);
  }
}
.navbar-nav li a {
  color: white !important;
}
</style>
