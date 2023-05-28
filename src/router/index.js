import { createRouter, createWebHistory } from 'vue-router';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=>import('../views/home.vue')
    },
    {
      path: '/student',
      name:'student',
      children:[
        {
          path:'signup',
          name:'StudentSignup',
          component: ()=>import('../views/Signup/StudentSignup.vue')
        },
        {
          path:'login',
          name:'Studentlogin',
          component: ()=>import('../views/Login/StudentLogin.vue')
        },
        {
          path:'viewquiz',
          name:'Viewquiz',
          component:()=>import('../views/Dashboard/Student/ViewQuiz.vue')
        },
        {
          path:'dashboard',
          name:'Studentdashboard',
          component:()=>import('../views/Dashboard/Student/StudentDashboard.vue')
        }
      ]
    },
    {
      path: '/teacher',
      name:'teacher',
      children:[
        {
          path:'signup',
          name:'TeacherSignup',
          component: ()=>import('../views/Signup/TeacherSignup.vue')
        },
        {
          path:'login',
          name:'Teacherlogin',
          component: ()=>import('../views/Login/TeacherLogin.vue')
        },
        {
          path:'dashboard',
          name:'teacherdashboard',
          component: ()=>import('../views/Dashboard/Teacher/TeacherDashboard.vue')
        }
      ]
    }
    
  ]
})

export default router;
