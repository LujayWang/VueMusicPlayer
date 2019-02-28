import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import Main from '../views/Main'
import Login from '../views/Login'
import Search from '../views/Search'
import Find from '../views/Find'
import Bottom from '../components/Bottom'
import Lyrics from '../views/Lyrics'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        component: App,
        children: [{
                path: '',
                components: {
                    default: Main,
                    bottom: Bottom
                }
            },
            {
                path: 'login',
                component: Login
            },
            {
                path: 'search',
                components: {
                    default: Search,
                    bottom: Bottom
                }
            },
            {
                path: 'find',
                components: {
                    default: Find,
                    bottom: Bottom
                }
            },
            {
                path: 'lyrics',
                component: Lyrics
            }
        ]
    }]
})
