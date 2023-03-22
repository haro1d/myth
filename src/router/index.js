// src\router\index.ts
import { createRouter, createWebHistory } from 'vue-router'
import { h, resolveComponent } from "vue";
 
const routes =  [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/music',
    name: 'music',
    component: () => import('@/views/music/index.vue')
  },
  {
    path: '/note',
    name: 'note',
    component: () => import('@/views/note/index.vue')
  },
  {
    path: '/front',
    name: 'front',
    component: () => import('@/views/front/index.vue'),
    redirect: '/front/JavaScript',
    children: [
        {
            path: '/front/article',
            name: '文章',
            icon: 'Notebook',
            // component: { render: (e) => e('router-view') },
            render: () => h(resolveComponent("router-view")),
            children: [
                
                {
                    path: '/front/JavaScript',
                    name: 'JavaScript',
                    component: () => import('@/views/front/article/JavaScript/index.vue'),
                },
                {
                    path: '/front/Css',
                    name: 'Css',
                    component: () => import('@/views/front/article/Css/index.vue'),
                },
                {
                    path: '/front/Vue',
                    name: 'Vue',
                    component: () => import('@/views/front/article/Vue/index.vue'),
                },
                {
                    path: '/front/element',
                    name: 'Element-Ui',
                    component: () => import('@/views/front/article/Element-Ui/index.vue'),
                },
                {
                    path: '/front/other',
                    name: '其他',
                    component: () => import('@/views/front/article/other/index.vue'),
                },
            ]
        },
        {
            path: '/front/mail',
            name: '交流',
            icon: 'ColdDrink',
            component: () => import('@/views/front/mail/index.vue'),
        },
    ]
  },
]
 
const router = createRouter({
  // history: createWebHashHistory(), // hash 路由模式
  history: createWebHistory(), // history 路由模式
  routes // 路由规则
})
 
export default router
 