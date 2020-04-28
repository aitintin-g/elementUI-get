import Vue from 'vue'
import VueRouter from 'vue-router'
import home from './home'
import introduct from './introduct'
import component from './component'
import theme from './theme'
import resource from './resource'

Vue.use(VueRouter)

  const routes = [
    home,
    introduct,
    component,
    theme,
    resource,
    {
      path:'/*',
      redirect:'/home'
    }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
