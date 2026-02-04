import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { ChoosenArticles } from './choosen-articles/choosen-articles';
import { Discover } from './discover/discover';
import { NewistArticles } from './newist-articles/newist-articles';
import { Subsicribe } from './subsicribe/subsicribe';

@Component({
  selector: 'app-home',
  imports: [Hero, ChoosenArticles, Discover, NewistArticles, Subsicribe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
