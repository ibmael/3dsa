import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsaboutUsHero } from './about-usabout-us-hero';

describe('AboutUsaboutUsHero', () => {
  let component: AboutUsaboutUsHero;
  let fixture: ComponentFixture<AboutUsaboutUsHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutUsaboutUsHero]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsaboutUsHero);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
