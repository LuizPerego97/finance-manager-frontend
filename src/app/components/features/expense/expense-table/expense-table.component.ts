import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Expense } from 'src/app/models/expense/expense';
import { ColumnDef } from 'src/app/models/interfaces/column-def';
import { ExpenseService } from 'src/app/services/expense/expense.service';

@Component({
  selector: 'app-expense-table',
  templateUrl: './expense-table.component.html',
  styleUrls: ['./expense-table.component.css']
})
export class ExpenseTableComponent implements OnInit {
  expenses: Expense[] = [];
  columns: ColumnDef<Expense>[];

  constructor(
    public router: Router,
    private service: ExpenseService,
    private currency: CurrencyPipe,
    private date: DatePipe
  ) {
    this.columns = [
      { field: 'amount',  header: 'Valor', pipe: this.currency },
      { field: 'description', header: 'Descrição' },
      { field: 'expenseDecription', header: 'Tipo' },
      { field: 'date', header: 'Data', pipe: this.date }
    ];
  }

  ngOnInit() {
    this.service.getAll().subscribe(list => this.expenses = list);
  }

  onSelect(exp: Expense) {
    console.log('Selecionou', exp);
  }
}