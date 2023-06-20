import { createRouter, createWebHistory } from "@ionic/vue-router";
import Timeline from "../views/Timeline.vue";

const routes = [
  {
    path: "/",
    name: "Timeline",
    component: Timeline,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
5;
