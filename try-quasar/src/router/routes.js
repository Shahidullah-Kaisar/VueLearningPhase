const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/HomePage.vue') },
      { path: '/news/:id', component: () => import('pages/NewsDetails.vue') }
    ]
  }
]

export default routes
