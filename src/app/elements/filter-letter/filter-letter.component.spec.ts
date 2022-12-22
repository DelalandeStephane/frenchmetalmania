import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterLetterComponent } from './filter-letter.component';

describe('FilterLetterComponent', () => {
  let component: FilterLetterComponent;
  let fixture: ComponentFixture<FilterLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterLetterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
