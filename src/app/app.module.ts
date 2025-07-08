import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { ExpenseFormComponent } from './components/expense-form/expense-form.component';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { TableAllComponent } from './components/table-all/table-all.component';
import { TableModule } from 'primeng/table';
import { MessageService } from 'primeng/api';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { MenubarModule } from 'primeng/menubar';


@NgModule({
  declarations: [AppComponent, ExpenseFormComponent, TableAllComponent, LayoutComponent],
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
    MenubarModule
    
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
