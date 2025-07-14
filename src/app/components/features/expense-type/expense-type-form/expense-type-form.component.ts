import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormMode } from 'src/app/models/enums/form-mode/form-mode';
import { ExpenseType } from 'src/app/models/expense-type/expense-type';
import { FormFieldDef } from 'src/app/models/interfaces/form-field-def';
import { ExpenseTypeService } from 'src/app/services/expense-type/expense-type.service';

@Component({
  selector: 'app-expense-type-form',
  templateUrl: './expense-type-form.component.html',
  styleUrls: ['./expense-type-form.component.css'],
})
export class ExpenseTypeFormComponent implements OnInit {
  formMode!: FormMode;
  expenseTypeFormData: any = {};
  fields: FormFieldDef[] = [];
  expenseType!: ExpenseType;
  entityId!: number;
  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private expenseTypeService: ExpenseTypeService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.entityId= +id!;

    this.setupFields();

    if (id) {
      this.expenseTypeService.getById(+id).subscribe((res) => {
        this.expenseType = res;
        this.expenseTypeFormData = { ...res };
        this.formMode = FormMode.Edit;
      });
    } else {
      this.formMode = FormMode.Create;
    }
  }

  setupFields(): void {
    this.fields = [
      {
        name: 'description',
        label: 'Descrição',
        type: 'text',
      },
    ];
  }

  onSubmit(data: any) {
    const updatedExpenseType = {
      ...this.expenseType,
      ...data,
    };

    const obs =
      this.formMode === FormMode.Edit
        ? this.expenseTypeService.update(updatedExpenseType)
        : this.expenseTypeService.create(data);

    obs.subscribe(() => this.navigateToTable());
  }

  onDelete(id: number) {
    this.expenseTypeService.delete(id).subscribe(() => this.navigateToTable());
  }

  navigateToTable() {
    this.router.navigate(['/tipos-gastos']);
  }
}
