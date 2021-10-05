import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoldProductDetialsComponent } from './sold-product-detials.component';

describe('SoldProductDetialsComponent', () => {
  let component: SoldProductDetialsComponent;
  let fixture: ComponentFixture<SoldProductDetialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoldProductDetialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoldProductDetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
