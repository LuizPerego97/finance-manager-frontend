import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormMode } from 'src/app/models/enums/form-mode/form-mode';
import { ExpenseType } from 'src/app/models/expense-type/expense-type';
import { ExpenseTypeService } from 'src/app/services/expense-type/expense-type.service';

@Component({
  selector: 'app-expense-type-form',
  templateUrl: './expense-type-form.component.html',
  styleUrls: ['./expense-type-form.component.css'],
})
export class ExpenseTypeFormComponent implements OnInit {
  expenseTypeForm!: FormGroup;
  expenseType!: ExpenseType;
  formMode!: FormMode;

  constructor(
    private fb: FormBuilder,
    private expenseTypeService: ExpenseTypeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.initializeForm();
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id !== null) {
        this.loadExpense(+id);
        this.formMode = FormMode.Edit;
      }
    });
  }

  initializeForm() {
    this.expenseTypeForm = this.fb.group({
      id: [null],
      description: ['', Validators.required],
    });
  }

  loadExpense(id: number) {
    this.expenseTypeService.getById(id).subscribe({
      next: (expense) => {
        this.expenseTypeForm.patchValue({
          id: expense.id,
          description: expense.description,
        });
      },
      error: (err) => {
        console.error('Erro ao carregar:', err);
      },
    });
  }

  submitForm() {
    if (this.expenseTypeForm.valid) {
      this.expenseType = this.expenseTypeForm.value as ExpenseType;

      if (this.formMode == FormMode.Edit) {
        this.expenseTypeService.update(this.expenseType).subscribe({
          next: (res) => {
            console.log('Tipo de despesa alterada com sucesso!', res);
            this.expenseTypeForm.reset();
          },
          error: (err) => {
            console.error('Erro ao alterar tipo de despesa:', err);
          },
        });
      } else {
        this.expenseTypeService.create(this.expenseType).subscribe({
          next: (res) => {
            console.log('Tipo de despesa salva com sucesso!', res);
            this.expenseTypeForm.reset();
          },
          error: (err) => {
            console.error('Erro ao salvar tipo de despesa:', err);
          },
        });
      }
    } else {
      this.expenseTypeForm.markAllAsTouched();
    }

    this.returnAtTable();
  }

  deleteData(id: number) {
    this.expenseTypeService.delete(id).subscribe({
      next: (res) => {
        console.log('Tipo de despesa apagada com sucesso!', res);
        this.expenseTypeForm.reset();
      },
      error: (err) => {
        console.error('Erro ao apagar despesa:', err);
      },
    });
    this.returnAtTable();
  }

  returnAtTable() {
    this.router.navigate(['/expense-types']);
  }
}
