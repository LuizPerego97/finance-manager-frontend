import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './components/layout/layout.component';
import { ExpenseTableComponent } from './components/features/expense/expense-table/expense-table.component';
import { ExpenseTypeTableComponent } from './components/features/expense-type/expense-type-table/expense-type-table.component';
import { ExpenseFormComponent } from './components/features/expense/expense-form/expense-form.component';
import { ExpenseTypeFormComponent } from './components/features/expense-type/expense-type-form/expense-type-form.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'expenses', component: ExpenseTableComponent },
      { path: 'expenses/form', component: ExpenseFormComponent },
      { path: 'expenses/form/:id', component: ExpenseFormComponent },
      
      { path: 'expense-types', component: ExpenseTypeTableComponent },
      { path: 'expense-types/form', component: ExpenseTypeFormComponent },
      { path: 'expense-types/form/:id', component: ExpenseTypeFormComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
