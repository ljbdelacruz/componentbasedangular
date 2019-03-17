import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UnderlinedTextFieldsComponent } from './underlined-text-fields.component';

describe('UnderlinedTextFieldsComponent', () => {
  let component: UnderlinedTextFieldsComponent;
  let fixture: ComponentFixture<UnderlinedTextFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnderlinedTextFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderlinedTextFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
