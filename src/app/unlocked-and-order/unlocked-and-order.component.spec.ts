import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnlockedAndOrderComponent } from './unlocked-and-order.component';

describe('UnlockedAndOrderComponent', () => {
  let component: UnlockedAndOrderComponent;
  let fixture: ComponentFixture<UnlockedAndOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnlockedAndOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnlockedAndOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
