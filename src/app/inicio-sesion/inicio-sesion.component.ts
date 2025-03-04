import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../servicios/auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, RouterLink], // Asegúrate de importar los módulos aquí
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css'],
  providers: [AuthService] // Asegúrate de proveer el servicio aquí
})
export class InicioSesionComponent {
  email = '';
  password = '';
  errorMessage = '';  // Mensaje de error para credenciales incorrectas
  successMessage = '';  // Mensaje de éxito si el login es correcto

  constructor(private authService: AuthService) {}

  login() {
    // Reseteamos los mensajes de error y éxito
    this.errorMessage = '';
    this.successMessage = '';

    // Llamamos al servicio de login
    this.authService.login({ email: this.email, password: this.password }).subscribe(
      (response) => {
        // Si la respuesta es exitosa, almacenamos el token y mostramos un mensaje de éxito
        localStorage.setItem('token', response.token);
        this.successMessage = '¡Login exitoso!'; // Mensaje de éxito
      },
      (error) => {
        // Si ocurre un error (como credenciales incorrectas), mostramos el mensaje de error
        this.errorMessage = 'Credenciales incorrectas, por favor intente de nuevo.';
      }
    );
  }
}
