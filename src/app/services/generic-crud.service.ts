import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenericCrudService<T> {
  constructor(private http: HttpClient) {}

  getAll(baseUrl: string): Observable<T[]> {
    return this.http.get<T[]>(baseUrl);
  }

  getById(baseUrl: string, id: number): Observable<T> {
    return this.http.get<T>(`${baseUrl}/${id}`);
  }

  create(baseUrl: string, data: T): Observable<T> {
    return this.http.post<T>(baseUrl, data);
  }

  update(baseUrl: string, data: T): Observable<T> {
    return this.http.put<T>(`${baseUrl}/${(data as any).id}`, data);
  }

  delete(baseUrl: string, id: number): Observable<void> {
    return this.http.delete<void>(`${baseUrl}/${id}`);
  }
}