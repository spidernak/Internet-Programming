import { createRouter, createWebHistory } from 'vue-router'
import erroepage from "../views/errorpage.vue";
import categorypage from "../views/categorypage.vue";
import popularproduct from "../views/popularproduct.vue";
import productdetail from "../views/productdetail.vue";
 
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: popularproduct,
    },
    {
      path: '/404',
      name: 'errorpage',
      component: erroepage,
    },
    {
      path: '/:catchAll(.*)',
      redirect:'404',
    },
    {
      path: '/category/:catID',
      name: 'category',
      component: categorypage,
    },
    {
      path: '/product/:proID',
      name: 'product',
      component: productdetail,
    },
  ],
});

export default router;
