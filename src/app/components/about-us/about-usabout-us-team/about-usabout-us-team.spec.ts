import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsaboutUsTeam } from './about-usabout-us-team';

describe('AboutUsaboutUsTeam', () => {
  let component: AboutUsaboutUsTeam;
  let fixture: ComponentFixture<AboutUsaboutUsTeam>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutUsaboutUsTeam]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsaboutUsTeam);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
