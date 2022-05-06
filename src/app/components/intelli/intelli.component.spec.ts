import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntelliComponent } from './intelli.component';

describe('IntelliComponent', () => {
  let component: IntelliComponent;
  let fixture: ComponentFixture<IntelliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntelliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntelliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
