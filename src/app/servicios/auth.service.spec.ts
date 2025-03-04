import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as bcrypt from 'bcryptjs';  // Importar bcryptjs para encriptar la contraseña
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/api/login';  // URL de la API para el login (ajústalo a tu configuración)

  constructor(private http: HttpClient) { }

  // Método para encriptar la contraseña
  encryptPassword(password: string): string {
    const salt = bcrypt.genSaltSync(10);  // Generar un salt de 10 rondas
    return bcrypt.hashSync(password, salt);  // Encriptar la contraseña con el salt generado
  }

  // Método para hacer login, enviando la contraseña encriptada
  login(credentials: { email: string; password: string }): Observable<any> {
    const encryptedPassword = this.encryptPassword(credentials.password);  // Encriptar la contraseña antes de enviarla
    const body = {
      email: credentials.email,
      password: encryptedPassword  // Usar la contraseña encriptada
    };

    return this.http.post<any>(this.apiUrl, body);  // Hacer la petición POST al servidor
  }
}
