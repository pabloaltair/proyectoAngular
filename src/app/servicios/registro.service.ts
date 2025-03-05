import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  private apiUrl = 'http://localhost:8081/api/registro/usuario';  // Tu API URL

  constructor(private http: HttpClient) {}

  registrarUsuario(usuario: any): Observable<string> {
    return this.http.post(this.apiUrl, usuario, { responseType: 'text' });
  }
}
