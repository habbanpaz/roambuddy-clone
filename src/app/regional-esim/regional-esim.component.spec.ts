import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionalEsimComponent } from './regional-esim.component';

describe('RegionalEsimComponent', () => {
  let component: RegionalEsimComponent;
  let fixture: ComponentFixture<RegionalEsimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionalEsimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionalEsimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
