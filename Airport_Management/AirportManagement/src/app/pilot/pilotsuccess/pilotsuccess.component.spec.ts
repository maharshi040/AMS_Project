import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotsuccessComponent } from './pilotsuccess.component';

describe('PilotsuccessComponent', () => {
  let component: PilotsuccessComponent;
  let fixture: ComponentFixture<PilotsuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PilotsuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PilotsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
