import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExpenseFormComponent } from './components/expense-form/expense-form.component';
import { TableAllComponent } from './components/table-all/table-all.component';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'expenses', pathMatch: 'full' },
      { path: 'expenses', component: TableAllComponent },
      { path: 'expenses/form', component: ExpenseFormComponent },
      { path: 'expenses/form/:id', component: ExpenseFormComponent },
      { path: '**', redirectTo: 'expenses' }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
