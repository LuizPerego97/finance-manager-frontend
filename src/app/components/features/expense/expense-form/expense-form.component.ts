import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormMode } from 'src/app/models/enums/form-mode/form-mode';
import { ExpenseService } from 'src/app/services/expense/expense.service';
import { ExpenseTypeService } from 'src/app/services/expense-type/expense-type.service';
import { FormFieldDef } from 'src/app/models/interfaces/form-field-def';
import { forkJoin } from 'rxjs';
import { Expense } from 'src/app/models/expense/expense';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css'],
})
export class ExpenseFormComponent implements OnInit {
  formMode!: FormMode;
  expenseFormData: any = {};
  fields: FormFieldDef[] = [];
  expense!: Expense;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private expenseService: ExpenseService,
    private expenseTypeService: ExpenseTypeService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      forkJoin({
        types: this.expenseTypeService.getAll(),
        expense: this.expenseService.getById(+id),
      }).subscribe(({ types, expense }) => {
        this.expenseFormData = {
          ...expense,
          date: new Date(expense.date),
        };
        this.expense = expense;
        this.formMode = FormMode.Edit;
        this.setupFields(types);
      });
    } else {
      // Apenas os tipos de despesa
      this.expenseTypeService.getAll().subscribe((types) => {
        this.setupFields(types);
        this.formMode = FormMode.Create;
      });
    }
  }

  setupFields(types: any[]): void {
    this.fields = [
      {
        name: 'amount',
        label: 'Valor do gasto',
        type: 'number',
        required: true,
      },
      {
        name: 'description',
        label: 'Descrição',
        type: 'text',
      },
      {
        name: 'date',
        label: 'Data',
        type: 'date',
        required: true,
      },
      {
        name: 'expenseTypeId',
        label: 'Tipo de despesa',
        type: 'dropdown',
        required: true,
        options: types,
        optionLabel: 'description',
        optionValue: 'id',
      },
    ];
  }

onSubmit(data: any) {
  console.log('Dados do form:', data);
  console.log('Objeto original carregado:', this.expense);

  const updatedExpense = {
    ...this.expense, 
    ...data          
  };

  const obs = this.formMode === FormMode.Edit
    ? this.expenseService.update(updatedExpense)
    : this.expenseService.create(data);

  obs.subscribe(() => this.navigateToTable());
}


  onDelete(id: number) {
    this.expenseService.delete(id).subscribe(() => this.navigateToTable());
  }

  navigateToTable() {
    this.router.navigate(['/expenses']);
  }
}
