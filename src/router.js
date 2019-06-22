import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Components from './views/Components.vue'
import Templates from './views/Templates.vue'

// Components
import Label from './views/components/Label.vue'
import Button from './views/components/Button.vue'

// Templates
import Admin from './views/templates/Admin.vue'
import simpleBlogPage from './views/templates/simpleBlogPage.vue'

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
      component: Templates,
      children: [
          {
            path: 'admin',
            component: Admin
          },
          {
            path: 'simple-blog-page',
            component: simpleBlogPage
          }
      ]
    },
  ]
})
