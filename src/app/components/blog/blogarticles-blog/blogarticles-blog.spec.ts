import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogarticlesBlog } from './blogarticles-blog';

describe('BlogarticlesBlog', () => {
  let component: BlogarticlesBlog;
  let fixture: ComponentFixture<BlogarticlesBlog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogarticlesBlog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogarticlesBlog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
