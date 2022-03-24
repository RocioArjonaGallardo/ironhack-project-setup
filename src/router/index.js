import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Auth from "../views/Auth.vue";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";

const routes = [
  { path: "/", name: Home, component: Home },
  { path: "/auth", name: Auth, component: Auth },
  { path: "/signIn", name: SignIn, component: SignIn },
  { path: "/signUp", name: SignUp, component: SignUp },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
