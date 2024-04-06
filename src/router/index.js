import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectView from '../views/ProjectView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/projecten',
      name: 'projecten',
      component: HomeView
    },
    {
      path: '/over-mij',
      name: 'over-mij',
      component: AboutView
    },
    {
      path: '/projecten/:projectId',
      name: 'project',
      component: ProjectView,
    },
    {
      path: '/resume',
      redirect: to => {
        return { path: to.path };
      }
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    console.log(to);

    if (to.path == "/projecten"){
      return {el: document.getElementById("projects"), top: 10}
    }
    else {
      return { top: 0 }
    }
  }
})

export default router
