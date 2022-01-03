import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/assignments',
    name: 'Assignments'
  },
  {
    path: '/news',
    name: 'News'
  },
  {
    path: '/contact',
    name: 'Contact'
  },
  {
    path: '/login',
    name: 'Log In'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
