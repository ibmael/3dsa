import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { Home } from "./components/home/home";
import { AboutUs } from "./components/about-us/about-us";
import { Blog } from "./components/blog/blog";
import { NotFound } from "./components/not-found/not-found";
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Home, AboutUs, Blog, NotFound,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('3dsa');
}
