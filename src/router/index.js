import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Auth from "../views/Auth.vue";
import SignIn from "../components/SignIn.vue";
import SignUp from "../components/SignUp.vue";

const routes = [
  {
    path: "/",
    name: Home,
    component: Home,
  },
  {
    path: "/auth",
    name: Auth,
    component: Auth,
    children: [
      {
        path: "",
        component: SignUp,
        name: SignUp,
      },
      {
        path: "sign-in",
        component: SignIn,
        name: "SignIn",
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
