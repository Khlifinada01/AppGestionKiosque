import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneraliteComponent } from './generalite.component';

describe('GeneraliteComponent', () => {
  let component: GeneraliteComponent;
  let fixture: ComponentFixture<GeneraliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneraliteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneraliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
