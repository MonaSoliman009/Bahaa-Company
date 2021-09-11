import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodProductsComponent } from './good-products.component';

describe('GoodProductsComponent', () => {
  let component: GoodProductsComponent;
  let fixture: ComponentFixture<GoodProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
