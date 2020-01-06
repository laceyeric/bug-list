import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeList from '../views/HomeList.vue';
import BugDetail from "../views/BugDetail.vue";
import BugCreate from "../views/BugCreate.vue";

Vue.use(VueRouter)

const router = new VueRouter({
  mode: "history", // gets rid of the hash in the URL!!! 
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeList
    },
    {
      path: '/bugdetail/:id',
      name: 'bug-detail',
      component: BugDetail,
      props: true
    },
    {
      path: '/create',
      name: 'bug-create',
      component: BugCreate
    }
  ]
})

export default router
