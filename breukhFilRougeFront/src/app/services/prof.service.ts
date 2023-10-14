import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProfService {

  constructor(private http: HttpClient) { }

  getCoursByProf(idProf: any): Observable<any> {
    return this.http.get<any>(`${environment.uri}getCoursByProf/${idProf}`)
  }

  getSessionsByProf(idProf: any): Observable<any> {
    return this.http.get<any>(`${environment.uri}getSessionsByProf/${idProf}`)
  }

}
