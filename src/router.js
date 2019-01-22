import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/sweepstakev2',
      name: 'sweepstakev2',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/SweepstakeV2.vue')
    },
    {
      path: '/sweepstake',
      name: 'sweepstake',
      component: () => import(/* webpackChunkName: "about" */ './views/Sweepstake.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import(/* webpackChunkName */ './views/Test.vue')
    }
  ]
})
