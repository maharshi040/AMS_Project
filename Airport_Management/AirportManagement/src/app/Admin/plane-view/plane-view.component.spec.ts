import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaneViewComponent } from './plane-view.component';

describe('PlaneViewComponent', () => {
  let component: PlaneViewComponent;
  let fixture: ComponentFixture<PlaneViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaneViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaneViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
