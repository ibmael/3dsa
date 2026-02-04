import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BLOG_DATA } from '../../../core/posts.data';
import { Category } from '../../../models/blogData';

@Component({
  selector: 'app-discover',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './discover.html',
  styleUrl: './discover.css',
})
export class Discover {
  readonly categories: Category[] = BLOG_DATA.categories;

  /** Font Awesome icon class per category name (matches design). */
  getIcon(name: string): string {
    const map: Record<string, string> = {
      تقنيات: 'fa-sliders',
      'مناظر طبيعية': 'fa-mountain-sun',
      بورتريه: 'fa-user',
      إضاءة: 'fa-sun',
      معدات: 'fa-gear',
    };
    return map[name] ?? 'fa-folder';
  }
}
