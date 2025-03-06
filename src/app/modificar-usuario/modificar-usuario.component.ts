import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../servicios/usuario.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-modificar-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, RouterLink], 
  templateUrl: './modificar-usuario.component.html',
  styleUrls: ['./modificar-usuario.component.css'],
  providers: [UsuarioService]
})
export class ModificarUsuarioComponent implements OnInit {
  usuarioId: number = 0;
  usuario: any = {};
  nuevoNombre: string = '';
  nuevoTelefono: string = '';
  nuevoRol: string = '';
  nuevaFoto: File | null = null;
  errorMessage: string = '';  // Mensaje de error
  successMessage: string = '';  // Mensaje de éxito

  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    // Asegúrate de que la URL contiene el parámetro 'id'
    this.usuarioId = +this.route.snapshot.paramMap.get('id')!;
    if (this.usuarioId) {
      this.obtenerUsuario();
    } else {
      console.error('ID de usuario no encontrado en la ruta.');
    }
  }

  obtenerUsuario(): void {
    this.usuarioService.obtenerUsuario(this.usuarioId).subscribe(
      (data) => {
        this.usuario = data;
        this.nuevoNombre = this.usuario.nombreUsuario;
        this.nuevoTelefono = this.usuario.telefonoUsuario;
        this.nuevoRol = this.usuario.rol;
      },
      (error) => {
        this.errorMessage = 'Error al obtener los datos del usuario.';
        console.error('Error al obtener el usuario', error);
      }
    );
  }

  modificarUsuario(): void {
    this.usuarioService.modificarUsuario(
      this.usuarioId, 
      this.nuevoNombre, 
      this.nuevoTelefono, 
      this.nuevoRol, 
      this.nuevaFoto
    ).subscribe(
      (response) => {
        this.successMessage = '¡Usuario modificado con éxito!';
        this.errorMessage = '';  // Limpiar mensaje de error si la modificación es exitosa
      },
      (error) => {
        this.errorMessage = 'Hubo un error al modificar el usuario. Intenta de nuevo.';
        this.successMessage = '';  // Limpiar mensaje de éxito si ocurre un error
        console.error('Error al modificar el usuario', error);
      }
    );
  }

  onFileChange(event: any): void {
    this.nuevaFoto = event.target.files[0];
  }
}
