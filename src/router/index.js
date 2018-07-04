import Vue from 'vue'
import Router from 'vue-router'
/*import Admin from '@/admin'*/
import Contents from '@/contents'

import Philippines from '@/components/child/Philippines'

import entry from '@/components/child/entry'

import Homepage from '@/components/subject/homepage'
import Inhome from '@/components/subject/Inhome'
import Abroad from '@/components/subject/abroad'
import Plane from '@/components/subject/plane'
import Train from '@/components/subject/train'
import Guide from '@/components/subject/guide'
import Car from '@/components/subject/car'

/*import A from '@components/a'
import C from '@components/c'*/

Vue.use(Router)

export default new Router({
  routes: [
   {
      path: '/Philippines',
      name: 'Philippines',
      component: Philippines,
    },
    {
    	path:'/entry',
    	name:'entry',
    	component:entry,
    },
    {
      path: '',
      name: 'contents',
      component: Contents,
      children:[
       {path:'',name:'homepage',component:Homepage,tabs:'首页'},
       {path:'inhome',name:'inhome',component:Inhome,tabs:'国内酒店'},
       {path:'abroad',name:'abroad',component:Abroad,tabs:'国际酒店'},
       {path:'plane',name:'plane',component:Plane,tabs:'机票'},
       {path:'train',name:'train',component:Train,tabs:'火车票'},
       {path:'car',name:'car',component:Car,tabs:'汽车票'},
       {path:'guide',name:'guide',component:Guide,tabs:'旅游指南'},
       ]
   },
   {
   path: '/',
   asa:'|',
   alisa:"在线客服"
   }, 
  {
    path: '/',
    asa:'|',
    alisa:"里程商城"
  }
   ]
   })
