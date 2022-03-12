import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "List-Sub",
    component: () => import("../components/List"),
  },
  {
    path: "/create",
    name: "Create-Sub",
    component: () => import("../components/CreateSub"),
  },
  {
    path: "/edit/:id",
    name: "Edit-Sub",
    component: () => import("../components/Edit"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
