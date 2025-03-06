import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioService } from '../servicios/usuario.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, RouterLink], 
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css'],
  providers: [UsuarioService]
})
export class InicioSesionComponent {
  email = '';
  password = '';
  errorMessage = '';  
  successMessage = '';  

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  login() {
    this.errorMessage = '';
    this.successMessage = '';
    console.log("Intentando iniciar sesión..."); // Log cuando empieza el login
    
    this.usuarioService.login({ email: this.email, password: this.password }).subscribe(
      (response) => {
        console.log("Respuesta del servidor:", response); // Log la respuesta del servidor

        if (response === 'admin') {
          localStorage.setItem('token', response); 
          this.successMessage = '¡Login exitoso!';
          console.log("Login exitoso: Rol de admin."); // Log para el admin
          this.router.navigate(['/menuAdmin']); // Redirigir a menú de admin
        } else if (response === 'usuario') {
          localStorage.setItem('token', response);
          this.successMessage = '¡Login exitoso!';
          console.log("Login exitoso: Rol de usuario."); // Log para el usuario
          this.router.navigate(['/inicio']); // Redirigir a menú de usuario
        } else {
          this.errorMessage = 'Credenciales incorrectas.';
          console.log("Error: Credenciales incorrectas."); // Log si las credenciales son incorrectas
        }
      },
      (error) => {
        this.errorMessage = 'Credenciales incorrectas, por favor intente de nuevo.';
        console.log("Error en el servidor:", error); // Log de error en la respuesta del servidor
      }
    );
  }  
}
