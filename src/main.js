import Vue from 'vue'
import App from './App'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

let router = new VueRouter()

router.map({
    '/': {
        name: 'index',
        component: require('./App')
    }
})

router.start(App, 'app')
