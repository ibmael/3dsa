import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('./components/home/home').then((m) => m.Home),
    title: 'عدسة | حيث يبدأ الإبداع',
  },
  {
    path: 'blog',
    loadComponent: () => import('./components/blog/blog').then((m) => m.Blog),
    title: 'عدسة | رحلة في عالم التصوير',
  },
  {
    path: 'about',
    loadComponent: () => import('./components/about-us/about-us').then((m) => m.AboutUs),
    title: 'عدسة | حكاية شغف',
  },
  {
    path: '**',
    loadComponent: () => import('./components/not-found/not-found').then((m) => m.NotFound),
    title: 'عدسة | صفحة غير موجودة',
  },
];
