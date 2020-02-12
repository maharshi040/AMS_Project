import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerregistrationComponent } from './managerregistration.component';

describe('ManagerregistrationComponent', () => {
  let component: ManagerregistrationComponent;
  let fixture: ComponentFixture<ManagerregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
