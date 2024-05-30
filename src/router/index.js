import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   
  ]
})

router.beforeEach((to, from, next) => {
  document.title = `Fantasy Quest`
  next()
})

export default router
