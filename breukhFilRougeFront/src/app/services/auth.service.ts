import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.getToken()}`
    })
  };

  islogin() {
    return this.getToken()
  }

  login(body: any): Observable<any> {
    return this.http.post<any>(`${environment.uri}login`, body, this.httpOptions);
  }

  logout(): Observable<any> {
    return this.http.get<any>(`${environment.uri}logout`);
  }

  getToken() {
    return localStorage.getItem('access token')
  }

  setToken(token: string) {
    localStorage.setItem('access token', token)
  }

  getRole() {
    return localStorage.getItem('role')
  }

  setRole(role: string) {
    localStorage.setItem('role', role)
  }

  setId(id: string) {
    localStorage.setItem('id user', id)
  }

  getId() {
    return localStorage.getItem('id user')
  }


  removeToken() {
    localStorage.removeItem('access token')
    localStorage.removeItem('role')
  }

}

