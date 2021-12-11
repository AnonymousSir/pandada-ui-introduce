import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import(/* webpackChunkName: "views" */'@/views/Home.vue')
const introduce = () => import(/* webpackChunkName: "views" */'@/views/introduce.vue')
const about = () => import(/* webpackChunkName: "views" */'@/views/introduceView/about.vue')
const install = () => import(/* webpackChunkName: "views" */'@/views/introductionView/install.vue')
const started = () => import(/* webpackChunkName: "views" */'@/views/introductionView/started.vue')
const buttonView = () => import(/* webpackChunkName: "views" */'@/views/components/buttonView.vue')
const inputView = () => import(/* webpackChunkName: "views" */'@/views/components/inputView.vue')
const switchView = () => import(/* webpackChunkName: "views" */'@/views/components/switchView.vue')
const radioView = () => import(/* webpackChunkName: "views" */'@/views/components/radioView.vue')
const checkboxView = () => import(/* webpackChunkName: "views" */'@/views/components/checkboxView.vue')
const dialogView = () => import(/* webpackChunkName: "views" */'@/views/components/dialogView.vue')
const page404 = () => import(/* webpackChunkName: "views" */'@/views/page404.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/introduce',
    name: 'introduce',
    component: introduce,
    children: [
      { path: '/introduce/', component: about },
      {
        path: 'about',
        name: 'about',
        component: about
      },
      {
        path: 'install',
        name: 'install',
        component: install
      },
      {
        path: 'started',
        name: 'started',
        component: started
      },
      {
        path: 'button-view',
        name: 'buttonView',
        component: buttonView
      },
      {
        path: 'input-view',
        name: 'inputView',
        component: inputView
      },
      {
        path: 'switch-view',
        name: 'switchView',
        component: switchView
      },
      {
        path: 'radio-view',
        name: 'radioView',
        component: radioView
      },
      {
        path: 'checkbox-view',
        name: 'checkboxView',
        component: checkboxView
      },
      {
        path: 'dialog-view',
        name: 'dialogView',
        component: dialogView
      }
    ]
  },
  {
    path: '/page404',
    name: 'page404',
    component: page404
  },
  {
    path: '*',
    redirect: '/page404'
  }
]

const router = new VueRouter({
  // mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    } 
    else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})

export default router
