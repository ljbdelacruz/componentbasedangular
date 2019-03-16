import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDesign1Component } from './button-design1.component';

describe('ButtonDesign1Component', () => {
  let component: ButtonDesign1Component;
  let fixture: ComponentFixture<ButtonDesign1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonDesign1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonDesign1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
