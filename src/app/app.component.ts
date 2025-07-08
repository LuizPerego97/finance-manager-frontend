import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedExpenseId: number | null = null;

  onExpenseSelected(id: number) {
    this.selectedExpenseId = id;
  }}
