import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/question",
    name: "question-page",
    component: () => import("../views/QuestionPage.vue"),
  },
  {
    path: "/results",
    name: "result-page",
    component: () => import("../views/ResultPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
