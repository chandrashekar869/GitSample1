import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { COMPONENT1Component } from './component1.component';

describe('COMPONENT1Component', () => {
  let component: COMPONENT1Component;
  let fixture: ComponentFixture<COMPONENT1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ COMPONENT1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(COMPONENT1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
