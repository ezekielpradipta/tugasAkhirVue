import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home.vue'
import Login from './pages/Login.vue'
import store from './store.js'

Vue.use(Router)
const router = new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            name:'home',
            components:Home,
            meta:{requiredAuth: true }
        },
        {
            path:'/login',
            name:'/login',
            components:Login,

        }
    ]
});
router.beforeEach((to, from, next) => {
    if(to.matched.some(record => meta.requiredAuth)){
            let auth = store.getters.isAuth
            if(!auth){
                next({
                    name:'login'
                })
            } else{
                next()
            }
    } else{
        next()
    }
})
export default router