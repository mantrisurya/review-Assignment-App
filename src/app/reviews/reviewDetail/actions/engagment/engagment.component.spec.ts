import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngagmentComponent } from './engagment.component';

describe('EngagmentComponent', () => {
  let component: EngagmentComponent;
  let fixture: ComponentFixture<EngagmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngagmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
