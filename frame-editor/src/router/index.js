import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Editor',
    component: () => import('../views/EditorView.vue')
  },
  {
    path: '/preview',
    name: 'Preview',
    component: () => import('../views/PreviewView.vue')
  },
  {
    path: '/property-demo',
    name: 'PropertyDemo',
    component: () => import('../views/PropertyDemoView.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router; 