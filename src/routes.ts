import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("@/index.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/home.vue"),
  },
  {
    path: "/installation",
    name: "installation",
    component: () => import("@/installation.vue"),
  },
  {
    path: "/button",
    name: "button",
    component: () => import("@/button.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/about.vue"),
  },
  {
    path: "/card",
    name: "card",
    component: () => import("@/card.vue"),
  }
  ,
  {
    path: "/inputbox",
    name: "inputbox",
    component: () => import("@/inputbox.vue"),
  }
  ,
  {
    path: "/passwordbox",
    name: "passwordbox",
    component: () => import("@/passwordbox.vue"),
  },
  {
    path: "/richeditbox",
    name: "richeditbox",
    component: () => import("@/richeditbox.vue"),
  },
  {
    path: "/progressbar",
    name: "progressbar",
    component: () => import("@/progressbar.vue"),
  }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;