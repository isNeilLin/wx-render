import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import articleList from '@/components/articleList'
import articleUpdate from '@/components/articleUpdate'
import audioList from '@/components/audioList'
import audioUpdate from '@/components/audioUpdate'
import videoList from '@/components/videoList'
import videoUpdate from '@/components/videoUpdate'
import albumList from '@/components/albumList'
import albumAdd from '@/components/albumAdd'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },{
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/article',
      name: 'article',
      component: Home,
      children: [
        {
          path: 'list',
          name: 'articleList',
          component: articleList
        },
        {
          path: 'update/:id',
          name: 'articleUpdate',
          component: articleUpdate
        }
      ]
    },{
      path: '/album',
      name: 'album',
      component: Home,
      children: [
        {
          path: 'list',
          name: 'albumList',
          component: albumList
        },
        {
          path: 'add/:id',
          name: 'albumAdd',
          component: albumAdd
        }
      ]
    },
    {
      path: '/audio',
      name: 'audio',
      component: Home,
      children: [
        {
          path: 'list',
          name: 'audioList',
          component: audioList
        },
        {
          path: 'update/:id',
          name: 'audioUpdate',
          component: audioUpdate
        }
      ]
    },
    {
      path: '/video',
      name: 'video',
      component: Home,
      children: [
        {
          path: 'list',
          name: 'videoList',
          component: videoList
        },
        {
          path: 'update/:id',
          name: 'videoUpdate',
          component: videoUpdate
        }
      ]
    }
  ]
})

export default router
