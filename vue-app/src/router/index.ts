import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import CharacterSelect from "../views/CharacterSelect.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "CharacterSelect",
    component: CharacterSelect
  },
  {
    path: "/artist/:artist",
    name: "Artist",
    component: () =>
      import(/* webpackChunkName: "artist" */ "../views/Artist.vue")
  },
  {
    path: "/token/:token",
    name: "Token",
    component: () =>
      import(/* webpackChunkName: "token" */ "../views/Token.vue")
  },
  {
    path: "/account",
    name: "Account",
    component: () =>
      import(/* webpackChunkName: "token" */ "../views/Account.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
