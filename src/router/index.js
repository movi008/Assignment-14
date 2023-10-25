import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import('../views/HomeView.vue')
    },
    {
      path: "/cart",
      name: "Cart",
      component: () => import('../views/ShopcartView.vue')
    },
    {
      path: "/product/:id",
      name: "Product",
      component: () => import('../views/ProductView.vue')
    },
  ]
})


export default router
