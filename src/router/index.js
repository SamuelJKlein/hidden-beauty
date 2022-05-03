import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Read from '../views/Read.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:chapterNumber',
    name: 'chapterNumber',
    component: Read
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',

      }
    } else {
      return {
        top: 0,

      }
    }
  }
})

export default router
