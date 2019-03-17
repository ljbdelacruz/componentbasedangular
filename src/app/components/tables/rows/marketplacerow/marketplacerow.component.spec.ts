import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketplacerowComponent } from './marketplacerow.component';

describe('MarketplacerowComponent', () => {
  let component: MarketplacerowComponent;
  let fixture: ComponentFixture<MarketplacerowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketplacerowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketplacerowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
