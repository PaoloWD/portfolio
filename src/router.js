import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/Home.vue";
import SuDiMe from "./pages/SuDiMe.vue";
import Contatti from "./pages/Contatti.vue";
import Progetti from "./pages/progetti.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/Home", // uri da scrivere nel browser
      name: "home", // nome della rotta da usare per creare un link
      component: HomePage, // componente che ritorna l'html della pagina
    },
    {
      path: "/su-di-me",
      name: "su-di-me",
      component: SuDiMe,
    },
    {
      path: "/progetti",
      name: "progetti",
      component: Progetti,
    },
    {
      path: "/contatti",
      name: "contatti",
      component: Contatti,
    },
  ],
});

export { router };
