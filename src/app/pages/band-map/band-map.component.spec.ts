import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandMapComponent } from './band-map.component';

describe('BandMapComponent', () => {
  let component: BandMapComponent;
  let fixture: ComponentFixture<BandMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BandMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BandMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
