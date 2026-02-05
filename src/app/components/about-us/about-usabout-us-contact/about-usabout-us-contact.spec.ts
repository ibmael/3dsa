import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsaboutUsContact } from './about-usabout-us-contact';

describe('AboutUsaboutUsContact', () => {
  let component: AboutUsaboutUsContact;
  let fixture: ComponentFixture<AboutUsaboutUsContact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutUsaboutUsContact]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsaboutUsContact);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
