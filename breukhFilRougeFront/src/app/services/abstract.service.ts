import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})

export abstract class AbstractService<T> {

  constructor(protected http: HttpClient) { }

  abstract url(): string;

  getAllData(): Observable<T> {
    return this.http.get<T>(`${environment.uri}${this.url()}`);
  }

  addData(body: T): Observable<T> {
    console.log(body);
    return this.http.post<T>(`${environment.uri}${this.url()}`, body);
  }

  updateData(body: T): Observable<T> {
    return this.http.post<T>(`${environment.uri}${this.url()}`, body);
  }

  deleteData(id: number): Observable<T> {
    return this.http.delete<T>(`${environment.uri}${this.url()}/` + id);
  }



}
