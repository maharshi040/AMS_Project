import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddplaneSuccessComponent } from './addplane-success.component';

describe('AddplaneSuccessComponent', () => {
  let component: AddplaneSuccessComponent;
  let fixture: ComponentFixture<AddplaneSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddplaneSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddplaneSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
