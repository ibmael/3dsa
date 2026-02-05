import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsaboutUsRate } from './about-usabout-us-rate';

describe('AboutUsaboutUsRate', () => {
  let component: AboutUsaboutUsRate;
  let fixture: ComponentFixture<AboutUsaboutUsRate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutUsaboutUsRate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsaboutUsRate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
