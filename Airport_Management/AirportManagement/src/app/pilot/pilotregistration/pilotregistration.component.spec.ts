import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotregistrationComponent } from './pilotregistration.component';

describe('PilotregistrationComponent', () => {
  let component: PilotregistrationComponent;
  let fixture: ComponentFixture<PilotregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PilotregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PilotregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
