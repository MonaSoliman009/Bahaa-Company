import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingPiecesComponent } from './missing-pieces.component';

describe('MissingPiecesComponent', () => {
  let component: MissingPiecesComponent;
  let fixture: ComponentFixture<MissingPiecesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissingPiecesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissingPiecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
