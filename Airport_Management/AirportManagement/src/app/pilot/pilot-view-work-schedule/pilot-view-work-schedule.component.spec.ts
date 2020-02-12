import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotViewWorkScheduleComponent } from './pilot-view-work-schedule.component';

describe('PilotViewWorkScheduleComponent', () => {
  let component: PilotViewWorkScheduleComponent;
  let fixture: ComponentFixture<PilotViewWorkScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PilotViewWorkScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PilotViewWorkScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
