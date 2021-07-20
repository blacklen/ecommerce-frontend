import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../pages/Homepage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import customerPage from '../pages/customerPage';
import orderPage from '../pages/orderPage';
import productPage from '../pages/productPage';
import statisticPage from '../pages/statisticPage';
import itemPage from '../pages/itemPage';

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', component: HomePage },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },
    { path: '/orders', component: orderPage },
    { path: '/customers', component: customerPage },
    { path: '/products', component: productPage },
    { path: '/statistic', component: statisticPage },
    { path: '/items', component: itemPage},

    // otherwise redirect to home
    { path: '*', redirect: '/' }
  ]
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login', '/register'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next('/login');
  }

  next();
})
