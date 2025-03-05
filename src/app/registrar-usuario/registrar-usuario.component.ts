import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { RegistroService } from '../servicios/registro.service';

@Component({
  selector: 'app-registrar-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, RouterLink],
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css'],
  providers: [RegistroService]
})
export class RegistrarUsuarioComponent {
  nombreUsuario = '';
  telefonoUsuario = '';
  emailUsuario = '';
  passwordUsuario = '';
  confirmPasswordUsuario = '';
  mensaje = '';

  constructor(private registroService: RegistroService, private router: Router) {}

  // Método para registrar al usuario
  registrar() {
    // Verificar que las contraseñas coinciden
    if (this.passwordUsuario !== this.confirmPasswordUsuario) {
      this.mensaje = 'Las contraseñas no coinciden.';
      return;
    }

    // Crear el objeto para enviar a la API
    const usuario = {
      nombreUsuario: this.nombreUsuario,
      telefonoUsuario: this.telefonoUsuario,
      emailUsuario: this.emailUsuario,
      passwordUsuario: this.passwordUsuario
    };

    // Llamar al servicio de registro para enviar los datos
    this.registroService.registrarUsuario(usuario).subscribe({
      next: (response) => {
        this.mensaje = 'Usuario registrado exitosamente.';
        setTimeout(() => {
          this.router.navigate(['/login']); // Redirigir a la página de login
        }, 2000);
      },
      error: (err) => {
        this.mensaje = 'Error al registrar el usuario. Intenta nuevamente.';
        console.error('Error de servidor:', err); // Para debugging
      }
    });
  }
}
