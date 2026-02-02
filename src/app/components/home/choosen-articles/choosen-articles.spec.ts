import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosenArticles } from './choosen-articles';

describe('ChoosenArticles', () => {
  let component: ChoosenArticles;
  let fixture: ComponentFixture<ChoosenArticles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoosenArticles]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoosenArticles);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
