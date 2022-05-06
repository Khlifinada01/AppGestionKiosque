import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListestationsComponent } from './listestations.component';

describe('ListestationsComponent', () => {
  let component: ListestationsComponent;
  let fixture: ComponentFixture<ListestationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListestationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListestationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
