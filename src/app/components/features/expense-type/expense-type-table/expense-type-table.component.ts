import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpenseType } from 'src/app/models/expense-type/expense-type';
import { ColumnDef } from 'src/app/models/interfaces/column-def';
import { ExpenseTypeService } from 'src/app/services/expense-type/expense-type.service';

@Component({
  selector: 'app-expense-type-table',
  templateUrl: './expense-type-table.component.html',
  styleUrls: ['./expense-type-table.component.css']
})
export class ExpenseTypeTableComponent  implements OnInit {
  expenseTypes: ExpenseType[] = [];
  columns: ColumnDef<ExpenseType>[];

  constructor(
    public router: Router,
    private expenseTypeService: ExpenseTypeService,
  ) {
    this.columns = [
      { field: 'description', header: 'Descrição' },
    ];
  }

  ngOnInit() {
    this.expenseTypeService.getAll().subscribe(list => this.expenseTypes = list);
  }

  onSelect(exp: ExpenseType) {
    console.log('Selecionou', exp);
  }
}