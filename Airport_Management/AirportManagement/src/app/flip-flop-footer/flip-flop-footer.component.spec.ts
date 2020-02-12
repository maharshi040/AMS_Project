import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipFlopFooterComponent } from './flip-flop-footer.component';

describe('FlipFlopFooterComponent', () => {
  let component: FlipFlopFooterComponent;
  let fixture: ComponentFixture<FlipFlopFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlipFlopFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlipFlopFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
