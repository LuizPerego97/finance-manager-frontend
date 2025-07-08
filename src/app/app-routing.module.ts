import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './components/layout/layout.component';
import { ExpenseTableComponent } from './components/features/expense/expense-table/expense-table.component';
import { ExpenseTypeTableComponent } from './components/features/expense-type/expense-type-table/expense-type-table.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'expenses', component: ExpenseTableComponent },
      { path: 'expense-types', component: ExpenseTypeTableComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
