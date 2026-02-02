import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subsicribe } from './subsicribe';

describe('Subsicribe', () => {
  let component: Subsicribe;
  let fixture: ComponentFixture<Subsicribe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subsicribe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subsicribe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
