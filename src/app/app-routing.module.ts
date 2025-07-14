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
      { path: 'gastos', component: ExpenseTableComponent },
      { path: 'gastos/formulario', component: ExpenseFormComponent },
      { path: 'gastos/formulario/:id', component: ExpenseFormComponent },
      
      { path: 'tipos-gastos', component: ExpenseTypeTableComponent },
      { path: 'tipos-gastos/formularios', component: ExpenseTypeFormComponent },
      { path: 'tipos-gastos/formulario/:id', component: ExpenseTypeFormComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
