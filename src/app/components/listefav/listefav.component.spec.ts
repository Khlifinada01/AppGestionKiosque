import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListefavComponent } from './listefav.component';

describe('ListefavComponent', () => {
  let component: ListefavComponent;
  let fixture: ComponentFixture<ListefavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListefavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListefavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
