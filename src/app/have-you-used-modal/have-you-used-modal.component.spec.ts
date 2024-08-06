import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaveYouUsedModalComponent } from './have-you-used-modal.component';

describe('HaveYouUsedModalComponent', () => {
  let component: HaveYouUsedModalComponent;
  let fixture: ComponentFixture<HaveYouUsedModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaveYouUsedModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HaveYouUsedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
