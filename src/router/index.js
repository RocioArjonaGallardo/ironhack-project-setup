import { createRouter, createWebHistory } from "vue-router";

import Auth from "../views/Auth.vue";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import SignIn from "../components/SignIn.vue";
import SignUp from "../components/SignUp.vue";

const routes = [
  { path: "/", name: Home, component: Home },
  { path: "/auth", name: Auth, component: Auth },
  { path: "/about", name: About, component: About },
  { path: "/signin", name: SignIn, component: SignIn },
  { path: "/signup", name: SignUp, component: SignUp },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
