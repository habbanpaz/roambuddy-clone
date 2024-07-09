import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivateSimComponent } from './activate-sim.component';

describe('ActivateSimComponent', () => {
  let component: ActivateSimComponent;
  let fixture: ComponentFixture<ActivateSimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivateSimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivateSimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
