import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { ChoosenArticles } from './choosen-articles/choosen-articles';

@Component({
  selector: 'app-home',
  imports: [Hero, ChoosenArticles],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
