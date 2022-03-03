import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: () => import("../views/home/index.vue"),  
    }
]

const router = createRouter({
  history: createWebHistory(), // 使用history模式
  routes,
})

export default router;