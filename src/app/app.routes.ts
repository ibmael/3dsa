import { Routes } from '@angular/router';
import { Blog } from './components/blog/blog';
import { AboutUs } from './components/about-us/about-us';
import { NotFound } from './components/not-found/not-found';
import { Home } from './components/home/home';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'blog', component: Blog },
  { path: 'about', component: AboutUs },
  { path: '**', component: NotFound },
];
