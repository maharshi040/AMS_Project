import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotWorkScheduleComponent } from './pilot-work-schedule.component';

describe('PilotWorkScheduleComponent', () => {
  let component: PilotWorkScheduleComponent;
  let fixture: ComponentFixture<PilotWorkScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PilotWorkScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PilotWorkScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
