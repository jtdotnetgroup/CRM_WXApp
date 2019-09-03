export const routes = [
    {
        path: '/',
        name: 'index',
        redirect: '/appmenu',
        component: () => import('@/layout/BaseLayout.vue'),
        children: [
            {
                path: '/workbench',
                meta: { title: '工作台', showbar: true },
            },
            {
                path: '/appmenu',
                meta: { title: '应用中心', showbar: true },
            },
            {
                path: '/schedule',
                meta: { title: '待办', showbar: true }
            },
            {
                path: '/userprofile',
                meta: { title: '个人中心', showbar: true },
            },
            {
                path: '/customerlist',
                meta: { title: "客户列表" }
            },
            {
                path: '/clientdetails',
                meta: { title: "客户详情" },
                children: [
                    { path: '/followrecord', },
                    { path: '/contactrecord', }
                ]
            },
            {
                path:'/newclient',
                meta:{title:'新增客户'}
            },
            {
                path:'/newfollowrecord',
                meta:{title:"添加跟进"}
            },
            {
                path:'/followcenter',
                meta:{title:'跟进管理'}
            },
            {
                path:'/publiccustomers',
                meta:{title:'公海客户'}
            },
            {
                path:'/business',
                meta:{title:'商机管理'}
            }

        ]
    },
    {
        path: '/403',
        name: '403page',
        component: () => import('@/views/403.vue')
    },

]

const children: Array<any> = routes[0].children;


// 加载路由页面
// children.map(r => {
//     r.name = r.path.replace('/', '')
//     r.component = () => import('@/views' + r.path + r.path + '.vue')

// })

routes.map(r => {
    if (r.children) {
        r.children.map(c => {
            bind_component(c)
        })
    }
})

function bind_component(route: any) {
    route.component = () => import('@/views' + route.path + route.path + '.vue')
    route.name = route.path.replace('/', '')

    if (route.children) {
        route.children.map((c: any) => {
            bind_component(c)
        })
    }

}
