import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogheroBlog } from './bloghero-blog';

describe('BlogheroBlog', () => {
  let component: BlogheroBlog;
  let fixture: ComponentFixture<BlogheroBlog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogheroBlog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogheroBlog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
