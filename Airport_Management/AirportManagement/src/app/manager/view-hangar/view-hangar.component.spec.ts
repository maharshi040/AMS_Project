import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHangarComponent } from './view-hangar.component';

describe('ViewHangarComponent', () => {
  let component: ViewHangarComponent;
  let fixture: ComponentFixture<ViewHangarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewHangarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHangarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
