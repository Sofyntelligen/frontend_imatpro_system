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
      title: 'Type Equation Search'
    },
    path: '/equation/type/equation',
    name: 'TypeEquationSearch',
    component: () => import('@/views/client/app/equation/type/equation/TypeEquationSearchView.vue')
  },
  {
    meta: {
      title: 'Type Equation Add'
    },
    path: '/equation/type/equation/add',
    name: 'TypeEquationAdd',
    component: () => import('@/views/client/app/equation/type/equation/TypeEquationAddView.vue')
  },
  {
    meta: {
      title: 'Type Equation Update'
    },
    path: '/equation/type/equation/update/:id',
    name: 'TypeEquationUpdate',
    component: () => import('@/views/client/app/equation/type/equation/TypeEquationUpdateView.vue')
  },
  {
    meta: {
      title: 'Grade School Search'
    },
    path: '/equation/grade/school',
    name: 'GradeSchoolSearch',
    component: () => import('@/views/client/app/equation/grade/school/GradeSchoolSearchView.vue')
  },
  {
    meta: {
      title: 'Grade School Add'
    },
    path: '/equation/grade/school/add',
    name: 'GradeSchoolAdd',
    component: () => import('@/views/client/app/equation/grade/school/GradeSchoolAddView.vue')
  },
  {
    meta: {
      title: 'Grade School Update'
    },
    path: '/equation/grade/school/update/:id',
    name: 'GradeSchoolUpdate',
    component: () => import('@/views/client/app/equation/grade/school/GradeSchoolUpdateView.vue')
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
