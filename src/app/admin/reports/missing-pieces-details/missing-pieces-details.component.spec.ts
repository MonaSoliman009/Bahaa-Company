import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingPiecesDetailsComponent } from './missing-pieces-details.component';

describe('MissingPiecesDetailsComponent', () => {
  let component: MissingPiecesDetailsComponent;
  let fixture: ComponentFixture<MissingPiecesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissingPiecesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissingPiecesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
