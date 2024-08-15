import { createRouter, createWebHashHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import store from '../store/store'
const routes = [
  {
    path: '/',
    name: 'login',
    alias: '/',
    component: LoginView,
    meta: {
      auth: false
    }
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: {
      auth: true
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next)=>{
  const requireAuth = to.meta.auth
  if(requireAuth && store.getters['auth/isAuthenticated']){
    next()
  }
  else if(requireAuth && !store.getters['auth/isAuthenticated']){
    next('/login?message=auth')
  }
  else{
    next()
  }
})

export default router
