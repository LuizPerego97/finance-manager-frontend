import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseTypeTableComponent } from './expense-type-table.component';

describe('ExpenseTypeTableComponent', () => {
  let component: ExpenseTypeTableComponent;
  let fixture: ComponentFixture<ExpenseTypeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseTypeTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenseTypeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
