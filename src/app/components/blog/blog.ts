import { Component } from '@angular/core';
import { BlogheroBlog } from './bloghero-blog/bloghero-blog';
import { BlogarticlesBlog } from './blogarticles-blog/blogarticles-blog';

@Component({
  selector: 'app-blog',
  imports: [BlogheroBlog, BlogarticlesBlog],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {}
