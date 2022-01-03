import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Assignments from '../views/Assignments.vue'
import Contact from '../views/Contact.vue'
import News from '../views/News.vue'

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
    name: 'Assignments',
    component: Assignments
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
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
