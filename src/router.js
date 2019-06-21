import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Components from './views/Components.vue'
import Templates from './views/Templates.vue'
import Label from './views/Label.vue'
import Button from './views/Button.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/components',
      name: 'components',
      component: Components,
      children: [
          {
            path: 'label',
            component: Label
          },
          {
            path: 'button',
            component: Button
          }
      ]
    },
    {
      path: '/templates',
      name: 'templates',
      component: Templates
    },
  ]
})
