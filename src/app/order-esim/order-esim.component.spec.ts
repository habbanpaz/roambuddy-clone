import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderEsimComponent } from './order-esim.component';

describe('OrderEsimComponent', () => {
  let component: OrderEsimComponent;
  let fixture: ComponentFixture<OrderEsimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderEsimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderEsimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
