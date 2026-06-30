import { createRouter, createWebHistory } from 'vue-router';
import ContactPage from './pages/ContactPage.vue';
import HomePage from './pages/HomePage.vue';
import ProjectsPage from './pages/ProjectsPage.vue';
import ResumePage from './pages/ResumePage.vue';

export const navItems = [
  { label: '首页', to: '/' },
  { label: '项目', to: '/projects' },
  { label: '简历', to: '/resume' },
  { label: '联系', to: '/contact' },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/projects', name: 'projects', component: ProjectsPage },
    { path: '/resume', name: 'resume', component: ResumePage },
    { path: '/contact', name: 'contact', component: ContactPage },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
