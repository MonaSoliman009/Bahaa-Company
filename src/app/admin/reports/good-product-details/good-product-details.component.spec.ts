import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodProductDetailsComponent } from './good-product-details.component';

describe('GoodProductDetailsComponent', () => {
  let component: GoodProductDetailsComponent;
  let fixture: ComponentFixture<GoodProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodProductDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
