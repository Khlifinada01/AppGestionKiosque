import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SousfavComponent } from './sousfav.component';

describe('SousfavComponent', () => {
  let component: SousfavComponent;
  let fixture: ComponentFixture<SousfavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SousfavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SousfavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
