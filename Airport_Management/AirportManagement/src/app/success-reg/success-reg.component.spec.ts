import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessRegComponent } from './success-reg.component';

describe('SuccessRegComponent', () => {
  let component: SuccessRegComponent;
  let fixture: ComponentFixture<SuccessRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
