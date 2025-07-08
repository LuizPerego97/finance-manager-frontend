import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Expense } from 'src/app/models/expense/expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
    private apiUrl = 'http://localhost:8080/expenses';
  
    constructor(private http: HttpClient) {}
  
    create(dto: Expense): Observable<string> {
      return this.http.post(this.apiUrl, dto, { responseType: 'text' });
    }
  
    getAll(): Observable<Expense[]> {
      return this.http.get<Expense[]>(this.apiUrl);
    }
  
    getById(id: number): Observable<Expense> {
      return this.http.get<Expense>(`${this.apiUrl}/${id}`);
    }
  
    update(dto: Expense): Observable<string> {
      return this.http.put(`${this.apiUrl}/${dto.id}`, dto, {
        responseType: 'text',
      });
    }
  
    delete(id: number): Observable<string> {
      return this.http.delete(`${this.apiUrl}/${id}`, { responseType: 'text' });
    }
}
