import router from '@/router'
import store from '@/store'
import 'nprogress/nprogress.css'

const NProgress = require('nprogress')
const username = store.state.account.userName

router.beforeEach((to, from, next) => {
    if (!!!to.meta.notloading) { NProgress.start() }

    if (!username) {
        store.dispatch('account/login')
            .then(() => {
                next()
            })
    } else {
        next('/403')
    }


})

router.afterEach((to, from) => {
    // 如果访问的路由有设置title值，则设置title
    if (!!to.meta.title) {
        document.title = to.meta.title;
    }
    NProgress.done()
})

router.onError((error) => {

})