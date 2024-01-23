import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    // Document title tag
    // We combine it with defaultDocumentTitle set in `src/main.js` on router.afterEach hook
    meta: {
      title: 'Dashboard'
    },
    path: '/',
    name: 'dashboard',
    component: () => import('@/views/client/app/dashboard/HomeView.vue')
  },
  {
    path: '/dashboard',
    redirect: '/'
  },
  {
    meta: {
      title: 'Profile'
    },
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/client/app/user/ProfileView.vue')
  },
  {
    meta: {
      title: 'Login'
    },
    path: '/login',
    name: 'login',
    component: () => import('@/views/client/app/LoginView.vue')
  },
  {
    meta: {
      title: 'Sign up'
    },
    path: '/signup',
    name: 'signup',
    component: () => import('@/views/client/app/SignupView.vue')
  },
  {
    meta: {
      title: 'Remind Password'
    },
    path: '/remind',
    name: 'remind',
    component: () => import('@/views/client/app/RemindView.vue')
  },
  {
    meta: {
      title: 'Character Search'
    },
    path: '/equation/character',
    name: 'characterSearch',
    component: () => import('@/views/client/app/equation/character/CharacterSearchView.vue')
  },
  {
    meta: {
      title: 'Character Add'
    },
    path: '/equation/character/add',
    name: 'characterAdd',
    component: () => import('@/views/client/app/equation/character/CharacterAddView.vue')
  },
  {
    meta: {
      title: 'Character Update'
    },
    path: '/equation/character/update/:id',
    name: 'characterUpdate',
    component: () => import('@/views/client/app/equation/character/CharacterUpdateView.vue')
  },
  {
    meta: {
      title: 'Error'
    },
    path: '/error',
    name: 'error',
    component: () => import('@/views/client/app/ErrorView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})

export default router
