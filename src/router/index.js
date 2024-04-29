import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    // Document title tag
    // We combine it with defaultDocumentTitle set in `src/main.js` on router.afterEach hook
    meta: {
      title: 'Dashboard'
    },
    path: '/',
    name: 'Dashboard',
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
    name: 'Profile',
    component: () => import('@/views/client/app/user/ProfileView.vue')
  },
  {
    meta: {
      title: 'Login'
    },
    path: '/login',
    name: 'Login',
    component: () => import('@/views/client/app/LoginView.vue')
  },
  {
    meta: {
      title: 'Sign up'
    },
    path: '/signup',
    name: 'SignUp',
    component: () => import('@/views/client/app/SignupView.vue')
  },
  {
    meta: {
      title: 'Remind Password'
    },
    path: '/remind',
    name: 'Remind',
    component: () => import('@/views/client/app/RemindView.vue')
  },
  {
    meta: {
      title: 'Character Search'
    },
    path: '/equation/character',
    name: 'CharacterSearch',
    component: () => import('@/views/client/app/equation/character/CharacterSearchView.vue')
  },
  {
    meta: {
      title: 'Character Add'
    },
    path: '/equation/character/add',
    name: 'CharacterAdd',
    component: () => import('@/views/client/app/equation/character/CharacterAddView.vue')
  },
  {
    meta: {
      title: 'Character Update'
    },
    path: '/equation/character/update/:id',
    name: 'CharacterUpdate',
    component: () => import('@/views/client/app/equation/character/CharacterUpdateView.vue')
  },
  {
    meta: {
      title: 'Catalog Search'
    },
    path: '/equation/:type_catalog/catalog/',
    name: 'CatalogSearch',
    component: () => import('@/views/client/app/equation/catalog/CatalogSearchView.vue'),
    props: (route) => ({ title: route.query.title, icon: route.query.icon })
  },
  {
    meta: {
      title: 'Catalog Add'
    },
    path: '/equation/:type/catalog/add',
    name: 'CatalogAdd',
    component: () => import('@/views/client/app/equation/catalog/CatalogAddView.vue')
  },
  {
    meta: {
      title: 'Catalog Update'
    },
    path: '/equation/:type/catalog/update/:id',
    name: 'CatalogUpdate',
    component: () => import('@/views/client/app/equation/catalog/CatalogUpdateView.vue')
  },
  {
    meta: {
      title: 'Error'
    },
    path: '/error',
    name: 'Error',
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
