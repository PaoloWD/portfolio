import { reactive } from "vue";
export const store = reactive({
  links: {
    headerLinks: [
      {
        name: "Home",
        url: "/Home",
        active: false,
        icon: "fa-solid fa-house",
      },
      {
        name: "Su di me",
        url: "/su-di-me",
        active: false,
        icon: "fa-solid fa-user-tie",
      },
      {
        name: "Progetti",
        url: "/progetti",
        active: false,
        icon: "fa-solid fa-diagram-project",
      },
      {
        name: "Contatti",
        url: "/contatti",
        active: false,
        icon: "fa-solid fa-address-book",
      },
    ],
  },
  gitHubLink: "https://github.com/PaoloWD",
  linkedinLink: "https://www.linkedin.com/in/paolo-lo-re-07999b244/",
  instagramLink: "https://instagram.com/paololore_?igshid=ZDdkNTZiNTM=",
});
