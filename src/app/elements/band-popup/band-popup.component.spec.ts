import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandPopupComponent } from './band-popup.component';

describe('BandPopupComponent', () => {
  let component: BandPopupComponent;
  let fixture: ComponentFixture<BandPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BandPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BandPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
