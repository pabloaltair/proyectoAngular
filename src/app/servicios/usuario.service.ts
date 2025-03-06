import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

  private apiUrl = 'http://localhost:8081/api'; // Cambia la URL a la de tu API

  constructor(private http: HttpClient) {}

   // Método para registrar un nuevo usuario
   registrarUsuario(usuario: any): Observable<string> {
    return this.http.post(`${this.apiUrl}/registro/usuario`, usuario, { responseType: 'text' });
  }

  // Método para eliminar un usuario
  eliminarUsuario(idUsuario: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/eliminar/usuario/${idUsuario}`);
  }
}
