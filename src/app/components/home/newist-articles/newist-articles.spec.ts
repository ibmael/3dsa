import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewistArticles } from './newist-articles';

describe('NewistArticles', () => {
  let component: NewistArticles;
  let fixture: ComponentFixture<NewistArticles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewistArticles]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewistArticles);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
