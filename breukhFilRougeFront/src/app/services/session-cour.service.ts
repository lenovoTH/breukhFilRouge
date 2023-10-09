import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Salle, Session } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class SessionCourService {

  constructor(private http: HttpClient) { }


  getSalles(): Observable<Salle[]> {
    return this.http.get<Salle[]>(`${environment.uri}salles`)
  }

  getSession(): Observable<any> {
    return this.http.get<any>(`${environment.uri}sessioncour`)
  }

  addSessionCour(body: any): Observable<Session> {
    return this.http.post<Session>(`${environment.uri}sessioncour`, body)
  }

  addfileInscription(body: any): Observable<File> {
    return this.http.post<File>(`${environment.uri}import`, body)
  }

}
