import { Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormMode } from 'src/app/models/enums/form-mode/form-mode';
import { ExpenseType } from 'src/app/models/expense-type/expense-type';
import { Expense } from 'src/app/models/expense/expense';
import { ExpenseTypeService } from 'src/app/services/expense-type/expense-type.service';
import { ExpenseService } from 'src/app/services/expense/expense.service';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css'],
})
export class ExpenseFormComponent implements OnInit {
  expenseForm!: FormGroup;
  expenseTypes: ExpenseType[] = [];
  expense!: Expense;
  formMode!: FormMode;

  constructor(
    private fb: FormBuilder,
    private expenseService: ExpenseService,
    private expenseTypeService: ExpenseTypeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.initializeForm();
    this.loadExpenseTypes();
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const id = params['id'];
      if (id != null) {
        this.loadExpense(+id);
        this.formMode = FormMode.Edit;
      }
    });
  }

  initializeForm() {
    this.expenseForm = this.fb.group({
      id: [null],
      amount: [null, Validators.required],
      description: [''],
      date: [null, Validators.required],
      expenseTypeId: [null, Validators.required],
    });
  }

  loadExpenseTypes() {
    this.expenseTypeService.getAll().subscribe({
      next: (res) => (this.expenseTypes = res),
      error: (err) => console.error(err),
    });
  }

  loadExpense(id: number) {
    this.expenseService.getById(id).subscribe({
      next: (expense) => {
        this.expenseForm.patchValue({
          id: expense.id,
          amount: expense.amount,
          description: expense.description,
          date: new Date(expense.date),
          expenseTypeId: expense.expenseTypeId,
        });
      },
      error: (err) => {
        console.error('Erro ao carregar despesa:', err);
      },
    });
  }

  submitForm() {
    if (this.expenseForm.valid) {
      this.expense = this.expenseForm.value as Expense;

      if (this.formMode == FormMode.Edit) {
        this.expenseService.update(this.expense).subscribe({
          next: (res) => {
            console.log('Despesa alterada com sucesso!', res);
            this.expenseForm.reset();
          },
          error: (err) => {
            console.error('Erro ao alterar despesa:', err);
          },
        });
      } else {
        this.expenseService.create(this.expense).subscribe({
          next: (res) => {
            console.log('Despesa salva com sucesso!', res);
            this.expenseForm.reset();
          },
          error: (err) => {
            console.error('Erro ao salvar despesa:', err);
          },
        });
      }
    } else {
      this.expenseForm.markAllAsTouched();
    }

        this.returnAtTable();

  }

  deleteData(id: number) {
    this.expenseService.delete(id).subscribe({
      next: (res) => {
        console.log('Despesa apagada com sucesso!', res);
        this.expenseForm.reset();
      },
      error: (err) => {
        console.error('Erro ao apagar despesa:', err);
      },
    });
    this.returnAtTable();
  }

  returnAtTable() {
this.router.navigate(['/expenses']);
  }
}
