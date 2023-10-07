import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractService } from './abstract.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { ClassOu, Idlibelle, Prof } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class CourService {

  constructor(private http: HttpClient) { }

  getAnnees(): Observable<Idlibelle[]> {
    return this.http.get<Idlibelle[]>(`${environment.uri}annees`)
  }

  getSemestres(): Observable<Idlibelle[]> {
    return this.http.get<Idlibelle[]>(`${environment.uri}semestres`)
  }

  getModules(): Observable<Idlibelle[]> {
    return this.http.get<Idlibelle[]>(`${environment.uri}modules`)
  }

  getProfbymodule(idmodule: number): Observable<any> {
    return this.http.get<any>(`${environment.uri}profs/${idmodule}`)
  }

  getClasses(): Observable<any> {
    return this.http.get<any>(`${environment.uri}classes`)
  }

  addCours(body: any): Observable<any> {
    return this.http.post<any>(`${environment.uri}cours`, body)
  }

  getCours(): Observable<any> {
    return this.http.get<any>(`${environment.uri}cours`)
  }

  // filter(attribut: string, valeur: string): Observable<any> {
  //   return this.http.get<any>(`${environment.uri}cours?${attribut}=${valeur}`)
  // }


}

