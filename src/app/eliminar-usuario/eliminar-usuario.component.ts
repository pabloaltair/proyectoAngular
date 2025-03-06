import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioService } from '../servicios/usuario.service'; // Importa tu servicio
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-eliminar-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, RouterLink], // Aquí importamos los módulos necesarios
  templateUrl: './eliminar-usuario.component.html',
  styleUrls: ['./eliminar-usuario.component.css'],
  providers: [UsuarioService]  // Proveedor del servicio de usuario
})
export class EliminarUsuarioComponent {

  idUsuario: number = 0;
  errorMessage = '';
  successMessage = '';

  constructor(private usuarioService: UsuarioService) {}

  eliminarUsuario() {
    this.errorMessage = '';
    this.successMessage = '';

    console.log("Intentando eliminar usuario con ID:", this.idUsuario); // Log cuando comienza la eliminación

    this.usuarioService.eliminarUsuario(this.idUsuario).subscribe(
      (response) => {
        console.log("Respuesta del servidor:", response); // Log la respuesta del servidor

        this.successMessage = '¡Usuario eliminado exitosamente!';
        console.log("Usuario eliminado con éxito."); // Log cuando el usuario es eliminado
      },
      (error) => {
        this.errorMessage = 'Hubo un error al eliminar al usuario, por favor intente de nuevo.';
        console.log("Error en el servidor:", error); // Log si hay un error en la respuesta
      }
    );
  }  
}
