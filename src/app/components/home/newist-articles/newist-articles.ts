import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BLOG_DATA } from '../../../core/posts.data';
import { Post } from '../../../models/blogData';

@Component({
  selector: 'app-newist-articles',
  standalone: true,
  imports: [RouterLink, DatePipe],
  templateUrl: './newist-articles.html',
  styleUrl: './newist-articles.css',
})
export class NewistArticles {
  /** Newest 3 posts by date (most recent first). */
  get newestPosts(): Post[] {
    return [...BLOG_DATA.posts]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 3);
  }
}
