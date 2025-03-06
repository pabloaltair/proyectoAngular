import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

  private apiUrl = 'http://localhost:8081/api';

  constructor(private http: HttpClient) {}
  // Método para validar las credenciales de login
  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login/validarUsuario`, credentials, { responseType: 'text' });
  }

  // Método para registrar un nuevo usuario
   registrarUsuario(usuario: any): Observable<string> {
    return this.http.post(`${this.apiUrl}/registro/usuario`, usuario, { responseType: 'text' });
  }

  // Método para eliminar un usuario
  eliminarUsuario(idUsuario: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/eliminar/usuario/${idUsuario}`);
  }

  // Método para modificar un usuario
  modificarUsuario(id: number, nombre: string, telefono: string, rol: string, foto: File | null): Observable<any> {
    const formData = new FormData();
    formData.append('nuevoNombre', nombre);
    formData.append('nuevoTelefono', telefono);
    formData.append('nuevoRol', rol);
    if (foto) {
      formData.append('nuevaFoto', foto, foto.name);
    }
  
    return this.http.put(`${this.apiUrl}/modificar/modificarUsuario/${id}`, formData, { responseType: 'text' });
  }
  
  // Método para obtener un usuario
  obtenerUsuario(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/usuario/${id}`);
  }
}
