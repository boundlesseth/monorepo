import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
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
      import(/* webpackChunkName: "account" */ "../views/Account.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
