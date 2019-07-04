import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Default from './views/Default.vue'
import Components from './views/Components.vue'
import Templates from './views/Templates.vue'

// Components
import Label from './views/components/Label.vue'
import Button from './views/components/Button.vue'

// Templates
import Admin_1 from './views/templates/Admin-1.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'default',
      component: Default,
      redirect: { name: 'home' },
      children: [
          {
            path: '/home',
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
          },

      ]
    },

    // Temlates routes
    {
      path: '/admin-1',
      name: 'admin-1',
      component: Admin_1
    },
    // End of routes list
  ]
})
