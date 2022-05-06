import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaitsaisissantComponent } from './faitsaisissant.component';

describe('FaitsaisissantComponent', () => {
  let component: FaitsaisissantComponent;
  let fixture: ComponentFixture<FaitsaisissantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaitsaisissantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaitsaisissantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
