import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { Expense } from 'src/app/models/expense/expense';
import { ExpenseService } from 'src/app/services/expense/expense.service';

@Component({
  selector: 'app-table-all',
  templateUrl: './table-all.component.html',
  styleUrls: ['./table-all.component.css'],
})
export class TableAllComponent implements OnInit {
  expenses!: Expense[];
  selectedExpense!: Expense;

  constructor(private expenseService: ExpenseService, private router: Router) {}

 ngOnInit(): void {
    this.loadData();

    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe((event) => {
      if (this.router.url.startsWith('/expenses')) {
        this.loadData();
      }
    });
  }

  loadData() {
    this.expenseService.getAll().subscribe({
      next: (data) => (this.expenses = data),
      error: (err) => console.error(err),
    });
  }

  onRowSelect(event: any) {
    const id = event.data.id;
    this.router.navigate(['/expenses/form'], {
      queryParams: { id: id },
    });
  }
}
