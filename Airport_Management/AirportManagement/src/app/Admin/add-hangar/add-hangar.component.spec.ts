import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHangarComponent } from './add-hangar.component';

describe('AddHangarComponent', () => {
  let component: AddHangarComponent;
  let fixture: ComponentFixture<AddHangarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHangarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHangarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
