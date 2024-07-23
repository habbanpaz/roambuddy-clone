import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalEsimComponent } from './global-esim.component';

describe('GlobalEsimComponent', () => {
  let component: GlobalEsimComponent;
  let fixture: ComponentFixture<GlobalEsimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalEsimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalEsimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
