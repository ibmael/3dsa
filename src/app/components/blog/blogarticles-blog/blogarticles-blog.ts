import { DatePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BLOG_DATA } from '../../../core/posts.data';
import { Post } from '../../../models/blogData';

const PAGE_SIZE = 6;
const ALL_CATEGORY = 'جميع المقالات';

@Component({
  selector: 'app-blogarticles-blog',
  standalone: true,
  imports: [RouterLink, DatePipe],
  templateUrl: './blogarticles-blog.html',
  styleUrl: './blogarticles-blog.css',
})
export class BlogarticlesBlog {
  readonly pageSize = PAGE_SIZE;
  readonly allCategory = ALL_CATEGORY;

  readonly categoryFilter = signal<string>(ALL_CATEGORY);
  readonly searchQuery = signal<string>('');
  readonly currentPage = signal<number>(1);
  readonly viewMode = signal<'grid' | 'list'>('grid');

  readonly categories = computed(() => {
    const list = [ALL_CATEGORY, ...BLOG_DATA.categories.map((c) => c.name)];
    return list;
  });

  readonly filteredPosts = computed(() => {
    const category = this.categoryFilter();
    const query = this.searchQuery().trim().toLowerCase();
    let posts = [...BLOG_DATA.posts];
    if (category !== ALL_CATEGORY) {
      posts = posts.filter((p) => p.category === category);
    }
    if (query) {
      posts = posts.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.excerpt.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query)
      );
    }
    return posts.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  });

  readonly totalPages = computed(() => {
    const total = this.filteredPosts().length;
    return Math.max(1, Math.ceil(total / PAGE_SIZE));
  });

  /** Page numbers 1..totalPages for template. RTL order (highest first) for display. */
  readonly pageNumbers = computed(() => {
    const n = this.totalPages();
    return Array.from({ length: n }, (_, i) => n - i);
  });

  readonly paginatedPosts = computed(() => {
    const list = this.filteredPosts();
    const page = this.currentPage();
    const start = (page - 1) * PAGE_SIZE;
    return list.slice(start, start + PAGE_SIZE);
  });

  readonly displayCount = computed(() => this.filteredPosts().length);

  setPage(page: number): void {
    const max = this.totalPages();
    if (page >= 1 && page <= max) this.currentPage.set(page);
  }

  setCategory(name: string): void {
    this.categoryFilter.set(name);
    this.currentPage.set(1);
  }

  onSearch(value: string): void {
    this.searchQuery.set(value);
    this.currentPage.set(1);
  }

  setViewMode(mode: 'grid' | 'list'): void {
    this.viewMode.set(mode);
  }
}
