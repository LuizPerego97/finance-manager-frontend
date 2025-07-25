import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { CommonModule, CurrencyPipe, DatePipe, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { MessageService } from 'primeng/api';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { MenubarModule } from 'primeng/menubar';
import { ExpenseTableComponent } from './components/features/expense/expense-table/expense-table.component';
import { GenericTableComponent } from './components/shared/generic-table/generic-table.component';
import { ExpenseTypeTableComponent } from './components/features/expense-type/expense-type-table/expense-type-table.component';
import { ExpenseFormComponent } from './components/features/expense/expense-form/expense-form.component';
import { ExpenseTypeFormComponent } from './components/features/expense-type/expense-type-form/expense-type-form.component';
import { GenericFormComponent } from './components/shared/generic-form/generic-form.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    GenericTableComponent,
    ExpenseTableComponent,
    ExpenseTypeTableComponent,
    ExpenseFormComponent,
    ExpenseTypeFormComponent,
    GenericFormComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    ButtonModule,
    InputNumberModule,
    CommonModule,
    ReactiveFormsModule,
    DropdownModule,
    BrowserAnimationsModule,
    CalendarModule,
    TableModule,
    FormsModule,
    MenubarModule,
  ],
  providers: [
    MessageService,
    CurrencyPipe,
    DatePipe,
    { provide: LOCALE_ID, useValue: 'pt-BR' } 
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
