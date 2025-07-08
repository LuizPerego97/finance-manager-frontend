import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExpenseType } from 'src/app/models/expense-type/expense-type';

@Injectable({
  providedIn: 'root',
})
export class ExpenseTypeService {
  private apiUrl = 'http://localhost:8080/expense-types';

  constructor(private http: HttpClient) {}

  create(dto: ExpenseType): Observable<string> {
    return this.http.post(this.apiUrl, dto, { responseType: 'text' });
  }

  getAll(): Observable<ExpenseType[]> {
    return this.http.get<ExpenseType[]>(this.apiUrl);
  }

  getById(id: number): Observable<ExpenseType> {
    return this.http.get<ExpenseType>(`${this.apiUrl}/${id}`);
  }

  update(dto: ExpenseType): Observable<string> {
    return this.http.put(`${this.apiUrl}/${dto.id}`, dto, {
      responseType: 'text',
    });
  }

  delete(id: number): Observable<string> {
    return this.http.delete(`${this.apiUrl}/${id}`, { responseType: 'text' });
  }
}
