import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BLOG_DATA } from '../../../core/posts.data';
import { Post } from '../../../models/blogData';

@Component({
  selector: 'app-choosen-articles',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './choosen-articles.html',
  styleUrl: './choosen-articles.css',
})
export class ChoosenArticles {
  // First 3 featured posts to display as large cards
  get chosenPosts(): Post[] {
    return BLOG_DATA.posts.filter((post) => post.featured).slice(0, 3);
  }
}
