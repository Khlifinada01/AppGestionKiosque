import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcComponent } from './conc.component';

describe('ConcComponent', () => {
  let component: ConcComponent;
  let fixture: ComponentFixture<ConcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
