import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderEsimPageComponent } from './order-esim-page.component';

describe('OrderEsimPageComponent', () => {
  let component: OrderEsimPageComponent;
  let fixture: ComponentFixture<OrderEsimPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderEsimPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderEsimPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
